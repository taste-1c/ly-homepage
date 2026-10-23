import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "motion/react";
import { navigation } from "../data/site";
import { Brand } from "./Shared";

export function Footer() {
  const reduced = useReducedMotion();
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Brand />
          <p className="footer-tagline">日本の不動産価値を、次の世代へ。</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          {navigation.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="back-top"
          type="button"
          aria-label="ページの先頭へ戻る"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduced ? "instant" : "smooth",
            })
          }
        >
          <ArrowUp size={20} strokeWidth={1.2} />
        </button>
      </div>
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} HONGYU INC. All rights reserved.
        </small>
        <span>プライバシーポリシー：準備中</span>
      </div>
    </footer>
  );
}
