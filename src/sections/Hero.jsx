import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden bg-gradient-to-b from-[#010014] via-[#0a0125] to-[#000000]">
      {/* Cosmic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/stars-bg.png')] bg-cover bg-center opacity-20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)] bg-[length:25px_25px] animate-[spin_300s_linear_infinite]"></div>
      </div>

      <Element name="hero">
        <div className="container relative z-10">
          <div className="relative z-20 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-cyan-400 tracking-widest mb-3">
              Welcome to MKJ App Hub
            </div>

            <h1 className="mb-6 h1 text-white uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Discover My <span className="text-purple-400 drop-shadow-[0_0_15px_#7c3aed]">Projects & Apps</span>
            </h1>

            <p className="max-w-440 mb-14 body-1 text-gray-300 max-md:mb-10">
              A collection of smart, creative, and powerful apps built by MKJ —
              from AI tools to video chats, all in one place. Explore, learn, or try them live.
            </p>

            <LinkScroll to="apps" offset={-100} spy smooth>
              <Button icon="/images/zap.svg" className="bg-cyan-400/20 border border-cyan-400 hover:shadow-[0_0_20px_#00ffff80] text-white">
                Explore My Apps
              </Button>
            </LinkScroll>
          </div>

          {/* Hero Image with neon glow */}
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-purple-400/10 blur-3xl filter animate-pulse-slow"></div>
              <img
                src="/images/hero.png"
                className="size-1230 max-lg:h-auto relative z-10"
                alt="App Hub Hero"
              />
            </div>
          </div>
        </div>
      </Element>

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
    </section>
  );
};

export default Hero;
