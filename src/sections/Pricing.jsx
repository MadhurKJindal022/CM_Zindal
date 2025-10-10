import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import Button from "../components/Button.jsx";
import { plans } from "../constants/index.jsx";

const AppHub = () => {
  const [activeSection, setActiveSection] = useState("status"); // single active section

  const sections = ["status", "apps", "logs", "settings"];

  return (
    <section className="relative bg-gradient-to-b from-[#010014] via-[#0b0030] to-[#000000] min-h-screen text-white overflow-hidden">
      {/* Background stars & nebula */}
      <div className="absolute inset-0 bg-[url('/images/starfield.png')] bg-cover opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.05)_0%,_transparent_80%)]"></div>

      <Element name="app-hub" className="relative z-10 container mx-auto py-20">
        {/* Toggle Panel */}
        <div className="relative mx-auto flex w-[400px] rounded-3xl border border-cyan-300/40 bg-[#080018]/60 p-2 backdrop-blur-lg shadow-[0_0_20px_#00ffff50] mb-14">
          {sections.map((section, idx) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={clsx(
                "relative flex-1 text-sm font-semibold text-white uppercase z-10 transition-colors duration-300",
                activeSection === section ? "text-cyan-400" : "hover:text-cyan-300"
              )}
            >
              {section}
            </button>
          ))}

          {/* Sliding highlight */}
          <div
            className={clsx(
              "absolute top-2 left-2 h-[calc(100%-16px)] w-[calc(25%-8px)] rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_25px_#7c3aed] transition-transform duration-500",
              `translate-x-[${sections.indexOf(activeSection) * 100}%]`
            )}
            style={{
              transform: `translateX(${sections.indexOf(activeSection) * 100}%)`,
            }}
          />
        </div>

        {/* Dynamic Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((app) =>
            activeSection !== "status" && (
              <div
                key={app.id + activeSection}
                className="relative rounded-2xl p-6 bg-[#0a0020]/60 backdrop-blur-lg border border-cyan-400/20 shadow-[0_0_25px_#00ffff20] transition-transform duration-300 hover:shadow-[0_0_40px_#00ffff60] hover:scale-[1.03]"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={app.logo}
                    alt={app.title}
                    className="size-[80px] drop-shadow-[0_0_10px_#00ffff]"
                  />
                </div>
                <h3 className="text-center text-cyan-300 font-semibold mb-2">{app.title}</h3>
                <p className="text-center text-gray-300 text-sm mb-4">{app.caption}</p>

                <ul className="space-y-2 text-gray-200 text-xs mb-6">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center gap-2">
                  <Button icon={app.icon} className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_30px_#7caed]">
                    OPEN
                  </Button>
                  <Button icon={app.icon} className="bg-[#140033]/60 text-cyan-200 border border-cyan-400/30 hover:bg-[#1e004b]/70">
                    INFO
                  </Button>
                </div>
              </div>
            )
          )}
        </div>

        {/* Status Panel */}
        {activeSection === "status" && (
          <div className="mt-14 p-8 rounded-2xl bg-[#0a0020]/50 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_40px_#7c3aed40] max-w-5xl mx-auto">
            <h2 className="text-center text-purple-300 font-bold text-xl mb-6">
              Ship Status Terminal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
              <div>
                <p>Hull Integrity: <span className="text-cyan-300">92%</span></p>
                <p>Energy Shields: <span className="text-cyan-300">85%</span></p>
                <p>Warp Drive: <span className="text-cyan-300">Online</span></p>
              </div>
              <div>
                <p>Life Support: <span className="text-cyan-300">Optimal</span></p>
                <p>Communications: <span className="text-cyan-300">Stable</span></p>
                <p>AI Core: <span className="text-cyan-300">Active</span></p>
              </div>
            </div>
          </div>
        )}
      </Element>
    </section>
  );
};

export default AppHub;
