import { useState } from "react";
import { testimonials } from "../constants/index.jsx";

const SciFiCard = ({ testimonial }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-72 h-96 perspective cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d transition-transform ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute w-full h-full bg-[#0a0125]/70 backdrop-blur-xl border border-cyan-400/40 rounded-3xl shadow-[0_0_40px_#00ffff50] flex flex-col items-center justify-center p-6 relative overflow-hidden">
          <div className="absolute top-2 left-2 right-2 h-12 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-xl blur-sm animate-[pulse_6s_linear_infinite]"></div>
          <p className="text-cyan-300 uppercase font-bold tracking-wider mb-3 z-10">{testimonial.name}</p>
          <p className="text-gray-300 text-sm text-center z-10">{testimonial.message}</p>
          <p className="mt-4 text-xs text-gray-400 z-10">{testimonial.role}</p>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff80] animate-bounce-slow"></div>
          <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#7c3aed80] animate-bounce-slower"></div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute w-full h-full bg-gradient-to-br from-[#0a0020] via-[#1e004b] to-[#0a0020] border border-purple-400/40 rounded-3xl shadow-[0_0_50px_#7c3aed60] transform rotate-y-180 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,_rgba(255,255,255,0.05)_0,_rgba(255,255,255,0.05)_1px,_transparent_1px,_transparent_20px)]"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.05)_0,_rgba(255,255,255,0.05)_1px,_transparent_1px,_transparent_20px)]"></div>
          <div className="w-16 h-16 rounded-full border border-cyan-400/70 shadow-[0_0_40px_#00ffff70] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-purple-400 rounded-full animate-spin-slow"></div>
          </div>
          <p className="text-purple-300 font-semibold text-sm absolute bottom-6 text-center w-full">
            Energy Core / Console Stats
          </p>
        </div>
      </div>

      <style>
        {`
          .perspective { perspective: 1200px; }
          .transform-style-preserve-3d { transform-style: preserve-3d; }
          .rotate-y-180 { transform: rotateY(180deg); }
          @keyframes pulse { 0%,50%,100%{opacity:0.7;} 25%,75%{opacity:1;} }
          .animate-bounce-slow { animation: bounce 4s infinite alternate; }
          .animate-bounce-slower { animation: bounce 6s infinite alternate; }
          @keyframes bounce { 0%{transform:translateY(0);} 100%{transform:translateY(-8px);} }
          .animate-spin-slow { animation: spin 6s linear infinite; }
          @keyframes spin { 0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);} }
        `}
      </style>
    </div>
  );
};

const TestimonialsSciFi = () => {
  // Split into rows of 3 cards each
  const rowCount = 3;
  const rows = [];
  for (let i = 0; i < testimonials.length; i += rowCount) {
    rows.push(testimonials.slice(i, i + rowCount));
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#010014] via-[#0a0125] to-[#000000] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/stars-bg.png')] bg-cover bg-center opacity-20 animate-pulse pointer-events-none"></div>

      <div className="container relative z-10 flex flex-col gap-12">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-8 w-full 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              ${rowIndex % 2 === 0 ? "justify-start" : "justify-end"}
            `}
          >
            {row.map((t) => (
              <SciFiCard key={t.id} testimonial={t} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSciFi;
