import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { company, faqs } from "../data/site";
import { Breadcrumb, CTA, PageHero } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "../components/ContactForm";
import { Accordion } from "../components/Accordion";

export default function Contact() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        english="CONTACT"
        image="hero-contact.webp"
      />
      <Breadcrumb current="お問い合わせ" />
      <section
        className="contact-section container"
        aria-label="お問い合わせと連絡先"
      >
        <Reveal className="contact-form-column">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>お問い合わせフォーム</h2>
          <ContactForm />
        </Reveal>
        <Reveal className="contact-info-column" delay={0.1}>
          <aside className="contact-info">
            <h2>連絡先</h2>
            <dl>
              <div>
                <MapPin aria-hidden="true" />
                <dt>住所</dt>
                <dd>
                  〒100-0006
                  <br />
                  東京都千代田区丸の内 1-9-1
                </dd>
              </div>
              <div>
                <Phone aria-hidden="true" />
                <dt>TEL</dt>
                <dd>
                  {company.phone}
                  <small>{company.hours}</small>
                </dd>
              </div>
              <div>
                <Mail aria-hidden="true" />
                <dt>Email</dt>
                <dd>{company.email}</dd>
              </div>
              <div>
                <Globe2 aria-hidden="true" />
                <dt>対応言語</dt>
                <dd>{company.languages}</dd>
              </div>
            </dl>
            <p className="contact-verify-note">
              掲載の連絡先は現在確認中です。
              <br />
              確認完了後にお問い合わせ窓口を公開いたします。
            </p>
          </aside>
          <div
            className="map-placeholder"
            aria-label="所在地マップは準備中です。表示は地図ではなく抽象的な街区イメージです。"
          >
            <div className="map-grid" aria-hidden="true" />
            <div className="map-label">
              <MapPin size={30} strokeWidth={1.3} aria-hidden="true" />
              <span>鴻宇株式会社</span>
              <small>所在地マップ · 準備中</small>
            </div>
            <button type="button" disabled>
              Google マップで開く（住所確認中）
            </button>
          </div>
        </Reveal>
      </section>
      <section className="faq-section container">
        <Reveal>
          <h2>よくあるご質問</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <Accordion key={faq.question} title={faq.question}>
                <p>{faq.answer}</p>
              </Accordion>
            ))}
          </div>
        </Reveal>
      </section>
      <CTA
        title="小さなご質問でも歓迎です。"
        description="鴻宇の総合力が、皆様の目的達成の一助となります。"
        image="contact-lounge.webp"
        to="/services"
        label="事業内容を見る"
      />
    </>
  );
}
