import { ArrowRight, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { propertyCategories, type Property } from "../data/properties";
import { useLanguage } from "../i18n";
import { PropertyPhoto } from "./PropertyGallery";

function PropertyCard({ property }: { property: Property }) {
  const { t } = useLanguage();
  const { slug, nameJa, nameZh, heroImage, gallery, category } = property;
  const name = t(nameJa, nameZh);
  const categoryLabels = [category, ...(property.additionalCategories ?? [])].map((id) => propertyCategories[id]);

  return (
    <Link className="property-card" to={"/properties/" + slug}>
      <div className="property-card-image">
        <PropertyPhoto photo={heroImage ?? gallery[0]} alt="" />
      </div>
      <div className="property-card-content">
        <h3>{name}</h3>
        <p className="property-location">
          <MapPin size={15} aria-hidden="true" />
          {t(property.locationJa, property.locationZh)}
        </p>
        <span className="property-badge">{categoryLabels.map((label) => t(label.nameJa, label.nameZh)).join(" / ")}</span>
        <p className="property-card-description">{t(property.descriptionJa, property.descriptionZh)}</p>
        <span className="property-card-action">
          {t("詳細を見る", "查看详情")}
          <ArrowRight size={17} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function PropertyList({ entries }: { entries: readonly Property[] }) {
  const { t } = useLanguage();

  return entries.length ? (
    <ul className="property-list" role="list">
      {entries.map((property) => <li key={property.id}><PropertyCard property={property} /></li>)}
    </ul>
  ) : (
    <div className="property-empty">
      <Building2 size={27} strokeWidth={1.25} aria-hidden="true" />
      <p>{t("現在掲載中のおすすめ物件はありません。", "暂无精选房源。")}</p>
    </div>
  );
}
