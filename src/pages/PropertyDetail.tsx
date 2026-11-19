import { ArrowUpRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { PropertyGallery } from "../components/PropertyGallery";
import { PropertyActions, PropertyBannerHero, PropertyHeading } from "../components/PropertyLayout";
import { getPublishedProperty, propertyCategories, type Property } from "../data/properties";
import { useLanguage } from "../i18n";
import NotFound from "./NotFound";

function PropertyDetails({ property }: { property: Property }) {
  const { lang, t } = useLanguage();
  const { nameJa, nameZh, heroImage, gallery, source } = property;
  const name = t(nameJa, nameZh);
  const photos = heroImage && !heroImage.illustrative
    ? [heroImage, ...gallery.filter((photo) => photo.src !== heroImage.src)]
    : gallery;
  const location = t(property.locationJa, property.locationZh);
  const usage = t(property.usageJa ?? "", property.usageZh ?? "");
  const category = propertyCategories[property.category];
  const facts = [
    { label: t("所在地", "所在地"), value: location },
    { label: t("竣工年月", "竣工年月"), value: property.completion },
    { label: t("構造", "结构"), value: property.structure?.[lang] },
    { label: t("用途", "用途"), value: usage },
    ...(property.facts ?? []).map(({ label, value }) => ({ label: label[lang], value: value[lang] })),
  ].filter(({ value }) => value?.trim());

  return (
    <>
      <div className="property-detail-hero">
        <PropertyBannerHero
          title={name}
          subtitle={t("PROPERTY DETAILS", "房源详情")}
          bannerKey={`listings/${property.slug}`}
          parentCategory={property.category}
        />
      </div>
      <article className="container property-detail" aria-label={name}>
        <PropertyGallery photos={photos} name={name} />
        <div className="property-detail-info">
          {property.featured && <span className="property-badge">{t("おすすめ物件", "精选房源")}</span>}
          <div className="property-detail-meta">
            <span>{location}</span>
            <span>{usage || t(category.nameJa, category.nameZh)}</span>
          </div>
          {facts.length > 0 && (
            <dl className="property-facts">
              {facts.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          )}
          {source && (
            <a className="property-source" href={source.url}>
              {source.label[lang]} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          <PropertyActions />
        </div>
        <section className="property-overview" aria-labelledby="property-overview-title">
          <PropertyHeading id="property-overview-title" title={t("物件概要", "房源概况")} />
          <p>{t(property.overviewJa, property.overviewZh)}</p>
        </section>
      </article>
    </>
  );
}

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = getPublishedProperty(slug);

  return property ? <PropertyDetails key={property.id} property={property} /> : <NotFound />;
}
