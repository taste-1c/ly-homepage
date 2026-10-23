# HONGYU | 四页面官网项目

四页面官网已在 `网站开发/` 中完成，使用 Vite + React + TypeScript。外层 `public/images/` 为共享素材，请保留当前目录结构。

开发与配置说明：[README_开发说明.md](网站开发/README_开发说明.md)。检查结果与页面截图：[验收记录.md](网站开发/验收记录.md)。

本包**没有调用 AI 生成新的素材图片**；`public/images/` 绝大部分沿用上一版 v2 图片包，只有首页主图已替换成用户这次亲自上传的高清照片转换版。`design-reference.png` 是用户本次选定的**新版四栏设计图**，而不是旧版 UI。

## 最新首屏图片（请先看）
- **首页使用：** `public/images/hero-main.webp`，由本次上传 `金色晨光下的都市豪宅全景-2.png` 转换，尺寸 1672×941。
- **高清原图备份：** `references/user-selected-hero-original.png`。
- **老首页图片备份：** `public/images/hero-main-previous.webp`（新网站首页不要使用）。
- 请通过 CSS 深绿渐变暗化左侧天空，保留右侧玻璃建筑，而不是暗化整个图导致细节丢失。
- 设计参考仍是四栏网页图 `design-reference.png`，包括四个真实路由，非一张长页面。

## 开始方法

要求 Node.js 22.12 或以上版本。克隆仓库后，在仓库根目录执行：

```powershell
cd 网站开发
npm ci
npm run dev
```

访问 `http://127.0.0.1:5173/`。四个页面为 `/`、`/about`、`/services`、`/contact`。

执行 `npm run build` 生成生产产物，`npm run lint` 检查代码。`CODEX_PROMPT.md`、`source-html/` 和参考图保留为原始开发资料。

## 特别提醒
- `references/page-*.png` 是用户设计图中四个页面的直接裁切，**不是给网页放的大背景图**。
- 截图底部横向素材展示不是网页章节。
- 现有图片有些来自先前 AI 拼版切图，像素较低；只保证原型的视觉参考，不等同正式上线的高清图。
- `source-html/` 是原网站的日文内容参考资料。地址、电话、邮箱、公司统计数据在上线前应核验。
- 图片资源总数：44 张 WebP（含 1 张旧首页备用图）+ 1 个 SVG Logo；另附 1 张用户上传原始 PNG。
