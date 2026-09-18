import React from 'react';
import Nav from '../components/Nav';
import LetsBuildSomething from '../components/LetsBuildSomething';
import Footer from '../components/Footer';

export default function DesignsPage() {
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
            <span style={{ color: '#ffffff' }}>//DESIGN CABINET</span>
            <span style={{ color: '#808080' }}>VISUAL ARCHIVE</span>
          </div>
        </div>

        {/* 2. Main Display Title */}
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
            DESIGN
            <br />
            CABINET
          </h1>
        </div>

        {/* 3. Top Wide Hero Showcase Card */}
        <div
          className="design-card"
          style={{
            width: '100%',
            aspectRatio: '2.6 / 1',
            minHeight: '260px',
            maxHeight: '560px',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#0a0a0a',
            border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
            marginBottom: '24px',
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
          <img
            src="/images/Zb34vb5eO5O5aWZGmaF0UJ2DOo_height_width.png"
            alt="Design Cabinet Cinematic Silhouette"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onError={(e) => {
              e.currentTarget.src = '/assets/cinem.webp';
            }}
          />
          {/* PRELUDE Pill Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              fontFamily: '"Clash Display", sans-serif',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              zIndex: 2,
            }}
          >
            PRELUDE
          </div>
        </div>

        {/* 4. Bento Grid Layout */}
        <div className="cabinet-bento-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Row 1: 2 Equal Columns (Royal Gryphon Logo & Graficoy Stationery) */}
          <div className="cabinet-row-2col">
            {/* Card 1: Royal Gryphon Gold Logo */}
            <div
              className="design-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                aspectRatio: '1.45 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '36px',
                position: 'relative',
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
              <img
                src="/images/royal_gryphon_gold.png"
                alt="Royal Gryphon Gold Emblem"
                loading="lazy"
                style={{
                  maxWidth: '85%',
                  maxHeight: '85%',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onError={(e) => {
                  e.currentTarget.src = '/images/2Brdua3nlWJNOJwnjUnjYuZcU_height_scale-down-to_width.webp';
                }}
              />
            </div>

            {/* Card 2: Graficoy Business Cards Collateral */}
            <div
              className="design-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                aspectRatio: '1.45 / 1',
                position: 'relative',
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
              <img
                src="/images/uVq5pFqNq5kBIVHElRAuGv7bo_height_scale-down-to_width.webp"
                alt="Graficoy Stationery Mockup"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onError={(e) => {
                  e.currentTarget.src = '/assets/Logo/brand 3.webp';
                }}
              />
            </div>
          </div>

          {/* Row 2: Asymmetrical 2 Columns (Left: 2 stacked cards, Right: Tall Yellow Poster) */}
          <div className="cabinet-row-asym-left">
            {/* Left Stack: Pattern Tile + Honda Civic Rear Car */}
            <div className="cabinet-stack-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Pattern Tile Card */}
              <div
                className="design-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  backgroundImage: "url('/images/cwystgbR5sATAcqKgudjWjj58G4_height_width.png')",
                  backgroundRepeat: 'repeat',
                  backgroundSize: '76px 76px',
                  backgroundPosition: 'center',
                  border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                  aspectRatio: '2.1 / 1',
                  minHeight: '180px',
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
              />

              {/* Honda Civic Rear Car Card */}
              <div
                className="design-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                  aspectRatio: '2.1 / 1',
                  minHeight: '180px',
                  position: 'relative',
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
                <img
                  src="/images/zS2MXOk0EU9JSBcwFsHvNO5GM_height_width.jpg"
                  alt="Honda Civic Automotive Identity"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/branding/revoro Branding.png';
                  }}
                />
              </div>
            </div>

            {/* Right: Tall Masked Letter Grid Yellow Poster */}
            <div
              className="design-card cabinet-tall-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                position: 'relative',
                display: 'flex',
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
              <img
                src="/images/TFtD9IFetmRsHaSrjOSSLyIuySE_height_scale-down-to_width.png"
                alt="Masked Letter Grid Poster"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onError={(e) => {
                  e.currentTarget.src = 'https://framerusercontent.com/images/TFtD9IFetmRsHaSrjOSSLyIuySE.png';
                }}
              />
            </div>
          </div>

          {/* Row 3: Full Width KFC Twin Round Badges */}
          <div
            className="design-card"
            style={{
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#0a0a0a',
              border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
              aspectRatio: '2.5 / 1',
              minHeight: '200px',
              maxHeight: '440px',
              position: 'relative',
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
            <img
              src="/images/Riejk5lw2lDNZ4hXmGWKrFsSs_height_scale-down-to_width.png"
              alt="KFC Arts & Sports Club Badges"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onError={(e) => {
                e.currentTarget.src = '/assets/Logo/KFC logo branding.png';
              }}
            />
          </div>

          {/* Row 4: Asymmetrical 2 Columns (Left: Tall Icarus Canvas, Right: 2 stacked cards) */}
          <div className="cabinet-row-asym-right">
            {/* Left: Tall Blue Icarus Portrait Canvas */}
            <div
              className="design-card cabinet-tall-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                position: 'relative',
                display: 'flex',
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
              <img
                src="/images/mACFFsB93mCXDH4chyLfkM3mIkU_height_scale-down-to_width.webp"
                alt="Shaheem Icarus Canvas"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onError={(e) => {
                  e.currentTarget.src = '/images/5PowIhjB0ZQS5Y0XRPSkGgAE2o8_height_scale-down-to_width.png';
                }}
              />
            </div>

            {/* Right Stack: Revoro Mods Card + Blue Flame Logo Card */}
            <div className="cabinet-stack-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Revoro Mods Card Mockup */}
              <div
                className="design-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                  aspectRatio: '2.1 / 1',
                  minHeight: '180px',
                  position: 'relative',
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
                <img
                  src="/images/Wuy1pMdbrBoYkmPp6Ky6VhqE_height_scale-down-to_width.png"
                  alt="Revoro Mods Identity Cards"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/branding/brand 2.webp';
                  }}
                />
              </div>

              {/* Blue Flame Logo Card */}
              <div
                className="design-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
                  border: '1px solid var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #161616)',
                  aspectRatio: '2.1 / 1',
                  minHeight: '180px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    justifyContent: 'center',
                    padding: '24px',
                  }}
                >
                  <img
                    src="/images/blue_flame_icon.webp"
                    alt="Blue Flame Icon"
                    loading="lazy"
                    style={{
                      width: '44px',
                      height: '44px',
                      objectFit: 'contain',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <span
                    style={{
                      fontFamily: '"Clash Display", sans-serif',
                      fontSize: 'clamp(24px, 2.5vw, 36px)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: '#0084ff',
                      textTransform: 'uppercase',
                    }}
                  >
                    BLUE FLAME
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Responsive Styles for Cabinet Grid */}
      <style>{`
        .cabinet-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .cabinet-row-asym-left {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .cabinet-row-asym-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .cabinet-tall-card {
          min-height: 100%;
        }

        @media (max-width: 860px) {
          .cabinet-row-2col,
          .cabinet-row-asym-left,
          .cabinet-row-asym-right {
            grid-template-columns: 1fr !important;
          }
          .cabinet-tall-card {
            aspect-ratio: 1.25 / 1 !important;
            min-height: 280px !important;
          }
          .design-card {
            aspect-ratio: auto !important;
            min-height: 220px !important;
          }
        }
      `}</style>

      {/* 6. Lets Build Something & Footer */}
      <LetsBuildSomething />
      <Footer />
    </main>
  );
}
