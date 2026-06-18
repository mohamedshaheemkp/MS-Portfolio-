import { useRef, useEffect } from "react";

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "100%",
  lineColor = "#ef4444",
  lineWidth = "1vmin",
  lineHeight = "5vmin",
  baseAngle = -10,
  className = "",
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".magnet-item");

    const onPointerMove = (e) => {
      const pointerX = e.clientX;
      const pointerY = e.clientY;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top + itemRect.height / 2;

        const deltaX = pointerX - itemCenterX;
        const deltaY = pointerY - itemCenterY;
        
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        item.style.transform = `rotate(${angle}deg)`;
      });
    };

    const onPointerLeave = () => {
      items.forEach((item) => {
        item.style.transform = `rotate(${baseAngle}deg)`;
      });
    };

    window.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [baseAngle]);

  const totalLines = rows * columns;
  
  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        width: containerSize,
        height: containerSize,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        ...style
      }}
    >
      {Array.from({ length: totalLines }).map((_, i) => (
        <div
          key={i}
          className="magnet-item flex items-center justify-center transition-transform duration-200 ease-out will-change-transform"
          style={{
            width: lineHeight,
            height: lineHeight,
            transform: `rotate(${baseAngle}deg)`
          }}
        >
          <div 
            style={{
              width: lineHeight,
              height: lineWidth,
              backgroundColor: lineColor,
              borderRadius: "9999px"
            }}
          />
        </div>
      ))}
    </div>
  );
}
