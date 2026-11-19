import { useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { getPublishedProperty, propertyCategories, propertyCategoryIds } from "../data/properties";
import { pageMetadata } from "../data/site";
import { useLanguage } from "../i18n";

const notFoundMetadata = {
  title: "ページが見つかりません | 鴻宇株式会社",
  description: "お探しのページが見つかりません。ホームページからご覧ください。",
  titleZh: "页面未找到 | 鸿宇株式会社",
  descriptionZh: "您要访问的页面未找到。请返回首页继续浏览。",
};

function getPageMetadata(pathname: string, propertySlug: string | undefined) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  const staticMetadata = pageMetadata[normalizedPath.toLowerCase()];
  if (staticMetadata) return staticMetadata;
  if (!propertySlug) return notFoundMetadata;

  const category = propertyCategoryIds.find((id) => id === propertySlug.toLowerCase());
  const property = category ? propertyCategories[category] : getPublishedProperty(propertySlug);
  if (!property) return notFoundMetadata;

  return {
    title: `${property.nameJa} | 鴻宇株式会社`,
    description: property.descriptionJa,
    titleZh: `${property.nameZh} | 鸿宇株式会社`,
    descriptionZh: property.descriptionZh,
  };
}

export function useRouteEffects() {
  const { pathname, hash, key } = useLocation();
  const propertySlug = useMatch("/properties/:slug")?.params.slug;
  const { lang } = useLanguage();
  useEffect(() => {
    const metadata = getPageMetadata(pathname, propertySlug);
    document.title = lang === "zh" ? metadata.titleZh : metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", lang === "zh" ? metadata.descriptionZh : metadata.description);
  }, [lang, pathname, propertySlug]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash
        ? document.getElementById(decodeURIComponent(hash.slice(1)))
        : null;
      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
          block: "start",
        });
      } else if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      const focusTarget = target?.hasAttribute("tabindex")
        ? target
        : document.getElementById("main-content");
      focusTarget?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
}
