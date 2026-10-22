"""Reproducible studio-lit 3D assets. Run with Blender, not system Python.

blender --background --factory-startup --threads 2 \
  --python scripts/generate-motion-lab-assets.py -- --part hero edge heart bead morph

No image post-processing is used: all RGBA PNGs are direct Cycles renders.
"""

import argparse
import hashlib
import json
import math
import sys
import time
from pathlib import Path

import bpy
import bmesh
from mathutils import Vector


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/images/new-media-v2/motion-lab"
CACHE = ROOT / ".cache/motion-lab-assets"
MANIFEST = ROOT / "production/new-media-v2/motion-lab/assets-manifest.json"
CAT = ROOT / "public/images/new-media-v2/kitten-study.png"
SEED = 271828
SAMPLES = 64


def sha256(file):
    return hashlib.sha256(Path(file).read_bytes()).hexdigest()


def material(name, color, metallic=0, roughness=.3, coat=.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1)
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Coat Weight"].default_value = coat
    bsdf.inputs["Coat Roughness"].default_value = .22
    return mat


def look_at(obj, point=(0, 0, 0)):
    obj.rotation_euler = (Vector(point) - obj.location).to_track_quat('-Z', 'Y').to_euler()


def area(name, location, energy, size, color):
    data = bpy.data.lights.new(name, 'AREA')
    data.energy = energy
    data.shape = 'DISK'
    data.size = size
    data.color = color
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    obj.location = location
    look_at(obj)
    return obj


def scene_setup(size, ortho):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = SAMPLES
    scene.cycles.seed = SEED
    # Debian's Blender 4.3.2 build has no OpenImageDenoise support. A real
    # render with denoising enabled fails before sampling; use more samples.
    scene.cycles.use_denoising = False
    scene.cycles.max_bounces = 6
    scene.cycles.transparent_max_bounces = 8
    scene.render.threads_mode = 'FIXED'
    scene.render.threads = 2
    scene.render.resolution_x = size
    scene.render.resolution_y = size
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = 'PNG'
    scene.render.image_settings.color_mode = 'RGBA'
    scene.render.image_settings.color_depth = '8'
    scene.render.image_settings.compression = 30
    scene.view_settings.view_transform = 'AgX'
    scene.view_settings.look = 'AgX - Medium High Contrast'
    scene.view_settings.exposure = .15
    scene.world = bpy.data.worlds.new('Transparent studio environment')
    scene.world.use_nodes = True
    scene.world.node_tree.nodes['Background'].inputs[0].default_value = (.10, .13, .17, 1)
    scene.world.node_tree.nodes['Background'].inputs[1].default_value = .22
    camera = bpy.data.cameras.new('Orthographic studio camera')
    camera.type = 'ORTHO'
    camera.ortho_scale = ortho
    obj = bpy.data.objects.new('Camera', camera)
    bpy.context.collection.objects.link(obj)
    obj.location = (0, -7, .32)
    look_at(obj)
    scene.camera = obj
    area('Large warm softbox', (-3.2, -4, 4.6), 620, 4.2, (1.0, .86, .71))
    area('Soft front fill', (3.4, -4.2, .8), 115, 3.5, (.82, .91, 1.0))
    area('Subtle cool edge', (2.8, 1.8, 3.4), 95, 2.5, (.67, .82, 1.0))
    return scene


def round_outline(width, height, radius, steps=12):
    points = []
    for cx, cz, start in [
        (width / 2 - radius, height / 2 - radius, 0),
        (-width / 2 + radius, height / 2 - radius, 90),
        (-width / 2 + radius, -height / 2 + radius, 180),
        (width / 2 - radius, -height / 2 + radius, 270),
    ]:
        for i in range(steps + 1):
            angle = math.radians(start + i * 90 / steps)
            points.append((cx + radius * math.cos(angle), cz + radius * math.sin(angle)))
    return points


def plate(name, width, height, depth, radius, y, mat, parent):
    outline = round_outline(width, height, radius)
    count = len(outline)
    verts = [(x, y - depth / 2, z) for x, z in outline]
    verts += [(x, y + depth / 2, z) for x, z in outline]
    faces = [tuple(range(count)), tuple(range(count * 2 - 1, count - 1, -1))]
    faces += [(i, (i + 1) % count, (i + 1) % count + count, i + count) for i in range(count)]
    mesh = bpy.data.meshes.new(name)
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.parent = parent
    obj.data.materials.append(mat)
    bevel = obj.modifiers.new('Machined edge bevel', 'BEVEL')
    bevel.width = .008 if depth < .04 else .018
    bevel.segments = 4
    bevel.affect = 'EDGES'
    obj.modifiers.new('Weighted corner normals', 'WEIGHTED_NORMAL')
    return obj


def cat_plane(parent):
    image = bpy.data.images.load(str(CAT), check_existing=True)
    image.alpha_mode = 'STRAIGHT'
    image.colorspace_settings.name = 'sRGB'
    width, height = image.size
    plane_width = min(1.55, 2.21 * width / height)
    plane_height = plane_width * height / width
    y = -.101
    mesh = bpy.data.meshes.new('Complete kitten alpha image')
    mesh.from_pydata([
        (-plane_width / 2, y, -plane_height / 2),
        (plane_width / 2, y, -plane_height / 2),
        (plane_width / 2, y, plane_height / 2),
        (-plane_width / 2, y, plane_height / 2),
    ], [], [(0, 1, 2, 3)])
    mesh.update()
    uv = mesh.uv_layers.new(name='UVMap')
    for loop, value in zip(uv.data, [(0, 0), (1, 0), (1, 1), (0, 1)]):
        loop.uv = value
    obj = bpy.data.objects.new('Kitten screen image — no crop', mesh)
    bpy.context.collection.objects.link(obj)
    obj.parent = parent
    mat = bpy.data.materials.new('RGBA kitten on transparent emission')
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    nodes.clear()
    texture = nodes.new('ShaderNodeTexImage')
    texture.image = image
    texture.interpolation = 'Linear'
    transparent = nodes.new('ShaderNodeBsdfTransparent')
    emission = nodes.new('ShaderNodeEmission')
    emission.inputs['Strength'].default_value = .95
    mix = nodes.new('ShaderNodeMixShader')
    output = nodes.new('ShaderNodeOutputMaterial')
    links = mat.node_tree.links
    links.new(texture.outputs['Color'], emission.inputs['Color'])
    links.new(texture.outputs['Alpha'], mix.inputs[0])
    links.new(transparent.outputs['BSDF'], mix.inputs[1])
    links.new(emission.outputs['Emission'], mix.inputs[2])
    links.new(mix.outputs['Shader'], output.inputs['Surface'])
    obj.data.materials.append(mat)
    return {'sourceSize': [width, height], 'imagePlaneSize': [plane_width, plane_height]}


def board(angle):
    scene = scene_setup(1152, 3.25)
    root = bpy.data.objects.new('Video image plate', None)
    bpy.context.collection.objects.link(root)
    root.rotation_euler.z = math.radians(angle)
    root.rotation_euler.y = math.radians(-2.5)
    ivory = material('Warm ivory brushed metal', (.66, .57, .45), metallic=.64, roughness=.31)
    charcoal = material('Dark matte screen', (.017, .022, .031), metallic=.06, roughness=.49)
    backing = material('Warm charcoal backing', (.052, .049, .044), metallic=.42, roughness=.36)
    plate('Slim ivory housing', 1.8, 2.55, .145, .15, 0, ivory, root)
    plate('Inset matte screen', 1.675, 2.425, .020, .108, -.080, charcoal, root)
    plate('Back panel', 1.705, 2.455, .016, .12, .077, backing, root)
    image_info = cat_plane(root)
    return scene, {'yawDegrees': angle, 'boardDimensions': [1.8, .145, 2.55], **image_info}


def coral_material():
    return material('Coral-red glazed ceramic', (.66, .055, .038), metallic=0, roughness=.22, coat=.34)


def morph_object():
    """A single closed UV topology. Its Bead shape key is a true 3D sphere."""
    longitude_count, latitude_count = 128, 40
    heart_vertices, bead_vertices = [], []
    for j in range(1, latitude_count):
        phi = -math.pi / 2 + j * math.pi / latitude_count
        radial = math.cos(phi)
        for i in range(longitude_count):
            theta = i * 2 * math.pi / longitude_count
            profile = (13 * math.cos(theta) - 5 * math.cos(2 * theta)
                       - 2 * math.cos(3 * theta) - math.cos(4 * theta) + 2.5)
            # Soften the algebraic cusp slightly. Pure sin^3 has a zero
            # derivative along the meridians and creates a visible sharp seam.
            heart_x = .86 * math.sin(theta) ** 3 + .14 * math.sin(theta)
            heart_vertices.append((.71 * heart_x * radial,
                                   .25 * math.sin(phi), .68 * profile / 14.5 * radial))
            bead_vertices.append((.49 * math.sin(theta) * radial,
                                  .49 * math.sin(phi), .49 * math.cos(theta) * radial))
    front, back = len(heart_vertices), len(heart_vertices) + 1
    heart_vertices.extend([(0, -.25, 0), (0, .25, 0)])
    bead_vertices.extend([(0, -.49, 0), (0, .49, 0)])
    faces = []
    for j in range(latitude_count - 2):
        for i in range(longitude_count):
            k = (i + 1) % longitude_count
            faces.append((j * longitude_count + i, j * longitude_count + k,
                          (j + 1) * longitude_count + k, (j + 1) * longitude_count + i))
    last = (latitude_count - 2) * longitude_count
    for i in range(longitude_count):
        k = (i + 1) % longitude_count
        faces.extend([(front, k, i), (back, last + i, last + k)])
    mesh = bpy.data.meshes.new('Same-topology heart-to-bead UV surface')
    mesh.from_pydata(heart_vertices, [], faces)
    mesh.update()
    bm = bmesh.new()
    bm.from_mesh(mesh)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new('One ceramic object: heart to data bead', mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(coral_material())
    for polygon in mesh.polygons:
        polygon.use_smooth = True
    obj.shape_key_add(name='Heart')
    key = obj.shape_key_add(name='Bead')
    for vertex, coordinate in zip(key.data, bead_vertices):
        vertex.co = coordinate
    obj.rotation_euler.z = math.radians(-10)
    obj.rotation_euler.y = math.radians(-5)
    return obj, key


def render_morph(frame_count=120, size=384, samples=32):
    scene = scene_setup(size, 1.98)
    scene.cycles.samples = samples
    scene.render.use_persistent_data = True
    obj, shape = morph_object()
    scene.render.fps = 60
    scene.frame_start = 0
    scene.frame_end = frame_count - 1
    scene.render.image_settings.compression = 30
    folder = OUTPUT / 'morph'
    folder.mkdir(parents=True, exist_ok=True)
    frames = []
    start = time.monotonic()
    for index in range(frame_count):
        phase = index / max(frame_count - 1, 1)
        # A cubic easing retains continuous motion and volume while vertices
        # actually interpolate in 3D. This is not a crossfade of two images.
        shape.value = phase * phase * (3 - 2 * phase)
        scene.frame_set(index)
        scene.render.filepath = str(folder / f'frame-{index:03d}.png')
        bpy.ops.render.render(write_still=True)
        file = Path(scene.render.filepath)
        frames.append({'frame': index, 'sha256': sha256(file)})
        print('MORPH_FRAME_DONE', index, round(time.monotonic() - start, 2), flush=True)
    shape.value = 0
    bpy.ops.wm.save_as_mainfile(filepath=str(CACHE / 'heart-to-bead.blend'), check_existing=False)
    return {
        'pathPattern': str((folder / 'frame-%03d.png').relative_to(ROOT)),
        'size': [size, size], 'frames': frame_count, 'fps': 60,
        'durationSeconds': frame_count / 60,
        'samples': samples, 'denoise': False, 'renderSeconds': round(time.monotonic() - start, 3),
        'method': 'One closed 4994-vertex UV mesh with Bead shape key; cubic eased 3D vertex interpolation.',
        'material': 'Coral-red glazed ceramic; identical lighting, camera and center in all frames.',
        'blendCache': '.cache/motion-lab-assets/heart-to-bead.blend', 'frameHashes': frames,
    }


def bead():
    scene = scene_setup(640, 1.98)
    obj, shape = morph_object()
    shape.value = 1
    return scene, {'radius': .49, 'material': 'Coral-red glazed ceramic',
                   'geometry': 'Same topology and framing as heart-to-bead morph endpoint'}


def heart():
    scene = scene_setup(1024, 1.98)
    obj, shape = morph_object()
    shape.value = 0
    return scene, {'material': 'Coral-red glazed ceramic', 'maximumThickness': .5,
                   'geometry': 'Same closed UV topology and framing as heart-to-bead morph start'}


def main():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    parser = argparse.ArgumentParser()
    parser.add_argument('--only', '--part', nargs='+', choices=['hero', 'edge', 'heart', 'bead', 'morph'],
                        default=['hero', 'edge', 'heart', 'bead', 'morph'])
    parser.add_argument('--morph-frames', type=int, default=120)
    parser.add_argument('--morph-size', type=int, default=384)
    parser.add_argument('--morph-samples', type=int, default=32)
    args = parser.parse_args(argv)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    CACHE.mkdir(parents=True, exist_ok=True)
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {'assets': {}}
    manifest.update({
        'generator': str(Path(__file__).relative_to(ROOT)),
        'generatorSha256': sha256(__file__),
        'blenderVersion': bpy.app.version_string,
        'blenderPythonVersion': sys.version.split()[0],
        'renderEngine': 'Cycles CPU', 'threads': 2, 'samples': SAMPLES, 'seed': SEED,
        'denoise': False, 'transparentFilm': True, 'output': 'RGBA PNG, 8-bit',
        'denoiseUnavailableReason': 'System Blender build has no OpenImageDenoise support; verified by initial failed render.',
        'colorManagement': 'AgX / Medium High Contrast / exposure +0.15',
        'lighting': 'Large warm softbox 620W/4.2; cool front fill115W/3.5; weak cool edge95W/2.5',
        'catSource': {'path': str(CAT.relative_to(ROOT)), 'sha256': sha256(CAT)},
        'notes': 'Direct Blender output. No image editing, generated background, UI, text or paid API.',
    })
    factories = {'hero': lambda: board(12), 'edge': lambda: board(35), 'heart': heart, 'bead': bead}
    filenames = {'hero': 'cat-display-hero.png', 'edge': 'cat-display-edge.png',
                 'heart': 'coral-heart.png', 'bead': 'coral-bead.png'}
    for key in args.only:
        if key == 'morph':
            manifest['assets'][key] = render_morph(args.morph_frames, args.morph_size, args.morph_samples)
            MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
            print('MORPH_DONE', json.dumps({k: v for k, v in manifest['assets'][key].items()
                                          if k != 'frameHashes'}), flush=True)
            continue
        start = time.monotonic()
        scene, details = factories[key]()
        output = OUTPUT / filenames[key]
        scene.render.filepath = str(output)
        blend = CACHE / f'{key}.blend'
        bpy.ops.wm.save_as_mainfile(filepath=str(blend), check_existing=False)
        bpy.ops.render.render(write_still=True)
        manifest['assets'][key] = {
            'path': str(output.relative_to(ROOT)), 'sha256': sha256(output),
            'size': [scene.render.resolution_x, scene.render.resolution_y],
            'blendCache': str(blend.relative_to(ROOT)),
            'renderSeconds': round(time.monotonic() - start, 3), **details,
        }
        MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
        print('ASSET_DONE', json.dumps(manifest['assets'][key], ensure_ascii=False), flush=True)


if __name__ == '__main__':
    main()
