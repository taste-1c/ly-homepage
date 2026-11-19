import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DetailCTA, DetailSectionHeading } from "../components/DetailLayout";
import { Breadcrumb, PageHero } from "../components/Shared";
import { businessDetails } from "../data/businessDetails";
import { businessDetailsZh } from "../data/businessDetailsZh";
import { businessOverviewTitle, businessSectionPath, services, type Service } from "../data/site";
import { useLanguage } from "../i18n";

const [development, investment, management, globalService] = services;
const coreServices = [development, investment, management];

function BusinessLink({ service }: { service: Service }) {
  const { t } = useLanguage();
  const { id, title, summary } = service;
  const { image, imageAlt } = businessDetails[id];
  const translation = businessDetailsZh[id];
  const Heading = id === "global" ? "h2" : "h3";

  return (
    <Link
      className="business-overview-link"
      data-service={id}
      to={businessSectionPath(id)}
      aria-labelledby={`${id}-card-heading ${id}-link-label`}
    >
      <div className="business-overview-image">
        <img src={`/images/${image}`} alt={t(imageAlt, translation.imageAlt)} loading="lazy" />
      </div>
      <div className="business-overview-copy">
        <Heading id={`${id}-card-heading`}>{t(title, translation.title)}</Heading>
        <p>{t(summary, translation.summary)}</p>
        <span className="business-overview-action" id={`${id}-link-label`}>
          {t("詳しく見る", "查看详情")}
          <ArrowRight size={16} strokeWidth={1.3} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function BusinessSection({ service }: { service: Service }) {
  const { lang, t } = useLanguage();
  const { id, title, english, description } = service;
  const { image } = businessDetails[id];
  const translation = businessDetailsZh[id];
  const content = lang === "zh" ? translation : businessDetails[id];
  const labelLanguage = lang === "ja" ? "en" : undefined;

  return (
    <section id={id} className="business-detail container" aria-labelledby={`${id}-heading`} tabIndex={-1}>
      <header className="business-detail-heading">
        <span className="eyebrow" lang={labelLanguage}>{t(english, translation.category)}</span>
        <h2 id={`${id}-heading`}>{t(title, translation.title)}</h2>
        <p>{content.lead}</p>
      </header>
      <div className="detail-overview">
        <div className="detail-overview-copy">
          <span className="eyebrow" lang={labelLanguage}>{content.overviewLabel}</span>
          <h3>{content.headline[0]}<br />{content.headline[1]}</h3>
          <p>{t(description, translation.description)}</p>
        </div>
        <img className="detail-overview-image" src={`/images/${image}`} alt={content.imageAlt} loading="lazy" />
      </div>
      <div className="detail-services">
        <DetailSectionHeading
          id={`${id}-services-heading`}
          title={content.sectionTitle}
          english={content.sectionLabel}
          description={content.sectionDescription}
          heading="h3"
        />
        <ul className="detail-service-grid" role="list" aria-labelledby={`${id}-services-heading`}>
          {content.items.map((item) => (
            <li key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const title = t(businessOverviewTitle, "业务介绍");

  return (
    <>
      <PageHero
        title={title}
        english={t("OUR BUSINESS", "我们的业务")}
        image="关于我们-园林夕景.webp"
        variant="services"
      />
      <Breadcrumb current={title} />
      <section className="business-overview-core container" aria-labelledby="business-core-heading">
        <h2 id="business-core-heading">{t("中核事業", "核心业务")}</h2>
        <ul className="business-overview-grid" role="list">
          {coreServices.map((service) => (
            <li key={service.id}>
              <BusinessLink service={service} />
            </li>
          ))}
        </ul>
      </section>
      <section className="business-overview-global container" aria-labelledby="global-card-heading">
        <BusinessLink service={globalService} />
      </section>
      {services.map((service) => <BusinessSection key={service.id} service={service} />)}
      <DetailCTA
        title={t("私たちの進め方", "合作流程")}
        description={t(
          "ご要望の把握から企画・実行、運営まで、事業を進める四つの段階をご紹介します。",
          "了解从梳理需求、项目策划和执行到后续运营的四个阶段。",
        )}
        to="/process"
        label={t("私たちの進め方を見る", "查看合作流程")}
      />
    </>
  );
}
