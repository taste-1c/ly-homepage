import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { contactTopics } from "../data/site";

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
  topic: z.string().refine(
    (value) => contactTopics.some((topic) => topic.id === value),
    "お問い合わせ種別をお選びください。",
  ),
  message: z
    .string()
    .trim()
    .min(1, "お問い合わせ内容をご入力ください。")
    .max(5000, "お問い合わせ内容は5,000文字以内でご入力ください。"),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm({ initialTopic = "" }: { initialTopic?: string }) {
  const [review, setReview] = useState<FormValues | null>(null);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
      topic: contactTopics.some((topic) => topic.id === initialTopic)
        ? initialTopic
        : "",
    },
  });
  useEffect(() => {
    if (review) {
      reviewHeading.current?.focus({ preventScroll: true });
      reviewHeading.current?.scrollIntoView({
        behavior: reduced ? "instant" : "smooth",
        block: "start",
      });
    }
  }, [review, reduced]);
  const error = (name: keyof FormValues) =>
    errors[name] ? (
      <p id={`${name}-error`} className="field-error" role="alert">
        {errors[name]?.message}
      </p>
    ) : null;
  return (
    <div className="contact-form-flow">
      <ol className="form-steps" aria-label="お問い合わせの手順">
        <li aria-current={!review ? "step" : undefined}>
          <span>01</span> ご入力
        </li>
        <li aria-current={review ? "step" : undefined}>
          <span>02</span> 内容確認
        </li>
      </ol>
      <form
        noValidate
        hidden={!!review}
        className="contact-form"
        onSubmit={handleSubmit((values) => setReview(values))}
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
            {contactTopics.map((topic) => (
              <option key={topic.id} value={topic.id}>{topic.label}</option>
            ))}
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
      </form>
      {review && (
        <section className="form-review" aria-labelledby="review-heading">
          <h3 id="review-heading" ref={reviewHeading} tabIndex={-1}>
            入力内容の確認
          </h3>
          <p className="form-review-intro">
            内容をご確認ください。修正する場合は、入力画面にお戻りいただけます。
          </p>
          <dl className="form-review-values">
            {[
              ["お名前", review.name],
              ["会社名・所属", review.company || "未入力"],
              ["メールアドレス", review.email],
              [
                "お問い合わせ種別",
                contactTopics.find((topic) => topic.id === review.topic)?.label,
              ],
              ["ご内容", review.message],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="form-demo-note" role="status">
            <Info size={16} aria-hidden="true" />
            <span>送信機能は未接続です。この内容は送信・保存されていません。</span>
          </p>
          <div className="form-review-actions">
            <button
              className="button button--outline"
              type="button"
              onClick={() => {
                setReview(null);
                requestAnimationFrame(() => setFocus("name"));
              }}
            >
              <ArrowLeft size={17} aria-hidden="true" />
              <span>入力内容を修正する</span>
            </button>
            <button className="button" type="button" disabled>
              送信機能は準備中です
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
