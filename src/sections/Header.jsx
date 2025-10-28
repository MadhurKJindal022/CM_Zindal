import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-cyan-400 uppercase tracking-widest transition-colors duration-500 cursor-pointer hover:text-purple-400 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-[#0a0025]/70 backdrop-blur-md shadow-[0_0_30px_#7c3aed50]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5 relative z-20">
        {/* Mobile Logo */}
        <a className="lg:hidden flex-1 cursor-pointer z-20">
          <img src="./images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        {/* Navigation Menu */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-[#0a0025]/90 max-lg:opacity-0 transition-opacity duration-500",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-20 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12 items-center justify-between">
                <li className="nav-li flex gap-4 items-center">
                  <NavLink title="features" />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse-slow" />
                  <NavLink title="pricing" />
                </li>

                {/* Center Logo */}
                <li className="nav-logo mx-4">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="./images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                      className="drop-shadow-[0_0_10px_#00ffff]"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li flex gap-4 items-center">
                  <NavLink title="faq" />
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse-slow" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            {/* Mobile Background Neon */}
            <div className="lg:hidden absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90 pointer-events-none">
              <img
                src="./images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-10"
              />
              <img
                src="./images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-20 size-10 border-2 border-cyan-400/50 rounded-full flex justify-center items-center hover:shadow-[0_0_20px_#00ffff80] transition-all duration-500"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`./images/${isOpen ? "close" : "magic"}.svg`}
            alt="toggle"
            className="size-1/2 object-contain"
          />
        </button>
      </div>

      <style>
        {`
          @keyframes pulse { 0%,100%{opacity:0.5;}50%{opacity:1;} }
          .animate-pulse-slow { animation: pulse 2s linear infinite; }
        `}
      </style>
    </header>
  );
};

export default Header;
