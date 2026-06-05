import ScrollFloat from "../components/ScrollFloat";

export default function WorkHeading() {
  return (
    <section className="w-full bg-[#050505] flex items-center justify-center py-24 overflow-hidden">
      <ScrollFloat
        animationDuration={1.2}
        ease="power4.out"
        scrollStart="top bottom-=10%"
        scrollEnd="center center"
        stagger={0.05}
        containerClassName="w-full overflow-visible"
        textClassName="work-heading"
      >
        WORK
      </ScrollFloat>
    </section>
  );
}
