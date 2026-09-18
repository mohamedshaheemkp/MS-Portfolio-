import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import ImageCarousel from '../components/ImageCarousel';

export default function NotFoundPage() {
  return (
    <main
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Nav />

      {/* Middle Hero: 404 Heading & Back to Home */}
      <section
        style={{
          width: '100%',
          maxWidth: '1480px',
          margin: '0 auto',
          padding: 'clamp(40px, 8vw, 100px) 24px 40px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <p
          style={{
            fontFamily: '"Inter Display", sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '16px',
          }}
        >
          PAGE NOT FOUND
        </p>

        <h1
          style={{
            fontFamily: '"Clash Display", sans-serif',
            fontSize: 'clamp(48px, 11vw, 130px)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '-2.5px',
            textTransform: 'uppercase',
            margin: '0 0 36px',
          }}
        >
          404-PAGE
          <br />
          NOT FOUND
        </h1>

        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 32px',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '60px',
            textDecoration: 'none',
            fontFamily: '"Inter Display", sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          BACK TO HOME
        </Link>
      </section>

      {/* Bottom Thumbnail Strip matching Screenshot 1 */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <ImageCarousel showPrelude={true} />
      </div>
    </main>
  );
}
