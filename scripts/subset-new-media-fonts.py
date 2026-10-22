#!/usr/bin/env python3
"""Subset the installed OFL Noto CJK fonts to this video's exact character set."""
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.cache/font-deps'))
from fontTools.subset import main as subset_font
DESTINATION = ROOT / 'public/fonts/new-media'
DESTINATION.mkdir(parents=True, exist_ok=True)
CACHE = ROOT / '.cache/new-media-edit'
CACHE.mkdir(parents=True, exist_ok=True)
parts = [chr(x) for x in range(32, 127)] + ['→×≠·“”。 ，！？：；0123456789']
for folder in ['src/new-media', 'production/new-media']:
    for path in (ROOT / folder).rglob('*'):
        if path.is_file() and path.suffix in ['.tsx', '.ts', '.json', '.md']:
            parts.append(path.read_text())
characters = CACHE / 'font-characters.txt'
characters.write_text(''.join(sorted(set(''.join(parts)))))
for weight in ['Regular', 'Bold']:
    source = Path('/usr/share/fonts/opentype/noto') / f'NotoSansCJK-{weight}.ttc'
    subset_font([
        str(source), '--font-number=2', f'--text-file={characters}',
        f'--output-file={DESTINATION / (weight + ".woff2")}', '--flavor=woff2',
        '--no-hinting', '--layout-features=*',
    ])
shutil.copyfile('/usr/share/doc/fonts-noto-cjk/copyright', DESTINATION / 'NOTICE.txt')
print('Generated self-hosted Noto Sans CJK SC regular/bold subsets, with OFL notices.')
