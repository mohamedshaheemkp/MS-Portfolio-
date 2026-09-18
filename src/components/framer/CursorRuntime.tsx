"use client";

import React, { useState, useEffect } from "react";

export function CursorFollower() {
  return null;
}

export default function CursorRuntime() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Suppress native cursor while custom cursor is active
    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], .project-card, [data-cursor]");
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute("data-cursor") || (interactive.classList.contains("project-card") ? "VIEW" : "");
          setHoverText(customText);
        } else {
          setIsHovered(false);
          setHoverText("");
        }
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!pos || !visible) return null;

  return (
    <div
      id="custom-cursor"
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        transform: `translate(-50%, -50%) scale(${isHovered ? 2.2 : 1})`,
        width: isHovered && hoverText ? 36 : 14,
        height: isHovered && hoverText ? 36 : 14,
        borderRadius: "50%",
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.9)" : "var(--token-cursor, #ffffff)",
        color: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "8px",
        fontWeight: "bold",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.15s ease-out, width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
      }}
    >
      {isHovered && hoverText ? hoverText : null}
    </div>
  );
}
