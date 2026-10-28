import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import { Brand } from "./Shared";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const focusable = [
          toggleRef.current,
          ...Array.from(
            panelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const index = focusable.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && index === 0) {
          event.preventDefault();
          focusable.at(-1)?.focus();
        }
        if (!event.shiftKey && index === focusable.length - 1) {
          event.preventDefault();
          focusable[0]?.focus();
        }
      }
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
          >
            <button
              type="button"
              className="menu-backdrop"
              aria-label="メニューの外側を閉じる"
              tabIndex={-1}
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
            />
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              className="mobile-menu"
              initial={{ y: reduced ? 0 : -14 }}
              animate={{ y: 0 }}
              exit={{ y: reduced ? 0 : -14 }}
            >
              <span className="eyebrow">KOUU INC.</span>
              <nav aria-label="モバイルナビゲーション">
                {navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setOpen(false)}
                  >
                    <span>
                      {item.label}
                      <small>{item.english}</small>
                    </span>
                    <ArrowUpRight size={20} strokeWidth={1} />
                  </NavLink>
                ))}
              </nav>
              <p>日本の街に、次世代の価値を。</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
