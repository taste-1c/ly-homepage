import { recommendedListings } from "./recommendedListings";

export const propertyCategoryIds = ["commercial", "residential", "hotel", "office"] as const;

export type PropertyCategoryId = (typeof propertyCategoryIds)[number];

type PropertyCategory = {
  nameJa: string;
  nameZh: string;
  english: string;
  descriptionJa: string;
  descriptionZh: string;
  image: string;
};

export const propertyCategories: Record<PropertyCategoryId, PropertyCategory> = {
  commercial: {
    nameJa: "商業ビル",
    nameZh: "商业建筑",
    english: "Commercial",
    descriptionJa: "東京の商業ビルから、鴻宇株式会社がセレクトした物件をご紹介します。",
    descriptionZh: "浏览鸿宇株式会社精选的东京商业建筑项目。",
    image: "房源/池袋商业楼/主立面与入口.png",
  },
  residential: {
    nameJa: "住居系ビル",
    nameZh: "住宅楼",
    english: "Residential",
    descriptionJa: "東京のマンションなど、鴻宇株式会社がセレクトした住宅をご紹介します。",
    descriptionZh: "浏览鸿宇株式会社精选的东京公寓等住宅项目。",
    image: "房源/东浅草住宅/建筑外观.jpg",
  },
  hotel: {
    nameJa: "ホテル・民泊",
    nameZh: "酒店与民宿",
    english: "Hotels & Vacation Rentals",
    descriptionJa: "東京のホテル・民泊物件から、鴻宇株式会社がセレクトした物件をご紹介します。",
    descriptionZh: "浏览鸿宇株式会社精选的东京酒店与民宿项目。",
    image: "房源/花川户旅宿/建筑外观.png",
  },
  office: {
    nameJa: "オフィスビル",
    nameZh: "办公楼",
    english: "Office",
    descriptionJa: "東京のオフィスビルから、鴻宇株式会社がセレクトした物件をご紹介します。",
    descriptionZh: "浏览鸿宇株式会社精选的东京办公楼项目。",
    image: "房源/东矢口办公楼/东海三丁目临街实拍示意.jpg",
  },
};

type LocalizedText = { ja: string; zh: string };

export type PropertyImage = {
  src: string;
  alt?: LocalizedText;
  illustrative?: boolean;
};

export type Property = {
  id: string;
  slug: string;
  category: PropertyCategoryId;
  additionalCategories?: readonly PropertyCategoryId[];
  nameJa: string;
  nameZh: string;
  locationJa: string;
  locationZh: string;
  descriptionJa: string;
  descriptionZh: string;
  overviewJa: string;
  overviewZh: string;
  completion?: string;
  structure?: LocalizedText;
  usageJa?: string;
  usageZh?: string;
  facts?: readonly { label: LocalizedText; value: LocalizedText }[];
  heroImage?: PropertyImage;
  gallery: readonly PropertyImage[];
  source?: { url: string; label: LocalizedText };
  featured: boolean;
  published: boolean;
};

export const properties: readonly Property[] = recommendedListings;

export function getPublishedProperty(slug: string | undefined) {
  return properties.find((property) => property.published && property.slug === slug);
}
