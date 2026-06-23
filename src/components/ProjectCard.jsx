import { motion } from "framer-motion";
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="w-full max-w-[500px] rounded-3xl border border-yellow-400/20 bg-black/30 backdrop-blur-xl p-8"
    >
      {" "}
      <p className="text-yellow-300 text-sm tracking-[0.2em] uppercase">
        Project 0{project.id}
      </p>
      <h3 className="mt-3 text-3xl font-bold text-white">{project.title}</h3>
      <p className="mt-4 text-zinc-400 leading-relaxed">
        {project.description}
      </p>{" "}
      <div className="flex gap-4 mt-8">
        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5
            py-2

            rounded-full

            bg-yellow-400
            text-black

            font-medium
          "
        >
          Live Demo ↗
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5
            py-2

            rounded-full

            border
            border-yellow-400/30

            text-white
          "
        >
          Github ↗
        </motion.a>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
