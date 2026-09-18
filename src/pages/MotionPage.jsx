import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import LetsBuildSomething from '../components/LetsBuildSomething';
import Footer from '../components/Footer';

const works = [
  {
    id: 'masked-guy',
    title: 'Masked Guy',
    date: 'AUGUST 25, 2026',
    src: '/images/xNFcwXl0xIj92UObieXlFxr1hQ_height_scale-down-to_width.jpg',
    showPrelude: true,
    link: '#',
  },
  {
    id: 'blue-flame',
    title: 'Blue Flame',
    date: 'MARCH 26, 2026',
    src: '/images/RIs7Y2Xnf9NhU4MzJa2nJGilHcA_height_width.png',
    fallbackSrc: '/assets/Logo/logo 2.webp',
    isBlueFlame: true,
    link: '#',
  },
  {
    id: 'royal-gryphon',
    title: 'Royal Gryphon',
    date: 'NOVEMBER 12, 2026',
    src: '/images/royal_gryphon_gold.png',
    fallbackSrc: '/assets/branding/Royal gryphon logo branding.png',
    link: '#',
  },
  {
    id: 'motion-design',
    title: 'Motion Design',
    date: 'SEPTEMBER 7, 2026',
    src: '/images/5fgl0gRzqhZSfPyiQ966dhf13g_height_scale-down-to_width.png',
    link: '#',
  },
];

export default function MotionPage() {
  return (
    <main
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Nav />

      <section
        style={{
          width: '100%',
          maxWidth: '1480px',
          margin: '0 auto',
          padding: 'clamp(50px, 7vw, 90px) clamp(20px, 4vw, 40px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* 1. Header Bar */}
        <div style={{ width: '100%', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
              marginBottom: '16px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '0 4px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontFamily: '"Clash Display", sans-serif',
            }}
          >
            <span style={{ color: '#808080' }}>01</span>
            <span style={{ color: '#ffffff' }}>//LATEST WORKS</span>
            <span style={{ color: '#808080' }}>CREATIVE SHOWCASE</span>
          </div>
        </div>

        {/* 2. Main Title */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <h1
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontSize: 'clamp(48px, 9vw, 110px)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0 0 16px 0',
            }}
          >
            LATEST
            <br />
            WORKS
          </h1>
        </div>

        {/* 3. Works Grid */}
        <div className="latest-works-grid">
          {works.map((work) => (
            <div
              key={work.id}
              className="latest-work-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Media Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1.25 / 1',
                  backgroundColor: '#050505',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {work.isBlueFlame ? (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '30px',
                    }}
                  >
                    <img
                      src={work.fallbackSrc}
                      alt={work.title}
                      loading="lazy"
                      style={{
                        maxWidth: '75%',
                        maxHeight: '75%',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                ) : (
                  <img
                    src={work.src}
                    alt={work.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: work.id === 'royal-gryphon' ? 'contain' : 'cover',
                      padding: work.id === 'royal-gryphon' ? '24px' : '0',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    onError={(e) => {
                      if (work.fallbackSrc && e.currentTarget.src !== work.fallbackSrc) {
                        e.currentTarget.src = work.fallbackSrc;
                      }
                    }}
                  />
                )}

                {/* PRELUDE Badge if present */}
                {work.showPrelude && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      borderRadius: '100px',
                      padding: '4px 14px',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      fontFamily: '"Clash Display", sans-serif',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      zIndex: 2,
                    }}
                  >
                    PRELUDE
                  </div>
                )}
              </div>

              {/* Bottom Metadata Bar */}
              <div
                style={{
                  padding: '18px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                  backgroundColor: '#000000',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: '"Clash Display", sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      margin: '0 0 3px 0',
                      color: '#ffffff',
                    }}
                  >
                    {work.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Clash Display", sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#808080',
                      margin: 0,
                    }}
                  >
                    {work.date}
                  </p>
                </div>

                <div
                  style={{
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5M19 5H9M19 5V15" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Responsive CSS */}
      <style>{`
        .latest-works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) and (min-width: 681px) {
          .latest-works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 680px) {
          .latest-works-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* 4. Lets Build Something & Footer */}
      <LetsBuildSomething />
      <Footer />
    </main>
  );
}
