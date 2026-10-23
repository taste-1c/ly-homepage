import { services } from "../data/site";
import { Breadcrumb, CTA, PageHero } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { Accordion } from "../components/Accordion";

export default function Services() {
  return (
    <>
      <PageHero
        title="事業内容"
        english="OUR BUSINESS"
        image="hero-services.webp"
      />
      <Breadcrumb current="事業内容" />
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
              <Accordion title="詳細を見る" variant="service">
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
        title="まずはお話を聞かせてください。"
        description="開発・運用・管理・海外支援。ご要望に合わせたご提案を。"
        image="hero-main.webp"
      />
    </>
  );
}
