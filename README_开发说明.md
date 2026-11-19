# 鴻宇株式会社企业展示官网

这是一个日文的高端房地产企业品牌展示网站。现有 React 工程保留深松绿、米白与香槟金风格，展示企业品牌、四项业务、经营理念及品牌价值。工程可独立运行，无需仓库外层素材。

## 运行

要求 Node.js 22.12 或以上版本。从仓库根目录运行：

```powershell
npm ci
npm run dev
```

本地预览为 `http://127.0.0.1:5173/`。验证及生产预览：

```powershell
npm run lint
npm run build
npm run preview
```

构建产物在 `dist/`，生产预览为 `http://127.0.0.1:4173/`。正式部署需要配置 SPA 回退：页面路径返回 `index.html`，静态资源路径返回实际文件。

## 页面与导航

| 顺序 | 路由 | 日文导航 | 内容 |
| --- | --- | --- | --- |
| 1 | `/` | ホーム | 品牌价值、核心业务、四步流程、城市视角、合作优势、品牌愿景及新增页面入口 |
| 2 | `/services` | 事業紹介 | 不动产开发、投资运营、资产管理及海外投资者支援的概览和详情 |
| 3 | `/process` | 私たちの進め方 | 合作流程的四个阶段 |
| 4 | `/about` | 私たちについて | 企业介绍、经营理念、业务发展规划和企业子页入口 |
| 5 | `/properties` | おすすめ物件 | 房源分类及精选房源 |
| 6 | `/properties/commercial`、`/properties/residential`、`/properties/hotel`、`/properties/office` | 物件カテゴリー | 商业建筑、住宅楼、酒店、办公楼的分类列表 |
| 7 | `/properties/:slug` | 物件詳細 | 已发布房源的详情 |
| 8 | `/message` | 代表メッセージ | 代表致辞 |
| 9 | `/contact` | お問い合わせ | 电子邮箱和复制按钮 |

PC、手机和页脚共用 `src/data/site.ts` 的四项主导航。精选房源、企业信息和联系入口位于首页首屏下方，关于页也可前往代表致辞。旧 `/development`、`/investment`、`/management`、`/global` 分别重定向到 `/services#development`、`/services#investment`、`/services#management`、`/services#global`。首页业务卡片也链接至对应详情。旧 `/contact.html` 和 `/contact` 下的旧子路径重定向到 `/contact`。未知路径或未发布房源显示 404 页面，并提供返回首页入口。

首页页脚以纯文本显示 `info@kouu.net`，可通过金色方框按钮复制。

## 代码

- `src/pages/`：四个展示页面及 404 页面。
- `src/components/Shared.tsx`：品牌标识、页面首屏、面包屑、导航按钮与品牌横幅。
- `Header.tsx`、`Footer.tsx`：共用四项主导航。
- `HomeSections.tsx`：首页品牌价值、四项业务、城市视角、合作优势。
- `Approach.tsx`：洞察、企画、実行、価値向上四步展示，连接线依次点亮，手机端纵向排列；01–04 均位于对应标题旁，连接线末端不显示悬空编号。
- `Reveal.tsx`：一次性的滚动渐入。
- `src/data/site.ts`：品牌介绍、导航、四项业务和页面 SEO 信息。
- `src/data/businessDetails.ts`：四项业务详情的配图、介绍和服务说明。
- `src/styles/global.css`：配色、字体、布局、响应式与动效。
- `src/styles/home.css`：仅用于首页中段与紧凑愿景横幅的版式、交互及响应式。
- `src/styles/detail.css`：事業紹介详情与流程页的布局、配色和响应式。
- `src/hooks/useRouteEffects.ts`：路由标题、焦点与锚点滚动。

流程页底部链接至 `/services#development`。经营理念入口为 `/about#philosophy`。固定导航的滚动间距已预留。

## 图片与字体

图片全部来自现有素材，本次没有生成新图片。原大堂图片仅改为符合展示用途的文件名。页面不依赖外链照片、地图服务或在线字体。

| 用途 | 本地素材 |
| --- | --- |
| 首页首屏、东京城市图 | `hero-main.webp`，1672×941 |
| 关于页与业务页首屏、经营理念 | `关于我们-园林夕景.webp`，1916×821 |
| 首页业务卡片 | `业务内容-建筑外立面.webp`、`品牌-商务大堂.webp`、`关于我们-建筑园景.webp`、`首页-城市夜景.webp` |
| 业务详情 | `开发.webp`、`投资.webp`、`管理.webp`、`海外.webp` |
| 流程页首屏 | `流程.webp` |
| 投资运用与品牌空间 | `品牌-商务大堂.webp`，1672×941 |
| 城市夜景与品牌愿景横幅 | `首页-城市夜景.webp`，1983×793 |
| 保留的全球主题素材（当前首页未使用） | `全球业务-地球夜景.jpg`，3600×1800 |
| 公司标识 | `logo-mark.svg` |

保留的全球夜景素材来源：[NASA Black Marble](https://science.nasa.gov/earth/earth-observatory/earth-at-night/maps/)。署名：NASA Earth Observatory / Joshua Stevens；Suomi NPP VIIRS data / Miguel Román, NASA GSFC。图片表达全球化主题，不代表企业实际业务覆盖范围。现有概念建筑图不作为真实落地项目案例展示，城市视角模块仅表达品牌理念。

字体使用 npm 自托管的 Noto Serif JP 与 Noto Sans JP。项目保留 Vite、React、TypeScript、React Router、Tailwind CSS、Motion 和 Lucide。

## 展示规范

主内容使用流式容器：1440px 视口下为 1280px，1920px 下约为 1690px，2560px 下为 2200px。宽屏下分别调整业务分栏、图片高度与正文字号，正文保留合适行长，区块上下间距保持紧凑。

Hero 保留原有容器宽度、主图、位置和电影感动画。首页桌面高度仍为 820–920px，首页愿景横幅桌面高度仍为 290px，手机按内容自适应。首页愿景横幅使用 `CTA` 的 `imageMode="city-blend"`，城市图片层按原始比例响应式定位，以塔楼顶部为视觉焦点，底部淡出为页脚的深绿色。

业务卡片支持键盘焦点与鼠标悬停，上移 5px、图片缩放至 1.025、箭头向右移动 4px。品牌价值使用稳妥的优势描述，不展示未经确认的经营数字；城市视角使用静态图文，没有虚构项目名称或空的轮播按钮。流程、区块渐入、导航背景过渡和页内滚动均支持 `prefers-reduced-motion`。手机菜单保留遮罩、Escape、焦点循环及跳转后关闭。

原资料中尚未核实的经营数字已从展示内容与前端数据中撤下。未来如需展示企业实绩，应先由企业确认；本次没有新增经营数字、项目案例、合作伙伴或荣誉。

## 仓库范围

网站工程直接位于 `ly-homepage` 仓库根目录，包含 `src/`、`public/`、运行配置、锁文件与开发说明，无需进入子目录即可运行 npm 命令。

本地原始资料、截图和验收记录归档至 `本地资料/`，本地设计稿保存在 `设计预览/`。这两个目录以及日志、`node_modules/`、`dist/` 均在 Git 忽略范围内。

Git 提交与推送仅在用户明确要求时执行。
