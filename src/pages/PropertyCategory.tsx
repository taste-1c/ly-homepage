import { PropertyBackLink, PropertyCategoryHero, PropertyHeading } from "../components/PropertyLayout";
import { PropertyList } from "../components/PropertyList";
import { properties, type PropertyCategoryId } from "../data/properties";
import { useLanguage } from "../i18n";

export default function PropertyCategory({ category }: { category: PropertyCategoryId }) {
  const { t } = useLanguage();
  const entries = properties.filter((property) => property.published &&
    (property.category === category || property.additionalCategories?.includes(category)));

  return (
    <>
      <PropertyCategoryHero category={category} />
      <div className="container property-category-page">
        <section aria-labelledby="category-properties-title">
          <PropertyHeading id="category-properties-title" title={t("掲載物件", "已发布房源")} />
          <PropertyList entries={entries} />
        </section>
        <PropertyBackLink />
      </div>
    </>
  );
}
