import { useRef } from "react";
import { Compass, Layers3, Settings2, TrendingUp } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

const steps = [
  { title: "洞察", icon: Compass, description: "市場と地域の声を読み解き、土地と資産の可能性を見極めます。" },
  { title: "企画", icon: Layers3, description: "目的と条件を丁寧に整理し、事業と運用の道筋を描きます。" },
  { title: "実行", icon: Settings2, description: "専門性と現場の知見をつなぎ、計画を着実にかたちにします。" },
  { title: "価値向上", icon: TrendingUp, description: "運営と管理を重ねながら、長く続く資産価値を育てます。" },
];

export function Approach() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className={`home-approach ${inView || reduced ? "is-visible" : ""}`} aria-labelledby="home-approach-heading">
      <div className="container">
        <Reveal className="home-section-intro">
          <div className="home-section-heading">
            <span className="eyebrow">OUR APPROACH</span>
            <h2 id="home-approach-heading">私たちの進め方</h2>
          </div>
          <p>洞察から価値向上まで。<br />それぞれの段階を、一つの視点でつなぎます。</p>
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
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
