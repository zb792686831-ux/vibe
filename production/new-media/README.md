# 新媒体运营：让内容连接到人

当前交付状态：**音画样片，缺用户指定参考视频的原 BGM**。

受众为新媒体运营入门者。实际时间轴为 **170.7667 秒（2 分 50.8 秒）**，10246 帧，1920×1080、16:9、60fps。17 场，49 句，732 个汉字。以一家街角咖啡店贯穿定位、选题、表达、分发、互动和复盘。

## 观看与文案

- `output/new-media-intro-preview.mp4`：旁白、原创画面、字幕、原创音效的完整样片。
- `output/new-media-validation.json`：本次渲染的媒体参数、完整解码、音量检查及交付状态。
- `script.md`：完整旁白、钩子、情绪曲线及分镜。
- `storyboard.json`：创作简报和编辑预估，不以预估时间截断配音。
- `timeline.json`：由实际逐句 WAV 样本数重建的时间轴、字幕页与音效落点。
- `voice-validation.json`：49 句的 ASR 辅助复核、两句修复和同音识别疑点记录。

情绪顺序为更新焦虑、找到方向、案例理解、数据释压、开始行动、温暖收束。结尾保留完整语音和一秒以上的呼吸，不为控制时长截断最后一句。

## 背景音乐的唯一未完成要求

用户参考：[Vibe知识大赏《运气的形状》](https://v.douyin.com/du_NuJamyo0/)。用户要求保持这首背景音乐。

初次连接短链时，云环境出口返回 `403 CONNECT tunnel failed`。后续已解析出实际视频 ID `7690344836800913785`；10 月 22 日最后复查时，分享页 `www.iesdouyin.com` 已能正常重定向到 `www.douyin.com/video/7690344836800913785`，出口连接限制已解除。但普通网页仍只返回空正文与验证脚本，官方元信息接口仍返回站点的 `403 / Uifid Not Found`，没有音乐或媒体地址。正常浏览器限时加载也未取得音乐元信息。未取得原视频或独立音乐，不能声称已观看原片、匹配其具体画面，或已经使用同一首 BGM。

网络草稿按实际访问路径增加了 `v.douyin.com`、`www.douyin.com` 与 `www.iesdouyin.com`；保存草稿本身不证明运行时网络已应用。后续媒体域应在实际重定向后确认。即使出口放行，也需要再次确认站点的公开页面是否正常返回可用音乐信息。

取得可用的原背景音乐后，放在 `public/audio/new-media/reference-bgm.wav`，并创建 `bgm-source.json` 记录实际来源、音乐名称及文件 SHA-256，再运行 `npm run video:prepare` 和 `npm run video:build`。不得创建虚假的来源记录或把含有原视频旁白的混音当纯 BGM。固定画面可从缓存复用，重新合成音轨不必重渲所有画面。存在原音源和来源记录时，管线才会输出 `output/new-media-intro.mp4`。

来源记录字段为 `title`、`source`、`sha256`、`confirmedSameTrack: true`、`containsNarration: false`；前两项填写实际信息，SHA-256 必须匹配实际音频。不能填示例值来通过检查。该混音分支须在取得真实音源后再运行验证。

## 复现

保留的 MP3、字体、WAV 音效和源码足以从普通 Node 开发环境渲染；系统还需要 FFmpeg、ffprobe 和 Chromium。所有 Remotion 包固定在 4.0.537。

```bash
cd /workspace/vibe
npm ci
npm run dev -- --no-open
npm run typecheck
npm run video:build
```

重新生成声音和时间轴：

```bash
python3 scripts/generate-new-media-sfx.py
/workspace/.cache/tts/venv/bin/python scripts/synthesize-new-media.py
npm run video:prepare
```

普通配音速度为 1.0；释压和结尾为 0.94；工具段 1.03，行动段 1.02。句间和场间停顿由实测样本数与帧率生成，字幕按句及短语页对齐，不宣称逐字强制对齐。音效是轻触、过渡、低频落点、和声提示、木质确认和起势；不会给每个字配敲击。

首次生成旁白需要缓存内的 Python 虚拟环境和模型，或者按脚本参数指定其他安装位置。渲染现有短片无需再次下载模型。模型来源为官方 sherpa-onnx GitHub `tts-models` release 的 `vits-melo-tts-zh_en.tar.bz2`（167006755 字节），SHA-256 为 `e58351ed7149f290a54534538badd4077cdbe6fddc964b24d0bee870415d1514`。MeloTTS 模型包 MIT；sherpa-onnx 1.13.8 为 Apache-2.0。使用通用合成女声，没有克隆特定人物的声音。模型、ASR 模型、缓存及虚拟环境不提交仓库。

字体是本机 Noto Sans CJK SC 的文字子集，SIL Open Font License 通知保留在 `public/fonts/new-media/NOTICE.txt`。如需增加文字，可重新生成子集；需要 Python fontTools 和 brotli 1.2.0（本机后者安装在 `.cache/font-deps`）。音效由项目脚本直接合成，没有下载音效采样。

## 检查与限制

验证要求实际帧数与时间轴一致、时长小于 180 秒、H.264/yuv420p/BT.709、AAC/48kHz、全部 49 句保留、结尾留白、音频非静音且有峰值余量，并完整解码所有音视频流。类型检查、运行服务和旧报告不能替代渲染结果。

ASR 检查用于辅助发现漏读，不等于人工听审。已确认的两句漏读或断词问题已用等义文案修复，并与脚本、字幕、实际配音同步；同音识别误差单独记录。最终听感可从样片复核。

本地配音不消耗外部语音接口额度。账户或平台额度只能由账户持有者管理，不能自行重置或绕过。
