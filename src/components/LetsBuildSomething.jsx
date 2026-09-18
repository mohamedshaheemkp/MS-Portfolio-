import React from 'react';
import { Link } from 'react-router-dom';

export default function LetsBuildSomething({ className = '' }) {
  return (
    <section
      className={`lets-build-something ${className}`.trim()}
      id="letsbuildsomething"
      style={{
        width: '100%',
        maxWidth: '1480px',
        margin: '0 auto',
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 80px)',
        color: '#fff',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* 1. Top Title & Pill Button */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'clamp(20px, 3vw, 32px)',
          marginBottom: 'clamp(40px, 6vw, 70px)',
        }}
      >
        <h2
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontSize: 'clamp(42px, 7vw, 92px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          LET'S BUILD
          <br />
          SOMETHING
        </h2>

        <Link
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 32px',
            backgroundColor: '#ffffff',
            color: '#000000',
            borderRadius: '60px',
            textDecoration: 'none',
            fontFamily: '"Clash Display", sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          GET IN TOUCH
        </Link>
      </div>

      {/* 2. Middle: Left Info | Center Portrait | Right Info */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(20px, 4vw, 60px)',
          margin: '0 auto clamp(40px, 6vw, 70px)',
          maxWidth: '1000px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Column (Desktop) */}
        <div
          className="build-meta-left"
          style={{
            textAlign: 'right',
            fontFamily: '"Clash Display", sans-serif',
            fontSize: '13px',
            flex: '1 1 180px',
          }}
        >
          <p style={{ color: '#ffffff', fontWeight: 600, margin: '0 0 4px', letterSpacing: '0.05em' }}>
            AI / DESIGN / ENGINEERING
          </p>
          <p style={{ color: '#808080', margin: 0, letterSpacing: '0.05em' }}>KERALA, INDIA</p>
        </div>

        {/* Center Portrait */}
        <div
          style={{
            width: 'clamp(220px, 24vw, 320px)',
            aspectRatio: '0.75',
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#0d0d0d',
            border: '1px solid #222222',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            flexShrink: 0,
          }}
        >
          <img
            src="/images/ib19fW5izreM9Nh33IBqZeoNkZk_4713.jpg"
            alt="Mohamed Shaheem"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
            onError={(e) => {
              const fallback = 'https://framerusercontent.com/images/ib19fW5izreM9Nh33IBqZeoNkZk.jpg';
              if (e.currentTarget.src !== fallback) {
                e.currentTarget.src = fallback;
              }
            }}
          />
        </div>

        {/* Right Column (Desktop) */}
        <div
          className="build-meta-right"
          style={{
            textAlign: 'left',
            fontFamily: '"Clash Display", sans-serif',
            fontSize: '13px',
            flex: '1 1 180px',
          }}
        >
          <p style={{ color: '#ffffff', fontWeight: 600, margin: '0 0 4px', letterSpacing: '0.05em' }}>AI DEVELOPER</p>
          <p style={{ color: '#808080', margin: 0, letterSpacing: '0.05em' }}>+ DESIGNER</p>
        </div>
      </div>

      {/* 3. Bottom: Bio & Socials */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '28px',
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: '#cccccc',
            margin: 0,
          }}
        >
          BASED IN INDIA, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE DESIGNS IS EVIDENT IN MY WORK.
        </p>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(20px, 3.5vw, 48px)',
          }}
        >
          {[
            { label: 'INSTAGRAM', href: 'https://instagram.com/mhd_shm__' },
            { label: 'GITHUB', href: 'https://github.com/mohamedshaheemkp' },
            { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mohamed-shaheem-91a895331' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: '"Clash Display", sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                paddingBottom: '4px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontSize: '12px' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
