import { button } from "framer-motion/client";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import Button from "./Button";

const IntroCard = () => {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6  w-full max-w-[500px]">
      <div className="gap-5">
        <h1 className="text-4xl font-bold text-white">Manikanta</h1>

        <p className="text-yellow-400 mt-2">AIML Student</p>

        <p className="text-gray-300 mt-4">
          Full Stack Developer passionate about AI, Web Development and building
          modern digital experiences.
        </p>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <SocialLinks />
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="mt-5"
          >
            <a href="public\resume.pdf" target="_blank">
              <Button text=" 📄 My Resume" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroCard;
