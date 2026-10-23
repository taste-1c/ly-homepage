import {
  ArrowRight,
  Building2,
  ChartNoAxesColumnIncreasing,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { company, faqs, visualAssets } from "../data/site";
import { Breadcrumb } from "../components/Shared";
import { Reveal } from "../components/Reveal";
import { Accordion } from "../components/Accordion";
import { ContactEmailCard } from "../components/ContactEmailCard";
import "../styles/contact.css";

const consultations = [
  {
    id: "development",
    icon: Building2,
    title: "不動産開発のご相談",
    description: "用地調査から企画・開発まで、一貫した不動産開発を支援します。",
    image: visualAssets.services,
    alt: "緑と調和する現代的なオフィスビル",
  },
  {
    id: "investment",
    icon: ChartNoAxesColumnIncreasing,
    title: "投資・資産運用のご相談",
    description: "市場動向を踏まえた資産戦略で、長期的な価値の創出を目指します。",
    image: visualAssets.contact,
    alt: "庭園を望む落ち着いたビジネスラウンジ",
  },
  {
    id: "global",
    icon: Globe2,
    title: "海外投資に関するご相談",
    description: "海外の投資家様と日本の不動産市場をつなぎ、多言語でご相談を承ります。",
    image: "hero-main.webp",
    alt: "東京タワーを望む都心の街並み",
  },
];

const enquirySubjects: Record<string, string> = {
  ...Object.fromEntries(consultations.map(({ id, title }) => [id, title])),
  management: "資産管理のご相談",
};

function emailLink(subject?: string) {
  return `mailto:${company.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const incomingSubject = enquirySubjects[searchParams.get("topic") ?? ""];

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <img
          className="contact-hero-image"
          src={`/images/${visualAssets.contact}`}
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
        />
        <div className="contact-hero-shade" />
        <div className="container contact-hero-content">
          <Reveal>
            <span className="eyebrow">CONTACT</span>
            <h1 id="contact-title">お問い合わせ</h1>
            <p>お気軽にご相談ください。</p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb current="お問い合わせ" />

      <section className="container contact-intro" aria-labelledby="contact-intro-title">
        <Reveal className="contact-intro-copy">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2 id="contact-intro-title">未来の価値を、ともに。</h2>
          <p>
            不動産開発・投資運用・資産管理・海外投資に関する
            <br className="contact-desktop-break" />
            ご相談は、メールにてお気軽にお問い合わせください。
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactEmailCard href={emailLink(incomingSubject)} />
        </Reveal>
      </section>

      <section className="container contact-consultations" aria-labelledby="consultation-title">
        <Reveal>
          <span className="eyebrow">CONSULTATION</span>
          <h2 id="consultation-title">各分野のご相談について</h2>
        </Reveal>
        <div className="contact-consultation-grid">
          {consultations.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <a
                className={`consultation-card consultation-card--${item.id}`}
                href={emailLink(item.title)}
                aria-label={`${item.title} — メールを作成する`}
              >
                <div className="consultation-image">
                  <img src={`/images/${item.image}`} alt={item.alt} loading="lazy" width="1672" height="941" />
                </div>
                <div className="consultation-card-body">
                  <item.icon className="consultation-icon" size={31} strokeWidth={1.25} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <ArrowRight className="consultation-arrow" size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container contact-details-grid" aria-label="連絡先と所在地・よくあるご質問">
        <Reveal className="contact-directory">
          <span className="eyebrow">CONTACT INFO</span>
          <h2>連絡先</h2>
          <dl>
            <div>
              <MapPin aria-hidden="true" />
              <dt>住所</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <Phone aria-hidden="true" />
              <dt>TEL</dt>
              <dd>{company.phone}<small>{company.hours}</small></dd>
            </div>
            <div>
              <Mail aria-hidden="true" />
              <dt>Email</dt>
              <dd><a href={emailLink()}>{company.email}</a></dd>
            </div>
            <div>
              <Globe2 aria-hidden="true" />
              <dt>対応言語</dt>
              <dd>{company.languages}</dd>
            </div>
          </dl>
          <p className="contact-information-note">掲載情報（住所・電話・メール）は確認中です。</p>
        </Reveal>

        <div className="contact-access-column">
          <Reveal>
            <div className="contact-location-pending" role="note" aria-label="所在地マップは住所の確認後に公開します">
              <MapPin size={38} strokeWidth={1.1} aria-hidden="true" />
              <span>所在地マップ</span>
              <strong>住所確認中</strong>
              <p>所在地の確認後に地図を公開いたします。</p>
            </div>
            <div className="contact-map-action">
              <span>住所確認後に公開</span>
              <button type="button" disabled>
                Google マップで開く <ArrowRight size={16} strokeWidth={1.2} aria-hidden="true" />
              </button>
            </div>
          </Reveal>
          <Reveal className="contact-faq" delay={0.1}>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>よくあるご質問</h2>
            </div>
            <div className="contact-faq-list">
              {faqs.map((faq) => (
                <Accordion key={faq.question} title={faq.question}>
                  <p>{faq.answer}</p>
                </Accordion>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-mail-cta" aria-labelledby="contact-cta-title">
        <img src="/images/hero-main.webp" alt="" loading="lazy" width="1672" height="941" />
        <div className="contact-cta-shade" />
        <Reveal className="container contact-cta-content">
          <h2 id="contact-cta-title">まずは、お気軽にご連絡ください。</h2>
          <p>鴻宇の総合力が、皆様の目的達成の一助となります。</p>
          <a className="button contact-mail-button" href={emailLink()}>
            <Mail size={18} strokeWidth={1.3} aria-hidden="true" />
            <span>メールで相談する</span>
            <ArrowRight className="contact-button-arrow" size={17} strokeWidth={1.3} aria-hidden="true" />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
