import { title } from "framer-motion/client";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

const SkillCat = () => {
  const Skills = [
    {
      title: "Frontend",
      icon: "⚛",
      color: "cyan",
      items: ["React", "HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "Backend",
      icon: "🐍",
      color: "green",
      items: ["Python", "Node.js(learning soon...)"],
    },
    {
      title: "Tools",
      icon: "⚙",
      color: "purple",

      items: [
        "Git",
        "GitHub",
        "Firebase(authentication and firestore)",
        "VS Code",
        "Pycharm",
      ],
    },

    {
      title: "Deployment",
      icon: "🚀",
      color: "yellow",
      items: ["Vercel", "Netlify", "Hostinger", "Render"],
    },
  ];
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-8 w-full  ">
      {Skills.map((cat, index) => {
        return (
          <motion.div
            key={cat.title}
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 100,
              rotate: 7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
          >
            <GlassCard
              key={cat.title}
              title={cat.title}
              items={cat.items}
              color={cat.color}
              icon={cat.icon}
              index={cat.index}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillCat;
