import Particles from "../components/backgrounds/Particles";

import mani from "../assets/mani.png";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import IntroCard from "../components/IntroCard";
import GlassCard from "../components/GlassCard";
import SkillCat from "../components/SkillCat";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  useEffect(() => {
    if (!isInView) {
      setShowContent(false);
    }
  }, [isInView]);
  return (
    <section
      ref={heroRef}
      id="hero"
      className=" relative min-h-screen overflow-hidden  w-full bg-[#05010a] "
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#FFE500"]}
          particleCount={1000}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          particleHoverFactor={1}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={true}
          pixelRatio={1}
        />
      </div>
      <div
        className=" pointer-events-none absolute inset-0 z-[1] "
        style={{
          background: `
      radial-gradient(circle at 50% 45%, rgba(255, 170, 90, 0.22) 0%, transparent 22%),
      radial-gradient(circle at 50% 50%, rgba(255, 120, 40, 0.14) 0%, transparent 38%),
      radial-gradient(circle at 50% 35%, rgba(255, 210, 140, 0.10) 0%, transparent 18%),
      
    `,
        }}
      ></div>
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 pt-26 lg:pt-0">
        <div className=" relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8 max-w-[1600px] mx-auto">
          <div className=" absolute order-3 lg:order-1 flex-shrink-0">
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 100,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <SkillCat />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className=" relative order-1 lg:order-2  flex-shrink-0 w-full max-w-[280px] md:max-w-[380px] lg:max-w-[550px]">
            {showContent && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute inset-0 bg-cyan-500/20  blur-3xl rounded-full  -z-10   "
              />
            )}
            <motion.img
              src={mani}
              alt="MANI AVATAR"
              className="w-full object-contain"
              animate={{
                y: [0, -15, 0],
                scale: showContent ? 1.02 : 1,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: easeInOut,
              }}
              onMouseEnter={() =>
                setTimeout(() => {
                  setShowContent(true);
                })
              }
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setShowContent((prev) => !prev);
                }
              }}
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4">
            {!showContent && (
              <motion.p
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-yellow-300 text-sm font-medium"
              >
                ✨ Hover to Explore
              </motion.p>
            )}
          </div>

          <div className=" absolute order-2 lg:order-3">
            {showContent && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                  rotate: -7,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <IntroCard />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
