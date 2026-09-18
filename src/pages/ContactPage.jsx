import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', position: 'relative' }}>
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
            <span style={{ color: '#ffffff' }}>//RING A BELL!</span>
            <span style={{ color: '#808080' }}>GET IN TOUCH</span>
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(32px, 5vw, 80px)',
            alignItems: 'start',
            marginBottom: 'clamp(50px, 8vw, 100px)',
          }}
        >
          {/* Left Column: Headings & Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h1
                style={{
                  fontFamily: '"Clash Display", sans-serif',
                  fontSize: 'clamp(44px, 7vw, 90px)',
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: '-1.5px',
                  textTransform: 'uppercase',
                  margin: '0 0 20px',
                }}
              >
                RING A BELL!
              </h1>
              <p
                style={{
                  fontFamily: '"Inter Display", sans-serif',
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  lineHeight: 1.5,
                  color: '#888',
                  maxWidth: '520px',
                  margin: 0,
                }}
              >
                Have an idea, product, visual concept, or AI problem to explore? Let's turn it into something useful, expressive, and well-built.
              </p>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3
                style={{
                  fontFamily: '"Inter Display", sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '20px',
                }}
              >
                START A CONVERSATION
              </h3>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid #333',
                    borderRadius: '12px',
                    padding: '30px',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: '"Clash Display", sans-serif', fontSize: '24px', fontWeight: 600, margin: '0 0 10px' }}>
                    MESSAGE RECEIVED
                  </p>
                  <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>
                    Thanks for reaching out, {formData.name}. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid #222',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: '"Inter Display", sans-serif',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#555')}
                    onBlur={(e) => (e.target.style.borderColor = '#222')}
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid #222',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: '"Inter Display", sans-serif',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#555')}
                    onBlur={(e) => (e.target.style.borderColor = '#222')}
                  />

                  <textarea
                    rows={5}
                    placeholder="What are you working on?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid #222',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: '"Inter Display", sans-serif',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#555')}
                    onBlur={(e) => (e.target.style.borderColor = '#222')}
                  />

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '16px',
                      backgroundColor: '#fff',
                      color: '#000',
                      border: 'none',
                      borderRadius: '10px',
                      fontFamily: '"Inter Display", sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      transition: 'transform 0.15s, opacity 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    SEND
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Thermal / Negative Blue Image with PRELUDE tag */}
          <div
            style={{
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#0a0a0a',
              border: '1px solid #222',
              aspectRatio: '4 / 5',
              maxHeight: '680px',
            }}
          >
            <img
              src="/images/Ui4MkYuzQtGUxcLVZLJhr6I0DJk.webp"
              alt="Mohamed Shaheem visual"
              onError={(e) => {
                const fallback = 'https://framerusercontent.com/images/Ui4MkYuzQtGUxcLVZLJhr6I0DJk.webp?width=8438&height=11250';
                if (e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                fontFamily: '"Inter Display", sans-serif',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              }}
            >
              PRELUDE
            </div>
          </div>
        </div>

        {/* 4 Metadata Columns (Follow Me, Location, Phone, Email) */}
        <div
          style={{
            borderTop: '1px solid #222',
            paddingTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            fontFamily: '"Inter Display", sans-serif',
          }}
        >
          {/* Column 1: Follow Me */}
          <div>
            <p style={{ color: '#666', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', margin: '0 0 16px' }}>
              FOLLOW ME
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ fontSize: '11px', opacity: 0.6 }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Current Location */}
          <div>
            <p style={{ color: '#666', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', margin: '0 0 16px' }}>
              CURRENT LOCATION
            </p>
            <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600, margin: 0 }}>
              KERALA, INDIA
            </p>
          </div>

          {/* Column 3: Phone */}
          <div>
            <p style={{ color: '#666', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', margin: '0 0 16px' }}>
              PHONE
            </p>
            <a
              href="tel:+918590152303"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                display: 'block',
              }}
            >
              IND &nbsp; +91 8590152303
            </a>
          </div>

          {/* Column 4: Email */}
          <div>
            <p style={{ color: '#666', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', margin: '0 0 16px' }}>
              EMAIL ME
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a
                href="mailto:20mhd01@gmail.com"
                style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
              >
                20MHD01@GMAIL.COM
              </a>
              <a
                href="mailto:mshpstudios@gmail.com"
                style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
              >
                MSHPSTUDIOS@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
