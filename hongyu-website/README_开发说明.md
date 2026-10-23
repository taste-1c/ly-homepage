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

网站实际使用的图片已放在本工程的 `public/images/`，代码通过 `/images/文件名` 引用。Vite 使用工程内部默认的 `public/`，构建时将资源写入 `dist/images/`。

首页主图沿用用户指定的 `hero-main.webp`。现有素材包括此前按用户授权生成的四张概念摄影：三张内页图片为 1672×941，城市夜景为 1983×793。它们不代表企业已落地项目的真实实拍。第三张优势卡片采用本地保存的 NASA 高清全球夜景，未重新生成图片。日文文案已整理进 `src/data/site.ts` 与页面组件。字体通过 npm 包自托管，页面运行时不依赖 Google Fonts；Contact 地图需联网加载 OpenStreetMap。

| 页面用途 | 图片 |
| --- | --- |
| 首页首屏 | `hero-main.webp`，左深右浅的独立 CSS 绿罩 |
| 首页强项 | `业务内容-建筑外立面.webp`、`联系我们-商务大堂.webp`、`全球业务-地球夜景.jpg` |
| 四项业务 | `业务内容-建筑外立面.webp`、`联系我们-商务大堂.webp`、`关于我们-建筑园景.webp`、`首页-城市夜景.webp` |
| 公司介绍首屏 | `关于我们-建筑园景.webp` |
| 公司介绍东京图 | `hero-main.webp`，聚焦左侧东京塔的竖向裁切 |
| 公司理念 | `关于我们-建筑园景.webp` |
| 业务页首屏 | `业务内容-建筑外立面.webp` |
| 联系页首屏 | `联系我们-商务大堂.webp` |
| 首页与业务页底部 CTA | `首页-城市夜景.webp` |
| 公司介绍与联系页底部 CTA | `联系我们-商务大堂.webp` |
| 品牌标识 | `logo-mark.svg` |

`全球业务-地球夜景.jpg` 为 3600×1800、约 761KiB 的 NASA Black Marble 2016 原始 JPEG，通过 CSS 实时映射为深绿色与金色，保持图片比例。来源：[NASA Earth at Night / Black Marble](https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/)，[原始文件](https://assets.science.nasa.gov/content/dam/science/esd/eo/images/imagerecords/144000/144898/BlackMarble_2016_01deg.jpg)。署名：NASA Earth Observatory / Joshua Stevens；Suomi NPP VIIRS data / Miguel Román, NASA GSFC。图片仅用于全球业务的视觉表达，不代表企业实际业务覆盖范围。

## 大屏布局规范

内容容器默认最大宽度为 1280px，1600px 及以上屏幕使用 1360px；桌面基础边距为 48–64px，容器到达最大宽度后居中。首页 Hero 在桌面保持 820–920px 高度，文案区最大宽度为 640px；首页夜景 CTA 高度为 336px，手机端为 320px。优势卡片图片比例为 1.5，卡片间距为 22px，每张只保留正文区的一处金色编号；业务卡片图片比例为 1.02。手机端保留优势单列、业务双列布局。

## 动效与交互

- Header 滚动后切换为带轻微模糊的墨绿底色。手机菜单支持按钮开关、遮罩关闭、Escape 关闭、焦点循环和路由切换后关闭。
- `Reveal.tsx` 实现一次性进入视口渐显；优势与业务卡片按 100ms 交错入场。卡片悬停或键盘焦点时上移 6px，图片最多放大至 1.03，箭头轻移，过渡为 300–450ms。Hero 和 CTA 保留小幅滚动位移。
- `Approach.tsx` 实现优势下方的价值创造流程：桌面横排、手机纵排，与卡片容器对齐。进入视口后连接线依次点亮；悬停、点击、触摸或键盘焦点可切换当前步骤及说明，支持方向键、Home、End。
- `Statistics.tsx` 在进入视口后播放一次计数，屏幕阅读器读取完整数值。
- 业务详情和 FAQ 通过同一个 `Accordion.tsx` 展开收起，具有完整的 350ms 高度与透明度动画、键盘操作、`aria-expanded` 和关联区域。
- 各业务的咨询入口使用 `/contact?topic=development|investment|management|global` 预选咨询类别；未知参数不选中类别。
- 表单具备必填项、邮箱格式、长度校验、逐字段错误文本和错误字段焦点管理。校验后进入内容确认步骤，完整显示五项输入，可返回修改并保留内容；发送按钮明确标为准备中，保持禁用，不伪造提交成功。
- 支持 `prefers-reduced-motion`；减少动态模式下不播放位移与计数动画。所有导航和按钮均可通过键盘操作，提供跳过导航和回到顶部入口。
- 页脚底部仅保留版权信息，桌面与手机端均居中显示。

## 上线前需要确认

1. `company.verifyBeforeLaunch` 和各项统计数据的 `verifyBeforeLaunch` 均为 `true`。地址、电话、邮箱以及创立年份、开发数量、管理户数、资产规模来自提供的 HTML，尚未经过企业确认。
2. 公司介绍采用原 HTML 的 `2009年 / 120件+ / 8,400戸 / ¥80億`，没有使用设计图中的示意数据，并在页面标注参考信息待核实。
3. 当前没有表单后端。`contactEndpoint` 为 `null`，前端不发送网络请求、不持久保存输入内容，也不显示虚假的发送成功。
4. 隐私政策尚未提供。`privacyPolicyUrl` 为 `null`，表单内的同意复选框保持禁用并注明待公开；按用户要求已移除页脚的隐私政策文字。正式启用发送前需要提供真实政策并接入发送服务。
5. Contact 使用 [OpenStreetMap 官方 iframe 嵌入地图](https://wiki.openstreetmap.org/wiki/Export_tab#Embeddable_HTML)，展示原资料地址所在的东京站丸之内周边，地图保留服务商署名。地图下方继续标注“掲載住所周辺・住所確認中”，并提供 Google Maps 地址查询外链。这不是经企业核实的办公地点；`mapUrl` 仍为 `null`。地图需要联网，网络不可用时仍可使用外链查询地址。
6. 原资料中的税务、法律等表述没有作为未经核实的专业资质或收益保证展示。正式发布前应由企业审核业务范围与全部文案。
7. 部分 WebP 是低分辨率概念素材，已通过裁切和蒙层改善展示；正式上线前应审核清晰度与图片使用权。

## 仓库范围

仓库仅保留网站源码、运行与构建配置、依赖锁文件、运行说明和实际使用的图片文件。设计参考、原始 HTML、未使用素材、验收截图、检查脚本、日志、`node_modules/` 与 `dist/` 均不上传。

Git 提交与推送仅在用户明确授权后执行。
