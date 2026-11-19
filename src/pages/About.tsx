import { ArrowRight, BadgeCheck, ChartNoAxesCombined, Globe2, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Brand, Breadcrumb, CTA, PageHero } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { visualAssets } from "../data/site";
import { useLanguage } from "../i18n";
import "../styles/pageLinks.css";

const gardenImage = "关于我们-园林夕景.webp";

const values = [
  { icon: BadgeCheck, label: "信頼", labelZh: "信任" },
  { icon: ChartNoAxesCombined, label: "専門性", labelZh: "专业" },
  { icon: Leaf, label: "持続可能性", labelZh: "可持续发展" },
  { icon: Globe2, label: "グローバル", labelZh: "国际视野" },
];

const currentBusiness = [
  { ja: "不動産開発", zh: "房地产开发" },
  { ja: "不動産売買", zh: "房地产买卖" },
  { ja: "プロパティマネジメント", zh: "物业管理" },
  { ja: "アセットマネジメント", zh: "资产管理" },
];

const futureBusiness = [
  { ja: "不動産小口化", zh: "不动产小口化" },
  { ja: "不動産金融", zh: "房地产金融" },
];

export default function About() {
  const { lang, t } = useLanguage();
  const title = t("私たちについて", "关于我们");
  const labelLanguage = lang === "ja" ? "en" : undefined;

  return (
    <>
      <PageHero
        title={title}
        english={t("ABOUT US", "公司介绍")}
        image={gardenImage}
        variant="about"
      />
      <Breadcrumb current={title} />
      <section className="about-intro container">
        <Reveal className="about-intro-copy">
          <span className="eyebrow" lang={labelLanguage}>{t("OUR VISION", "我们的愿景")}</span>
          <h2>
            {t("不動産の力で、", "发挥房地产的力量，")}
            <br />
            {t("持続可能な未来を創る。", "建设可持续的未来。")}
          </h2>
          <p>
            {t(
              "私たちは、「その土地にふさわしい価値」を大切にしています。",
              "我们重视因地制宜，发掘每一片土地特有的价值。",
            )}
          </p>
          <p>
            {t(
              "不動産の価値は、長期保有と日々の運営を通じて育まれます。私たちは市場の変化を見つめ、一つひとつの物件の維持管理や利用状況にも目を配ります。",
              "房地产价值在长期持有和日常运营中逐步积累。我们密切关注市场变化，也留意每一处物业的维护和使用情况。",
            )}
          </p>
          <p>
            {t(
              "鴻宇は、開発・投資・管理の知見を一つに結集し、オーナー様一人ひとりの目的に寄り添った提案を行います。",
              "鸿宇汇集开发、投资与管理经验，根据每位业主的目标提供相应的方案。",
            )}
          </p>
          <div className="about-signature">
            <Brand large />
          </div>
        </Reveal>
        <Reveal className="about-city-image" delay={0.12}>
          <img
            src="/images/hero-main.webp"
            alt={t("東京タワーと、未来へと広がる東京の街並み", "东京塔与延伸至远方的东京城市街景")}
            loading="lazy"
            width="1672"
            height="941"
          />
          <span lang={labelLanguage}>{t("TOKYO, JAPAN", "日本东京")}</span>
        </Reveal>
      </section>
      <section id="philosophy" className="philosophy-section container">
        <Reveal className="philosophy-copy">
          <span className="eyebrow" lang={labelLanguage}>{t("PHILOSOPHY", "企业理念")}</span>
          <h2>{t("私たちの想い", "我们的坚持")}</h2>
          <p>
            {t("誰にも見えないところでも、正しく丁寧に。", "即使在无人留意的地方，我们也认真做好每一处细节。")}
            <br />
            {t("長く信頼いただくための礎です。", "这是赢得长久信任的基础。")}
          </p>
          <p>
            {t(
              "既存の枠にとらわれず、その土地にふさわしい新しい価値を生み出す。一時の利益ではなく、世代を超えて残る資産と街づくりを目指します。",
              "我们不拘泥于既有模式，因地制宜地创造新价值。我们着眼于跨越世代的资产与城市建设。",
            )}
          </p>
        </Reveal>
        <Reveal className="philosophy-image" delay={0.1}>
          <img
            src={`/images/${gardenImage}`}
            alt={t("夕暮れの庭園", "黄昏时分的庭园")}
            loading="lazy"
            width="1916"
            height="821"
          />
        </Reveal>
      </section>
      <section className="about-development container" aria-labelledby="about-development-title">
        <h2 id="about-development-title">{t("事業の歩みとこれから", "品牌发展理念")}</h2>
        <div className="about-development-stage">
          <h3>{t("現在の事業", "当前业务")}</h3>
          <p>{t("不動産開発を起点に、売買から物件運営・資産管理まで長期的に取り組みます。", "以房地产开发为起点，将买卖、物业管理和资产管理贯穿于不动产的长期运营。")}</p>
          <ol>
            {currentBusiness.map(({ ja, zh }, index) => (
              <li key={ja}><span aria-hidden="true">0{index + 1}</span>{t(ja, zh)}</li>
            ))}
          </ol>
        </div>
        <div className="about-development-stage">
          <h3>{t("将来の構想", "未来发展规划")}</h3>
          <p>{t("不動産小口化と不動産金融は、将来の事業領域として検討しています。", "不动产小口化和房地产金融属于未来拟探索的业务方向。")}</p>
          <ol start={currentBusiness.length + 1}>
            {futureBusiness.map(({ ja, zh }, index) => (
              <li key={ja}><span aria-hidden="true">0{currentBusiness.length + index + 1}</span>{t(ja, zh)}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="values-band" aria-label={t("私たちが大切にする価値", "我们重视的价值观")}>
        <div className="container values-grid">
          {values.map(({ icon: Icon, label, labelZh }) => (
            <Reveal key={label}>
              <Icon size={32} strokeWidth={1} aria-hidden="true" />
              <h3>{t(label, labelZh)}</h3>
            </Reveal>
          ))}
        </div>
      </section>
      <nav className="about-page-links container" aria-label={t("企業情報", "企业信息")}>
        <Link className="body-page-link" to="/message">
          {t("代表メッセージ", "代表致辞")}
          <ArrowRight size={16} strokeWidth={1.4} aria-hidden="true" />
        </Link>
        <Link className="body-page-link" to="/organization">
          {t("組織体制", "组织架构")}
          <ArrowRight size={16} strokeWidth={1.4} aria-hidden="true" />
        </Link>
      </nav>
      <CTA
        inline
        title={t("価値を育み、次の時代へ。", "积累长期价值，传承至下一代。")}
        image={visualAssets.lounge}
        to="/services"
        label={t("事業紹介を見る", "查看业务介绍")}
      />
    </>
  );
}
