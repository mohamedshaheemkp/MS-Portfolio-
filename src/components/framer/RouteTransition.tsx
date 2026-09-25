"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RouteTransition() {
  const { pathname } = useLocation();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 350);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!animating) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(4px)",
        pointerEvents: "none",
        zIndex: 9998,
        transition: "opacity 0.35s ease-out",
        opacity: animating ? 1 : 0,
      }}
    />
  );
}
