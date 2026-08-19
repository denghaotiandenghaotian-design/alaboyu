# DESIGN.md — 阿拉伯语零基础学习系统（佳佳 · 阿拉伯语）

> 本设计系统由 design-md-architect（规范范）生成，服务于「成人零基础 → A1/A2 阿拉伯语学习系统」纯前端单页应用。
> 风格混搭：**Stripe 的色彩精度 + Apple 的排版克制 + 用户品牌深蓝金（#16213e / #e2a252）**。
> 设计目标：编辑级可读性、低认知负荷、阿拉伯文 RTL 与中文 LTR 混排友好。

---

## 1. Visual Theme & Atmosphere（视觉主题与氛围）

- **设计哲学**：以「沉稳学术感」包裹「轻快学习节奏」。深蓝作为知识信任底色，金色作为进度与成就的激励色，避免教育产品常见的廉价花哨。
- **视觉基调**：明亮、干净、克制；信息密度高但留白充足。
- **核心特征关键词**：`深蓝信任` · `金色激励` · `卡片化` · `轻阴影` · `RTL 友好`
- **光影与质感**：纯扁平 + 极轻投影（shadow-sm/md），主内容区微灰底，卡片纯白，强调色仅用于关键动作与成就反馈。

## 2. Color Palette & Roles（调色板与角色）

| 角色 | HEX | CSS 变量 | 使用场景 |
|---|---|---|---|
| Primary 深蓝 | `#16213e` | `--navy` | 主标题、侧边栏底、主强调文字 |
| Primary 亮蓝 | `#2a5298` | `--blue` | 次级强调、链接、图表系列1 |
| Brand 金 | `#e2a252` | `--gold` | 进度条、成就、主按钮、图表系列2 |
| Accent 青 | `#3aa6a0` | `--teal` | 口语/听力模块标识、图表系列3 |
| Surface 白 | `#ffffff` | `--surface` | 卡片背景 |
| Bg 灰 | `#f4f6fb` | `--bg` | 页面底 |
| Border | `#e4e8f2` | `--border` | 卡片/输入框描边 |
| 文本主 | `#1f2733` | `--text` | 正文 |
| 文本次 | `#6b7488` | `--text-2` | 辅助说明 |
| 成功 | `#2e9e6b` | `--ok` | 已掌握、正确 |
| 警告 | `#e2a252` | `--warn` | 需巩固、临界 |
| 错误 | `#d9534f` | `--err` | 未掌握、错误 |
| 信息 | `#2a5298` | `--info` | 提示 |
| 阴影色 | `rgba(22,33,62,0.08)` | `--shadow` | 卡片投影 |

## 3. Typography Rules（排版规则）

- **Font Family**：`"PingFang SC","Microsoft YaHei","Noto Sans SC",-apple-system,system-ui,sans-serif`；阿拉伯文交由系统 Arabic 字体（如 "Geeza Pro"/"Segoe UI"），单独 `font-ar` 类。
- **Type Scale**：

| 级别 | 字号 | 字重 | 行高 | 字距 | 用途 |
|---|---|---|---|---|---|
| Display | 30px | 700 | 1.25 | -0.5px | 模块大标题 |
| H1 | 22px | 700 | 1.3 | -0.3px | 页面标题 |
| H2 | 18px | 600 | 1.4 | 0 | 区块标题 |
| H3 | 15px | 600 | 1.5 | 0 | 卡片标题 |
| Body | 14px | 400 | 1.7 | 0 | 正文 |
| Small | 12.5px | 400 | 1.6 | 0 | 辅助/标注 |
| Ar | 20px | 500 | 1.8 | 0 | 阿拉伯文展示（rtl） |

- **设计哲学**：中文用克制字重（400/600），靠字号与色彩分层而非粗体轰炸；阿拉伯文加大字号与行高以兼容连写形态。

## 4. Component Stylings（组件样式）

- **Buttons**：
  - Primary：`background:var(--gold);color:#1a1206;border-radius:10px;padding:10px 18px;font-weight:600` hover 亮度+5%。
  - Secondary：`background:var(--blue);color:#fff;border-radius:10px;padding:10px 18px`。
  - Ghost：`background:transparent;color:var(--navy);border:1px solid var(--border)`。
  - Danger：`background:var(--err);color:#fff`。
- **Cards**：`background:var(--surface);border:1px solid var(--border);border-radius:14px;box-shadow:0 2px 10px var(--shadow);padding:18px`。
- **Inputs**：`border:1px solid var(--border);border-radius:10px;padding:10px 12px;focus:border:var(--blue);outline:none`。
- **Nav（侧边）**：`background:var(--navy);color:#dfe5f2;width:240px`，活跃项 `background:rgba(226,162,82,.18);border-left:3px solid var(--gold)`。
- **Badges**：`background:rgba(42,82,152,.12);color:var(--blue);border-radius:999px;padding:2px 10px;font-size:12px`。
- **Modal**：遮罩 `rgba(22,33,62,.45)`，内容 `background:#fff;border-radius:16px;padding:24px;max-width:560px`。

## 5. Layout Principles（布局原则）

- **Spacing**：基数 8px，序列 4/8/12/16/24/32/48。
- **Grid**：内容区最大宽 1080px，移动端单列。
- **Container**：`max-width:1080px;margin:0 auto;padding:0 16px`。
- **Section Spacing**：模块内区块间距 24px。
- **留白哲学**：列表/卡片间隔充足，避免 Arabic 连写与中文混排时的视觉拥挤。

## 6. Depth & Elevation（深度与层级）

- **Shadow**：`--shadow-xs:0 1px 2px rgba(22,33,62,.06)`；`--shadow-sm:0 2px 10px rgba(22,33,62,.08)`；`--shadow-md:0 6px 24px rgba(22,33,62,.12)`。
- **Surface Layers**：bg(#f4f6fb) → surface(#fff) → elevated(卡片+shadow-md) → overlay(模态)。
- **Z-index**：nav 10 / modal 100 / toast 200。
- **Backdrop**：模态 `backdrop-filter:blur(2px)`。

## 7. Do's and Don'ts（设计规范与禁忌）

**Do's**
1. 进度/成就一律用金色，建立正反馈锚点。
2. 阿拉伯文展示统一加 `dir="rtl"` 与 `font-ar`，保证连写正确。
3. 所有可发音内容提供 🔊 按钮（Web Speech API）。
4. 数据持久化进 localStorage，命名空间 `arabic_learn_*`。
5. 模块内表格用统一斑马纹与 sticky 表头。
6. 错误/掌握判定用语义色（ok/warn/err）而非纯文字。

**Don'ts**
1. 不使用与品牌冲突的高饱和红/紫作为主色。
2. 不把阿拉伯文与中文混在同一 span 不标记 RTL。
3. 不出现「多读多练」式空话，计划必须可量化。
4. 不在未联网时因 CDN 失败导致整页白屏（Mermaid/Chart 需降级）。
5. 不虚构阿拉伯语音频链接或具体版权素材 URL。

## 8. Responsive Behavior（响应式行为）

- **Breakpoints**：mobile ≤640 / tablet 641–960 / desktop ≥961 / wide ≥1280。
- **Touch Targets**：按钮/可点卡片最小 44×44px。
- **折叠策略**：侧边栏在 ≤960 收为顶部抽屉（汉堡键）；卡片网格 3→2→1 列。
- **Font Scaling**：移动端 Display 30→24，Ar 20→18。

## 9. Agent Prompt Guide（AI 代理提示指南）

**Quick Reference**：纯静态单页（无构建步骤），`index.html` + `styles.css` + `data.js` + `app.js`。所有状态存 localStorage。阿拉伯文用 `font-ar` + `dir="rtl"`。发音用 `speak(arText)`。

**Component Prompts（可直接复制）**
1. 「基于 data.js 的 letters 数组，渲染 28 字母网格卡片，点击播放发音」
2. 「用 App.renderMindmap(tree) 把 grammar 知识树转 Mermaid mindmap」
3. 「按 Ebbinghaus 间隔 [0,1,2,4,7,15,30] 计算今日待复习考点」
4. 「用 vocab 数组生成 7±2 记忆块背诵任务」
5. 「把 dialogue 场景渲染为引导式角色对话 + 句型银行」

**Iteration Guide**
1. 改色只动 `:root` CSS 变量，勿散改。
2. 新增数据集先在 data.js 定义，再在 app.js 写渲染器。
3. 新增模块：在 nav 加 `<a data-view="x">` + 写 `renderX()` 注册到 `App.views`。
4. 阿拉伯文串用模板字面量时避免反引号内换行截断词块。
5. TTS 需用户手势触发（浏览器策略），按钮点击内调用。
6. Mermaid 渲染前确保 DOM 已插入，再 `mermaid.run()`。
7. 看板图表在容器可见后再初始化，避免尺寸 0。
8. 一切持久化包 try/catch，损坏时回退默认值。
9. 保持单文件可 `file://` 打开（不用 ES module、不用 fetch 本地）。
