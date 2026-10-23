import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
} from "motion/react";
import { company, visualAssets } from "../data/site";
import { ButtonLink, CTA } from "../components/Shared";
import { HomeSections } from "../components/HomeSections";
import "../styles/home.css";

export default function Home() {
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
            alt="東京タワーを望む街並みと、朝の光が差し込むガラス張りのテラス"
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
                  日本の街に、
                </motion.span>
                <br />
                <motion.span className="hero-title-line" {...enter(0.5, 0.9)}>
                  次世代の価値を創る。
                </motion.span>
              </h1>
            </div>
            <div>
              <motion.p className="hero-business-line" {...enter(0.72)}>
                不動産開発 <span>×</span> 投資運用 <span>×</span> 資産管理
              </motion.p>
              <motion.p className="hero-description" {...enter(0.92)}>
                {company.description}
              </motion.p>
            </div>
            <motion.div {...enter(1.16, 0.7)}>
              <ButtonLink to="/services">事業内容を見る</ButtonLink>
            </motion.div>
          </div>
        </div>
        <a
          className="scroll-cue"
          href="#strengths"
          aria-label="鴻宇の強みへスクロール"
        >
          <span>SCROLL</span>
          <span className="scroll-line">
            <ArrowDown size={15} strokeWidth={1} />
          </span>
        </a>
      </section>
      <HomeSections />
      <CTA
        className="home-cta home-vision-banner"
        imageMode="city-blend"
        image={visualAssets.night}
        title={
          <>
            創造する長期価値、
            <br />
            都市と未来をつなぐ。
          </>
        }
        description="その土地にふさわしい価値を育み、世代を超えて残る街と資産へ。"
        to="/about#philosophy"
        label="私たちの理念を見る"
      />
    </>
  );
}
