import { Compass, Layers3, Settings2, TrendingUp } from "lucide-react";
import { DetailCTA, DetailHeader, DetailSectionHeading } from "../components/DetailLayout";
import { businessSectionPath } from "../data/site";
import { useLanguage } from "../i18n";

const stages = [
  {
    title: "洞察",
    icon: Compass,
    summary: "市場と地域の声を読み解き、土地と資産の可能性を見極めます。",
    description: "土地・建物の状況やご希望をお聞きし、市場動向、立地や周辺環境を確認します。",
    zh: {
      title: "洞察",
      summary: "研判市场并了解当地需求，评估土地和资产的潜力。",
      description: "了解土地、建筑的现状及客户需求，调查市场走势、区位和周边环境。",
    },
  },
  {
    title: "企画",
    icon: Layers3,
    summary: "目的と条件を丁寧に整理し、事業と運用の道筋を描きます。",
    description: "事業の目的と条件を整理し、建物の用途や計画、事業性、進め方を検討します。",
    zh: {
      title: "策划",
      summary: "明确项目目标与条件，制定开发和运营方案。",
      description: "梳理项目目标和条件，研究建筑用途、规划方案、商业可行性及实施方式。",
    },
  },
  {
    title: "実行",
    icon: Settings2,
    summary: "専門性と現場の知見をつなぎ、計画を着実にかたちにします。",
    description: "専門分野の関係者と連携し、合意した計画に沿って設計・施工・引渡しを進めます。",
    zh: {
      title: "执行",
      summary: "结合专业知识和现场经验，落实项目计划。",
      description: "与各领域的专业团队协作，按各方确认的方案推进设计、施工与交付。",
    },
  },
  {
    title: "価値向上",
    icon: TrendingUp,
    summary: "運営と管理を重ねながら、長く続く資産価値を育てます。",
    description: "物件に応じてリーシングや保守・管理を検討し、長期的な資産価値の維持・向上を図ります。",
    zh: {
      title: "价值提升",
      summary: "通过持续运营和管理，维护资产的长期价值。",
      description: "根据物业情况研究租赁、维护和管理方案，保持并提升资产的长期价值。",
    },
  },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <>
      <DetailHeader
        title={t("私たちの進め方", "合作流程")}
        english={t("Our approach", "我们的工作方式")}
        description={t(
          "洞察・企画・実行・価値向上。土地と資産の可能性を四つの段階でつなぎます。",
          "从洞察、策划、执行到价值提升，我们分四个阶段发挥土地和资产的潜力。",
        )}
        image="流程.webp"
      />
      <section className="detail-process-overview" aria-labelledby="detail-stages-heading">
        <div className="container">
          <DetailSectionHeading
            id="detail-stages-heading"
            title={t("四つの段階", "四个阶段")}
            english={t("Four stages", "阶段概览")}
            description={t(
              "ご希望や物件の状況を確認し、計画から運営まで、案件に応じて必要な段階を進めます。",
              "我们确认客户需求和物业状况，并根据项目特点安排从策划到运营的各个阶段。",
            )}
          />
          <ol className="detail-stage-grid" role="list">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <div className="detail-stage-track" aria-hidden="true">
                  <span><stage.icon size={24} strokeWidth={1.3} /></span>
                </div>
                <h3><span className="detail-stage-number" aria-hidden="true">0{index + 1}</span>{t(stage.title, stage.zh.title)}</h3>
                <p>{t(stage.summary, stage.zh.summary)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="detail-process-steps container" aria-labelledby="detail-steps-heading">
        <DetailSectionHeading
          id="detail-steps-heading"
          title={t("各段階で行うこと", "各阶段的工作")}
          english={t("Process details", "流程详情")}
          description={t(
            "事業の内容と物件の状況に応じて、進め方を組み立てます。",
            "我们根据业务内容和物业现状制定工作安排。",
          )}
        />
        <ol className="detail-step-list" role="list">
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <h3><span className="detail-stage-number" aria-hidden="true">0{index + 1}</span>{t(stage.title, stage.zh.title)}</h3>
              <p>{t(stage.description, stage.zh.description)}</p>
            </li>
          ))}
        </ol>
      </section>
      <DetailCTA
        title={t("用地の調査から引渡しまで。", "从用地调查到项目交付")}
        description={t(
          "共同住宅・商業施設・ホテル・複合ビルの企画開発をご紹介します。",
          "了解住宅、商业设施、酒店和综合楼宇的策划与开发。",
        )}
        to={businessSectionPath("development")}
        label={t("不動産開発を見る", "查看房地产开发")}
      />
    </>
  );
}
