import { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";
import { Breadcrumb, PageHero } from "../components/Shared";
import { contactEmail } from "../data/contact";
import { visualAssets } from "../data/site";
import { useLanguage } from "../i18n";
import "../styles/contact.css";

const titles = { ja: "お問い合わせ", zh: "联系我们" };
const languageTags = { ja: "ja", zh: "zh-Hans" };
const descriptions = {
  ja: "不動産開発から投資運用、資産管理まで。KOUUへのお問い合わせはこちらからお願いいたします。",
  zh: "关于房地产开发、投资运用、资产管理及精选房源的咨询，欢迎联系我们。",
};
const topics = [
  { ja: "不動産開発・投資", zh: "房地产开发与投资" },
  { ja: "運用・資産管理", zh: "物业运营与资产管理" },
  { ja: "おすすめ物件", zh: "精选房源咨询" },
  { ja: "海外投資家向け支援", zh: "海外投资者服务" },
];
const copyMessages = {
  copied: { ja: "コピー済み", zh: "已复制" },
  failed: { ja: "コピー失敗", zh: "复制失败" },
};

export default function Contact() {
  const { lang, t } = useLanguage();
  const title = titles[lang];
  const secondary = lang === "ja" ? "zh" : "ja";
  const languages = [lang, secondary] as const;
  const copyLabel = t("メールアドレスをコピー", "复制邮箱地址");
  const [copyFeedback, setCopyFeedback] = useState<keyof typeof copyMessages | null>(null);
  const feedbackTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(feedbackTimeout.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyFeedback("copied");
    } catch {
      setCopyFeedback("failed");
    }

    window.clearTimeout(feedbackTimeout.current);
    feedbackTimeout.current = window.setTimeout(() => setCopyFeedback(null), 2000);
  }

  return (
    <>
      <PageHero
        title={title}
        english={titles[secondary]}
        subtitleLang={languageTags[secondary]}
        image={visualAssets.lounge}
        variant="services"
      />
      <Breadcrumb current={title} />
      <div className="contact-content container">
        <div className="contact-intro">
          {languages.map((language) => (
            <p key={language} lang={languageTags[language]}>{descriptions[language]}</p>
          ))}
        </div>
        <section className="contact-method" aria-labelledby="contact-method-heading">
          <h2 id="contact-method-heading" lang="en"><span>CONTACT</span> / EMAIL CONTACT</h2>
          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${contactEmail}`} lang="en">{contactEmail}</a>
            <button
              className="contact-email-copy"
              type="button"
              aria-label={copyLabel}
              title={copyLabel}
              onClick={copyEmail}
            >
              <Copy size="0.82em" strokeWidth={1.5} aria-hidden="true" />
            </button>
            <span className="contact-email-feedback" role="status">
              {copyFeedback && copyMessages[copyFeedback][lang]}
            </span>
          </div>
        </section>
        <section className="contact-topics" aria-labelledby="contact-topics-heading">
          <h2 id="contact-topics-heading">{t("ご相談内容", "咨询范围")}</h2>
          <ol role="list">
            {topics.map((topic, index) => (
              <li key={topic.ja}>
                <span className="contact-topic-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div className="contact-topic-label">
                  {languages.map((language) => (
                    <span key={language} lang={languageTags[language]}>{topic[language]}</span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
