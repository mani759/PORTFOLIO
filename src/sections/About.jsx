import React from "react";
import { GridScan } from "../components/backgrounds/BgWhyMe";
import OrbitCard from "../components/OrbitCard";
import CenterCard from "../components/CenterCard";
import { motion } from "framer-motion";
const About = () => {
  const whyMeCards = [
    {
      title: "Curiosity",
      description: (
        <>
          Most projects start with a simple question:
          <span className="text-cyan-400">'What if I try this?'</span>
        </>
      ),
      color: "cyan",
      position: "top-0 left-1/2 -translate-x-1/2",
    },

    {
      title: "Self-Taught Mindset",
      description: (
        <>
          Learning by building,{" "}
          <span className="text-violet-400">breaking</span>, fixing, and
          repeating.
        </>
      ),
      color: "purple",
      position: "top-[18%] left-0",
    },

    {
      title: "AI Explorer",
      description: (
        <>
          Exploring how <span className="text-emerald-400">intelligence</span>{" "}
          and software can work together.
        </>
      ),
      color: "emerald",
      position: "top-[18%] right-0",
    },

    {
      title: "Builder",
      description: (
        <>
          {" "}
          Turning ideas into websites, tools, and{" "}
          <span className="text-amber-300">real-world</span> projects.
        </>
      ),
      color: "amber",
      position: "bottom-[18%] left-0",
    },

    {
      title: "Creative Thinker",
      description: (
        <>
          Balancing functionality, <span className="text-rose-400">design</span>
          , and user experience.
        </>
      ),
      color: "rose",
      position: "bottom-[18%] right-0",
    },

    {
      title: "Growth",
      description: (
        <>
          One project{" "}
          <span className="text-blue-400">better than the last</span>better than
          the last. That's the goal.
        </>
      ),
      color: "blue",
      position: "bottom-0 left-1/2 -translate-x-1/2",
    },
  ];
  return (
    <section id="about" className="relative min-h-screen   overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <GridScan
          sensitivity={0.3}
          lineThickness={1}
          linesColor="#d7b04c"
          gridScale={0.18}
          scanColor="#d7b04c"
          scanOpacity={0.5}
          bloomIntensity={0.2}
          chromaticAberration={0}
          noiseIntensity={0.005}
          lineJitter={0.05}
          scanGlow={0.2}
          scanSoftness={5}
          enablePost
        />
      </div>
      <div className="   hidden lg:flex absolute   inset-0  gap-75   flex   items-center  justify-center pointer-events-none  select-none">
        <h1 className=" text-yellow-50  text-yellow-200/20 text-[180px]  md:text-[19rem]   font-bold tracking-tight   ">
          WHY
        </h1>
        <h1 className=" text-yellow-50  text-yellow-200/20 text-[180px]  md:text-[19rem]   font-bold tracking-tight   ">
          ME
        </h1>
      </div>
      {/* for mobile */}
      <div
        className="
          lg:hidden

          absolute
          top-2
          
          left-1/2

          -translate-x-1/2

          pointer-events-none
          select-none

          z-0
                      "
      >
        <h1
          className="
                  text-7xl
                  font-black

                  text-yellow-200/10

                  whitespace-nowrap
                "
        >
          WHY ME
        </h1>
      </div>
      <div className=" relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="hidden lg:block relative w-[1000px] h-[750px] mx-auto"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            left-1/2
            top-[48%]

            -translate-x-1/2
            -translate-y-1/2

            w-[800px]
            h-[800px]

            rounded-full

            border
            border-yellow-400/30
            border-dashed
  "
          />
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            left-1/2
            top-[48%]

            -translate-x-1/2
            -translate-y-1/2

            w-[650px]
            h-[650px]

            rounded-full

            border
            border-yellow-400/30
            border-dashed
  "
          />
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            left-1/2
            top-[48%]

            -translate-x-1/2
            -translate-y-1/2

            w-[400px]
            h-[400px]

            rounded-full

            border
            border-yellow-400/30
            border-dashed
  "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
              absolute
              left-1/2
              top-[45%]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <CenterCard />
          </motion.div>
          {whyMeCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className={`absolute ${card.position}`}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <OrbitCard
                  title={card.title}
                  description={card.description}
                  color={card.color}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* for mobile */}

        <div className="lg:hidden mt-10 relative z-10 max-w-md mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <CenterCard />
          </motion.div>

          <div className=" flex flex-col items-center mt-8 space-y-4">
            {whyMeCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <OrbitCard
                  title={card.title}
                  description={card.description}
                  color={card.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
