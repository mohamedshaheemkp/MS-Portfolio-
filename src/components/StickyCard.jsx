import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue } from "framer-motion";

export default function StickyCard({ item }) {
  const containerRef = useRef(null);
  
  // Lock the scroll position when the card hits its sticky point.
  // We use a large finite number instead of Infinity because Framer Motion's
  // useTransform interpolation breaks (NaN) when working with Infinity ranges.
  const [maxScrollY, setMaxScrollY] = useState(9999999);

  const { scrollY } = useScroll();
  
  // Triggers exactly when the element hits the sticky top position (e.g., top-32 or 15vh)
  const isInView = useInView(containerRef, {
    margin: "0px 0px -85% 0px", // triggers when element is 15% from top
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      // Small timeout ensures layout is fully settled before capturing scroll position
      setTimeout(() => setMaxScrollY(scrollY.get()), 50);
    }
  }, [isInView, scrollY]);

  // Derived transforms based on the locked scroll position. 
  // We use 3000px instead of 10000px so the animation feels much more responsive and less static.
  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 3000], [1, 0.7]);
  const rotate = useTransform(scrollY, [maxScrollY, maxScrollY + 3000], [0, 25]);
  const negateRotate = useTransform(rotate, (v) => -v);

  return (
    <motion.div
      ref={containerRef}
      className="rounded-[2rem] sticky w-full max-w-[500px] h-[350px] overflow-hidden bg-[#0a0a0a] border border-white/[0.08] shadow-2xl flex items-center justify-center mx-auto"
      style={{
        scale,
        rotate,
        top: "15vh", // sticks near the top but leaves breathing room
      }}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        style={{
          rotate: negateRotate,
        }}
        className="h-full w-full scale-[1.35] object-cover"
        sizes="90vw"
        loading="lazy"
      />
    </motion.div>
  );
}
