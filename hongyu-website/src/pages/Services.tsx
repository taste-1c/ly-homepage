import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { services, visualAssets } from "../data/site";
import { Breadcrumb, CTA, PageHero } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { Accordion } from "../components/Accordion";

export default function Services() {
  return (
    <>
      <PageHero
        title="事業内容"
        english="OUR BUSINESS"
        image={visualAssets.services}
        variant="services"
      />
      <Breadcrumb current="事業内容" />
      <nav className="business-index container" aria-label="事業一覧">
        {services.map((service) => (
          <Link key={service.id} to={`/services#${service.id}`}>
            <span>{service.number}</span>
            <strong>{service.title}</strong>
            <ArrowDown size={16} strokeWidth={1.2} aria-hidden="true" />
          </Link>
        ))}
      </nav>
      <div className="service-list container">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="service-row"
            aria-labelledby={`${service.id}-heading`}
          >
            <Reveal className="service-number">
              <span>{service.number}</span>
              <i />
            </Reveal>
            <Reveal className="service-heading" delay={0.04}>
              <span className="eyebrow">BUSINESS {service.number}</span>
              <h2 id={`${service.id}-heading`}>{service.title}</h2>
            </Reveal>
            <Reveal className="service-image" delay={0.12}>
              <img
                src={`/images/${service.image}`}
                alt={service.alt}
                width="576"
                height="330"
                loading="lazy"
              />
            </Reveal>
            <Reveal className="service-copy" delay={0.08}>
              <p>{service.description}</p>
              <Accordion title="事業の取り組みを見る">
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Accordion>
            </Reveal>
          </section>
        ))}
      </div>
      <CTA
        title={
          <>
            街と資産の可能性を、
            <br className="mobile-break" />
            次の時代へ。
          </>
        }
        description="開発から運用・管理まで、長期的な視点で価値を育みます。"
        image={visualAssets.night}
        imageMode="city-blend"
        to="/about#philosophy"
        label="私たちの理念を知る"
      />
    </>
  );
}
