import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element
        name="features"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-[#010014] via-[#0a0125] to-[#000000]"
      >
        {/* Cosmic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/assets/stars-bg.png')] bg-cover bg-center opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)] bg-[length:30px_30px] animate-[spin_300s_linear_infinite]"></div>
        </div>

        <div className="container relative z-10 flex flex-col md:flex-row flex-wrap gap-12 md:gap-10">
          {features.map(({ id, icon, caption, title, text, button }) => (
            <div
              key={id}
              className="relative flex-1 p-6 md:p-10 border border-purple-500/30 rounded-3xl backdrop-blur-md bg-[#0a0025]/40 hover:shadow-[0_0_40px_#7c3aed80] transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Neon Icon + Line */}
                <div className="flex flex-col items-center justify-start">
                  <div className="w-0.5 h-16 bg-purple-500/50 mb-2" />
                  <img
                    src={icon}
                    alt={title}
                    className="w-14 h-14 object-contain animate-pulse-slow"
                  />
                </div>

                {/* Feature Text */}
                <div>
                  <p className="text-cyan-400 uppercase tracking-wider mb-2">{caption}</p>
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                  <p className="text-gray-300 mb-6">{text}</p>
                  <Button
                    icon={button.icon}
                    className="bg-cyan-400/20 border border-cyan-400 hover:shadow-[0_0_20px_#00ffff80] text-white transition-all duration-500"
                  >
                    {button.title}
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Horizontal Neon Detail Bar */}
          <ul className="relative hidden md:flex justify-around flex-grow px-[5%] border border-purple-500/30 rounded-3xl mt-16">
            <div className="absolute bg-purple-500/20 top-1/2 left-0 right-0 w-full h-[1px] z-10" />
            {details.map(({ id, icon, title }) => (
              <li key={id} className="relative flex flex-col items-center pt-10 pb-14">
                <div className="absolute top-0 bottom-0 left-1/2 bg-purple-500/20 w-[1px] h-full z-10" />
                <div className="flex items-center justify-center w-16 h-16 border border-cyan-400/50 rounded-full hover:shadow-[0_0_20px_#00ffff80] transition-all duration-500 mb-3">
                  <img src={icon} alt={title} className="w-10 h-10 object-contain z-20" />
                </div>
                <h3 className="text-center text-white uppercase tracking-wider text-sm">{title}</h3>
              </li>
            ))}
          </ul>
        </div>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse { 0%,100%{opacity:0.5;}50%{opacity:1;} }
            .animate-pulse-slow { animation: pulse 4s linear infinite; }
          `}
        </style>
      </Element>
    </section>
  );
};

export default Features;
