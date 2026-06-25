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
      title: "StudySync",
      description:
        "A student productivity web app that combines a Pomodoro timer, task management, study analytics, and a calendar in one place. Built with Firebase Authentication and Firestore to securely manage user accounts and study data.",

      github: "https://github.com/mani759/studysync",

      liveDemo: "https://studysync-vw4s.onrender.com",
      tech: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firestore"],
    },

    {
      id: 2,
      title: "MindMate",
      description:
        "A personal AI companion that lets users have meaningful conversations through a modern chat interface. Features secure authentication, multiple chat sessions, and cloud-based chat history using Firebase and Firestore.",

      github: "https://github.com/mani759/MindMate",

      liveDemo: "https://mindmate-7eqw.onrender.com",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Flask",
        "Firebase Auth",
        "Firestore",
        "OpenRouter API",
      ],
    },

    {
      id: 3,
      title: "LeadHunt",
      description:
        "A lead generation platform that helps businesses create high-converting landing pages and capture customer leads through a simple and intuitive interface. Designed with a focus on usability, responsive design, and conversion-focused workflows.",

      github: "https://github.com/mani759/leads_capture",

      liveDemo: "https://captur-lead.onrender.com",
      tech: ["HTML", "CSS", "JavaScript", "Flask"],
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

        <h2 className="text-[2.5rem] md:text-7xl text-white font-bold leading-[0.95]">
          Projects That Shaped
          <br />
          My Journey
        </h2>
      </motion.div>
      {/* timeline */}
      <div ref={timelineRef} className=" relative mt-35">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden"
          style={{
            height: "1100px",
            width: "2px",
          }}
        >
          <motion.div
            style={{
              scaleY: lineScale,
              transformOrigin: "top",
            }}
            className="w-full h-[1500px] bg-[#ecd74c]"
          />
        </div>
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
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className={` w-full  flex   justify-center md:w-1/2   ${isLeft ? "md:pr-16 md:justify-end" : "md:ml-auto md:pl-16 md:justify-start"}`}
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
