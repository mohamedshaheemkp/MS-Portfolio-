import { forwardRef, useEffect, useMemo, useRef } from "react";
import "./VariableProximity.css";

const VariableProximity = forwardRef(function VariableProximity({
  label,
  fromFontVariationSettings,
  toFontVariationSettings,
  containerRef,
  radius = 50,
  falloff = "linear",
  className = "",
  style,
  ...restProps
}, ref) {
  const letterRefs = useRef([]);
  const frameRef = useRef(null);

  const axes = useMemo(() => {
    const parse = (value) => new Map(value.split(",").map((setting) => {
      const [name, amount] = setting.trim().split(" ");
      return [name.replace(/['"]/g, ""), Number(amount)];
    }));
    const from = parse(fromFontVariationSettings);
    const to = parse(toFontVariationSettings);
    return [...from.entries()].map(([axis, fromValue]) => ({ axis, fromValue, toValue: to.get(axis) ?? fromValue }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = (clientX, clientY) => {
      letterRefs.current.forEach((letter) => {
        if (!letter) return;
        const rect = letter.getBoundingClientRect();
        const distance = Math.hypot(clientX - (rect.left + rect.width / 2), clientY - (rect.top + rect.height / 2));
        const normalized = Math.min(Math.max(1 - distance / radius, 0), 1);
        const strength = falloff === "gaussian" ? Math.exp(-((distance / (radius / 2)) ** 2) / 2) : falloff === "exponential" ? normalized ** 2 : normalized;
        letter.style.fontVariationSettings = axes.map(({ axis, fromValue, toValue }) => `'${axis}' ${fromValue + (toValue - fromValue) * strength}`).join(", ");
      });
    };

    const reset = () => {
      letterRefs.current.forEach((letter) => {
        if (!letter) return;
        letter.style.fontVariationSettings = fromFontVariationSettings;
      });
    };

    const onPointerMove = (event) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => update(event.clientX, event.clientY));
    };

    const onPointerLeave = () => {
      cancelAnimationFrame(frameRef.current);
      reset();
    };

    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [axes, containerRef, falloff, radius, fromFontVariationSettings]);

  let letterIndex = 0;
  const words = label.split(" ");
  return (
    <span ref={ref} className={`${className} variable-proximity`} style={{ display: "inline", ...style }} {...restProps}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((letter) => {
            const index = letterIndex++;
            return <span key={index} ref={(element) => { letterRefs.current[index] = element; }} style={{ display: "inline-block", fontVariationSettings: fromFontVariationSettings }} aria-hidden="true">{letter}</span>;
          })}
          {wordIndex < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

export default VariableProximity;
