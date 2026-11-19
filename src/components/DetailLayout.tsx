import { useLanguage } from "../i18n";
import { Reveal } from "./Reveal";
import { Breadcrumb, ButtonLink } from "./Shared";
import "../styles/detail.css";

type DetailHeaderProps = {
  title: string;
  english: string;
  description: string;
  image: string;
};

export function DetailHeader({ title, english, description, image }: DetailHeaderProps) {
  const { t } = useLanguage();
  return (
    <>
      <section className="page-hero detail-hero" aria-labelledby="detail-title">
        <img className="page-hero-image" src={`/images/${image}`} alt="" fetchPriority="high" />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <Reveal>
            <span className="eyebrow" lang="en">KOUU INC.</span>
            <h1 id="detail-title">{title}</h1>
            <span className="page-hero-english" lang={t("en", "zh-Hans")}>{english}</span>
            <p>{description}</p>
          </Reveal>
        </div>
      </section>
      <Breadcrumb current={title} className="detail-breadcrumb" business />
    </>
  );
}

export function DetailSectionHeading({
  id,
  title,
  english,
  description,
  heading: Heading = "h2",
}: {
  id: string;
  title: string;
  english: string;
  description: string;
  heading?: "h2" | "h3";
}) {
  const { t } = useLanguage();
  return (
    <div className="detail-section-heading">
      <div>
        <span className="eyebrow" lang={t("en", "zh-Hans")}>{english}</span>
        <Heading id={id}>{title}</Heading>
      </div>
      <p>{description}</p>
    </div>
  );
}

export function DetailCTA({
  title,
  description,
  to,
  label,
}: {
  title: string;
  description: string;
  to: string;
  label: string;
}) {
  return (
    <section className="cta-band cta-band--inline detail-cta">
      <div className="container cta-content">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ButtonLink to={to}>{label}</ButtonLink>
      </div>
    </section>
  );
}
