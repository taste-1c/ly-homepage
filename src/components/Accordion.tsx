import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const reduced = useReducedMotion();
  return (
    <div className={`accordion accordion--service ${open ? "is-open" : ""}`}>
      <h3>
        <button
          id={`button-${id}`}
          type="button"
          aria-expanded={open}
          aria-controls={`panel-${id}`}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "詳細を閉じる" : title}</span>
          <ChevronDown size={17} strokeWidth={1.4} aria-hidden="true" />
        </button>
      </h3>
      <div id={`panel-${id}`} role="region" aria-labelledby={`button-${id}`}>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="accordion-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="accordion-content">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
