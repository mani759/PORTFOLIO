import { motion } from "framer-motion";
const CenterCard = () => {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className=" w-full max-w-[460px] mx-auto h-[260px] rounded-3xl  border border-white/10 bg-black/20  backdrop-blur-xl flex   flex-col items-center justify-center px-8 py-6
  "
    >
      <p className="text-yellow-300 text-xs uppercase tracking-[0.3em] mb-4">
        WHO I AM
      </p>
      <h2 className="text-white text-2xl  font-bold leading-tight">
        More Than A Developer <br /> A Builder Of Possibilities.
      </h2>
      <p
        className="mt-5 px-8

          text-zinc-400
          text-sm
          leading-relaxed"
      >
        Driven by <span className="text-yellow-300">curiosity</span>, I learn by
        building, experimenting, and figuring things out one project at a time.
      </p>
    </motion.div>
  );
};

export default CenterCard;
