import FlowingMenu from "../components/FlowingMenu";
import GradualBlur from "../components/GradualBlur";

import imgPoster from "../assets/poster 1.webp";
import imgBranding from "../assets/brand 1.webp";
import imgLogo from "../assets/logo 1.webp";

const cabinetItems = [
  {
    link: "/design?category=posters",
    text: "POSTERS",
    image: imgPoster,
    number: "[01]",
  },
  {
    link: "/design?category=branding",
    text: "BRANDING",
    image: imgBranding,
    number: "[02]",
  },
  {
    link: "/design?category=logos",
    text: "LOGOS",
    image: imgLogo,
    number: "[03]",
  }
];

export default function DesignCabinet() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen py-24 flex items-center justify-center bg-bg overflow-hidden">
      
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden opacity-30 md:opacity-100 leading-[0.85] z-0">
        <span className="text-[25vw] font-display font-black text-transparent bg-clip-text whitespace-nowrap" style={{ WebkitTextStroke: "1px #1E1E1E" }}>
          DESIGN
        </span>
        <span className="text-[25vw] font-display font-black text-transparent bg-clip-text whitespace-nowrap" style={{ WebkitTextStroke: "1px #1E1E1E" }}>
          CABINET
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[800px] px-6">
        <div className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-border"></span> Visual Archive
        </div>

        {/* The Cabinet Object */}
        <div className="w-full h-[400px] md:h-[500px] bg-bg border border-border shadow-2xl flex flex-col relative overflow-hidden">
          <FlowingMenu items={cabinetItems} />
        </div>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
