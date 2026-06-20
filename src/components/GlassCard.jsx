import { motion } from "framer-motion";
const GlassCard = ({ title, items, color, icon, index }) => {
  const pillColors = {
    cyan: "bg-cyan-500/10 border border-cyan-400/20 text-cyan-200",

    green: "bg-emerald-500/10 border border-emerald-400/20 text-emerald-600",

    purple: "bg-purple-500/10 border border-purple-400/20 text-purple-300",

    yellow: "bg-yellow-500/10 border border-yellow-400/20 text-yellow-300",
  };
  const glowColors = {
    cyan: "bg-cyan-400/40",
    green: "bg-emerald-400/20",
    purple: "bg-purple-400/20",
    yellow: "bg-yellow-400/20",
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.15,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="relative overflow-hidden backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl p-4 w-64 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-yellow-400/30 transition-all duration-300"
    >
      <div
        className={`absolute   -top-10  -left-10 w-32 h-32 blur-3xl rounded-full ${glowColors[color]}`}
      />
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{icon}</span>

        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div
        className={` h-[2px]   w-12   rounded-full  mb-4  ${color === "cyan" ? "bg-cyan-400" : ""}  ${color === "green" ? "bg-emerald-400" : ""} ${color === "purple" ? "bg-purple-400" : ""}  ${color === "yellow" ? "bg-yellow-400" : ""} `}
      ></div>
      <div className="flex flex-wrap gap-2 items-center">
        {items.map((item) => {
          return (
            <div
              key={item}
              className={` flex items-center gap-2 px-3 py-1 rounded-full text-sm backdrop-blur-md hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default ${pillColors[color]}`}
            >
              <span className="text-yellow-400">•</span>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GlassCard;
