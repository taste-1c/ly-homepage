# 鴻宇株式会社四页面官网

本工程位于 `hongyu-website/`，使用 Vite、React、TypeScript、React Router、Tailwind CSS、Motion、Lucide、React Hook Form 和 Zod。网站界面使用日文，开发说明使用中文。工程可独立运行，无需外层设计图或文案资料。

## 启动与构建

要求 Node.js 22.12 或以上版本。从仓库根目录运行：

```powershell
cd hongyu-website
npm ci
npm run dev
```

开发地址为 `http://127.0.0.1:5173/`。检查和生产预览：

```powershell
npm run lint
npm run build
npm run preview
```

生产预览地址为 `http://127.0.0.1:4173/`。构建结果在 `dist/`。正式部署时需要配置 SPA 回退：`/about`、`/services`、`/contact` 和其他前端路由请求应返回 `index.html`，静态资源请求仍返回实际文件。

## 页面与代码

| 路由 | 页面 | 实现 |
| --- | --- | --- |
| `/` | 首页 | `src/pages/Home.tsx` |
| `/about` | 公司介绍 | `src/pages/About.tsx` |
| `/services` | 业务内容 | `src/pages/Services.tsx` |
| `/contact` | 联系我们 | `src/pages/Contact.tsx` |
| 其他地址 | 404 页面 | `src/pages/NotFound.tsx` |

共享导航、页尾、Banner、CTA、渐显动画、表单和手风琴位于 `src/components/`。文案、业务列表、公司数据和 SEO 信息集中在 `src/data/site.ts`。颜色、字体、布局和响应式样式位于 `src/styles/global.css`。

`src/hooks/useRouteEffects.ts` 负责页面标题、描述、页面切换焦点与滚动定位。业务锚点为 `/services#development`、`#investment`、`#management`、`#global`，目标区块为固定导航预留了滚动间距。

## 图片素材与独立运行

网站实际使用的 12 个图片文件已放在本工程的 `public/images/`，代码通过 `/images/文件名` 引用。Vite 使用工程内部默认的 `public/`，构建时将资源写入 `dist/images/`。

所有图片均复用原有素材，未生成或下载新的照片。日文文案已整理进 `src/data/site.ts` 与页面组件。字体通过 npm 包自托管，页面运行时不依赖 Google Fonts。

| 页面用途 | 图片 |
| --- | --- |
| 首页首屏 | `hero-main.webp`，左深右浅的独立 CSS 绿罩 |
| 首页强项 | `project-office.webp`、`about-lounge.webp`、`global-map-banner.webp` |
| 四项业务 | `service-development-detail.webp`、`about-lounge.webp`、`hero-contact.webp`、`service-overseas-detail.webp` |
| 公司介绍首屏 | `hero-about.webp` |
| 公司介绍东京图 | `hero-main.webp`，聚焦左侧东京塔的竖向裁切 |
| 公司理念 | `hero-contact.webp` |
| 业务页首屏 | `hero-services.webp` |
| 联系页首屏 | `hero-contact.webp` |
| 底部摄影横幅 | `strength-night.webp`、`contact-lounge.webp`、`hero-main.webp` |
| 品牌标识 | `logo-mark.svg` |

## 动效与交互

- Header 滚动后切换为带轻微模糊的墨绿底色。手机菜单支持按钮开关、遮罩关闭、Escape 关闭、焦点循环和路由切换后关闭。
- `Reveal.tsx` 实现一次性进入视口渐显；首页首屏文字依次进入，卡片图片轻微放大，Hero 和 CTA 有小幅滚动位移。
- `Statistics.tsx` 在进入视口后播放一次计数，屏幕阅读器读取完整数值。
- 业务详情和 FAQ 通过同一个 `Accordion.tsx` 展开收起，具备键盘操作、`aria-expanded` 和关联区域。
- 表单具备必填项、邮箱格式、长度校验、逐字段错误文本和错误字段焦点管理。成功校验后明确提示没有发送。
- 支持 `prefers-reduced-motion`；减少动态模式下不播放位移与计数动画。所有导航和按钮均可通过键盘操作，提供跳过导航和回到顶部入口。

## 上线前需要确认

1. `company.verifyBeforeLaunch` 和各项统计数据的 `verifyBeforeLaunch` 均为 `true`。地址、电话、邮箱以及创立年份、开发数量、管理户数、资产规模来自提供的 HTML，尚未经过企业确认。
2. 公司介绍采用原 HTML 的 `2009年 / 120件+ / 8,400戸 / ¥80億`，没有使用设计图中的示意数据，并在页面标注参考信息待核实。
3. 当前没有表单后端。`contactEndpoint` 为 `null`，前端不发送网络请求、不持久保存输入内容，也不显示虚假的发送成功。
4. 隐私政策尚未提供。`privacyPolicyUrl` 为 `null`，同意复选框保持禁用并注明待公开；页尾显示“准备中”。正式启用发送前需要提供真实政策并接入发送服务。
5. 地图是 CSS 绘制的抽象街区，标注地图准备中。`mapUrl` 为 `null`，地址核实前不启用 Google Maps 外链。
6. 原资料中的税务、法律等表述没有作为未经核实的专业资质或收益保证展示。正式发布前应由企业审核业务范围与全部文案。
7. 部分 WebP 是低分辨率概念素材，已通过裁切和蒙层改善展示；正式上线前应审核清晰度与图片使用权。

## 仓库范围

仓库仅保留网站源码、运行与构建配置、依赖锁文件、运行说明和实际使用的 12 个图片文件。设计参考、原始 HTML、未使用素材、验收截图、检查脚本、日志、`node_modules/` 与 `dist/` 均不上传。

Git 提交与推送仅在用户明确授权后执行。
