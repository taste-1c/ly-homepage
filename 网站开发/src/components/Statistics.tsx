import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { statistics } from "../data/site";

function Statistic({ item }: { item: (typeof statistics)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView || reduced) return;
    const control = animate(0, item.value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (current) => setValue(Math.round(current)),
    });
    return () => control.stop();
  }, [inView, item.value, reduced]);
  const display = reduced ? item.value : value;
  return (
    <div className="statistic" ref={ref}>
      <span className="statistic-value" aria-hidden="true">
        {item.prefix}
        {item.value === 2009 ? display : display.toLocaleString("ja-JP")}
        <small>{item.suffix}</small>
      </span>
      <span className="sr-only">
        {item.prefix}
        {item.value.toLocaleString("ja-JP", {
          useGrouping: item.value !== 2009,
        })}
        {item.suffix}
      </span>
      <span className="statistic-label">{item.label}</span>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="statistics-section" aria-label="会社データ">
      <div className="container statistics-grid">
        {statistics.map((item) => (
          <Statistic key={item.label} item={item} />
        ))}
      </div>
      <p className="statistics-note">
        ※掲載数値は提供資料に基づく参考情報です。現在確認中です。
      </p>
    </section>
  );
}
