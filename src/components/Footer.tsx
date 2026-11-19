import { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";
import { NavLink, useMatch } from "react-router-dom";
import { contactEmail } from "../data/contact";
import { headerNavigation } from "../data/site";
import { useLanguage } from "../i18n";
import { Brand } from "./Shared";
import "../styles/footer.css";

export function Footer() {
  const { t } = useLanguage();
  const aboutMatch = useMatch("/about/*");
  const [corporateOpen, setCorporateOpen] = useState(false);
  const corporateGroupRef = useRef<HTMLDivElement>(null);
  const corporateToggleRef = useRef<HTMLButtonElement>(null);
  const [copyFeedback, setCopyFeedback] = useState<"copied" | "failed" | null>(null);
  const copyFeedbackTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!corporateOpen) return;

    function dismissOnPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !corporateGroupRef.current?.contains(event.target)) {
        setCorporateOpen(false);
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setCorporateOpen(false);
      corporateToggleRef.current?.focus();
    }

    document.addEventListener("pointerdown", dismissOnPointerDown);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOnPointerDown);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [corporateOpen]);

  useEffect(() => () => window.clearTimeout(copyFeedbackTimeout.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyFeedback("copied");
    } catch {
      setCopyFeedback("failed");
    }

    window.clearTimeout(copyFeedbackTimeout.current);
    copyFeedbackTimeout.current = window.setTimeout(() => setCopyFeedback(null), 2000);
  }

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand />
        <nav className="footer-nav" aria-label={t("フッターナビゲーション", "页脚导航")}>
          {headerNavigation.map((item) =>
            "links" in item ? (
              <div
                className="footer-nav-group"
                key={item.label}
                ref={corporateGroupRef}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setCorporateOpen(false);
                }}
              >
                <button
                  className={`footer-nav-toggle${aboutMatch ? " active" : ""}`}
                  id="footer-corporate-toggle"
                  type="button"
                  ref={corporateToggleRef}
                  aria-expanded={corporateOpen}
                  aria-controls="footer-corporate-links"
                  onClick={() => setCorporateOpen((open) => !open)}
                >
                  {t(item.label, item.labelZh)}
                </button>
                <ul
                  className="footer-corporate-links"
                  id="footer-corporate-links"
                  aria-labelledby="footer-corporate-toggle"
                  hidden={!corporateOpen}
                >
                  {item.links.map((link) => (
                    <li key={link.path}>
                      <NavLink to={link.path} end onClick={() => setCorporateOpen(false)}>
                        {t(link.label, link.labelZh)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink key={item.path} to={item.path} end={item.path === "/"}>
                {t(item.label, item.labelZh)}
              </NavLink>
            ),
          )}
        </nav>
        <section className="footer-contact" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">
            <span lang="en">CONTACT</span>{" / "}
            {t("お問い合わせ", "联系我们")}
          </h2>
          <span className="footer-email">
            <a href={`mailto:${contactEmail}`} lang="en">{contactEmail}</a>
            <button
              className="footer-copy-button"
              type="button"
              aria-label={t("メールアドレスをコピー", "复制邮箱地址")}
              onClick={copyEmail}
            >
              <Copy size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <span className="footer-copy-feedback" role="status">
              {copyFeedback && (
                <>
                  <span lang="ja">{copyFeedback === "copied" ? "コピー済み" : "コピー失敗"}</span>
                  {" / "}
                  <span lang="zh-Hans">{copyFeedback === "copied" ? "已复制" : "复制失败"}</span>
                </>
              )}
            </span>
          </span>
        </section>
      </div>
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} <span lang="en">KOUU INC.</span>{" "}
          <span lang={t("en", "zh-Hans")}>{t("All rights reserved.", "版权所有。")}</span>
        </small>
      </div>
    </footer>
  );
}
