import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

const TimelineItem = ({ project, index, total, progress }) => {
  const triggerPoints = [0.05, 0.35, 0.65];

  const triggerPoint = triggerPoints[index];
  const opacity = useTransform(
    progress,
    [triggerPoint - 0.05, triggerPoint],
    [0, 1],
  );

  const x = useTransform(
    progress,
    [triggerPoint - 0.05, triggerPoint],
    [index % 2 === 0 ? -100 : 100, 0],
  );
  const dotScale = useTransform(
    progress,
    [triggerPoint - 0.03, triggerPoint],
    [1, 1.5],
  );

  const dotGlow = useTransform(
    progress,
    [triggerPoint - 0.03, triggerPoint],
    [0, 1],
  );

  return (
    <div className="relative h-[600px]">
      <motion.div
        style={{
          scale: dotScale,
          boxShadow: dotGlow.get()
            ? "0 0 30px rgba(250,204,21,0.9)"
            : "0 0 10px rgba(250,204,21,0.3)",
        }}
        className="
    absolute
    left-1/2
    top-0
    -translate-x-1/2

    w-5
    h-5

    rounded-full
    bg-yellow-400
  "
      />
      <motion.div
        style={{
          opacity,
          x,
        }}
        className={`
    absolute
    top-0
    ${index % 2 === 0 ? "left-0" : "right-0"}
  `}
      >
        <ProjectCard project={project} />
      </motion.div>
    </div>
  );
};

export default TimelineItem;
