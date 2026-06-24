import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="
        w-[420px]
        rounded-3xl
        border border-yellow-400/20
        bg-black/80
        p-7
        shadow-[0_0_20px_rgba(250,204,21,0.05)]
      "
    >
      {/* Project Number */}
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-yellow-400 mb-4">
        PROJECT {String(project.id).padStart(2, "0")}
      </p>

      {/* Title */}
      <h3 className="text-4xl font-bold text-white leading-tight mb-4">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/55 leading-relaxed text-sm mb-6">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noreferrer"
          className="
            px-5 py-2
            rounded-full
            bg-yellow-400
            text-black
            text-sm
            font-medium
          "
        >
          Live Demo ↗
        </motion.a>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            px-5 py-2
            rounded-full
            border border-yellow-400/20
            text-white
            text-sm
          "
        >
          Github ↗
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
