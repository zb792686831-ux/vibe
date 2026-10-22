# 20秒 HyperFrames 样片

这是全片28–48秒的代表性试验，保留旧130秒成片。画面由HyperFrames0.8.185原生HTML/GSAP逐帧渲染，Blender4.3.2生成实体猫咪画框与同网格红心→信号珠形变，FFmpeg处理原BGM和9个原创材质音效。输出为1920×1080、60fps、20秒，不新增配音。

输入源保持完整，不覆盖原文。`storyboard-proposal.json`的全部16镜、40句原文及每镜visual/sound/textTreatment等字段，原始`script.md`和制作说明、本轮SPEC/参考观察、完整素材和音频清单、追加refinements，均进入确定性`codegen-input.json`和浏览器的`input.js`。原始UTF8、base64字节与SHA均保留。`refinements.json`区分本轮审图后的追加实现参数与原批准分镜，不能称每个数值都经用户批准。

先运行`npm run motion:input`生成完整输入，再运行`npm run motion:input:check`。缺少必填字段、空值、类型错误、输入原字节哈希不一致或素材缺失都会报具体路径并停止。渲染流程只校验，不自行生成、修补或替换输入。`npm run motion:build`在输入通过后依次生成等弧长路径、音轨，执行HyperFrames检查/导出，再验证实际媒体。

预览由`hyperframes preview --background`在本机保持，已通过内部HTTP检查。当前聊天所在云环境设置页不能访问本机Studio；用户交付采用已验证的GitHub原始MP4和Markdown图片直链，避免此前失败的工具图片卡。

检查范围分开记录：官方check负责运行错误、布局、字体对比度与动作断言；自定义verify检查完整脚本哈希、素材哈希、真实seek前后DOM状态、1200帧完整音画解码、音乐来源、SFX安静段和实际抽帧一致；visual-review记录实际连续帧观察。音频按数值测量，未宣称人工试听；技术通过不代表用户认可美术效果。

实际样片已完成：20.000秒／1200帧／H.264 yuv420p BT709／AAC48k立体声，输出 `output/new-media-v2-motion-lab.mp4`，SHA256 `01c869a07669d1cc78847517e36c0a3ed4f66019b8c3bcc2e37dbe6a227d09c7`。完整检查见 `output/new-media-v2-motion-lab-validation.json`。原130秒成片未覆盖；“重看”图标的折角与环展开中段仍是可继续打磨的P2，用户尚未评价本样片。

如需在图形界面继续编辑，可使用 [HyperFrames桌面端](https://hyperframes.dev/studio/download?os=linux)；CLI工程和全部本轮渲染源也已保存。
