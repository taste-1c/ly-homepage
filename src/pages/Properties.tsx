import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { PropertyHeading, PropertyHero } from "../components/PropertyLayout";
import { PropertyList } from "../components/PropertyList";
import { properties, propertyCategories, propertyCategoryIds } from "../data/properties";
import { useLanguage } from "../i18n";

export default function Properties() {
  const { t } = useLanguage();
  const featured = properties.filter((property) => property.published && property.featured);

  return (
    <>
      <PropertyHero
        title={t("おすすめ物件", "精选房源")}
        subtitle={t("FEATURED PROPERTIES", "推荐房源")}
        image="hero-main.webp"
        landing
      />
      <div className="container property-landing">
        <p className="property-intro">{t(
          "東京の不動産の中から、鴻宇株式会社がセレクトした物件をご紹介します。",
          "浏览鸿宇株式会社精选的东京房地产项目。",
        )}</p>
        <section aria-labelledby="property-categories-title">
          <PropertyHeading
            id="property-categories-title"
            title={t("物件カテゴリー", "房源分类")}
          />
          <ul className="property-category-grid" role="list">
            {propertyCategoryIds.map((id) => {
              const category = propertyCategories[id];
              return (
                <li key={id}>
                  <Link className="property-category-card" to={"/properties/" + id}>
                    <img src={"/images/" + category.image} alt="" loading="lazy" />
                    <div className="property-category-copy">
                      <span className="property-category-name">{t(category.nameJa, category.nameZh)}</span>
                    </div>
                    <ArrowRight className="property-category-arrow" size={20} strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section aria-labelledby="featured-properties-title">
          <PropertyHeading
            id="featured-properties-title"
            title={t("おすすめ物件", "精选推荐房源")}
          />
          <PropertyList entries={featured} />
        </section>
        <div className="property-notice">
          <Info size={22} strokeWidth={1.5} aria-hidden="true" />
          <p>{t(
            "本ページでは鴻宇株式会社が厳選した不動産をご紹介します。一般公開の物件検索データベースではありません。",
            "本页面为KOUU精选推荐房源展示，不提供公开房源数据库搜索功能。",
          )}</p>
        </div>
      </div>
    </>
  );
}
