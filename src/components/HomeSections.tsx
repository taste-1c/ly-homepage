import { ArrowRight, Building2, Globe2, Handshake, Layers3, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { services, visualAssets } from "../data/site";
import { Approach } from "./Approach";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Shared";

const brandValues = [
  { icon: Building2, title: "実務に根ざす知見", description: "土地と市場を丁寧に読み解き、事業の可能性を見極めます。" },
  { icon: Layers3, title: "開発から運用まで", description: "企画・開発・運用・管理を、長期的な視点でつなぎます。" },
  { icon: Handshake, title: "専門分野の連携", description: "各分野の知見を重ね、計画と現場の両面から支えます。" },
  { icon: Globe2, title: "グローバルな視点", description: "言語や文化の違いを越え、日本と海外の投資家をつなぎます。" },
];

const businessCopy = [
  { label: "土地の可能性を、かたちに。", description: "用地調査から企画・設計・施工まで。街の未来を見据えた開発を、一貫して手がけます。" },
  { label: "資産の未来を描く", description: "市場動向と保有目的を踏まえ、長期的な視点で運用方針を組み立てます。" },
  { label: "日々の積み重ねを、価値に", description: "日々の運営と保守計画を通じて、建物と資産の価値を丁寧に守ります。" },
  { label: "日本と世界の架け橋に", description: "多言語での情報提供と現地の連携を通じて、日本の不動産市場への理解を支えます。" },
];

const advantages = [
  { icon: ShieldCheck, title: "的確な判断", description: "市場の動きと地域の特性を見極め、一時の変化に偏らない判断を大切にします。" },
  { icon: UsersRound, title: "現地実行力", description: "企画から現場、日々の運営まで。各分野と連携し、計画を着実にかたちにします。" },
  { icon: Globe2, title: "グローバル連携", description: "言語や文化への理解を深め、日本と海外の視点をつなぐ架け橋となります。" },
];

function HomeHeading({ english, title, id }: { english: string; title: string; id: string }) {
  return (
    <div className="home-section-heading">
      <span className="eyebrow">{english}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function HomeSections() {
  return (
    <>
      <section id="strengths" className="home-brand-value" aria-labelledby="brand-value-heading">
        <div className="container brand-value-layout">
          <Reveal className="brand-value-copy">
            <span className="eyebrow">BRAND VALUE</span>
            <h2 id="brand-value-heading">長期的な視点で、<br />都市の価値を育てる。</h2>
            <p>都市の変化を見つめ、その土地にふさわしい価値を考える。鴻宇は、不動産の開発・投資運用・資産管理を一つの流れで捉え、街と資産の未来に向き合います。</p>
            <p>つくるときも、育てるときも。持続可能な視点を大切に、世代を超えて残る価値を目指します。</p>
            <ButtonLink to="/about">私たちについて</ButtonLink>
          </Reveal>
          <div className="brand-value-grid">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1} className="brand-value-item">
                <value.icon size={30} strokeWidth={1.15} aria-hidden="true" />
                <h3>{value.title}</h3><p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-core-business" aria-labelledby="core-business-heading">
        <div className="container">
          <Reveal className="home-section-intro">
            <HomeHeading english="CORE BUSINESS" title="中核事業" id="core-business-heading" />
            <div className="home-section-summary">
              <p>開発を起点に、投資運用、資産管理、海外投資家への支援へ。<br className="desktop-break" />専門性をつなぎ、不動産の可能性を広げます。</p>
              <Link className="home-text-link" to="/services">事業内容を見る<ArrowRight size={17} strokeWidth={1.3} aria-hidden="true" /></Link>
            </div>
          </Reveal>
          <div className="core-business-layout">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1} className={index === 0 ? "core-feature-wrap" : "core-detail-wrap"}>
                <Link className={`core-business-card ${index === 0 ? "core-business-card--feature" : "core-business-card--detail"}`} to={`/services#${service.id}`}>
                  <div className="core-business-image"><img src={`/images/${service.image}`} alt={service.alt} loading="lazy" width="1672" height={service.id === "global" ? "669" : "941"} /></div>
                  <div className="core-business-copy">
                    <span className="core-business-label">{businessCopy[index].label}</span>
                    <h3>{service.id === "global" ? "海外投資家向け支援" : service.title}</h3>
                    <p>{businessCopy[index].description}</p>
                  </div>
                  <span className="home-card-arrow" aria-hidden="true"><ArrowRight size={16} strokeWidth={1.25} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Approach />

      <section className="home-perspective" aria-labelledby="perspective-heading">
        <div className="container">
          <Reveal className="home-section-intro">
            <HomeHeading english="OUR PERSPECTIVE" title="都市に息づく長期価値" id="perspective-heading" />
            <p className="home-perspective-intro">街の変化と、そこに続く暮らしを見つめる。<br />建物の先にある風景まで、私たちは考えます。</p>
          </Reveal>
          <div className="perspective-layout">
            <Reveal className="perspective-main">
              <figure>
                <img src={`/images/${visualAssets.night}`} alt="夕暮れから夜へと移り変わる東京の街並み" loading="lazy" width="1983" height="793" />
                <figcaption>
                  <span className="perspective-kicker">都市とともに、価値を育む</span>
                  <h3>東京の変化を、未来への力に。</h3>
                  <p>都市の更新を見つめ、土地と建物の可能性を長期的な視点から考えます。</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="perspective-secondary">
              <figure>
                <div className="perspective-secondary-image"><img src={`/images/${visualAssets.about}`} alt="緑と現代建築が調和する、開放的な街の風景" loading="lazy" width="1672" height="941" /></div>
                <figcaption>
                  <span className="perspective-kicker">人と街に、続く豊かさを</span>
                  <h3>緑と建築が、ともにある日常。</h3>
                  <p>使う人の心地よさと街との調和を大切に、持続可能な価値を見つめます。</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-advantages" aria-labelledby="advantages-heading">
        <div className="container">
          <Reveal className="home-section-intro">
            <HomeHeading english="OUR STRENGTHS" title="選ばれる理由" id="advantages-heading" />
            <p className="home-advantages-intro">確かな視点と、現場に向き合う姿勢。<br />一つひとつの積み重ねを、信頼へ。</p>
          </Reveal>
          <div className="home-advantages-grid">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage.title} delay={index * 0.1} className="home-advantage">
                <advantage.icon size={35} strokeWidth={1.1} aria-hidden="true" />
                <div><h3>{advantage.title}</h3><p>{advantage.description}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
