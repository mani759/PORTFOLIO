import RippleGrid from "../components/backgrounds/RippleGrid";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Requirement Traceability System",

      description:
        "A centralized platform for managing software requirements and maintaining traceability across development phases.",

      demo: "#",

      github: "#",
    },

    {
      id: 2,
      title: "Heart Disease Expert System",

      description:
        "An AI-assisted healthcare recommendation system built using Flask and machine learning concepts.",

      demo: "#",

      github: "#",
    },

    {
      id: 3,
      title: "Growth Orbit Website",

      description:
        "A modern agency website focused on performance, animations and user experience.",

      demo: "#",

      github: "#",
    },
  ];
  return (
    <section id="work" className="relative min-h-screen py-32 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-32"
        >
          <p className="text-yellow-300 uppercase tracking-[0.35em] text-sm">
            SELECTED WORKS
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Projects That Shaped
            <br />
            My Journey
          </h2>
        </motion.div>
        <div className="relative">
          {projects.map((project, index) => (
            <div key={project.id} className=" relative  h-[300px]">
              <div className=" absolute left-1/2  -translate-x-1/2    w-5 h-5   rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]   " />
              {/* Project Card */}
              <div className="absolute left-0 top-0">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2

              h-full
              w-[2px]

              bg-yellow-400/20
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
