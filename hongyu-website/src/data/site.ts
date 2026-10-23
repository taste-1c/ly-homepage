export const visualAssets = {
  about: "关于我们-建筑园景.webp",
  services: "业务内容-建筑外立面.webp",
  contact: "联系我们-商务大堂.webp",
  night: "首页-城市夜景.webp",
};

export const company = {
  name: "鴻宇株式会社",
  englishName: "HONGYU INC.",
  description:
    "鴻宇株式会社は、開発から運用・資産管理まで一貫して手がける不動産総合企業です。確かな視点で、持続可能な資産と暮らしを提案します。",
  address: "〒100-0006 東京都千代田区丸の内 1-9-1",
  phone: "+81-3-1234-5678",
  email: "info@hongyu.jp",
  hours: "平日 9:00–18:00（JST）",
  languages: "日本語・英語・中国語",
  // 来源：企业提供的原始文案。联系方式和经营数据尚未经过企业确认。
  verifyBeforeLaunch: true,
  contactEndpoint: null,
  privacyPolicyUrl: null,
  mapUrl: null,
};

export const navigation = [
  { path: "/", label: "ホーム", english: "Home" },
  { path: "/about", label: "私たちについて", english: "About us" },
  { path: "/services", label: "事業内容", english: "Our business" },
  { path: "/contact", label: "お問い合わせ", english: "Contact" },
];

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
    details: [
      "用地調査・事業企画・権利調整",
      "設計監修・施工会社選定・品質管理",
      "竣工・リーシング・入居支援",
    ],
  },
  {
    id: "investment",
    number: "02",
    title: "投資運用",
    english: "Investment & asset strategy",
    image: visualAssets.contact,
    alt: "庭園とつながる落ち着いた上質なビジネス空間",
    description:
      "市場動向を踏まえ、インカムゲインとキャピタルゲインのバランスを設計。個人から機関投資家まで、目的に合わせた運用プランを提供します。",
    details: [
      "ポートフォリオ設計・資産配分",
      "収益シミュレーション・リスク管理",
      "売買・リファイナンスの実行支援",
    ],
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
    details: [
      "プロパティマネジメント・保守計画",
      "入居者募集・契約・クレーム対応",
      "資産の保有・運営に関するご相談",
    ],
  },
  {
    id: "global",
    number: "04",
    title: "海外投資家向け支援",
    english: "Global investor solutions",
    image: visualAssets.night,
    alt: "日本の不動産市場を象徴する東京の街並み",
    description:
      "日本の不動産市場に関心を持つ海外の個人・機関投資家様へ。日本語・英語・中国語でのコミュニケーションを通じて、日本と世界の架け橋となります。",
    details: [
      "多言語での物件紹介・デューデリジェンス支援",
      "日本での投資に関するご相談・情報整理",
      "現地パートナーとのネットワーク連携",
    ],
  },
];

export const strengths = [
  {
    number: "01",
    title: "一貫した総合力",
    image: visualAssets.services,
    alt: "緑と調和するガラス張りの現代建築",
    description:
      "土地の診断から設計・開発、そして長期の資産運用まで。一社で一貫して伴走します。",
    target: "development",
  },
  {
    number: "02",
    title: "確かな投資視点",
    image: visualAssets.contact,
    alt: "緑を望む上質なラウンジ空間",
    description:
      "市場動向を踏まえた資産配分と、長期的な視点。一人ひとりの目的に寄り添います。",
    target: "investment",
  },
  {
    number: "03",
    title: "グローバルな対応力",
    image: "全球业务-地球夜景.jpg",
    alt: "世界各地の都市の光を捉えた地球の夜景",
    description:
      "言葉や文化の違いを越えて。海外の投資家様と日本の不動産市場をつなぎます。",
    target: "global",
  },
];

export const contactTopics = [
  { id: "development", label: "不動産開発" },
  { id: "investment", label: "投資・運用" },
  { id: "management", label: "資産管理" },
  { id: "global", label: "海外投資家支援" },
  { id: "other", label: "その他" },
];

// 数值来自提供的原始文案，非设计图中的示意数字。
export const statistics = [
  {
    value: 2009,
    suffix: "年",
    prefix: "",
    label: "創業",
    verifyBeforeLaunch: true,
  },
  {
    value: 120,
    suffix: "件+",
    prefix: "",
    label: "開発実績",
    verifyBeforeLaunch: true,
  },
  {
    value: 8400,
    suffix: "戸",
    prefix: "",
    label: "管理戸数",
    verifyBeforeLaunch: true,
  },
  {
    value: 80,
    suffix: "億",
    prefix: "¥",
    label: "運用資産規模",
    verifyBeforeLaunch: true,
  },
];

export const faqs = [
  {
    question: "どのような相談ができますか？",
    answer:
      "不動産開発、投資・運用、資産管理、海外投資家向け支援についてご相談いただけます。メールにて、ご相談の背景や目的をお知らせください。",
  },
  {
    question: "海外からの問い合わせも可能ですか？",
    answer:
      "海外の個人・機関投資家様からのご相談にも対応しています。日本語・英語・中国語でのコミュニケーションが可能です。ご希望の言語をお問い合わせ内容にご記入ください。",
  },
  {
    question: "具体的な案件の資料がなくても相談できますか？",
    answer:
      "まずはご相談の目的やご希望をお聞かせください。物件や資料がお手元にある場合は、その概要をお知らせいただくと、ご相談内容を整理しやすくなります。",
  },
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
    title: "事業内容 | 鴻宇株式会社",
    description:
      "不動産開発・投資運用・資産管理・海外投資家向け支援。鴻宇株式会社の四つの事業をご紹介します。",
  },
  "/contact": {
    title: "お問い合わせ | 鴻宇株式会社",
    description:
      "鴻宇株式会社へのお問い合わせ。不動産開発、投資・運用、資産管理、海外投資家向け支援のご相談を承ります。",
  },
};
