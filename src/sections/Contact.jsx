import { motion } from "framer-motion";
import PixelSnow from "../components/backgrounds/PixelSnow";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden  flex items-center justify-center -mt-15 px-6 py-18"
    >
      {/* Pixel Background */}
      <div className="absolute inset-0 z-0">
        <PixelSnow
          color="#d4c15a"
          flakeSize={0.012}
          minFlakeSize={1.2}
          pixelResolution={250}
          speed={0.6}
          density={0.18}
          brightness={1.2}
          gamma={0.4545}
          depthFade={10}
          farPlane={25}
          direction={115}
          variant="square"
        />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-[#ecd74c]/5 blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center z-10"
      >
        {/* Small Heading */}
        <p className="uppercase tracking-[0.45em] text-[#a69b5a] text-sm mb-5">
          GET IN TOUCH
        </p>

        {/* Main Heading */}
        <h2 className="text-[3rem] md:text-7xl font-bold text-white leading-[0.95]">
          Let's Build
          <br />
          Something Extraordinary.
        </h2>

        {/* Description */}
        <p className="mt-8 text-white/60 text-base md:text-xl leading-8 max-w-3xl mx-auto z-10">
          Every great product begins with a conversation. Whether you have an
          exciting idea, a freelance opportunity, or simply want to connect, I'm
          always open to creating something meaningful together.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5 z-10">
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:yourmail@gmail.com"
            className="px-8 py-4 rounded-full bg-[#e6bb2b] text-black font-semibold shadow-[0_0_35px_rgba(236,215,76,0.35)]"
          >
            Let's Talk →
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-[#ecd74c]/30 text-white bg-white/5 backdrop-blur-md hover:border-[#ecd74c] transition-all"
          >
            View Resume
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-14">
          <motion.a
            whileHover={{ y: -5, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:manikantagurram5533@gmail.com"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-[#ecd74c] hover:text-[#ecd74c] transition-all"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/mani759"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-[#ecd74c] hover:text-[#ecd74c] transition-all"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/manikanta-gurram-707145326"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-[#ecd74c] hover:text-[#ecd74c] transition-all"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/maniframes_00"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-[#ecd74c] hover:text-[#ecd74c] transition-all"
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="mt-12 mb-0 border-t border-white/10 pt-6">
          <p className="text-white/35 text-sm tracking-wide">
            © 2026 Manikanta Gurram · Crafted with React, Tailwind CSS & Framer
            Motion.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
