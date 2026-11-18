import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { businessOverviewTitle } from "../data/site";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Shared";
import "../styles/detail.css";

type DetailHeaderProps = {
  title: string;
  english: string;
  description: string;
  image: string;
};

export function DetailHeader({ title, english, description, image }: DetailHeaderProps) {
  return (
    <>
      <section className="page-hero detail-hero" aria-labelledby="detail-title">
        <img className="page-hero-image" src={`/images/${image}`} alt="" fetchPriority="high" />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <Reveal>
            <span className="eyebrow">KOUU INC.</span>
            <h1 id="detail-title">{title}</h1>
            <span className="page-hero-english" lang="en">{english}</span>
            <p>{description}</p>
          </Reveal>
        </div>
      </section>
      <nav className="breadcrumb detail-breadcrumb container" aria-label="パンくずリスト">
        <ol>
          <li><Link to="/">ホーム</Link></li>
          <li>
            <ChevronRight size={11} aria-hidden="true" />
            <Link to="/services">{businessOverviewTitle}</Link>
          </li>
          <li>
            <ChevronRight size={11} aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </li>
        </ol>
      </nav>
    </>
  );
}

export function DetailSectionHeading({
  id,
  title,
  english,
  description,
}: {
  id: string;
  title: string;
  english: string;
  description: string;
}) {
  return (
    <div className="detail-section-heading">
      <div>
        <span className="eyebrow" lang="en">{english}</span>
        <h2 id={id}>{title}</h2>
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
