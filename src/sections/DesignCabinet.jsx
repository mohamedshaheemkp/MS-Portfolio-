import FlowingMenu from "../components/FlowingMenu";
import ProgressiveBlur from "../components/ProgressiveBlur";
import posterPreview from "../assets/Poster/poster 1.webp";
import brandPreview from "../assets/branding/brand 4.webp";
import logoPreview from "../assets/Logo/logo 3.webp";

const cabinetItems = [
  { link: "/design?category=posters", text: "POSTERS", images: [posterPreview], number: "[01]" },
  { link: "/design?category=branding", text: "BRANDING", images: [brandPreview], number: "[02]" },
  { link: "/design?category=logos", text: "LOGOS", images: [logoPreview], number: "[03]" },
];

export default function DesignCabinet() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-bg py-24 md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 z-0 flex select-none flex-col items-center justify-center overflow-hidden opacity-30 leading-[0.85] md:opacity-100">
        <span className="whitespace-nowrap bg-clip-text text-[25vw] font-black text-transparent" style={{ WebkitTextStroke: "1px #1A212B" }}>DESIGN</span>
        <span className="whitespace-nowrap bg-clip-text text-[25vw] font-black text-transparent" style={{ WebkitTextStroke: "1px #1A212B" }}>CABINET</span>
      </div>
      <div className="relative z-10 w-full max-w-[800px] px-6">
        <div className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-text-secondary"><span className="h-px w-8 bg-border" /> Visual Archive</div>
        <div className="relative flex h-[400px] w-full flex-col overflow-hidden border border-border bg-bg shadow-2xl md:h-[500px]">
          <FlowingMenu items={cabinetItems} />
        </div>
      </div>
      <ProgressiveBlur position="bottom" backgroundColor="#0A0D12" height="8rem" blurAmount="8px" />
    </section>
  );
}
