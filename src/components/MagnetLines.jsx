import { useRef, useEffect } from 'react';

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('span');

    const onPointerMove = pointer => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty('--rotate', `${r}deg`);
      });
    };

    window.addEventListener('pointermove', onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [rows, columns]);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        '--rotate': `${baseAngle}deg`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight
      }}
    />
  ));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .magnetLines-container {
          display: grid;
          justify-items: center;
          align-items: center;
        }
        .magnetLines-container span {
          display: block;
          transform-origin: center;
          will-change: transform;
          transform: rotate(var(--rotate));
          border-radius: 4px;
          transition: background-color 0.3s;
        }
      `}} />
      <div
        ref={containerRef}
        className={`magnetLines-container ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: containerSize,
          height: containerSize,
          ...style
        }}
      >
        {spans}
      </div>
    </>
  );
}
