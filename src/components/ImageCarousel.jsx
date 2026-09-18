import React from 'react';

const carouselItems = [
  {
    id: 'hiker',
    title: 'mountain man',
    src: '/images/s7iqkfVzTuG74ge0tLHWUQAbbVU_6510.jpg',
    fallback: 'https://framerusercontent.com/images/s7iqkfVzTuG74ge0tLHWUQAbbVU.jpg?width=3024&height=4032',
    hasPrelude: true,
  },
  {
    id: 'masked-guy',
    title: 'cool guy',
    src: '/images/XP2KBsEESakwgRb5HeHRBVSa0_2405.webp',
    fallback: 'https://framerusercontent.com/images/XP2KBsEESakwgRb5HeHRBVSa0.webp?width=4050&height=5400',
  },
  {
    id: 'royal-gryphon',
    title: 'royal gryphon',
    src: '/images/2Brdua3nlWJNOJwnjUnjYuZcU_9929.webp',
    fallback: 'https://framerusercontent.com/images/2Brdua3nlWJNOJwnjUnjYuZcU.webp?width=11760&height=8400',
  },
  {
    id: 'graficoy',
    title: 'graficoy letter grid',
    src: '/images/uVq5pFqNq5kBIVHElRAuGv7bo_6641.webp',
    fallback: 'https://framerusercontent.com/images/uVq5pFqNq5kBIVHElRAuGv7bo.webp?width=3264&height=3258',
  },
];

export default function ImageCarousel({ showPrelude = false, className = '' }) {
  return (
    <section
      className={`image-carousel ${className}`.trim()}
      style={{
        width: '100%',
        maxWidth: '1480px',
        margin: '0 auto',
        padding: '40px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          padding: '0 24px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {carouselItems.map((item, idx) => (
          <div
            key={item.id + idx}
            style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 28vw, 360px)',
              height: 'clamp(200px, 20vw, 250px)',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#111',
              border: '1px solid #222',
              scrollSnapAlign: 'start',
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              onError={(e) => {
                if (item.fallback && e.currentTarget.src !== item.fallback) {
                  e.currentTarget.src = item.fallback;
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {showPrelude && idx === carouselItems.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '20px',
                  padding: '4px 10px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  fontFamily: '"Inter Display", sans-serif',
                }}
              >
                PRELUDE
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
