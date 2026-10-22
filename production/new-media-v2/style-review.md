# 节点 3｜素材与剪辑风格候选（待确认）

文案与130秒逐镜脚本已获确认。本次只交付三张关键帧及一段10秒风格／声音试片，供用户确认材质、字体、排版、动画和听感；不是完整130秒成片，最终整片尚未剪辑。

## 可观看文件

- [下载10秒动态试片](https://github.com/zb792686831-ux/vibe/raw/refs/heads/main/output/new-media-v2-style-trial.mp4)：脚本全局28–38秒，1920×1080、60fps、600帧。
- [单听原创音效](https://github.com/zb792686831-ux/vibe/raw/refs/heads/main/public/audio/new-media-v2/style-review/trial-sfx-only.wav)：不含参考音乐，便于判断新增音效的强弱与质感。
- [媒体检查报告](../../output/new-media-v2-style-review.json)。技术检查不替代对画面和声音的主观确认。

小猫与红心贴图、细颗粒暗底和正文排版：

![小猫与红心关键帧](https://raw.githubusercontent.com/zb792686831-ux/vibe/main/output/new-media-v2-style-cat.jpg)

汇总反馈的数据河流、金白珠点与图形密度：

![数据河流关键帧](https://raw.githubusercontent.com/zb792686831-ux/vibe/main/output/new-media-v2-style-river.jpg)

重要句成为画面主体时的字重、层级与闭环线形：

![闭环论断关键帧](https://raw.githubusercontent.com/zb792686831-ux/vibe/main/output/new-media-v2-style-loop.jpg)

## 具体候选

字体为本机Noto Serif CJK SC Regular／Bold的文字子集，属于宋／明体类衬线候选；不是声称识别出了参考工程的原字体。正文候选76px、重要句候选82px，米白为主，暖金局部强调。字体许可与来源在 `public/fonts/new-media-v2/style-review/OFL.txt` 和 `font-source.json`。

底色使用近黑暖褐与微冷黑蓝的低对比变化，加少量细颗粒、暗角、漂浮尘点；主体周围留暗部空间。小猫由本次image_gen生成，真实毛发、透明底、暖象牙金轮廓光；源文件和SHA-256记录在 `public/images/new-media-v2/asset-source.json`。手机边框、朱红心和图线由Remotion图形与光影层制作，不使用现成表情图标代替主要素材。

三张Still分别是不同叙事段落的风格样张；10秒试片只涵盖“红心—划走—反应留下—悬问”，不表示已经生成了数据河流与整片所有动画。

## 10秒试片落点

| 试片时间 | 已确认文案 | 动作／声音 |
| --- | --- | --- |
| 0–3s | 顺手，点亮一颗红心。 | 0.65s心形亮起并轻落定；猫保留极轻微呼吸 |
| 3–4s | 然后，划走。 | 约3.14–3.86s内容上划，3.2s原创纸擦 |
| 4–5.6s | 视频过去了。 | 手机退暗，红心留在原处 |
| 5.6–7.6s | 你的反应，留下了。 | 心形缩为一点，5.72s原创细尘聚合 |
| 7.6–10s | 刚才那几秒，去了哪里？ | 一条细金线展开，句子稳定阅读，不再新增SFX |

## 音乐与原创音效

用户指定音乐来源为 [网易云3451028893](https://music.163.com/song?id=3451028893)，并补充 [B站BV134Ho6qENu](https://www.bilibili.com/video/BV134Ho6qENu/)。两个来源当前都在云端代理CONNECT阶段被403拦截，没有抵达网站，因此尚未取得真实曲名／时长或独立音乐文件。网络草稿已增加实际需要的 `music.163.com`、`www.bilibili.com`、`api.bilibili.com`；保存草稿不等于当前运行时已应用，仍需在环境设置中保存并发布后验证。不猜测媒体CDN、不擅自换曲。

当前试片使用用户上传参考片的原立体声混音28–38秒，降10dB留出余量，再叠本项目原创合成SFX。它包含用户参考的同一背景音乐，但可能仍带原片既有声音，**不是已经分离的纯净BGM，也不是从两个新链接下载的独立音源**。独立音乐取得后，可以替换试片音轨而不重做整套画面。

四种原创声音为轻反向气息、柔软心形触点、纸张扫动和细尘聚合。生成器 `scripts/generate-new-media-v2-review-sfx.py` 只用Python标准库、固定种子和FFmpeg，不下载音效采样、不调用付费服务、不生成配音。素材、音量与来源记录见 `public/audio/new-media-v2/style-review/audio-manifest.json`；7.6–10秒不加新音效。可独立复现声音，但需要本机缓存中的用户参考片作为临时音乐底。

## 本节点需要确认

请根据实际图片和动态试片，确认宋体字重与大小、画面明暗及金色比例、小猫的写实材质、划走和信号留下的动作、音效强弱是否需要调整。此节点确认前，不启动新版完整130秒剪辑。音乐独立音源尚未取得的限制须单独保留，不能因风格获认可而声称已经解决。
