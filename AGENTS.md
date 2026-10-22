# 项目约定

## 最新用户修订（2026-10-22，优先于旧版制作记录）

- 本轮完整成片已导出并验证：`output/new-media-v2-final.mp4`，130秒／7800帧／1080p60，无新增配音，使用用户上传BGM。完整解码与实际JPEG对应检查报告为`output/new-media-v2-final-validation.json`。以后修改从当前完整版本继续，默认`npm run video:build`已指向此版本。
- 最新且覆盖前述门禁：用户已明确“动画节奏还是有点快，排版还是按照原来那样吧，背景只要深色背景，但是要纯黑与波点交替，动效背景，这次你直接生成成片”。现已授权带修订完成130秒整片，无需再问风格确认。排版回首轮中心主体／下方居中文字，动作放慢、稳定阅读；只纯黑与深色浅波点交替。保留40短段与原BGM，无配音，主线6–9px与克制光效。新整片源码`src/new-media-v2/final/`，成片`output/new-media-v2-final.mp4`。R2浅色拼贴并未获认可。

- 新版本面向所有观众，介绍“新媒体运营”这个职位；不是运营入门教学或给从业者的建议。
- 最新文案反馈：前三句保留，从第四句起用观众刷小猫、停留、点赞、划走的经历，引出数据去了哪里、有什么作用，以及运营从汇总反馈中寻找内容方向；不要回到岗位职责清单。最新文案为 `production/new-media-v2/copy-draft-r2.md`，用户已回复“可以”确认；不得擅自改词。用户也已明确选择“脚本通过，进入素材与风格确认”；此前节点3仅制作三张关键帧和10秒风格／声音试片；此限制已被本轮用户直接生成完整成片的明确指令覆盖。
- 最新风格反馈：首轮候选被用户否定。历史R2十秒样稿曾采用：暖米白拼贴与墨蓝／深青浅色波点交替；空间Bezier曲线与缓动、8–12px粗线、相纸／胶片／停留重看贴纸、只在触发与反应处出现光效。文案与上传BGM不变。R2源码在 `src/new-media-v2/style-review-r2/`；图片从实际试片90／402／540帧取样。不得将旧候选或本轮技术验证等同于用户批准。
- 不要配音。使用纯文字动画、贴图动画、音乐和音效；不要复用旧版配音或把旧版音画模板当作已确认风格。
- 用户最新已上传并指定 `bgm.mp4`（附件 `file_00000000b8c481fd9f108d145de242a3`），当前音乐已取得，不再等待网易云／B站网络。133.07356秒／AAC44.1kHz单声道，路径和SHA见 `production/new-media-v2/music-reference.json`。已可靠对齐参考t→新BGM t+0.048秒，节点3试片取28.048–38.048秒，配四种原创新SFX；旧临时参考混音已被替换。此前在线链接访问失败只作历史记录，不继续向用户要求网络配置或补传音乐。
- 参考用户上传的《运气的形状》原片，须实际读取后分析动画、节奏、字体、排版、贴图和声音；保持参考背景音乐。未读到原片不得声称分析完成。
- 用户明确要求三个确认节点：1）文案生成后确认；2）脚本生成后确认；3）素材与剪辑风格确认。此前按此流程推进；本轮用户已明确直接生成成片，允许带最新指定修订完整制作，不再重复询问风格批准。
- 新版资料在 `production/new-media-v2/`。旧版 `production/new-media/`、`src/new-media/` 和输出保留作为历史版本，不代表用户认可。
- 上传附件 `file_00000000e9e481f689849560f85a18d2` 首次下载被工具拒绝，原因是超过 32 MiB 传输上限；本机未收到媒体文件。需要可读取的压缩版或直接下载地址，才能拆解参考与取得音乐。
- 用户已重新上传 `file_000000001d7081fd9d65952c18ef97fb`，在文案确认后已进入参考拆解阶段。新附件成功下载，11,767,133字节、130.007秒，实际路径见 `production/new-media-v2/approval-state.json`；不再受旧附件超限阻塞。不上传参考原片到公开仓库；不能把单条混合音轨声称独立纯净BGM。
- 聊天中的“查看图像”工具卡片会显示失败，即使修正 MIME 仍如此。用户已确认通过可访问的 GitHub 图片直链写成 Markdown 内嵌图可以显示；之后使用该方式交付视觉预览。

本项目用于 Remotion + FFmpeg 视频制作。默认比例为 16:9，分辨率 1920×1080，帧率 60fps。环境验证已完成，用户已要求制作3分钟以内的新媒体运营入门介绍视频；仍不调用未经授权的付费生成、配音或素材服务。

当前第二版资料在 `production/new-media-v2/`，实际时间轴和画面在 `src/new-media-v2/final/`，正式组合 `NewMediaV2Final`。历史带旁白资料在 `production/new-media/`，旧组合 `NewMediaIntro`。用户指定参考《运气的形状》的同一首背景音乐；原音频尚未取得时，输出只能标记为缺BGM的样片，不得擅自换曲或声称音乐要求已完成。用户要求节点进度汇报。无法自行重置账户额度，不绕过额度或访问限制。

## Codex 工作方式

- 每个云任务已经处于隔离环境。使用现有 `/workspace/vibe` checkout；除非用户明确要求，不创建 Git worktree。
- 开始 Remotion 工作前，先阅读 `.agents/skills/remotion-best-practices/SKILL.md`，再按其中路由阅读与任务有关的参考资料。优先遵循已安装的官方 Skill，保留用户明确要求。
- 官方 Skill 来源为 `remotion-dev/skills`，固定提交 `039e8a2fc78b67efc228d5645367838b85818a1c`。`skills-lock.json` 记录来源及哈希；不要无理由更新或删除技能内容。
- 保留用户已有修改。新增素材与输出不得覆盖用户文件，除非这是用户要求的操作。

## 视频代码

- 动画由 `useCurrentFrame()` 和 `interpolate()` 等逐帧 API 驱动，不使用 CSS `animation` / `transition` 控制视频时间。
- 在组合内部通过 `useVideoConfig().fps` 进行秒到帧的转换，保持渲染确定性。
- 将素材分别放入 `public/videos/`、`public/audio/`、`public/images/`，使用 `staticFile()` 引用，不硬编码本机文件路径或秘密值。
- 最终视频写入 `output/`。当前测试组合是 `SetupTest`：1920×1080、60fps、300 帧。
- 保持所有 `remotion` / `@remotion/*` 包版本一致，使用锁文件安装。新增相关包前查看官方 Skill 的依赖指引。

## 运行与验证

在 `/workspace/vibe` 中执行：

```bash
npm ci
npm run dev
npm run typecheck
npm run compositions
npm run test:render
```

`npm run dev` 是持续运行的 Studio 服务；其他检查应在另一命令会话中运行。云环境 onboarding 期间只通过内部请求验证服务，不提供 localhost 预览链接。

`npm run test:render` 依次进行类型检查、Remotion 渲染、FFmpeg 测试音轨合成和媒体验证。原始视频为 `output/remotion-test.mp4`，最终视频为 `output/test-5s.mp4`，通过时生成 `output/validation.json`。440Hz 低音量测试音轨仅用于环境验证。

当前默认 `npm run video:prepare` 为第二版无配音全长音乐与音效准备，需本机保留用户上传BGM或缓存FLAC；`npm run video:build` 为第二版完整成片类型检查、图轨渲染、声音合成、实际MP4抽帧与完整媒体验证。旧版带配音流程保留为 `npm run video:legacy:prepare` / `npm run video:legacy:build`；`scripts/synthesize-new-media.py` 使用缓存中的免费MeloTTS模型重新生成语音，模型与虚拟环境不纳入Git。当前图轨按指纹保存在 `.cache/new-media-v2-final/picture.mp4`，声音单独封装；旧版图轨缓存为 `.cache/new-media-edit/picture.mp4`。缺指定BGM时文件名为 `output/new-media-intro-preview.mp4`，不得当作满足全部要求的最终版。

报告真实执行的结果：渲染失败、未运行和验证通过必须区分。不要仅凭进程存在、端口打开或旧报告声称渲染成功。
