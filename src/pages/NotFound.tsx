import { ButtonLink } from "../components/Shared";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">404 — PAGE NOT FOUND</span>
        <h1>
          お探しのページが
          <br />
          見つかりません。
        </h1>
        <p>URLをご確認いただくか、ホームページからご覧ください。</p>
        <ButtonLink to="/">ホームへ戻る</ButtonLink>
      </div>
    </section>
  );
}
