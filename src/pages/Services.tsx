import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DetailCTA } from "../components/DetailLayout";
import { Breadcrumb, PageHero } from "../components/Shared";
import { businessDetails } from "../data/businessDetails";
import { businessOverviewTitle, services, visualAssets, type Service } from "../data/site";

const [development, investment, management, globalService] = services;
const coreServices = [development, investment, management];

function BusinessLink({ service }: { service: Service }) {
  const { id, title, summary } = service;
  const { image, imageAlt } = businessDetails[id];
  const Heading = id === "global" ? "h2" : "h3";

  return (
    <Link
      className="business-overview-link"
      to={`/${id}`}
      aria-labelledby={`${id}-heading ${id}-link-label`}
    >
      <div className="business-overview-image">
        <img src={`/images/${image}`} alt={imageAlt} loading="lazy" />
      </div>
      <div className="business-overview-copy">
        <Heading id={`${id}-heading`}>{title}</Heading>
        <p>{summary}</p>
        <span className="business-overview-action" id={`${id}-link-label`}>
          詳しく見る
          <ArrowRight size={16} strokeWidth={1.3} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        title={businessOverviewTitle}
        english="OUR BUSINESS"
        image={visualAssets.services}
        variant="services"
      />
      <Breadcrumb current={businessOverviewTitle} />
      <section className="business-overview-core container" aria-labelledby="business-core-heading">
        <h2 id="business-core-heading">中核事業</h2>
        <ul className="business-overview-grid" role="list">
          {coreServices.map((service) => (
            <li key={service.id} id={service.id}>
              <BusinessLink service={service} />
            </li>
          ))}
        </ul>
      </section>
      <section className="business-overview-global container" id={globalService.id} aria-labelledby="global-heading">
        <BusinessLink service={globalService} />
      </section>
      <DetailCTA
        title="私たちの進め方"
        description="ご要望の把握から企画・実行、運営まで、事業を進める四つの段階をご紹介します。"
        to="/process"
        label="私たちの進め方を見る"
      />
    </>
  );
}
