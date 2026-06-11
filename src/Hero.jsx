import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothScrollTo } from './lenis'

// ─── Navigation ───────────────────────────────────────────────────────────────
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Portfolio', 'Process', 'Pricing', 'Contact']

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#FFFFFF',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid #EFEFEF',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); smoothScrollTo('hero', -64) }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img
            src="/images/zouse..png"
            alt="Zouse"
            className="nav-logo"
            style={{
              width: 180,
              height: 48,
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
              flexShrink: 0,
              imageRendering: 'auto',
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: 36 }}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo(item.toLowerCase(), -64)
              }}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#555555',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#111111')}
              onMouseLeave={(e) => (e.target.style.color = '#555555')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="desktop-nav">
          <a
            id="nav-book-call"
            href="https://calendly.com/zouse/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 10,
              background: '#111111',
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'background 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#222222'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#111111'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Book Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: '#111111',
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span
              style={{
                display: 'block',
                height: 1.5,
                background: '#111111',
                borderRadius: 2,
                transformOrigin: 'center',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: mobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                height: 1.5,
                background: '#111111',
                borderRadius: 2,
                transition: 'opacity 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                height: 1.5,
                background: '#111111',
                borderRadius: 2,
                transformOrigin: 'center',
                transition: 'transform 0.3s ease',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              overflow: 'hidden',
              background: '#FFFFFF',
              borderBottom: '1px solid #EAEAEA',
            }}
            className="mobile-menu"
          >
            <div style={{ padding: '16px 32px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileOpen(false)
                    smoothScrollTo(item.toLowerCase(), -64)
                  }}
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#333333',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://calendly.com/zouse/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'inline-block',
                  marginTop: 8,
                  padding: '12px 20px',
                  borderRadius: 10,
                  background: '#111111',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Book Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// ─── Browser Mockup ───────────────────────────────────────────────────────────
function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      style={{
        width: '100%',
        maxWidth: 460,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.07)',
        background: '#ffffff',
      }}
    >
      {/* Browser Chrome */}
      <div
        style={{
          background: '#F5F5F5',
          borderBottom: '1px solid #E8E8E8',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((color, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: color,
                opacity: 0.9,
              }}
            />
          ))}
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: '#EBEBEB',
            borderRadius: 6,
            padding: '5px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#999" strokeWidth="1.5" />
            <path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 12, color: '#777', fontFamily: 'Inter, sans-serif', letterSpacing: 0 }}>
            zouse.co/work
          </span>
        </div>
      </div>

      {/* Page Content */}
      <div style={{ background: '#ffffff' }}>
        {/* Page Nav */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid #F0F0F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 18, height: 18, background: '#111', borderRadius: 4 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              zouse.
            </span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Work', 'Services', 'About'].map((l) => (
              <span key={l} style={{ fontSize: 11, color: '#888', fontFamily: 'Inter, sans-serif' }}>{l}</span>
            ))}
          </div>
          <div style={{ background: '#111', color: '#fff', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, padding: '5px 12px', borderRadius: 6 }}>
            Get Started
          </div>
        </div>

        {/* Hero Area */}
        <div style={{ padding: '32px 24px 24px' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: 9,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#555',
              background: '#F5F5F5',
              border: '1px solid #E5E5E5',
              padding: '4px 10px',
              borderRadius: 20,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Case Study — SaaS Platform
          </div>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#111',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginBottom: 10,
            }}
          >
            From 2% to 11%<br />Conversion Rate
          </h2>
          <p style={{ fontSize: 11, color: '#888', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, maxWidth: 340, marginBottom: 20 }}>
            A full landing page redesign that tripled signups in 30 days — without changing the product.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            {[
              { val: '+450%', label: 'Signups' },
              { val: '11.2%', label: 'Conv. Rate' },
              { val: '30d', label: 'Delivery' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  background: '#F8F8F8',
                  border: '1px solid #EEEEEE',
                  borderRadius: 10,
                  padding: '10px 12px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 9, color: '#999', fontFamily: 'Inter, sans-serif', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Page screenshot preview — simulated sections */}
          <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #EEEEEE' }}>
            {/* Simulated navbar */}
            <div style={{ background: '#111', padding: '8px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, background: '#fff', opacity: 0.8, borderRadius: 2 }} />
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', height: 6, borderRadius: 3 }} />
              <div style={{ width: 40, height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 3 }} />
            </div>
            {/* Hero area */}
            <div style={{ background: '#fafafa', padding: '16px 16px 12px', borderBottom: '1px solid #EEE' }}>
              <div style={{ width: '60%', height: 10, background: '#E5E5E5', borderRadius: 4, marginBottom: 8 }} />
              <div style={{ width: '80%', height: 16, background: '#222', borderRadius: 4, marginBottom: 6 }} />
              <div style={{ width: '70%', height: 16, background: '#222', borderRadius: 4, marginBottom: 10 }} />
              <div style={{ width: '55%', height: 8, background: '#CCC', borderRadius: 4, marginBottom: 12 }} />
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ width: 80, height: 22, background: '#111', borderRadius: 6 }} />
                <div style={{ width: 70, height: 22, background: '#F0F0F0', border: '1px solid #DDD', borderRadius: 6 }} />
              </div>
            </div>
            {/* Feature row */}
            <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', gap: 8 }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: '#F8F8F8',
                    border: '1px solid #EEE',
                    borderRadius: 8,
                    padding: '8px',
                  }}
                >
                  <div style={{ width: 16, height: 16, background: '#E5E5E5', borderRadius: 4, marginBottom: 6 }} />
                  <div style={{ width: '80%', height: 6, background: '#DDD', borderRadius: 3, marginBottom: 4 }} />
                  <div style={{ width: '60%', height: 5, background: '#E8E8E8', borderRadius: 3 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Stars Component ──────────────────────────────────────────────────────────
function Stars() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#111111">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
    }),
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #ffffff !important;
          color: #111111;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #ffffff; }
        ::-webkit-scrollbar-thumb { background: #DDDDDD; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #BBBBBB; }

        ::selection { background: rgba(0,0,0,0.1); color: #111; }

        .hero-section {
          background: #ffffff;
          padding-top: 64px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 32px 80px;
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 72px;
          align-items: center;
          width: 100%;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          max-width: 580px;
        }

        .hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #F5F5F5;
          border: 1px solid #E5E5E5;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: #333333;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.01em;
          width: fit-content;
          margin-bottom: 28px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #111111;
          flex-shrink: 0;
        }

        .hero-headline {
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #111111;
          font-family: 'Inter', sans-serif;
          margin-bottom: 24px;
        }

        .hero-subheadline {
          font-size: 17px;
          line-height: 1.65;
          color: #666666;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          max-width: 460px;
          margin-bottom: 40px;
          letter-spacing: -0.01em;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: 12px;
          background: #111111;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          border: none;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary:hover {
          background: #222222;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: 12px;
          background: transparent;
          color: #333333;
          font-size: 15px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          border: 1px solid #DDDDDDD;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
          border: 1px solid #DDDDDD;
        }

        .btn-secondary:hover {
          background: #F5F5F5;
          border-color: #C5C5C5;
          transform: translateY(-1px);
        }

        .btn-secondary:active {
          transform: translateY(0);
        }

        .trust-bar {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .trust-text {
          font-size: 13px;
          color: #888888;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .trust-text strong {
          color: #444444;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 60px 24px;
          }

          .hero-right {
            justify-content: center;
          }

          .hero-left {
            max-width: 100%;
          }

          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: block !important;
          }

          .nav-logo {
            width: 140px !important;
            height: 38px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-inner {
            padding: 48px 20px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <Navigation />

      <section id="hero" className="hero-section">
        {/* Subtle noise texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.018,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />

        <div className="hero-inner">
          {/* ── Left Column ── */}
          <div className="hero-left">
            {/* Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.05}
              variants={fadeUp}
            >
              <div className="badge">
                <span className="badge-dot" />
                Conversion-Focused Landing Pages
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hero-headline"
              initial="hidden"
              animate="visible"
              custom={0.15}
              variants={fadeUp}
            >
              Your Last Agency Built A Website.<br />
              <span style={{ color: '#777777' }}>We Build Revenue Systems.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="hero-subheadline"
              initial="hidden"
              animate="visible"
              custom={0.25}
              variants={fadeUp}
            >
              Most agencies stop at design. We combine strategy, copy, UX, and development to create landing pages that help businesses launch products, sell courses, and generate more customers.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="hero-buttons"
              initial="hidden"
              animate="visible"
              custom={0.35}
              variants={fadeUp}
            >
              <a
                id="hero-book-call"
                href="https://calendly.com/zouse/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Free Strategy Call
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                id="hero-view-portfolio"
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('portfolio', -64) }}
                className="btn-secondary"
              >
                View Portfolio
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.45}
              variants={fadeUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginTop: '16px',
                marginBottom: '40px',
                width: '100%'
              }}
            >
              {[
                { label: 'Conversion-Focused' },
                { label: 'Built By Technical Founders' },
                { label: 'Fast Launch Cycles' },
                { label: 'Revenue-Driven Decisions' }
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#222', fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Curiosity Trigger */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.55}
              variants={fadeUp}
            >
              <a
                href="#process"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('process', -64) }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#666',
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#111'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  ↓
                </motion.div>
                See how we do it
              </a>
            </motion.div>
          </div>

          {/* ── Right Column — Browser Mockup ── */}
          <div className="hero-right">
            <BrowserMockup />
          </div>
        </div>

        {/* Subtle bottom divider */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: '#EEEEEE',
            pointerEvents: 'none',
          }}
        />
      </section>
    </>
  )
}
