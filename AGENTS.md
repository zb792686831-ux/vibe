# 项目约定

本项目用于 Remotion + FFmpeg 视频制作。默认比例为 16:9，分辨率 1920×1080，帧率 60fps。环境验证已完成，用户已要求制作3分钟以内的新媒体运营入门介绍视频；仍不调用未经授权的付费生成、配音或素材服务。

当前制作简报、脚本、分镜和逐句语音复核在 `production/new-media/`，Remotion组合为 `NewMediaIntro`。用户指定参考《运气的形状》的同一首背景音乐；原音频尚未取得时，输出只能标记为缺BGM的样片，不得擅自换曲或声称音乐要求已完成。用户要求节点进度汇报。无法自行重置账户额度，不绕过额度或访问限制。

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

正式短片的保留素材足以直接运行 `npm run video:build`；该命令渲染画面、合成声音并验证。按真实音长准备时间轴用 `npm run video:prepare`，需要缓存中的逐句配音；`scripts/synthesize-new-media.py` 使用缓存中的免费MeloTTS模型重新生成语音，模型与虚拟环境不纳入Git。音频更新且画面未变时复用 `.cache/new-media-edit/picture.mp4`，避免重复渲染所有帧。缺指定BGM时文件名为 `output/new-media-intro-preview.mp4`，不得当作满足全部要求的最终版。

报告真实执行的结果：渲染失败、未运行和验证通过必须区分。不要仅凭进程存在、端口打开或旧报告声称渲染成功。
