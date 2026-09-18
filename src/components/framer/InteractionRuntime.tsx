"use client";

import { useEffect } from "react";

export interface TriggerSpec {
  type: string;
  selector: string;
  target_id?: string;
  event_options?: Record<string, any>;
}

export interface ActionSpec {
  type: string;
  target?: string;
  target_route?: string;
  transition?: Record<string, any>;
}

export interface InteractionConfig {
  id: string;
  category?: string;
  trigger: TriggerSpec;
  action: ActionSpec;
  states?: Record<string, Record<string, any>>;
  animation?: Record<string, any>;
  conditions?: Record<string, any>;
  evidence?: Record<string, any>;
  description?: string;
}

export interface InteractionRuntimeProps {
  interactions?: InteractionConfig[];
}

export default function InteractionRuntime({
  interactions = [],
}: InteractionRuntimeProps) {
  useEffect(() => {
    if (!interactions || interactions.length === 0) return;
    if (typeof window === "undefined") return;

    const cleanupFns: Array<() => void> = [];

    interactions.forEach((interaction) => {
      const triggerSpec = interaction.trigger;
      const actionSpec = interaction.action;
      if (!triggerSpec || !triggerSpec.selector) return;

      const findElements = (selector: string): HTMLElement[] => {
        if (!selector) return [];
        try {
          const bslash = String.fromCharCode(92);
          const cleanSel = selector.split(bslash + bslash).join(bslash).split(bslash + " ").join(" ");

          if (cleanSel.startsWith("#") && !cleanSel.includes(" ") && !cleanSel.includes(">") && !cleanSel.includes("[")) {
            const idVal = cleanSel.slice(1);
            const el = document.getElementById(idVal);
            if (el) return [el];
            const byAttr = document.querySelector(`[id="${idVal}"]`);
            if (byAttr instanceof HTMLElement) return [byAttr];
          }

          const els = Array.from(document.querySelectorAll(cleanSel)) as HTMLElement[];
          if (els.length > 0) return els;

          const stripped = selector.split(bslash).join("");
          const els2 = Array.from(document.querySelectorAll(stripped)) as HTMLElement[];
          if (els2.length > 0) return els2;

          return Array.from(document.querySelectorAll(selector)) as HTMLElement[];
        } catch (e) {
          return [];
        }
      };

      const triggers = findElements(triggerSpec.selector);
      const targets = actionSpec.target ? findElements(actionSpec.target) : [];

      let isOpen = false;

      // Handle continuous visual animation if present
      if (interaction.animation?.continuous) {
        triggers.forEach((trig) => {
          trig.setAttribute("data-continuous-motion", "true");
        });
      }

      // Dynamic target resolver (handles dynamic mounts / client-rendered DOM nodes)
      const getTargets = (): HTMLElement[] => {
        const found = actionSpec.target ? findElements(actionSpec.target) : [];
        return found.length > 0 ? found : targets;
      };

      // Support evidence-backed revealed navigation links overlay for menus
      let menuOverlay: HTMLElement | null = null;
      const revealedLinks = interaction.evidence?.revealed_links || [];
      if (interaction.category === "menu" && revealedLinks.length > 0) {
        const overlayId = `revealed-menu-overlay-${interaction.id}`;
        let existing = document.getElementById(overlayId);
        if (!existing) {
          menuOverlay = document.createElement("div");
          menuOverlay.id = overlayId;
          menuOverlay.style.position = "fixed";
          menuOverlay.style.inset = "0";
          menuOverlay.style.backgroundColor = "rgba(10, 10, 10, 0.96)";
          menuOverlay.style.backdropFilter = "blur(16px)";
          menuOverlay.style.zIndex = "9990";
          menuOverlay.style.display = "none";
          menuOverlay.style.flexDirection = "column";
          menuOverlay.style.alignItems = "center";
          menuOverlay.style.justifyContent = "center";
          menuOverlay.style.gap = "28px";
          menuOverlay.style.opacity = "0";
          menuOverlay.style.transition = "opacity 0.25s ease-in-out";

          const closeBtn = document.createElement("button");
          closeBtn.innerHTML = "&times;";
          closeBtn.style.position = "absolute";
          closeBtn.style.top = "32px";
          closeBtn.style.right = "40px";
          closeBtn.style.background = "none";
          closeBtn.style.border = "none";
          closeBtn.style.color = "#ffffff";
          closeBtn.style.fontSize = "40px";
          closeBtn.style.cursor = "pointer";
          closeBtn.onclick = () => {
            isOpen = false;
            applyState("closed");
          };
          menuOverlay.appendChild(closeBtn);

          const navEl = document.createElement("nav");
          navEl.style.display = "flex";
          navEl.style.flexDirection = "column";
          navEl.style.alignItems = "center";
          navEl.style.gap = "24px";

          revealedLinks.forEach((link: { href: string; text: string }) => {
            const a = document.createElement("a");
            a.href = link.href.startsWith("./") ? "/" + link.href.slice(2) : link.href;
            a.textContent = link.text;
            a.style.color = "#ffffff";
            a.style.fontSize = "clamp(24px, 4vw, 36px)";
            a.style.fontWeight = "700";
            a.style.letterSpacing = "0.05em";
            a.style.textDecoration = "none";
            a.style.transition = "opacity 0.2s ease, transform 0.2s ease";
            a.onmouseenter = () => {
              a.style.opacity = "0.7";
              a.style.transform = "translateX(6px)";
            };
            a.onmouseleave = () => {
              a.style.opacity = "1";
              a.style.transform = "translateX(0)";
            };
            a.onclick = () => {
              isOpen = false;
              applyState("closed");
            };
            navEl.appendChild(a);
          });

          menuOverlay.appendChild(navEl);
          document.body.appendChild(menuOverlay);
          cleanupFns.push(() => {
            if (menuOverlay && menuOverlay.parentNode) {
              menuOverlay.parentNode.removeChild(menuOverlay);
            }
          });
        } else {
          menuOverlay = existing;
        }
      }

      // State application helper
      const applyState = (stateName: "closed" | "open") => {
        const stateProps = interaction.states?.[stateName] || {};
        const currentTargets = getTargets();
        currentTargets.forEach((target) => {
          if (stateProps.display !== undefined) {
            target.style.display = stateProps.display;
          } else if (stateName === "closed") {
            target.style.display = "none";
          } else {
            target.style.display = "block";
          }

          if (stateProps.visibility !== undefined) {
            target.style.visibility = stateProps.visibility;
          } else {
            target.style.visibility = stateName === "open" ? "visible" : "hidden";
          }

          if (stateProps.opacity !== undefined) {
            target.style.opacity = String(stateProps.opacity);
          } else {
            target.style.opacity = stateName === "open" ? "1" : "0";
          }

          if (stateProps.transform !== undefined) {
            target.style.transform = stateProps.transform;
          }

          target.style.pointerEvents = stateName === "open" ? "auto" : "none";
          target.setAttribute("data-state", stateName);
          if (stateName === "open") {
            target.classList.add("active", "open");
            target.classList.remove("closed");
          } else {
            target.classList.remove("active", "open");
            target.classList.add("closed");
          }
        });

        if (menuOverlay) {
          if (stateName === "open") {
            menuOverlay.style.display = "flex";
            requestAnimationFrame(() => {
              if (menuOverlay) menuOverlay.style.opacity = "1";
            });
          } else {
            menuOverlay.style.opacity = "0";
            setTimeout(() => {
              if (menuOverlay && !isOpen) menuOverlay.style.display = "none";
            }, 250);
          }
        }

        triggers.forEach((trig) => {
          trig.setAttribute("aria-expanded", stateName === "open" ? "true" : "false");
          trig.setAttribute("data-state", stateName);
          if (stateName === "open") {
            trig.classList.add("active", "open");
            trig.classList.remove("closed");
          } else {
            trig.classList.remove("active", "open");
            trig.classList.add("closed");
          }
        });
      };

      // Apply initial state (close actions start open; toggle/open start closed)
      if (actionSpec.type === "close") {
        isOpen = true;
        applyState("open");
      } else {
        applyState("closed");
      }

      const onTriggerClick = (e: MouseEvent) => {
        if (actionSpec.type === "toggle" || interaction.category === "menu") {
          isOpen = !isOpen;
          applyState(isOpen ? "open" : "closed");
        } else if (actionSpec.type === "open") {
          isOpen = true;
          applyState("open");
        } else if (actionSpec.type === "close") {
          isOpen = false;
          applyState("closed");
        } else if (actionSpec.type === "tab_select" || interaction.category === "tabs") {
          const trig = e.currentTarget as HTMLElement | null;
          if (trig) {
            const group = trig.closest("[data-tab-group]") || trig.parentElement;
            if (group) {
              group.querySelectorAll("[data-state='open']").forEach((el) => {
                (el as HTMLElement).setAttribute("data-state", "closed");
                (el as HTMLElement).style.display = "none";
                (el as HTMLElement).classList.remove("active", "open");
              });
            }
          }
          isOpen = true;
          applyState("open");
        }
      };

      const onTriggerHover = () => {
        applyState("open");
      };

      const onTriggerLeave = () => {
        applyState("closed");
      };

      triggers.forEach((trig) => {
        if (triggerSpec.type === "click") {
          trig.addEventListener("click", onTriggerClick);
          cleanupFns.push(() => trig.removeEventListener("click", onTriggerClick));
        } else if (triggerSpec.type === "hover") {
          trig.addEventListener("mouseenter", onTriggerHover);
          trig.addEventListener("mouseleave", onTriggerLeave);
          cleanupFns.push(() => {
            trig.removeEventListener("mouseenter", onTriggerHover);
            trig.removeEventListener("mouseleave", onTriggerLeave);
          });
        }
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [interactions]);

  return null;
}
