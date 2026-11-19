import { ArrowRight, Building2, Globe2, Handshake, Layers3, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { businessSectionPath, services, visualAssets } from "../data/site";
import { useLanguage } from "../i18n";
import { Approach } from "./Approach";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Shared";

const brandValues = [
  {
    icon: Building2,
    title: "実務に根ざす知見",
    titleZh: "扎实的实务经验",
    description: "土地と市場を丁寧に読み解き、事業の可能性を見極めます。",
    descriptionZh: "深入了解土地和市场，判断项目的发展潜力。",
  },
  {
    icon: Layers3,
    title: "開発から運用まで",
    titleZh: "从开发到运营",
    description: "企画・開発・運用・管理を、長期的な視点でつなぎます。",
    descriptionZh: "从长远出发，衔接策划、开发、运营与管理各环节。",
  },
  {
    icon: Handshake,
    title: "専門分野の連携",
    titleZh: "跨专业协作",
    description: "各分野の知見を重ね、計画と現場の両面から支えます。",
    descriptionZh: "汇集各领域的专业经验，支持项目规划与现场执行。",
  },
  {
    icon: Globe2,
    title: "グローバルな視点",
    titleZh: "国际视野",
    description: "言語や文化の違いを越え、日本と海外の投資家をつなぎます。",
    descriptionZh: "跨越语言和文化差异，联结日本与海外的投资者。",
  },
];

const businessCopy = {
  development: {
    label: "土地の可能性を、かたちに。",
    labelZh: "让土地潜力成为现实",
    titleZh: "房地产开发",
    altZh: "与街区相融的绿意盎然的综合楼建筑效果图",
    description: "用地調査から企画・設計・施工まで。街の未来を見据えた開発を、一貫して手がけます。",
    descriptionZh: "从用地调查到策划、设计及施工，全程参与着眼于街区未来的开发项目。",
  },
  investment: {
    label: "資産の未来を描く",
    labelZh: "规划资产的未来",
    titleZh: "投资运营",
    altZh: "与庭园相连的安静商务空间",
    description: "市場動向と保有目的を踏まえ、長期的な視点で運用方針を組み立てます。",
    descriptionZh: "结合市场动向和持有目标，从长远出发制定运营方针。",
  },
  management: {
    label: "日々の積み重ねを、価値に",
    labelZh: "在日常管理中积累价值",
    titleZh: "资产管理",
    altZh: "维护整洁、绿植环绕的建筑入口",
    description: "日々の運営と保守計画を通じて、建物と資産の価値を丁寧に守ります。",
    descriptionZh: "通过日常运营和维护计划，悉心维护建筑与资产的价值。",
  },
  global: {
    label: "日本と世界の架け橋に",
    labelZh: "连接日本与世界",
    titleZh: "海外投资者支持",
    altZh: "呈现日本房地产市场的东京城市街景",
    description: "多言語での情報提供と現地の連携を通じて、日本の不動産市場への理解を支えます。",
    descriptionZh: "通过多语言信息与当地协作，帮助海外投资者了解日本房地产市场。",
  },
};

const advantages = [
  {
    icon: ShieldCheck,
    title: "的確な判断",
    titleZh: "审慎判断",
    description: "市場の動きと地域の特性を見極め、一時の変化に偏らない判断を大切にします。",
    descriptionZh: "结合市场走势和区域特点，着眼长期趋势作出判断。",
  },
  {
    icon: UsersRound,
    title: "現地実行力",
    titleZh: "本地执行力",
    description: "企画から現場、日々の運営まで。各分野と連携し、計画を着実にかたちにします。",
    descriptionZh: "从策划到现场实施和日常运营，与各领域专业人员协作，稳步落实计划。",
  },
  {
    icon: Globe2,
    title: "グローバル連携",
    titleZh: "国际协作",
    description: "言語や文化への理解を深め、日本と海外の視点をつなぐ架け橋となります。",
    descriptionZh: "以对语言和文化的理解为基础，促进日本与海外的交流。",
  },
];

function HomeHeading({ english, title, id }: { english: string; title: string; id: string }) {
  const { lang } = useLanguage();

  return (
    <div className="home-section-heading">
      <span className="eyebrow" lang={lang === "ja" ? "en" : undefined}>{english}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function HomeSections() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section id="strengths" className="home-brand-value" aria-labelledby="brand-value-heading">
        <div className="container brand-value-layout">
          <Reveal className="brand-value-copy">
            <span className="eyebrow" lang={lang === "ja" ? "en" : undefined}>{t("BRAND VALUE", "品牌价值")}</span>
            <h2 id="brand-value-heading">
              {t("長期的な視点で、", "着眼长远，")}<br />
              {t("都市の価値を育てる。", "培育城市价值。")}
            </h2>
            <p>{t(
              "都市の変化を見つめ、その土地にふさわしい価値を考える。鴻宇は、不動産の開発・投資運用・資産管理を一つの流れで捉え、街と資産の未来に向き合います。",
              "我们关注城市的变化，发掘每一片土地特有的价值。鸿宇将房地产开发、投资运营和资产管理视为一个完整过程，着眼于街区和资产的未来。",
            )}</p>
            <p>{t(
              "つくるときも、育てるときも。持続可能な視点を大切に、世代を超えて残る価値を目指します。",
              "从开发建设到后续运营，我们始终关注可持续发展，致力于创造可世代传承的价值。",
            )}</p>
            <ButtonLink to="/about">{t("私たちについて", "关于我们")}</ButtonLink>
          </Reveal>
          <div className="brand-value-grid">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1} className="brand-value-item">
                <value.icon size={30} strokeWidth={1.15} aria-hidden="true" />
                <h3>{t(value.title, value.titleZh)}</h3><p>{t(value.description, value.descriptionZh)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-core-business" aria-labelledby="core-business-heading">
        <div className="container">
          <Reveal className="home-section-intro">
            <HomeHeading english={t("CORE BUSINESS", "业务领域")} title={t("中核事業", "核心业务")} id="core-business-heading" />
            <div className="home-section-summary">
              <p>
                {t("開発を起点に、投資運用、資産管理、海外投資家への支援へ。", "从开发出发，业务覆盖投资运营、资产管理和海外投资者支持。")}
                <br className="desktop-break" />
                {t("専門性をつなぎ、不動産の可能性を広げます。", "我们整合专业经验，拓展房地产的潜力。")}
              </p>
              <Link className="home-text-link" to="/services">
                {t("事業紹介を見る", "查看业务介绍")}<ArrowRight size={17} strokeWidth={1.3} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="core-business-layout">
            {services.map((service, index) => {
              const copy = businessCopy[service.id];

              return (
                <Reveal key={service.id} delay={index * 0.1} className={index === 0 ? "core-feature-wrap" : "core-detail-wrap"}>
                  <Link className={`core-business-card ${index === 0 ? "core-business-card--feature" : "core-business-card--detail"}`} to={businessSectionPath(service.id)}>
                    <div className="core-business-image"><img src={`/images/${service.image}`} alt={t(service.alt, copy.altZh)} loading="lazy" width="1672" height={service.id === "global" ? "669" : "941"} /></div>
                    <div className="core-business-copy">
                      <span className="core-business-label">{t(copy.label, copy.labelZh)}</span>
                      <h3>{t(service.title, copy.titleZh)}</h3>
                      <p>{t(copy.description, copy.descriptionZh)}</p>
                    </div>
                    <span className="home-card-arrow" aria-hidden="true"><ArrowRight size={16} strokeWidth={1.25} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Approach />

      <section className="home-perspective" aria-labelledby="perspective-heading">
        <div className="container">
          <Reveal className="home-section-intro">
            <HomeHeading english={t("OUR PERSPECTIVE", "我们的视角")} title={t("都市に息づく長期価値", "城市的长远价值")} id="perspective-heading" />
            <p className="home-perspective-intro">
              {t("街の変化と、そこに続く暮らしを見つめる。", "关注街区的变化，以及人们在这里的生活。")}<br />
              {t("建物の先にある風景まで、私たちは考えます。", "我们也考虑建筑如何影响周边环境。")}
            </p>
          </Reveal>
          <div className="perspective-layout">
            <Reveal className="perspective-main">
              <figure>
                <img src={`/images/${visualAssets.night}`} alt={t("夕暮れから夜へと移り変わる東京の街並み", "从黄昏过渡到夜晚的东京街景")} loading="lazy" width="1983" height="793" />
                <figcaption>
                  <span className="perspective-kicker">{t("都市とともに、価値を育む", "与城市共同成长")}</span>
                  <h3>{t("東京の変化を、未来への力に。", "从东京的变化中寻找未来机遇。")}</h3>
                  <p>{t("都市の更新を見つめ、土地と建物の可能性を長期的な視点から考えます。", "我们关注城市更新，从长期视角审视土地与建筑的潜力。")}</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="perspective-secondary">
              <figure>
                <div className="perspective-secondary-image"><img src={`/images/${visualAssets.about}`} alt={t("緑と現代建築が調和する、開放的な街の風景", "绿植与现代建筑相融的开阔街景")} loading="lazy" width="1672" height="941" /></div>
                <figcaption>
                  <span className="perspective-kicker">{t("人と街に、続く豊かさを", "为居民和街区营造宜居环境")}</span>
                  <h3>{t("緑と建築が、ともにある日常。", "绿意融入建筑与日常。")}</h3>
                  <p>{t("使う人の心地よさと街との調和を大切に、持続可能な価値を見つめます。", "我们重视使用者的舒适体验以及建筑与街区的协调，着眼于长期价值。")}</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-advantages" aria-labelledby="advantages-heading">
        <div className="container">
          <Reveal className="home-section-intro">
            <HomeHeading english={t("OUR STRENGTHS", "专业优势")} title={t("選ばれる理由", "选择我们的理由")} id="advantages-heading" />
            <p className="home-advantages-intro">
              {t("確かな視点と、現場に向き合う姿勢。", "我们依靠专业判断，也注重现场实践。")}<br />
              {t("一つひとつの積み重ねを、信頼へ。", "在每一次合作中积累信任。")}
            </p>
          </Reveal>
          <div className="home-advantages-grid">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage.title} delay={index * 0.1} className="home-advantage">
                <advantage.icon size={35} strokeWidth={1.1} aria-hidden="true" />
                <div><h3>{t(advantage.title, advantage.titleZh)}</h3><p>{t(advantage.description, advantage.descriptionZh)}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
