import React from "react";
import { GridScan } from "../components/backgrounds/BgWhyMe";
import OrbitCard from "../components/OrbitCard";
import CenterCard from "../components/CenterCard";
import { motion } from "framer-motion";
const About = () => {
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-white font-bold flex justify-center text-3xl mt-0">
          Why Me
        </h2>
        <div className="relative w-[1000px]  h-[750px]   mx-auto">
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
          <motion.div
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
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="absolute top-[5%] left-1/2 -translate-x-1/2"
          >
            <OrbitCard
              title="Card 1"
              description="Placeholder text"
              color="cyan"
            />
          </motion.div>
          <motion.div
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
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="absolute top-[18%] left-0"
          >
            <OrbitCard
              title="Card 2"
              description="Placeholder text"
              color="purple"
            />
          </motion.div>

          <motion.div
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
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="absolute top-[18%] right-0"
          >
            <OrbitCard
              title="Card 3"
              description="Placeholder text"
              color="emerald"
            />
          </motion.div>

          <motion.div
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
            viewport={{ once: true }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="absolute bottom-[18%] left-0"
          >
            <OrbitCard
              title="Card 4"
              description="Placeholder text"
              color="amber"
            />
          </motion.div>
          <div></div>
          <motion.div
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
            viewport={{ once: true }}
            transition={{
              delay: 0.0,
              duration: 0.6,
            }}
            className="absolute bottom-[18%] right-0"
          >
            <OrbitCard
              title="Card 5"
              description="Placeholder text"
              color="rose"
            />
          </motion.div>

          <motion.div
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
            viewport={{ once: true }}
            transition={{
              delay: 1.0,
              duration: 0.6,
            }}
            className="absolute bottom-[17%] left-1/2 -translate-x-1/2"
          >
            <OrbitCard
              title="Card 6"
              description="Placeholder text"
              color="blue"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
