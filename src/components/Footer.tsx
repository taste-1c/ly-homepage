import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../data/site";
import { Brand } from "./Shared";

const contactEmail = "kouu@jenseninvest.com";

function FooterEmail() {
  const [copyFeedback, setCopyFeedback] = useState("");

  async function copyEmail() {
    setCopyFeedback("");
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyFeedback("コピーしました");
    } catch {
      setCopyFeedback("コピーできませんでした");
    }
  }

  return (
    <div className="footer-email">
      <span>{contactEmail}</span>
      <button
        className="footer-email-copy"
        type="button"
        aria-label="メールアドレスをコピー"
        onClick={copyEmail}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M9 9h10v10H9zM15 9V5H5v10h4" />
        </svg>
      </button>
      <span className="footer-email-feedback" role="status">
        {copyFeedback}
      </span>
    </div>
  );
}

export function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {pathname === "/" ? (
          <div className="footer-brand">
            <Brand />
            <FooterEmail />
          </div>
        ) : (
          <Brand />
        )}
        <div className="footer-navigation">
          <nav aria-label="フッターナビゲーション">
            {navigation.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} KOUU INC. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
