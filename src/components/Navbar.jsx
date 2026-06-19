import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-full -translate-x-1/2 px-4 sm:px-6 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#07111d]/70 px-5 py-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:px-6">
        <div>
          <a href="#hero">
            <h1 className="text-lg font-semibold tracking-wide text-white">
              MANI
            </h1>
          </a>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about">
            <h3 className="cursor-pointer text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white ">
              Why Me
            </h3>
          </a>
          <a href="#work">
            <h3 className="cursor-pointer text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white">
              Work
            </h3>
          </a>
          <a href="#contact">
            <h3 className="cursor-pointer text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white">
              Contact
            </h3>
          </a>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
