import { Breadcrumb, PageHero } from "../components/Shared";
import { visualAssets } from "../data/site";
import { useLanguage } from "../i18n";
import "../styles/organization.css";

const directReports = [
  {
    name: { ja: "開発・投資", zh: "开发与投资" },
    units: [
      { ja: "用地取得チーム", zh: "用地收购组" },
      { ja: "開発企画チーム", zh: "开发策划组" },
      { ja: "投資分析チーム", zh: "投资分析组" },
    ],
  },
  {
    name: { ja: "運用・資産管理", zh: "运营与资产管理" },
    units: [
      { ja: "賃貸運営チーム", zh: "租赁运营组" },
      { ja: "建物管理チーム", zh: "物业管理组" },
      { ja: "資産運用チーム", zh: "资产运营组" },
    ],
  },
  {
    name: { ja: "管理本部", zh: "管理本部" },
    units: [
      { ja: "総務チーム", zh: "行政组" },
      { ja: "財務経理チーム", zh: "财务会计组" },
    ],
  },
  {
    name: { ja: "投資委員会", zh: "投资委员会" },
    units: [{ ja: "投資委員会事務局", zh: "投资委员会秘书处" }],
  },
];

export default function Organization() {
  const { t } = useLanguage();
  const title = t("組織体制", "组织架构");

  return (
    <>
      <PageHero
        title={title}
        english="ORGANIZATION"
        subtitleLang="en"
        image={visualAssets.services}
        variant="services"
      />
      <Breadcrumb current={title} />
      <div className="organization-chart container">
        <p className="organization-scroll-hint">
          {t("横にスクロールして組織図全体を表示", "左右滑动查看完整组织图")}
        </p>
        <section className="organization-scroll" aria-label={t("組織図", "组织结构图")} tabIndex={0}>
          <div className="organization-diagram">
            <h2 className="organization-lead">{t("代表取締役", "代表董事")}</h2>
            <ul className="organization-branches" role="list" aria-label={t("代表取締役の直属組織", "代表董事直属单位")}>
              {directReports.map(({ name, units }) => (
                <li className="organization-branch" key={name.ja}>
                  <h3>{t(name.ja, name.zh)}</h3>
                  <ul className="organization-units" role="list">
                    {units.map(({ ja, zh }) => (
                      <li key={ja}>
                        <span>{t(ja, zh)}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
