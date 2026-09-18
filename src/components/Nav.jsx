import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{time || '12:00:00'}</span>;
}

export default function Nav({ className = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/', number: '01' },
    { label: 'WORK', path: '/work', number: '02' },
    { label: 'DESIGNS', path: '/designs', number: '03' },
    { label: 'MOTION', path: '/motion', number: '04' },
    { label: 'CONTACT', path: '/contact', number: '05' },
  ];

  return (
    <>
      <div className={`nav framer-honat9-container ${className}`.trim()} id="nav" style={{ position: 'relative', zIndex: 100 }}>
        <header
          className="framer-VfUsu framer-JaF0z framer-1g1k8bh"
          style={{ maxWidth: '100%', width: '100%', opacity: 1, transform: 'none' }}
        >
          <nav className="framer-1avybgd" style={{ opacity: 1 }}>
            {/* Left: Local Time */}
            <div className="framer-esq0w5" style={{ opacity: 1 }}>
              <div className="framer-p3rjyr" style={{ opacity: 1 }}>
                <div className="framer-1mwo9jn">
                  <p className="framer-text framer-styles-preset-1pltaoo">LOCAL/</p>
                </div>
                <div className="framer-xq0qzw" style={{ opacity: 1 }}>
                  <div className="framer-1g5zllm-container" style={{ opacity: 1 }}>
                    <p
                      style={{
                        margin: '0px',
                        padding: '0px',
                        color: 'var(--token-c46abb9d-0d10-414f-ba99-89efb980d54d, rgb(255, 255, 255))',
                        fontFamily: '"Clash Display", sans-serif',
                        fontWeight: '500',
                        fontSize: '18px',
                        lineHeight: '1em',
                        letterSpacing: '0em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <LiveClock />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: 4-Dot Menu Icon Button */}
            <div className="framer-b8uprp" style={{ opacity: 1 }}>
              <div className="framer-moa0hf-container" style={{ opacity: 1 }}>
                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle navigation menu"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="framer-zecFa"
                    style={{
                      height: '18px',
                      width: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transform: menuOpen ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }} />
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }} />
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }} />
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Contact Now Pill Button */}
            <div className="framer-trtkbh" style={{ opacity: 1 }}>
              <div className="framer-18gq6xc-container" style={{ opacity: 1 }}>
                <Link
                  to="/contact"
                  className="framer-qrplR framer-7M8GE framer-liux0 framer-1gcal0g framer-v-u4uepu"
                  style={{
                    border: '1px solid #333',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderRadius: '60px',
                    opacity: 1,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 20px',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                >
                  <div className="framer-t486yd">
                    <h6
                      className="framer-text framer-styles-preset-h7dwia"
                      style={{
                        margin: 0,
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        fontFamily: '"Inter Display", sans-serif',
                      }}
                    >
                      CONTACT NOW
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
          <div className="framer-1h01zum" style={{ backgroundColor: 'rgb(22, 22, 22)', opacity: 1, height: '1px', width: '100%' }} />
        </header>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 5, 5, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px 30px',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: '"Clash Display", sans-serif', fontSize: '20px', fontWeight: 600, color: '#fff' }}>
              MHD SHM KP
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'transparent',
                border: '1px solid #333',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '60px',
                fontFamily: 'monospace',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              [ CLOSE × ]
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: 'auto 0' }}>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '24px',
                    textDecoration: 'none',
                    color: isActive ? '#fff' : '#666',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#fff' : '#666')}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '14px', color: '#888' }}>{item.number}</span>
                  <span
                    style={{
                      fontFamily: '"Clash Display", sans-serif',
                      fontSize: 'clamp(36px, 7vw, 72px)',
                      fontWeight: 700,
                      letterSpacing: '-1px',
                    }}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fff' }} />
                  )}
                </Link>
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #1a1a1a',
              paddingTop: '20px',
              fontFamily: 'monospace',
              fontSize: '12px',
              color: '#888',
            }}
          >
            <span>BASED IN KERALA, INDIA</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="https://instagram.com/mhd_shm__" target="_blank" rel="noreferrer" style={{ color: '#888', textDecoration: 'none' }}>
                INSTAGRAM
              </a>
              <a href="https://github.com/mohamedshaheemkp" target="_blank" rel="noreferrer" style={{ color: '#888', textDecoration: 'none' }}>
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/mohamed-shaheem-91a895331" target="_blank" rel="noreferrer" style={{ color: '#888', textDecoration: 'none' }}>
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
