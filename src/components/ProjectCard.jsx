import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="
        w-full max-w-[320px] md:max-w-[420px]


        rounded-3xl
        border border-yellow-400/20
        bg-black/80
        p-5 md:p-7
        shadow-[0_0_20px_rgba(250,204,21,0.05)]
      "
    >
      {/* Project Number */}
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-yellow-400 mb-4">
        PROJECT {String(project.id).padStart(2, "0")}
      </p>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/55 leading-relaxed text-sm mb-6">
        {project.description}
      </p>
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        bg-yellow-400/10
        border
        border-yellow-400/20
        text-yellow-300
      "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.94,
          }}
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
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.94,
          }}
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
