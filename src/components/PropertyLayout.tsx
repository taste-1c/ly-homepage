import { ArrowLeft, ArrowRight, ChevronRight, Mail } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { getPropertyBanner, getPropertyCategoryBanner, isPropertyBannerSize, type PropertyBannerKey } from "../data/propertyBanners";
import { propertyCategories, type PropertyCategoryId } from "../data/properties";
import { useLanguage } from "../i18n";
import { Reveal } from "./Reveal";
import { Breadcrumb, PageHero } from "./Shared";
import "../styles/properties.css";

function PropertyBreadcrumb({ current, parentCategory, inHero = false }: {
  current: string;
  parentCategory?: PropertyCategoryId;
  inHero?: boolean;
}) {
  const { t } = useLanguage();
  const category = parentCategory ? propertyCategories[parentCategory] : undefined;

  return (
    <nav
      className={inHero ? "breadcrumb property-breadcrumb" : "breadcrumb container property-breadcrumb"}
      aria-label={t("パンくずリスト", "面包屑导航")}
    >
      <ol>
        <li><Link to="/">{t("ホーム", "首页")}</Link></li>
        <li>
          <ChevronRight size={11} aria-hidden="true" />
          <Link to="/properties">{t("おすすめ物件", "精选房源")}</Link>
        </li>
        {category && (
          <li>
            <ChevronRight size={11} aria-hidden="true" />
            <Link to={`/properties/${parentCategory}`}>{t(category.nameJa, category.nameZh)}</Link>
          </li>
        )}
        <li>
          <ChevronRight size={11} aria-hidden="true" />
          <span aria-current="page">{current}</span>
        </li>
      </ol>
    </nav>
  );
}

export function PropertyHero({
  title,
  subtitle,
  image,
  landing = false,
  parentCategory,
}: {
  title: string;
  subtitle: string;
  image: string;
  landing?: boolean;
  parentCategory?: PropertyCategoryId;
}) {
  return (
    <>
      <PageHero title={title} english={subtitle} image={image} variant="services" />
      {landing ? <Breadcrumb current={title} /> : <PropertyBreadcrumb current={title} parentCategory={parentCategory} />}
    </>
  );
}

export function PropertyCategoryHero({ category }: { category: PropertyCategoryId }) {
  const { t } = useLanguage();
  const { nameJa, nameZh, descriptionJa, descriptionZh } = propertyCategories[category];
  const { src, position } = getPropertyCategoryBanner(category);

  return (
    <section className="page-hero property-category-hero" aria-labelledby="property-category-title">
      <img
        className="page-hero-image"
        src={src}
        alt=""
        fetchPriority="high"
        style={{
          "--property-banner-position": position.desktop,
          "--property-banner-position-mobile": position.mobile,
        } as CSSProperties}
      />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <Reveal>
          <PropertyBreadcrumb current={t(nameJa, nameZh)} inHero />
          <h1 id="property-category-title" lang="ja">{nameJa}</h1>
          <p className="property-category-hero-subtitle" lang="zh-Hans">{nameZh}</p>
          <p className="property-category-hero-description">{t(descriptionJa, descriptionZh)}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function PropertyBannerHero({
  title,
  subtitle,
  bannerKey,
  parentCategory,
}: {
  title: string;
  subtitle: string;
  bannerKey: PropertyBannerKey;
  parentCategory?: PropertyCategoryId;
}) {
  const { t } = useLanguage();
  const banner = getPropertyBanner(bannerKey);
  const [imageStatus, setImageStatus] = useState<{ src: string; ready: boolean }>();
  const status = imageStatus?.src === banner?.src ? imageStatus : undefined;
  const image = status?.ready !== false ? banner : undefined;

  return (
    <>
      <section
        className={`page-hero property-banner-hero${status?.ready ? "" : " property-banner-hero--placeholder"}`}
        aria-label={title}
      >
        {image && (
          <img
            key={image.src}
            className="page-hero-image"
            src={image.src}
            alt=""
            fetchPriority="high"
            style={{
              "--property-banner-position": image.position?.desktop,
              "--property-banner-position-mobile": image.position?.mobile,
            } as CSSProperties}
            onLoad={({ currentTarget: { naturalWidth, naturalHeight } }) => setImageStatus({
              src: image.src,
              ready: isPropertyBannerSize(naturalWidth, naturalHeight),
            })}
            onError={() => setImageStatus({ src: image.src, ready: false })}
          />
        )}
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <Reveal>
            <span className="eyebrow" lang="en">KOUU INC.</span>
            <h1>{title}</h1>
            <span className="page-hero-english" lang={t("en", "zh-Hans")}>{subtitle}</span>
          </Reveal>
        </div>
      </section>
      <PropertyBreadcrumb current={title} parentCategory={parentCategory} />
    </>
  );
}

export function PropertyHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="property-section-heading">
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function PropertyBackLink() {
  const { t } = useLanguage();

  return (
    <Link className="property-back-link" to="/properties">
      <ArrowLeft size={18} aria-hidden="true" />
      {t("おすすめ物件に戻る", "返回精选房源")}
    </Link>
  );
}

export function PropertyActions() {
  const { t } = useLanguage();

  return (
    <div className="property-actions">
      <Link className="property-contact-button" to="/contact">
        <Mail size={20} aria-hidden="true" />
        {t("お問い合わせ", "联系我们")}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
