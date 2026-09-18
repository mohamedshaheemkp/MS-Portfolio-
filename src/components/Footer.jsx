import React from 'react';

export default function Footer({ className = '' }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`site-footer ${className}`.trim()}
      style={{
        width: '100%',
        maxWidth: '1480px',
        margin: '0 auto',
        padding: '60px 24px 40px',
        color: '#fff',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      {/* Huge Display Wordmark */}
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          overflow: 'hidden',
          marginBottom: '30px',
        }}
      >
        <h1
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontSize: 'clamp(56px, 14.5vw, 220px)',
            fontWeight: 700,
            lineHeight: 0.8,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#fff',
            margin: 0,
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          MHD SHM KP
        </h1>
      </div>

      {/* Bottom Metadata Bar */}
      <div
        style={{
          borderTop: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: '"Clash Display", sans-serif',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          color: '#808080',
        }}
      >
        <a
          href="https://instagram.com/mhd_shm__"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#888',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#888';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          ©2026 MHD_SHM__
        </a>

        <button
          onClick={scrollToTop}
          type="button"
          style={{
            background: 'none',
            border: 'none',
            color: '#888',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            cursor: 'pointer',
            padding: 0,
            borderBottom: '1px solid transparent',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#888';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          BACK TO TOP
        </button>
      </div>
    </footer>
  );
}
