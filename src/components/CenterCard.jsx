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
      className="
    w-[420px]
    h-[260px]

    rounded-3xl

    border border-white/10

    bg-black/20
    backdrop-blur-xl

    flex
    items-center
    justify-center
  "
    >
      <h2 className="text-white text-2xl font-bold">CENTER CARD</h2>
    </motion.div>
  );
};

export default CenterCard;
