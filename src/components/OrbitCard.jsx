import { motion } from "framer-motion";

const OrbitCard = ({ title, description, color = "cyan", className = "" }) => {
  const colors = {
    cyan: {
      border: "border-cyan-400/20",
      dot: "bg-cyan-400",
      glow: "bg-cyan-500/10",
    },

    purple: {
      border: "border-violet-400/20",
      dot: "bg-violet-400",
      glow: "bg-violet-500/10",
    },

    emerald: {
      border: "border-emerald-400/20",
      dot: "bg-emerald-400",
      glow: "bg-emerald-500/10",
    },

    amber: {
      border: "border-amber-400/20",
      dot: "bg-amber-400",
      glow: "bg-amber-500/10",
    },

    rose: {
      border: "border-rose-400/20",
      dot: "bg-rose-400",
      glow: "bg-rose-500/10",
    },

    blue: {
      border: "border-blue-400/20",
      dot: "bg-blue-400",
      glow: "bg-blue-500/10",
    },
  };
  const style = colors[color];
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      whileTap={{
        scale: 0.8,
        rotate: 10,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className={`  w-[90vw] max-w-[340px] lg:w-[220px] min-h-[140px]    relative overflow-hidden rounded-2xl  border ${style.border} bg-white/[0.03]   backdrop-blur-xl
         p-5  transition-all  duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05] ${className}  `}
    >
      <div
        className={`  absolute inset-0 blur-3xl  opacity-40  ${style.glow}`}
      />

      <div className=" absolute   top-0 left-0  w-full  h-px  bg-gradient-to-r from-transparent  via-white/50  to-transparent  " />

      <div className="relative z-10 flex flex-col h-full">
        <div className={` w-2  h-2 rounded-full  ${style.dot}  mb-3  `} />

        <h3 className="text-base md:text-lg font-bold tracking-tight text-white leading-tight mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default OrbitCard;
