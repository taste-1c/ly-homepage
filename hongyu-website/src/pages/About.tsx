import { BadgeCheck, ChartNoAxesCombined, Globe2, Leaf } from "lucide-react";
import { Brand, Breadcrumb, CTA, PageHero } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { Statistics } from "../components/Statistics";
import { visualAssets } from "../data/site";

const values = [
  { icon: BadgeCheck, label: "信頼" },
  { icon: ChartNoAxesCombined, label: "専門性" },
  { icon: Leaf, label: "持続可能性" },
  { icon: Globe2, label: "グローバル" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="私たちについて"
        english="ABOUT US"
        image={visualAssets.about}
        variant="about"
      />
      <Breadcrumb current="私たちについて" />
      <section className="about-intro container">
        <Reveal className="about-intro-copy">
          <span className="eyebrow">OUR VISION</span>
          <h2>
            不動産の力で、
            <br />
            持続可能な未来を創る。
          </h2>
          <p>
            創業以来、私たちは一貫して「その土地にふさわしい価値」を問い続けてきました。
          </p>
          <p>
            不動産は一度つくると長く残ります。だからこそ、開発の段階で住まい手や街の未来を想像し、運用の段階で資産を丁寧に育てる必要があります。
          </p>
          <p>
            鴻宇は、開発・投資・管理の知見を一つに結集し、オーナー様一人ひとりの目的に寄り添った提案を行います。
          </p>
          <div className="about-signature">
            <span className="brand-circle" aria-hidden="true" />
            <Brand large />
          </div>
        </Reveal>
        <Reveal className="about-city-image" delay={0.12}>
          <img
            src="/images/hero-main.webp"
            alt="東京タワーと、未来へと広がる東京の街並み"
            loading="lazy"
            width="1672"
            height="941"
          />
          <span>TOKYO, JAPAN</span>
        </Reveal>
      </section>
      <Statistics />
      <section className="philosophy-section container">
        <Reveal className="philosophy-copy">
          <span className="eyebrow">PHILOSOPHY</span>
          <h2>私たちの想い</h2>
          <p>
            誰にも見えないところでも、正しく丁寧に。
            <br />
            長く信頼いただくための礎です。
          </p>
          <p>
            既存の枠にとらわれず、その土地にふさわしい新しい価値を生み出す。一時の利益ではなく、世代を超えて残る資産と街づくりを目指します。
          </p>
        </Reveal>
        <Reveal className="philosophy-image" delay={0.1}>
          <img
            src={`/images/${visualAssets.about}`}
            alt="陽の光と豊かな緑が調和する建築空間"
            loading="lazy"
            width="1672"
            height="941"
          />
        </Reveal>
      </section>
      <section className="values-band" aria-label="私たちが大切にする価値">
        <div className="container values-grid">
          {values.map(({ icon: Icon, label }) => (
            <Reveal key={label}>
              <Icon size={32} strokeWidth={1} aria-hidden="true" />
              <h3>{label}</h3>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA
        inline
        title="ともに、次の時代の価値を創る。"
        image={visualAssets.contact}
      />
    </>
  );
}
