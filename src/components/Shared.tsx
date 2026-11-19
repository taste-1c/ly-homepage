import { ArrowRight, ChevronRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { visualAssets } from "../data/site";
import { useLanguage } from "../i18n";

export function Brand({ large = false }: { large?: boolean }) {
  const { t } = useLanguage();
  return (
    <Link
      to="/"
      className={`brand ${large ? "brand--large" : ""}`}
      aria-label={t("鴻宇株式会社 ホーム", "鸿宇株式会社首页")}
    >
      <img src="/images/logo-mark.svg" alt="" width="44" height="44" />
      <span className="brand-name">
        {t("鴻宇株式会社", "鸿宇株式会社")}<small lang="en">KOUU INC.</small>
      </span>
    </Link>
  );
}

export function ButtonLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={`button ${className}`}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={1.4} aria-hidden="true" />
    </Link>
  );
}

export function SectionHeading({
  english,
  children,
}: {
  english: string;
  children: ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <div className="section-heading">
      <span className="eyebrow" lang={t("en", "zh-Hans")}>{english}</span>
      <h2>{children}</h2>
    </div>
  );
}

export function PageHero({
  title,
  english,
  subtitleLang,
  image,
  variant,
}: {
  title: string;
  english: string;
  subtitleLang?: string;
  image: string;
  variant?: "about" | "services";
}) {
  const { t } = useLanguage();
  const imageSrc = /^(?:\/|[a-z][a-z\d+.-]*:)/i.test(image) ? image : `/images/${image}`;

  return (
    <section
      className={`page-hero ${variant ? `page-hero--${variant}` : ""}`}
      aria-label={title}
    >
      <img
        className="page-hero-image"
        src={imageSrc}
        alt=""
        fetchPriority="high"
      />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <Reveal>
          <span className="eyebrow" lang="en">KOUU INC.</span>
          <h1>{title}</h1>
          <span className="page-hero-english" lang={subtitleLang ?? t("en", "zh-Hans")}>{english}</span>
        </Reveal>
      </div>
    </section>
  );
}

export function Breadcrumb({ current, className = "", business = false }: {
  current: string;
  className?: string;
  business?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <nav className={`breadcrumb container ${className}`} aria-label={t("パンくずリスト", "面包屑导航")}>
      <ol>
        <li>
          <Link to="/">{t("ホーム", "首页")}</Link>
        </li>
        {business && (
          <li>
            <ChevronRight size={11} aria-hidden="true" />
            <Link to="/services">{t("事業紹介", "业务介绍")}</Link>
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

export function CTA({
  title,
  description,
  image = visualAssets.night,
  to,
  label,
  inline = false,
  imageMode = "cover",
  className = "",
}: {
  title: ReactNode;
  description?: string;
  image?: string;
  to: string;
  label: string;
  inline?: boolean;
  imageMode?: "cover" | "city-blend";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  return (
    <section
      ref={ref}
      className={`cta-band ${inline ? "cta-band--inline" : ""} ${imageMode === "city-blend" ? "cta-band--city-blend" : ""} ${className}`}
    >
      {imageMode === "city-blend" ? (
        <div className="cta-city-media" aria-hidden="true">
          <img className="cta-city-image" src={`/images/${image}`} alt="" width="1983" height="793" loading="lazy" />
        </div>
      ) : (
        <motion.img
          style={{ y: reduced ? 0 : y }}
          className="cta-image"
          src={`/images/${image}`}
          alt=""
          loading="lazy"
        />
      )}
      <div className="cta-shade" />
      <Reveal className="container cta-content">
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <ButtonLink to={to}>{label}</ButtonLink>
      </Reveal>
    </section>
  );
}
