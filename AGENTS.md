# 项目约定

本项目用于 Remotion + FFmpeg 视频制作。默认比例为 16:9，分辨率 1920×1080，帧率 60fps。当前阶段仅搭建环境和验证 5 秒测试视频；没有用户明确指令时，不开始正式剪辑，也不调用付费生成、配音或素材服务。

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

报告真实执行的结果：渲染失败、未运行和验证通过必须区分。不要仅凭进程存在、端口打开或旧报告声称渲染成功。
