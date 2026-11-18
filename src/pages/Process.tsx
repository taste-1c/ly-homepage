import { Compass, Layers3, Settings2, TrendingUp } from "lucide-react";
import { DetailCTA, DetailHeader, DetailSectionHeading } from "../components/DetailLayout";

const stages = [
  {
    title: "洞察",
    icon: Compass,
    summary: "市場と地域の声を読み解き、土地と資産の可能性を見極めます。",
    description: "土地・建物の状況やご希望をお聞きし、市場動向、立地や周辺環境を確認します。",
  },
  {
    title: "企画",
    icon: Layers3,
    summary: "目的と条件を丁寧に整理し、事業と運用の道筋を描きます。",
    description: "事業の目的と条件を整理し、建物の用途や計画、事業性、進め方を検討します。",
  },
  {
    title: "実行",
    icon: Settings2,
    summary: "専門性と現場の知見をつなぎ、計画を着実にかたちにします。",
    description: "専門分野の関係者と連携し、合意した計画に沿って設計・施工・引渡しを進めます。",
  },
  {
    title: "価値向上",
    icon: TrendingUp,
    summary: "運営と管理を重ねながら、長く続く資産価値を育てます。",
    description: "物件に応じてリーシングや保守・管理を検討し、長期的な資産価値の維持・向上を図ります。",
  },
];

export default function Process() {
  return (
    <>
      <DetailHeader
        title="私たちの進め方"
        english="Our approach"
        description="洞察・企画・実行・価値向上。土地と資産の可能性を四つの段階でつなぎます。"
        image="流程.webp"
      />
      <section className="detail-process-overview" aria-labelledby="detail-stages-heading">
        <div className="container">
          <DetailSectionHeading
            id="detail-stages-heading"
            title="四つの段階"
            english="Four stages"
            description="ご希望や物件の状況を確認し、計画から運営まで、案件に応じて必要な段階を進めます。"
          />
          <ol className="detail-stage-grid" role="list">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <div className="detail-stage-track" aria-hidden="true">
                  <span><stage.icon size={24} strokeWidth={1.3} /></span>
                </div>
                <h3><span className="detail-stage-number" aria-hidden="true">0{index + 1}</span>{stage.title}</h3>
                <p>{stage.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="detail-process-steps container" aria-labelledby="detail-steps-heading">
        <DetailSectionHeading
          id="detail-steps-heading"
          title="各段階で行うこと"
          english="Process details"
          description="事業の内容と物件の状況に応じて、進め方を組み立てます。"
        />
        <ol className="detail-step-list" role="list">
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <h3><span className="detail-stage-number" aria-hidden="true">0{index + 1}</span>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <DetailCTA
        title="用地の調査から引渡しまで。"
        description="共同住宅・商業施設・ホテル・複合ビルの企画開発をご紹介します。"
        to="/development"
        label="不動産開発を見る"
      />
    </>
  );
}
