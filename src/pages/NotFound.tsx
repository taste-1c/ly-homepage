import { ButtonLink } from "../components/Shared";
import { useLanguage } from "../i18n";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow" lang={t("en", "zh-Hans")}>{t("404 — PAGE NOT FOUND", "404 · 页面未找到")}</span>
        <h1>
          {t("お探しのページが", "您要访问的页面")}
          <br />
          {t("見つかりません。", "未找到。")}
        </h1>
        <p>{t("URLをご確認いただくか、ホームページからご覧ください。", "请检查网址，或返回首页继续浏览。")}</p>
        <ButtonLink to="/">{t("ホームへ戻る", "返回首页")}</ButtonLink>
      </div>
    </section>
  );
}
