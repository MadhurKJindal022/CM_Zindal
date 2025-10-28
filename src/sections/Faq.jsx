import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#020014] via-[#0a0125] to-[#01010a] text-white">
      {/* 🌠 Animated starfield and glowing nebula */}
      <div className="absolute inset-0 bg-[url('/assets/stars-bg.png')] bg-cover bg-center opacity-30 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      <Element name="faq" className="relative z-10">
        {/* Header */}
        <div className="container relative z-20 text-center mb-20">
          <h3 className="h3 max-md:h5 max-w-3xl mx-auto mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] via-[#3B82F6] to-[#22D3EE] drop-shadow-[0_0_25px_rgba(157,78,221,0.7)]">
            Curiosity didn’t kill the cat — it unlocked the universe.
          </h3>
          <p className="body-1 max-w-xl mx-auto text-gray-300">
            You’ve got questions — and the cosmos has answers. Explore below to navigate your hub.
          </p>
        </div>

        {/* Center glowing core */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#9D4EDD]/60 via-[#3B82F6]/60 to-transparent opacity-70 blur-[1px] -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#22D3EE]/20 via-[#9D4EDD]/20 to-[#3B82F6]/10 blur-3xl animate-pulse"></div>

        {/* FAQ Panels */}
        <div className="relative z-20 container flex gap-12 max-lg:flex-col">
          {/* Left Column */}
          <div className="relative flex-1 p-8 rounded-3xl bg-[#0a0125]/50 backdrop-blur-lg border border-[#3B82F6]/30 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_45px_rgba(147,51,234,0.5)] transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(157,78,221,0.2)_0%,_transparent_60%)] rounded-3xl"></div>
            {faq.slice(0, halfLength).map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                index={index}
                className="border-b border-[#22D3EE]/20 last:border-none hover:translate-x-1 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="relative flex-1 p-8 rounded-3xl bg-[#0a0125]/50 backdrop-blur-lg border border-[#22D3EE]/30 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2)_0%,_transparent_60%)] rounded-3xl"></div>
            {faq.slice(halfLength).map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                index={halfLength + index}
                className="border-b border-[#9D4EDD]/20 last:border-none hover:-translate-x-1 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Floating central emblem */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
          <div className="relative size-24 rounded-full border-4 border-[#3B82F6]/60 bg-[#010014]/80 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            <img
              src="./images/faq-logo.svg"
              alt="FAQ Symbol"
              className="absolute inset-0 m-auto size-12 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22D3EE]/20 to-[#9D4EDD]/20 blur-md animate-pulse"></div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
