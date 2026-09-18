import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import LetsBuildSomething from '../components/LetsBuildSomething';
import Footer from '../components/Footer';

const projects = [
  {
    id: 'agriai',
    title: 'AgriAi',
    category: 'AI / MACHINE LEARNING',
    src: '/images/FfzVXiTVhERi6P0Qgym4dtbXENg_2506.png',
    fallback: 'https://framerusercontent.com/images/FfzVXiTVhERi6P0Qgym4dtbXENg.png',
    link: '/work/agriai',
  },
  {
    id: 'smart-folder-organiser',
    title: 'Smart Folder Organiser',
    category: 'PYTHON / AUTOMATION',
    src: '/images/6AOv8e9V1oMxz7iQXGJiYnwUSA_4572.png',
    fallback: 'https://framerusercontent.com/images/6AOv8e9V1oMxz7iQXGJiYnwUSA.png',
    link: '/work/smart-folder-organiser',
  },
  {
    id: 'ms-portfolio',
    title: 'MS Portfolio',
    category: 'CREATIVE DEVELOPMENT',
    src: '/images/S0kHyiz3vICnN4R0pYVPSM1Ws_8690.png',
    fallback: 'https://framerusercontent.com/images/S0kHyiz3vICnN4R0pYVPSM1Ws.png',
    link: '/work/ms-portfolio',
    isFull: true,
  },
  {
    id: 'revoro-mods',
    title: 'Revoro Mods',
    category: 'MARKETPLACE',
    src: '/images/MsMSal6iM8AnrO8gCTs1QdlIo_9741.png',
    fallback: 'https://framerusercontent.com/images/MsMSal6iM8AnrO8gCTs1QdlIo.png',
    link: '/work/revoro-mods',
  },
  {
    id: 'royal-gryphon',
    title: 'Royal Gryphon',
    category: 'MOTION / VISUAL DESIGN',
    src: '/images/2Brdua3nlWJNOJwnjUnjYuZcU_9929.webp',
    fallback: 'https://framerusercontent.com/images/2Brdua3nlWJNOJwnjUnjYuZcU.webp',
    link: '/work/royal-gryphon',
  },
];

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Nav />

      <section
        style={{
          width: '100%',
          maxWidth: '1480px',
          margin: '0 auto',
          padding: 'clamp(60px, 8vw, 110px) clamp(20px, 4vw, 40px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* 1. Header Bar */}
        <div style={{ width: '100%', marginBottom: 'clamp(40px, 6vw, 70px)' }}>
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
            <span style={{ color: '#ffffff' }}>//SELECTED WORKS</span>
            <span style={{ color: '#808080' }}>AI/ML & DESIGN</span>
          </div>
        </div>

        {/* 2. Title & Subtitle */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <h1
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontSize: 'clamp(44px, 7.5vw, 92px)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0 0 20px 0',
            }}
          >
            SELECTED
            <br />
            WORKS
          </h1>
          <p
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              lineHeight: 1.6,
              color: '#a0a0a0',
              margin: 0,
              maxWidth: '640px',
            }}
          >
            A curation of works from AI engineering to branding and interactive development.
          </p>
        </div>

        {/* 3. 2-1-2 Bento Grid */}
        <div className="selected-works-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className={`project-card-item ${project.isFull ? 'selected-works-card-full' : ''}`.trim()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                textDecoration: 'none',
                color: '#ffffff',
                transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
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
              {/* Card Image Area */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: project.isFull ? '2.05' : '1.75',
                  backgroundColor: '#0a0a0a',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  onError={(e) => {
                    if (e.currentTarget.src !== project.fallback) {
                      e.currentTarget.src = project.fallback;
                    }
                  }}
                />
              </div>

              {/* Card Bottom Metadata Bar */}
              <div
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                  backgroundColor: '#000000',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* Indicator Pill */}
                  <div
                    style={{
                      width: '6px',
                      height: '18px',
                      borderRadius: '10px',
                      backgroundColor: '#ffffff',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: '"Clash Display", sans-serif',
                        fontSize: 'clamp(18px, 1.8vw, 22px)',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        margin: '0 0 4px 0',
                        color: '#ffffff',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Clash Display", sans-serif',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#808080',
                        margin: 0,
                      }}
                    >
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 19L19 5M19 5H9M19 5V15" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <LetsBuildSomething />
      <Footer />
    </main>
  );
}
