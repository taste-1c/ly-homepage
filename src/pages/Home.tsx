import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
} from "motion/react";
import { properties } from "../data/properties";
import { company, visualAssets } from "../data/site";
import { ButtonLink, CTA } from "../components/Shared";
import { HomeSections } from "../components/HomeSections";
import { PropertyHeading } from "../components/PropertyLayout";
import { PropertyList } from "../components/PropertyList";
import { useLanguage } from "../i18n";
import "../styles/home.css";

const featuredProperties = properties.filter(({ published, featured }) => published && featured);

export default function Home() {
  const { lang, t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [imageReady, setImageReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const enter = (delay: number, duration = 0.65) => ({
    initial: reduced ? (false as const) : { opacity: 0, y: 24 },
    animate: {
      opacity: reduced || imageReady ? 1 : 0,
      y: reduced || imageReady ? 0 : 24,
    },
    transition: {
      duration: reduced ? 0 : duration,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });
  return (
    <>
      <section ref={heroRef} className="home-hero">
        <motion.div
          className="home-hero-media"
          style={{ "--hero-parallax-y": y } as MotionStyle}
        >
          <motion.img
            className="home-hero-image"
            initial={reduced ? false : { opacity: 0, scale: 1.04 }}
            animate={{
              opacity: reduced || imageReady ? 1 : 0,
              scale: reduced || imageReady ? 1 : 1.04,
            }}
            transition={{ duration: reduced ? 0 : 1.5, ease: "easeOut" }}
            onLoad={() => setImageReady(true)}
            src="/images/hero-main.webp"
            alt={t(
              "東京タワーを望む街並みと、朝の光が差し込むガラス張りのテラス",
              "晨光洒入玻璃露台，远处是东京塔与城市街景",
            )}
            fetchPriority="high"
            width="1672"
            height="941"
          />
        </motion.div>
        <div className="home-hero-shade" />
        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <div>
              <h1>
                <motion.span className="hero-title-line" {...enter(0.32, 0.9)}>
                  {t("日本の街に、", "为日本城市，")}
                </motion.span>
                <br />
                <motion.span className="hero-title-line" {...enter(0.5, 0.9)}>
                  {t("次世代の価値を創る。", "创造可传承的价值。")}
                </motion.span>
              </h1>
            </div>
            <div>
              <motion.p className="hero-business-line" {...enter(0.72)}>
                {t("不動産開発", "房地产开发")} <span>×</span>{" "}
                {t("投資運用", "投资运营")} <span>×</span>{" "}
                {t("資産管理", "资产管理")}
              </motion.p>
              <motion.p className="hero-description" {...enter(0.92)}>
                {t(
                  company.description,
                  "鸿宇株式会社是一家涵盖房地产开发、投资运营和资产管理的综合性企业。我们着眼长远，持续提升土地与建筑的价值。",
                )}
              </motion.p>
            </div>
            <motion.div {...enter(1.16, 0.7)}>
              <ButtonLink to="/services">
                {t("事業紹介を見る", "查看业务介绍")}
              </ButtonLink>
            </motion.div>
          </div>
        </div>
        <a
          className="scroll-cue"
          href="#strengths"
          aria-label={t("鴻宇の強みへスクロール", "向下滚动至鸿宇的优势")}
        >
          <span lang={lang === "ja" ? "en" : undefined}>{t("SCROLL", "向下滚动")}</span>
          <span className="scroll-line">
            <ArrowDown size={15} strokeWidth={1} aria-hidden="true" />
          </span>
        </a>
      </section>
      <HomeSections />
      <section className="home-featured-properties" aria-labelledby="home-featured-properties-title">
        <div className="container">
          <PropertyHeading
            id="home-featured-properties-title"
            title={t("おすすめ物件", "精选房源")}
          />
          <PropertyList entries={featuredProperties} />
          <div className="home-featured-properties-actions">
            <ButtonLink to="/properties">
              {t("おすすめ物件を見る", "查看精选房源")}
            </ButtonLink>
          </div>
        </div>
      </section>
      <CTA
        className="home-cta home-vision-banner"
        imageMode="city-blend"
        image={visualAssets.night}
        title={
          <>
            {t("土地の価値を育み、", "发掘土地价值，")}
            <br />
            {t("街の未来へつなぐ。", "为城市的未来打下基础。")}
          </>
        }
        description={t(
          "その土地にふさわしい価値を育み、世代を超えて残る街と資産へ。",
          "因地制宜地提升价值，建设历久弥新的街区，打造可传承的资产。",
        )}
        to="/about#philosophy"
        label={t("私たちの理念を見る", "了解我们的理念")}
      />
    </>
  );
}
