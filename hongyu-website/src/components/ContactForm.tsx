import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "お名前をご入力ください。")
    .max(100, "お名前は100文字以内でご入力ください。"),
  company: z.string().trim().max(200, "会社名は200文字以内でご入力ください。"),
  email: z
    .string()
    .trim()
    .min(1, "メールアドレスをご入力ください。")
    .email("正しいメールアドレスをご入力ください。"),
  topic: z.string().min(1, "お問い合わせ種別をお選びください。"),
  message: z
    .string()
    .trim()
    .min(1, "お問い合わせ内容をご入力ください。")
    .max(5000, "お問い合わせ内容は5,000文字以内でご入力ください。"),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [validated, setValidated] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { name: "", company: "", email: "", topic: "", message: "" },
  });
  const error = (name: keyof FormValues) =>
    errors[name] ? (
      <p id={`${name}-error`} className="field-error" role="alert">
        {errors[name]?.message}
      </p>
    ) : null;
  return (
    <form
      noValidate
      className="contact-form"
      onSubmit={handleSubmit(
        () => setValidated(true),
        () => setValidated(false),
      )}
      onChange={() => {
        if (validated) setValidated(false);
      }}
    >
      <div className="form-field">
        <label htmlFor="name">
          お名前{" "}
          <span className="required" aria-label="必須">
            *
          </span>
        </label>
        <input
          {...register("name")}
          id="name"
          placeholder="山田 太郎"
          autoComplete="name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          maxLength={100}
        />
        {error("name")}
      </div>
      <div className="form-field">
        <label htmlFor="company">
          会社名・所属 <span className="optional">任意</span>
        </label>
        <input
          {...register("company")}
          id="company"
          placeholder="株式会社〇〇"
          autoComplete="organization"
          maxLength={200}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {error("company")}
      </div>
      <div className="form-field">
        <label htmlFor="email">
          メールアドレス{" "}
          <span className="required" aria-label="必須">
            *
          </span>
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {error("email")}
      </div>
      <div className="form-field">
        <label htmlFor="topic">
          お問い合わせ種別{" "}
          <span className="required" aria-label="必須">
            *
          </span>
        </label>
        <select
          {...register("topic")}
          id="topic"
          required
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "topic-error" : undefined}
        >
          <option value="">選択してください</option>
          <option value="development">不動産開発</option>
          <option value="investment">投資・運用</option>
          <option value="management">資産管理</option>
          <option value="global">海外投資家支援</option>
          <option value="other">その他</option>
        </select>
        {error("topic")}
      </div>
      <div className="form-field">
        <label htmlFor="message">
          ご内容{" "}
          <span className="required" aria-label="必須">
            *
          </span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          placeholder="ご相談内容をご記入ください。"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          maxLength={5000}
        />
        {error("message")}
      </div>
      <label className="privacy-label">
        <input type="checkbox" disabled />
        <span>
          プライバシーポリシーへの同意
          <span className="privacy-status">
            ポリシー公開後にご利用いただけます。
          </span>
        </span>
      </label>
      <p className="form-demo-note">
        <Info size={15} aria-hidden="true" />
        <span>
          送信機能は未接続です。入力内容の確認のみ行い、情報は送信・保存されません。
        </span>
      </p>
      <button className="button form-submit" type="submit">
        <span>入力内容を確認する</span>
        <ArrowRight size={17} strokeWidth={1.4} aria-hidden="true" />
      </button>
      {validated && (
        <div className="form-status" role="status">
          <CheckCircle2 size={20} aria-hidden="true" />
          <p>
            入力内容を確認しました。
            <br />
            <strong>送信は行っていません。</strong>
          </p>
        </div>
      )}
    </form>
  );
}
