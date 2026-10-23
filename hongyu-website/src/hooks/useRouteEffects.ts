import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMetadata } from "../data/site";

export function useRouteEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const meta = pageMetadata[pathname] ?? {
      title: "ページが見つかりません | 鴻宇株式会社",
      description:
        "お探しのページが見つかりません。ホームページからご覧ください。",
    };
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );
        target?.scrollIntoView({ behavior: "instant", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      // SPA 切换后将焦点交给主内容，保留跳过导航和键盘浏览路径。
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
}
