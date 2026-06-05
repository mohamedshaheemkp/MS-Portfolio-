import FlowingMenu from "../components/FlowingMenu";
import ProgressiveBlur from "../components/ProgressiveBlur";

import imgPoster1 from "../assets/poster 1.webp";
import imgPoster2 from "../assets/poster 2.webp";
import imgPoster3 from "../assets/poster 3.webp";
import imgPoster4 from "../assets/poster 4.webp";
import imgPoster5 from "../assets/poster 5.webp";
import imgPoster6 from "../assets/poster 6.webp";

import imgBrand1 from "../assets/brand 1.webp";
import imgBrand2 from "../assets/brand 2.webp";
import imgBrand3 from "../assets/brand 3.webp";
import imgBrand4 from "../assets/brand 4.webp";

import imgLogo1 from "../assets/logo 1.webp";
import imgLogo2 from "../assets/logo 2.webp";
import imgLogo3 from "../assets/logo 3.webp";

const cabinetItems = [
  {
    link: "/design?category=posters",
    text: "POSTERS",
    images: [imgPoster1, imgPoster2, imgPoster3, imgPoster4, imgPoster5, imgPoster6],
    number: "[01]",
  },
  {
    link: "/design?category=branding",
    text: "BRANDING",
    images: [imgBrand1, imgBrand2, imgBrand3, imgBrand4],
    number: "[02]",
  },
  {
    link: "/design?category=logos",
    text: "LOGOS",
    images: [imgLogo1, imgLogo2, imgLogo3],
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

      <ProgressiveBlur 
        position="bottom" 
        backgroundColor="#050505" 
        height="8rem" 
        blurAmount="8px" 
      />
    </section>
  );
}
