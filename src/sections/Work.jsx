import RippleGrid from "../components/backgrounds/RippleGrid";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 25%"],
  });
  const projects = [
    {
      id: 1,
      title: "Growth Orbit",
      description:
        "Digital marketing agency website focused on lead generation, automation, and conversion optimization.",

      github: "https://github.com/yourusername/growth-orbit",

      liveDemo: "https://growthorbitdigital.in",
      tech: ["React", "Tailwind", "Framer Motion"],
    },

    {
      id: 2,
      title: "Heart Disease Expert System",
      description:
        "AI-powered healthcare dashboard that analyzes patient data and predicts heart disease risk.",

      github: "https://github.com/yourusername/heart-disease-system",

      liveDemo: "https://heart-disease-demo.vercel.app",
      tech: ["React", "Tailwind", "Framer Motion"],
    },

    {
      id: 3,
      title: "Requirement Traceability System",
      description:
        "Software engineering capstone project for managing requirements and traceability across project lifecycles.",

      github: "https://github.com/yourusername/traceability-system",

      liveDemo: "https://traceability-demo.vercel.app",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
  ];
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-50 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#a69b5a"
          rippleIntensity={0.05}
          gridSize={15}
          gridThickness={15}
          mouseInteraction
          mouseInteractionRadius={0.8}
          opacity={0.5}
          fadeDistance={25}
          vignetteStrength={1}
          glowIntensity={0.1}
          gridRotation={0}
        />
      </div>
      {/* for title............... */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <p className="uppercase tracking-[0.5em] text-[#a69b5a] text-sm md:text-base mb-6">
          SELECTED WORKS
        </p>

        <h2 className="text-5xl md:text-7xl text-white font-bold leading-none">
          Projects That Shaped
          <br />
          My Journey
        </h2>
      </motion.div>
      {/* timeline */}
      <div ref={timelineRef} className=" relative mt-35">
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-1/2 top-0 -translate-x-1/2
               w-[2px] h-[1350px]  bg-[#ecd74c]"
        />
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;
          const triggerStart = index * 0.3;
          const triggerEnd = triggerStart + 0.15;

          const cardOpacity = useTransform(
            scrollYProgress,
            [triggerStart, triggerEnd],
            [0, 1],
          );
          const cardX = useTransform(
            scrollYProgress,
            [triggerStart, triggerEnd],
            [isLeft ? -120 : 120, 0],
          );

          return (
            <motion.div key={project.id} className="relative h-[550px]">
              {/* Dot */}
              <motion.div className=" absolute left-1/2 top-0 -translate-x-1/2  w-5  h-5 rounded-full bg-[#ecd74c]   shadow-[0_0_20px_rgba(236,215,76,0.8)]  " />

              {/* Card */}
              <motion.div
                style={{
                  opacity: cardOpacity,
                  x: cardX,
                }}
                className={`w-1/2 ${
                  isLeft
                    ? "pr-16 flex justify-end"
                    : "ml-auto pl-16 flex justify-start"
                }`}
              >
                <ProjectCard project={project} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
