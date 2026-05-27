import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 2, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Use spring for smooth acceleration and deceleration
  const springValue = useSpring(0, {
    bounce: 0,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      // Handle infinity string specially or parse numbers
      if (value === "∞") {
        setDisplayValue("∞");
        return;
      }

      // Extract just the numerical part
      const numValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
      if (!isNaN(numValue)) {
        springValue.set(numValue);
      }
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    // If it's infinity, we skip the spring listener
    if (value === "∞") return;

    return springValue.on("change", (latest) => {
      // Handle floating point vs integer display based on the input
      if (value.toString().includes('.')) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.floor(latest));
      }
    });
  }, [springValue, value]);

  return (
    <span ref={ref} className={className}>
      {value === "∞" ? "∞" : displayValue}
      {suffix}
    </span>
  );
}
