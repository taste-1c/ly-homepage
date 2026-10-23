import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Building2, ShieldCheck, TrendingUp } from "lucide-react";
import { useInView } from "motion/react";

const steps = [
  {
    title: "つくる",
    service: "不動産開発",
    icon: Building2,
    description: "用地調査から企画・設計・施工まで、一貫して価値をつくる。",
  },
  {
    title: "育てる",
    service: "投資・運用",
    icon: TrendingUp,
    description: "市場を見据えた投資・運用で、長期的な視点から資産を育てる。",
  },
  {
    title: "守る",
    service: "資産管理",
    icon: ShieldCheck,
    description: "日々の運営と保守計画を通じて、大切な資産の価値を守る。",
  },
];

export function Approach() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const id = useId();

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % steps.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index + steps.length - 1) % steps.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = steps.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <div
      ref={ref}
      className={`approach-panel ${inView ? "is-visible" : ""}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="approach-heading">
        <span className="eyebrow">OUR APPROACH</span>
        <h3 id={`${id}-heading`}>一貫した価値創造</h3>
      </div>
      <div className="approach-flow">
        <span
          className="approach-connector approach-connector--first"
          aria-hidden="true"
        />
        <span
          className="approach-connector approach-connector--second"
          aria-hidden="true"
        />
        <ol className="approach-steps">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={`approach-step ${active === index ? "is-active" : ""}`}
            >
              <button
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                type="button"
                id={`${id}-step-${index}`}
                aria-expanded={active === index}
                aria-controls={`${id}-detail-${index}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                onKeyDown={(event) => navigate(event, index)}
              >
                <span className="approach-icon">
                  <step.icon size={22} strokeWidth={1.25} aria-hidden="true" />
                </span>
                <span className="approach-step-label">
                  <strong>{step.title}</strong>
                  <span>{step.service}</span>
                </span>
              </button>
              <p
                id={`${id}-detail-${index}`}
                className="approach-detail"
                hidden={active !== index}
                role="region"
                aria-labelledby={`${id}-step-${index}`}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
