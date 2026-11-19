import { useRef } from "react";
import { ArrowRight, Compass, Layers3, Settings2, TrendingUp } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "洞察",
    titleZh: "洞察",
    icon: Compass,
    description: "市場と地域の声を読み解き、土地と資産の可能性を見極めます。",
    descriptionZh: "研判市场并了解当地需求，评估土地和资产的潜力。",
  },
  {
    title: "企画",
    titleZh: "策划",
    icon: Layers3,
    description: "目的と条件を丁寧に整理し、事業と運用の道筋を描きます。",
    descriptionZh: "明确项目目标与条件，制定开发和运营方案。",
  },
  {
    title: "実行",
    titleZh: "执行",
    icon: Settings2,
    description: "専門性と現場の知見をつなぎ、計画を着実にかたちにします。",
    descriptionZh: "结合专业知识和现场经验，落实项目计划。",
  },
  {
    title: "価値向上",
    titleZh: "价值提升",
    icon: TrendingUp,
    description: "運営と管理を重ねながら、長く続く資産価値を育てます。",
    descriptionZh: "通过持续运营和管理，维护资产的长期价值。",
  },
];

export function Approach() {
  const { lang, t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className={`home-approach ${inView || reduced ? "is-visible" : ""}`} aria-labelledby="home-approach-heading">
      <div className="container">
        <Reveal className="home-section-intro">
          <div className="home-section-heading">
            <span className="eyebrow" lang={lang === "ja" ? "en" : undefined}>{t("OUR APPROACH", "我们的工作方式")}</span>
            <h2 id="home-approach-heading">{t("私たちの進め方", "合作流程")}</h2>
          </div>
          <p>
            {t("洞察から価値向上まで。", "从洞察到价值提升。")}
            <br />
            {t("それぞれの段階を、一つの視点でつなぎます。", "我们从资产的长期价值出发，贯穿项目的各个阶段。")}
          </p>
        </Reveal>
        <ol className="home-approach-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="home-approach-step">
              {index < steps.length - 1 && (
                <span className="home-approach-connector" aria-hidden="true"><span style={{ transitionDelay: reduced ? "0s" : `${0.25 + index * 0.25}s` }} /></span>
              )}
              <Reveal delay={index * 0.1} className="home-approach-node">
                <div className="home-approach-node-heading">
                  <span className="home-approach-icon"><step.icon size={25} strokeWidth={1.15} aria-hidden="true" /></span>
                </div>
                <h3>
                  <span className="home-approach-number" aria-hidden="true">0{index + 1}</span>
                  {t(step.title, step.titleZh)}
                </h3>
                <p>{t(step.description, step.descriptionZh)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Link className="home-text-link" to="/process">
          {t("進め方を詳しく見る", "查看合作流程")}
          <ArrowRight size={17} strokeWidth={1.3} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
