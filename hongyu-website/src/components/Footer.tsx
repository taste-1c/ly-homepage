import { Link } from "react-router-dom";
import { navigation } from "../data/site";
import { Brand } from "./Shared";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand />
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
