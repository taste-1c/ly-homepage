import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { company, services, strengths, visualAssets } from "../data/site";
import { ButtonLink, CTA, SectionHeading } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { Approach } from "../components/Approach";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 45]);
  return (
    <>
      <section ref={heroRef} className="home-hero">
        <motion.img
          className="home-hero-image"
          style={{ y: reduced ? 0 : y }}
          src="/images/hero-main.webp"
          alt="東京タワーを望む街並みと、朝の光が差し込むガラス張りのテラス"
          fetchPriority="high"
          width="1672"
          height="941"
        />
        <div className="home-hero-shade" />
        <div className="hero-side-label" aria-hidden="true">
          HONGYU — TOKYO, JAPAN
        </div>
        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <Reveal delay={0.06}>
              <span className="eyebrow hero-eyebrow">HONGYU INC.</span>
            </Reveal>
            <Reveal delay={0.16}>
              <h1>
                日本の街に、
                <br />
                次世代の価値を創る。
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="hero-business-line">
                不動産開発 <span>×</span> 投資運用 <span>×</span> 資産管理
              </p>
              <p className="hero-description">{company.description}</p>
            </Reveal>
            <Reveal delay={0.34}>
              <ButtonLink to="/services">事業内容を見る</ButtonLink>
            </Reveal>
          </div>
        </div>
        <a
          className="scroll-cue"
          href="#strengths"
          aria-label="鴻宇の強みへスクロール"
        >
          <span>SCROLL</span>
          <span className="scroll-line">
            <ArrowDown size={15} strokeWidth={1} />
          </span>
        </a>
      </section>
      <section id="strengths" className="strengths-section section-space">
        <div className="container">
          <Reveal>
            <SectionHeading english="OUR STRENGTHS">鴻宇の強み</SectionHeading>
          </Reveal>
          <div className="strength-grid">
            {strengths.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.1}>
                <Link
                  to={`/services#${item.target}`}
                  className={`strength-card group ${item.target === "global" ? "strength-card--global" : ""}`}
                >
                  <div className="image-frame">
                    <img
                      src={`/images/${item.image}`}
                      alt={item.alt}
                      loading="lazy"
                      width="576"
                      height="290"
                    />
                  </div>
                  <div className="strength-card-body">
                    <span className="card-number">
                      {item.number}
                      <span />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ArrowRight
                      className="card-arrow"
                      size={18}
                      strokeWidth={1.2}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Approach />
          </Reveal>
        </div>
      </section>
      <section className="business-section">
        <div className="container">
          <Reveal>
            <SectionHeading english="BUSINESS">事業内容</SectionHeading>
          </Reveal>
          <div className="business-grid">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1}>
                <Link
                  to={`/services#${service.id}`}
                  className="business-link group"
                >
                  <div className="image-frame">
                    <img
                      src={`/images/${service.image}`}
                      alt={service.alt}
                      loading="lazy"
                      width="576"
                      height="330"
                    />
                  </div>
                  <div className="business-link-label">
                    <h3>{service.title}</h3>
                    <ArrowRight
                      size={19}
                      strokeWidth={1.2}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA
        className="home-cta"
        image={visualAssets.night}
        title={
          <>
            持続可能な街づくりと、
            <br />
            次世代の資産価値を。
          </>
        }
        to="/about"
        label="私たちについて"
      />
    </>
  );
}
