import type { Service } from "./site";

type BusinessDetailContent = {
  image: string;
  imageAlt: string;
  lead: string;
  overviewLabel: string;
  headline: [string, string];
  sectionTitle: string;
  sectionLabel: string;
  sectionDescription: string;
  items: { title: string; description: string }[];
};

export const businessDetails: Readonly<Record<Service["id"], BusinessDetailContent>> = {
  development: {
    image: "开发.webp",
    imageAlt: "街路樹が並ぶ通りに面した共同住宅のイメージ",
    lead: "用地の調査から企画・設計・施工・引渡しまで。",
    overviewLabel: "Development overview",
    headline: ["その土地にふさわしい", "建物をつくる。"],
    sectionTitle: "主な開発領域",
    sectionLabel: "Project types",
    sectionDescription: "土地の特性と利用する人のニーズに合わせて、事業を企画します。",
    items: [
      { title: "共同住宅", description: "立地と居住ニーズを踏まえ、日々の暮らしに合う住まいを企画します。" },
      { title: "商業施設", description: "周辺の動線や地域の需要を読み解き、利用しやすい施設を計画します。" },
      { title: "ホテル", description: "滞在する人の体験と運営のしやすさを考え、事業条件を整理します。" },
      { title: "複合ビル", description: "用途ごとの役割を整理し、建物全体と街とのつながりを考えます。" },
    ],
  },
  investment: {
    image: "投资.webp",
    imageAlt: "オフィスの窓から見渡す商業施設と街並みのイメージ",
    lead: "市場と物件を読み解き、長期的な視点で資産を運用します。",
    overviewLabel: "Investment overview",
    headline: ["取得から運営まで、", "資産の可能性を見極める。"],
    sectionTitle: "投資運用の取り組み",
    sectionLabel: "Asset strategy",
    sectionDescription: "市場の変化と保有資産の状況を踏まえ、運営方針を検討します。",
    items: [
      { title: "取得の検討", description: "立地、物件の状態、賃貸需要を確認し、取得を検討します。" },
      { title: "ポートフォリオ設計", description: "用途や地域ごとの特性を比較し、全体の資産配分を検討します。" },
      { title: "収益とリスクの分析", description: "賃料や維持費などをもとに収益を試算し、変動要因を把握します。" },
      { title: "保有資産の評価", description: "収益性や稼働状況を継続的に確認し、運営方針の見直しに生かします。" },
    ],
  },
  management: {
    image: "管理.webp",
    imageAlt: "建物のエントランスで照明を点検するスタッフのイメージ",
    lead: "日常の運営から将来の保守計画まで、建物と使う人を支えます。",
    overviewLabel: "Management overview",
    headline: ["日々の運営を通じて、", "建物の価値を守る。"],
    sectionTitle: "主な管理業務",
    sectionLabel: "Management services",
    sectionDescription: "物件の用途や利用状況に合わせて、日常管理と中長期の保守を計画します。",
    items: [
      { title: "物件運営", description: "オーナー様の方針を踏まえ、稼働状況や日常の運営課題を把握します。" },
      { title: "リーシング", description: "周辺の賃貸需要と物件の特徴を踏まえ、入居者の募集と契約手続きを支援します。" },
      { title: "入居者対応", description: "入居者からの問い合わせやご意見を受け付け、関係者と連携して対応します。" },
      { title: "保守・修繕計画", description: "建物と設備の状態を確認し、点検や修繕の時期と優先順位を整理します。" },
    ],
  },
  global: {
    image: "海外.webp",
    imageAlt: "不動産の図面を見ながら相談する二人のイメージ",
    lead: "海外の個人投資家・法人のお客様に、日本の自社所有物件をご紹介します。",
    overviewLabel: "Global support overview",
    headline: ["日本の不動産を、", "海外のお客様へ。"],
    sectionTitle: "主なご案内内容",
    sectionLabel: "Investor support",
    sectionDescription: "検討段階に合わせて、自社所有物件の情報と購入の流れをお伝えします。",
    items: [
      { title: "多言語での物件紹介", description: "日本語・英語・中国語で、物件の概要や立地、利用状況をご説明します。" },
      { title: "物件調査の支援", description: "物件の状態や契約条件など、購入のご判断に必要な資料と確認事項を整理します。" },
      { title: "購入手続きのご案内", description: "ご検討から契約・引渡しまで、各段階で必要になる手続きをご案内します。" },
      { title: "関係者との連携", description: "ご相談の内容に応じて、国内外の関係者との情報共有を支援します。" },
    ],
  },
};
