import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="relative py-24 max-md:py-16 overflow-hidden bg-gradient-to-b from-[#010014] via-[#0a0125] to-[#000000]"
      >
        {/* Stars/space background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/assets/stars-bg.png')] bg-cover bg-center opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)] bg-[length:20px_20px] animate-[spin_200s_linear_infinite]"></div>
        </div>

        <div className="container relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Left column */}
          <div className="flex-1 relative">
            {/* Logo */}
            <div className="mb-8">
              <img src="./images/xora.svg" width={160} height={55} alt="xora" className="drop-shadow-neon-cyan"/>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-10 max-w-md text-lg tracking-wide">
              Try it now for free on iOS, Android, PC, Web — whatever your flavor, we've got you covered.
            </p>

            {/* Download buttons */}
            <ul className="flex flex-wrap items-center gap-6">
              {links.map(({ id, url, icon }) => (
                <li key={id}>
                  <a
                    href={url}
                    className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-cyan-400/50 bg-[#0a0125]/50 hover:border-cyan-300 hover:shadow-[0_0_20px_#00ffff80] transition-all duration-300"
                  >
                    <span className="absolute -top-2 rotate-90">
                      <Marker />
                    </span>
                    <img src="./images/lines.svg" alt="lines" className="absolute w-6 h-6 object-contain"/>
                    <span className="text-white text-xl z-10">{icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="flex-1 relative max-md:hidden">
            <div className="relative rounded-3xl border-2 border-purple-400/30 p-4 shadow-[0_0_50px_#7c3aed50] bg-[#0a0025]/50">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0a0125] via-[#1e004b] to-[#0a0020] p-6">
                {/* Neon top dots */}
                <span className="absolute top-4 left-6 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff70] animate-pulse"></span>
                <span className="absolute top-4 left-12 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#7c3aed70] animate-pulse delay-200"></span>
                <span className="absolute top-4 left-18 w-3 h-3 bg-pink-400/50 rounded-full shadow-[0_0_10px_#ff00ff70] animate-pulse delay-400"></span>

                <img
                  src="./images/screen.jpg"
                  width={855}
                  height={655}
                  alt="screen"
                  className="rounded-xl border border-cyan-400/30 shadow-[0_0_20px_#00ffff50]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <ul className="mt-24 flex justify-center flex-wrap gap-12 max-lg:hidden">
          {logos.map(({ id, url, width, height, title }) => (
            <li key={id}>
              <img
                src={url}
                width={width}
                height={height}
                alt={title}
                className="filter drop-shadow-neon-purple"
              />
            </li>
          ))}
        </ul>

        {/* Tailwind custom animations */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-pulse-slow { animation: pulse 6s linear infinite; }
            @keyframes pulse { 0%,100%{opacity:0.5;}50%{opacity:1;} }
            .drop-shadow-neon-cyan { filter: drop-shadow(0 0 6px #00ffff) drop-shadow(0 0 10px #00ffff) }
            .drop-shadow-neon-purple { filter: drop-shadow(0 0 6px #7c3aed) drop-shadow(0 0 12px #7c3aed) }
          `}
        </style>
      </Element>
    </section>
  );
};

export default Download;
