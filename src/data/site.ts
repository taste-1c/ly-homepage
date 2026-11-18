export const visualAssets = {
  about: "关于我们-建筑园景.webp",
  services: "业务内容-建筑外立面.webp",
  lounge: "品牌-商务大堂.webp",
  night: "首页-城市夜景.webp",
};

export const company = {
  name: "鴻宇株式会社",
  englishName: "KOUU INC.",
  description:
    "鴻宇株式会社は、開発から運用・資産管理まで一貫して手がける不動産総合企業です。土地と建物の価値を、長期的な視点で育みます。",
};

export const businessOverviewTitle = "事業紹介";

export const services = [
  {
    id: "development",
    number: "01",
    title: "不動産開発",
    english: "Real estate development",
    image: visualAssets.services,
    alt: "街並みと調和する緑豊かな複合ビルの建築イメージ",
    description:
      "共同住宅・商業施設・ホテル・複合ビルの企画開発を手がけます。事業用地の発掘・地盤・市場調査から、設計・施工・引渡しまで一貫して伴走します。",
    summary: "土地の特性を生かし、地域の暮らしや需要に合う建物をつくります。",
  },
  {
    id: "investment",
    number: "02",
    title: "投資運用",
    english: "Investment & asset strategy",
    image: visualAssets.lounge,
    alt: "庭園とつながる落ち着いた上質なビジネス空間",
    description:
      "当社は不動産の取得・保有・運営を行います。市場動向と物件の特性を踏まえ、長期的な視点で運営方針を定め、資産価値の維持・向上に取り組みます。",
    summary: "収益とリスクの両面から、保有する不動産の運営方針を考えます。",
  },
  {
    id: "management",
    number: "03",
    title: "資産管理",
    english: "Property management",
    image: visualAssets.about,
    alt: "丁寧に維持管理された緑と建物のアプローチ",
    description:
      "物件管理・リーシングを通じて、資産価値を末永く守るサポートを提供します。日々の運営から保守計画まで、長期的な視点で資産に向き合います。",
    summary: "物件の運営と入居者のサポートを通じ、建物を安心して使える環境を整えます。",
  },
  {
    id: "global",
    number: "04",
    title: "海外投資家向け支援",
    english: "Global investor solutions",
    image: visualAssets.night,
    alt: "日本の不動産市場を象徴する東京の街並み",
    description:
      "日本の不動産に関心を持つ海外の個人投資家・法人のお客様へ。日本語・英語・中国語で自社所有物件をご紹介し、物件情報や購入の流れをご案内します。",
    summary: "海外のお客様が日本の物件を検討できるよう、自社所有物件の情報を多言語でお伝えします。",
  },
] as const;

export type Service = (typeof services)[number];

export const navigation = [
  { path: "/", label: "ホーム", english: "Home" },
  { path: "/services", label: businessOverviewTitle, english: "Our business" },
  ...services.map(({ id, title, english }) => ({
    path: `/${id}`,
    label: title,
    english,
  })),
  { path: "/process", label: "私たちの進め方", english: "Our approach" },
  { path: "/about", label: "私たちについて", english: "About us" },
];

export const pageMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "鴻宇株式会社 | 日本の不動産開発と投資",
    description: company.description,
  },
  "/about": {
    title: "私たちについて | 鴻宇株式会社",
    description:
      "不動産の力で、持続可能な未来を創る。鴻宇株式会社の経営理念と、不動産開発・投資・管理への想いをご紹介します。",
  },
  "/services": {
    title: `${businessOverviewTitle} | 鴻宇株式会社`,
    description:
      "不動産開発・投資運用・資産管理・海外投資家向け支援。鴻宇株式会社の四つの事業をご紹介します。",
  },
  ...Object.fromEntries(
    services.map(({ id, title, description }) => [
      `/${id}`,
      { title: `${title} | 鴻宇株式会社`, description },
    ]),
  ),
  "/process": {
    title: "私たちの進め方 | 鴻宇株式会社",
    description:
      "洞察・企画・実行・価値向上。土地と資産の可能性を四つの段階でつなぐ、鴻宇株式会社の事業の進め方をご紹介します。",
  },
};
