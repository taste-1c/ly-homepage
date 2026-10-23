import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy, Mail } from "lucide-react";
import { company } from "../data/site";

export function ContactEmailCard({ href }: { href: string }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(company.email);
      setCopyState("copied");
      timer.current = setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("error");
    }
  }

  return (
    <div className="contact-email-card">
      <h3><Mail size={34} strokeWidth={1.3} aria-hidden="true" />メールでのお問い合わせ</h3>
      <a className="contact-email-address" href={`mailto:${company.email}`}>{company.email}</a>
      <div className="contact-email-actions">
        <a className="button contact-mail-button" href={href}>
          <Mail size={18} strokeWidth={1.3} aria-hidden="true" />
          <span>メールを送る</span>
          <ArrowRight className="contact-button-arrow" size={17} strokeWidth={1.3} aria-hidden="true" />
        </a>
        <button className="button contact-copy-button" type="button" onClick={copyEmail}>
          {copyState === "copied" ? <Check size={18} strokeWidth={1.4} aria-hidden="true" /> : <Copy size={17} strokeWidth={1.3} aria-hidden="true" />}
          <span>{copyState === "copied" ? "コピーしました" : "メールアドレスをコピー"}</span>
        </button>
      </div>
      <p className={`contact-copy-status ${copyState === "error" ? "is-error" : "sr-only"}`} role="status" aria-live="polite">
        {copyState === "copied" && "メールアドレスをコピーしました。"}
        {copyState === "error" && "コピーできませんでした。メールアドレスを選択してコピーしてください。"}
      </p>
    </div>
  );
}
