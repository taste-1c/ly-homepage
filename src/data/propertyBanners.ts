import type { PropertyCategoryId } from "./properties";

export type PropertyBannerKey = `categories/${PropertyCategoryId}` | `listings/${string}`;

type BannerPosition = { desktop?: string; mobile?: string };

const categoryPositions: Record<PropertyCategoryId, Required<BannerPosition>> = {
  commercial: { desktop: "center 66%", mobile: "82% center" },
  residential: { desktop: "center 76%", mobile: "91% center" },
  hotel: { desktop: "center 88%", mobile: "93% center" },
  office: { desktop: "center 71%", mobile: "88% center" },
};

export function getPropertyCategoryBanner(category: PropertyCategoryId) {
  return {
    src: `${import.meta.env.BASE_URL}images/properties/hero/${category}-hero.webp`,
    position: categoryPositions[category],
  };
}

// 按横幅路径（不含扩展名）设置桌面端和手机端的画面焦点。
const positions: Partial<Record<PropertyBannerKey, BannerPosition>> = {};

// 仅收集已经存在的文件名，避免请求尚未提供的横幅。
const files = new Set(Object.keys(import.meta.glob("/public/images/property-banners/{categories,listings}/*.webp")));

export function isPropertyBannerSize(width: number, height: number) {
  return width >= 1920 && height >= 440 && width / height >= 1.5;
}

export function getPropertyBanner(key: PropertyBannerKey) {
  const path = `images/property-banners/${key}.webp`;
  return files.has(`/public/${path}`)
    ? { src: `${import.meta.env.BASE_URL}${path}`, position: positions[key] }
    : undefined;
}
