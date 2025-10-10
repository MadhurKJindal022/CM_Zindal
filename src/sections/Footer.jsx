import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#05010d] via-[#0a0130] to-[#000000] text-white">
      {/* ✨ Animated Starfield */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="container relative z-10 py-10">
        <div className="flex w-full max-md:flex-col">
          {/* Copyright + Thanks */}
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70 text-sm">
              © {new Date().getFullYear()} — Template inspired by{" "}
              <span className="text-indigo-400 font-semibold">JS Mastery</span>.{" "}
              Big thanks to him for the amazing design template!
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-indigo-300 transition-all duration-500 hover:text-white hover:drop-shadow-[0_0_5px_#a78bfa]">
              Privacy Policy
            </p>
            <p className="text-indigo-300 transition-all duration-500 hover:text-white hover:drop-shadow-[0_0_5px_#a78bfa]">
              Terms of Use
            </p>
          </div>

          {/* Social Icons */}
          <ul className="flex flex-1 justify-center gap-4 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group transition-all duration-500"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="size-6 object-contain invert brightness-150 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#a78bfa] transition-all duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
