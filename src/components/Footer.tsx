import { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { navigation } from "../data/site";
import { Brand } from "./Shared";

const contactEmail = "kouu@jenseninvest.com";

function HomeContact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }

  return (
    <address className="container footer-contact">
      <div>
        <span className="footer-contact-label">お問い合わせ</span>
        <div className="footer-email">
          <span>{contactEmail}</span>
          <button type="button" onClick={copyEmail}>
            コピー<span className="sr-only">（メールアドレス）</span>
          </button>
        </div>
        <span className="footer-copy-status" role="status">
          {copyStatus === "copied" && "コピーしました"}
          {copyStatus === "failed" && "コピーできませんでした"}
        </span>
      </div>
      <div>
        <span className="footer-contact-label">所在地</span>
        渋谷区恵比寿西1－36－2
      </div>
    </address>
  );
}

export function Footer() {
  const isHome = useMatch("/");

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand />
        <div className="footer-navigation">
          <nav aria-label="フッターナビゲーション">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} end>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      {isHome && <HomeContact />}
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} KOUU INC. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
