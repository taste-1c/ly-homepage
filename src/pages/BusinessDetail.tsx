import { DetailCTA, DetailHeader, DetailSectionHeading } from "../components/DetailLayout";
import { businessDetails } from "../data/businessDetails";
import { services } from "../data/site";
import NotFound from "./NotFound";

export default function BusinessDetail({ id }: { id: string }) {
  const service = services.find((entry) => entry.id === id);

  if (!service) return <NotFound />;

  const content = businessDetails[service.id];

  return (
    <>
      <DetailHeader
        title={service.title}
        english={service.english}
        description={content.lead}
        image={content.image}
      />
      <section className="detail-overview container" aria-labelledby="detail-overview-heading">
        <div className="detail-overview-copy">
          <span className="eyebrow" lang="en">{content.overviewLabel}</span>
          <h2 id="detail-overview-heading">
            {content.headline[0]}<br />{content.headline[1]}
          </h2>
          <p>{service.description}</p>
        </div>
        <img
          className="detail-overview-image"
          src={`/images/${content.image}`}
          alt={content.imageAlt}
          loading="lazy"
        />
      </section>
      <section className="detail-services container" aria-labelledby="detail-services-heading">
        <DetailSectionHeading
          id="detail-services-heading"
          title={content.sectionTitle}
          english={content.sectionLabel}
          description={content.sectionDescription}
        />
        <ul className="detail-service-grid" role="list">
          {content.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <DetailCTA
        title={content.ctaTitle}
        description="洞察・企画・実行・価値向上の四つの段階をご紹介します。"
        to="/process"
        label="私たちの進め方を見る"
      />
    </>
  );
}
