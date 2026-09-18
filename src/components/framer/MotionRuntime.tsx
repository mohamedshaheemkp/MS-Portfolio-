"use client";

import { useEffect } from "react";

export interface MotionConfig {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  hover?: Record<string, any>;
  press?: Record<string, any>;
  transition?: Record<string, any>;
  variants?: Record<string, any>;
  trigger?: "mount" | "in_view" | "hover" | "scroll" | string;
  inView?: boolean;
  once?: boolean;
  threshold?: number;
  keyframes?: Array<Record<string, any>>;
  repeat?: number | "Infinity";
  continuous?: boolean;
  parallaxSpeed?: number;
  [key: string]: any;
}

export type AppearConfig = MotionConfig;

export interface MotionRuntimeProps {
  animations?: Record<string, any>;
}

export default function MotionRuntime({
  animations = {},
}: MotionRuntimeProps) {
  useEffect(() => {
    if (!animations || Object.keys(animations).length === 0) return;
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Normalization: animations can be a map of configs or an object containing appear_animations, motion_triggers, etc.
    const appearMap: Record<string, MotionConfig> = animations.appear_animations || (animations.initial ? {} : animations);
    const triggers: Array<Record<string, any>> = animations.motion_triggers || [];
    const parallaxList: string[] = animations.parallax_elements || [];

    const cleanupFns: Array<() => void> = [];

    // Helper: calculate transform string from config object
    function getTransform(val: Record<string, any>): string {
      const x = val.x !== undefined ? (typeof val.x === "number" ? `${val.x}px` : val.x) : "0px";
      const y = val.y !== undefined ? (typeof val.y === "number" ? `${val.y}px` : val.y) : "0px";
      const scale = val.scale !== undefined ? val.scale : 1;
      const rotate = val.rotate !== undefined ? (typeof val.rotate === "number" ? `${val.rotate}deg` : val.rotate) : "0deg";
      return `translate3d(${x}, ${y}, 0) scale(${scale}) rotate(${rotate})`;
    }

    // Helper: calculate duration from transition
    function getDuration(transition: Record<string, any>): number {
      if (transition.type === "spring") {
        const stiffness = transition.stiffness || 200;
        const damping = transition.damping || 40;
        return Math.max(600, Math.min(1800, (damping / (2 * Math.sqrt(stiffness))) * 1200 + 400));
      }
      return (transition.duration || 0.8) * 1000;
    }

    // Safe element finder: handles IDs starting with numbers and arbitrary strings without CSS selector errors
    const findTarget = (targetId: string): HTMLElement | null => {
      if (!targetId) return null;
      const byId = document.getElementById(targetId);
      if (byId) return byId;

      try {
        const el = document.querySelector(
          `[data-motion-id="${targetId}"], [data-framer-appear-id="${targetId}"], [id="${targetId}"]`
        );
        if (el instanceof HTMLElement) return el;
      } catch {}

      try {
        const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(targetId) : targetId;
        const el = document.querySelector(`.motion-${escaped}`);
        if (el instanceof HTMLElement) return el;
      } catch {}

      return null;
    };

    // 1. Process Appear / Motion Configs
    Object.entries(appearMap).forEach(([targetId, config]) => {
      const el = findTarget(targetId);
      if (!el) return;

      const initial = config.initial || {};
      const animate = config.animate || {};
      const hover = config.hover || {};
      const press = config.press || {};
      const transition = config.transition || {};

      const delayMs = (transition.delay || 0) * 1000;
      const durationMs = getDuration(transition);
      const isContinuous = config.continuous || config.repeat === "Infinity" || config.repeat === Infinity;

      const initTransform = getTransform(initial);
      const targetTransform = getTransform(animate);
      const initOpacity = initial.opacity !== undefined ? initial.opacity : 1;
      const targetOpacity = animate.opacity !== undefined ? animate.opacity : 1;

      const runEntranceAnimation = () => {
        try {
          const keyframes = config.keyframes || [
            { opacity: initOpacity, transform: initTransform },
            { opacity: targetOpacity, transform: targetTransform },
          ];
          const anim = el.animate(keyframes, {
            duration: durationMs,
            delay: delayMs,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
            iterations: isContinuous ? Infinity : 1,
            direction: isContinuous ? "alternate" : "normal",
          });
          return anim;
        } catch (err) {
          el.style.transform = targetTransform;
          el.style.opacity = `${targetOpacity}`;
        }
      };

      // In-View Trigger vs Mount Trigger
      const isInView = config.trigger === "in_view" || config.inView;
      if (isInView && typeof IntersectionObserver !== "undefined") {
        const once = config.once !== false;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                runEntranceAnimation();
                if (once) observer.unobserve(el);
              } else if (!once) {
                el.style.opacity = `${initOpacity}`;
                el.style.transform = initTransform;
              }
            });
          },
          { threshold: config.threshold || 0.15 }
        );
        observer.observe(el);
        cleanupFns.push(() => observer.disconnect());
      } else {
        runEntranceAnimation();
      }

      // Hover interaction variant
      if (Object.keys(hover).length > 0) {
        const hoverTransform = getTransform(hover);
        const hoverOpacity = hover.opacity !== undefined ? hover.opacity : targetOpacity;

        const onPointerEnter = () => {
          el.animate(
            [
              { opacity: targetOpacity, transform: targetTransform },
              { opacity: hoverOpacity, transform: hoverTransform },
            ],
            { duration: 250, fill: "forwards", easing: "ease-out" }
          );
        };
        const onPointerLeave = () => {
          el.animate(
            [
              { opacity: hoverOpacity, transform: hoverTransform },
              { opacity: targetOpacity, transform: targetTransform },
            ],
            { duration: 300, fill: "forwards", easing: "ease-out" }
          );
        };
        el.addEventListener("pointerenter", onPointerEnter);
        el.addEventListener("pointerleave", onPointerLeave);
        cleanupFns.push(() => {
          el.removeEventListener("pointerenter", onPointerEnter);
          el.removeEventListener("pointerleave", onPointerLeave);
        });
      }

      // Press / tap interaction variant
      if (Object.keys(press).length > 0) {
        const pressTransform = getTransform(press);
        const onPointerDown = () => {
          el.animate(
            [{ transform: targetTransform }, { transform: pressTransform }],
            { duration: 150, fill: "forwards", easing: "ease-out" }
          );
        };
        const onPointerUp = () => {
          el.animate(
            [{ transform: pressTransform }, { transform: targetTransform }],
            { duration: 200, fill: "forwards", easing: "ease-out" }
          );
        };
        el.addEventListener("pointerdown", onPointerDown);
        el.addEventListener("pointerup", onPointerUp);
        el.addEventListener("pointercancel", onPointerUp);
        cleanupFns.push(() => {
          el.removeEventListener("pointerdown", onPointerDown);
          el.removeEventListener("pointerup", onPointerUp);
          el.removeEventListener("pointercancel", onPointerUp);
        });
      }
    });

    // 2. Parallax / Scroll-Linked Elements
    const parallaxElements: HTMLElement[] = [];
    parallaxList.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((node) => {
          if (node instanceof HTMLElement) parallaxElements.push(node);
        });
      } catch {}
    });
    try {
      document.querySelectorAll("[data-parallax]").forEach((node) => {
        if (node instanceof HTMLElement && !parallaxElements.includes(node)) {
          parallaxElements.push(node);
        }
      });
    } catch {}

    if (parallaxElements.length > 0) {
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            parallaxElements.forEach((el) => {
              const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.15");
              el.style.transform = `translate3d(0, ${Math.round(scrollY * speed)}px, 0)`;
            });
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanupFns.push(() => window.removeEventListener("scroll", onScroll));
    }

    // 3. Generic Interaction Listeners (Evidence-backed only)
    // Menu toggles
    const toggleButtons = document.querySelectorAll("[data-toggle-target]");
    toggleButtons.forEach((btn) => {
      const targetSelector = btn.getAttribute("data-toggle-target");
      if (!targetSelector) return;
      try {
        const targetEl = document.querySelector(targetSelector) as HTMLElement;
        if (!targetEl) return;

        const onClick = () => {
          const isExpanded = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
          targetEl.classList.toggle("is-open", !isExpanded);
        };
        btn.addEventListener("click", onClick);
        cleanupFns.push(() => btn.removeEventListener("click", onClick));
      } catch {}
    });

    // Accordions
    const accordionTriggers = document.querySelectorAll("[data-accordion-trigger]");
    accordionTriggers.forEach((trigger) => {
      const content = trigger.nextElementSibling as HTMLElement;
      if (!content) return;
      const onAccordionClick = () => {
        const open = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", open ? "false" : "true");
        content.style.display = open ? "none" : "block";
      };
      trigger.addEventListener("click", onAccordionClick);
      cleanupFns.push(() => trigger.removeEventListener("click", onAccordionClick));
    });

    // Tab switchers
    const tabTriggers = document.querySelectorAll("[data-tab-target]");
    tabTriggers.forEach((tab) => {
      const targetId = tab.getAttribute("data-tab-target");
      if (!targetId) return;
      const onTabClick = () => {
        const parent = tab.closest("[data-tab-group]") || document.body;
        parent.querySelectorAll("[data-tab-target]").forEach((t) => t.classList.remove("active"));
        parent.querySelectorAll("[data-tab-panel]").forEach((p) => ((p as HTMLElement).style.display = "none"));
        tab.classList.add("active");
        const panel = parent.querySelector(`[data-tab-panel="${targetId}"]`) as HTMLElement;
        if (panel) panel.style.display = "block";
      };
      tab.addEventListener("click", onTabClick);
      cleanupFns.push(() => tab.removeEventListener("click", onTabClick));
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [animations]);

  return null;
}
