import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://www.linkedin.com/in/manikanta-gurram-707145326"
        target="_blank"
        rel="noreferrer"
        className="
          p-3
          rounded-full
          bg-white/5
          border border-white/10

          hover:border-cyan-400/50
          hover:bg-cyan-500/10
          hover:scale-110

          transition-all
          duration-300
        "
      >
        <FaLinkedin className="text-xl text-white" />
      </a>

      <a
        href="https://github.com/mani759"
        target="_blank"
        rel="noreferrer"
        className="
          p-3
          rounded-full
          bg-white/5
          border border-white/10

          hover:border-purple-400/50
          hover:bg-purple-500/10
          hover:scale-110

          transition-all
          duration-300
        "
      >
        <FaGithub className="text-xl text-white" />
      </a>

      <a
        href="https://www.instagram.com/maniframes_00?igsh=emh6M2psc2VsOG5y"
        target="_blank"
        rel="noreferrer"
        className="
          p-3
          rounded-full
          bg-white/5
          border border-white/10

          hover:border-pink-400/50
          hover:bg-pink-500/10
          hover:scale-110

          transition-all
          duration-300
        "
      >
        <FaInstagram className="text-xl text-white" />
      </a>
    </div>
  );
};

export default SocialLinks;
