import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Case Study Data ──────────────────────────────────────────────────────────
const CASES = [
  {
    id: 'saas',
    index: '01',
    label: 'Concept Redesign — SaaS Landing Page',
    category: 'SaaS / B2B',
    challenge: 'The original page had a low signup rate. Visitors were leaving without converting because the value proposition was unclear and the page lacked visual hierarchy.',
    solution: 'Complete landing page redesign with sharpened messaging, restructured CTA placement, and a conversion-focused visual system built from the ground up.',
    results: [
      { value: 38, suffix: '%', label: 'Conversion Rate', sign: '+' },
      { value: 52, suffix: '%', label: 'Qualified Leads', sign: '+' },
      { value: 27, suffix: '%', label: 'Revenue Growth', sign: '+' },
    ],
    accentColor: '#111111',
    mockupType: 'saas',
  },
  {
    id: 'agency',
    index: '02',
    label: 'Concept Redesign — Marketing Agency',
    category: 'Agency / Services',
    challenge: 'High bounce rate and poor time-on-page metrics. Visitors couldn\'t quickly understand what the agency offered or why to choose them over competitors.',
    solution: 'Improved messaging architecture, cleaner CTA structure, and a trust-first layout that leads visitors through a clear narrative from problem to solution.',
    results: [
      { value: 44, suffix: '%', label: 'Qualified Leads', sign: '+' },
      { value: 29, suffix: '%', label: 'Bounce Rate', sign: '−' },
      { value: 31, suffix: '%', label: 'Meetings Booked', sign: '+' },
    ],
    accentColor: '#111111',
    mockupType: 'agency',
  },
  {
    id: 'ecommerce',
    index: '03',
    label: 'Concept Redesign — Ecommerce Store',
    category: 'Ecommerce / DTC',
    challenge: 'Poor product page performance with a high cart abandonment rate. The design lacked urgency, social proof, and product clarity.',
    solution: 'Conversion-focused product page redesign with streamlined purchase flow, strategic social proof placement, and trust signals at every friction point.',
    results: [
      { value: 22, suffix: '%', label: 'Revenue Increase', sign: '+' },
      { value: 35, suffix: '%', label: 'Add To Cart Rate', sign: '+' },
      { value: 18, suffix: '%', label: 'Avg. Order Value', sign: '+' },
    ],
    accentColor: '#111111',
    mockupType: 'ecommerce',
  },
]

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ value, suffix, sign }) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) {
      setDisplay(0)
      return
    }
    const duration = 1600
    const start = performance.now()
    startRef.current = start

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {sign}{display}{suffix}
    </span>
  )
}

// ─── SaaS Browser Mockup ──────────────────────────────────────────────────────
function SaaSMockup() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Browser chrome */}
      <div style={{ background: '#F2F2F2', borderBottom: '1px solid #E0E0E0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, background: '#E8E8E8', borderRadius: 5, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#AAA" strokeWidth="2"/><path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="#AAA" strokeWidth="2" strokeLinecap="round"/></svg>
          <span style={{ fontSize: 10, color: '#888', fontFamily: 'Inter, sans-serif' }}>streamflow.io</span>
        </div>
      </div>

      {/* Page content */}
      <div style={{ flex: 1, background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <div style={{ padding: '14px 28px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 22, height: 22, background: '#111', borderRadius: 6 }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>StreamFlow</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Features','Pricing','Blog'].map(l => <span key={l} style={{ fontSize: 11, color: '#888', fontFamily: 'Inter, sans-serif' }}>{l}</span>)}
          </div>
          <div style={{ background: '#111', color: '#fff', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, padding: '6px 14px', borderRadius: 7 }}>Start Free</div>
        </div>

        {/* Hero */}
        <div style={{ padding: '36px 28px 24px', background: '#FAFAFA', borderBottom: '1px solid #F0F0F0' }}>
          <div style={{ display: 'inline-block', background: '#F0F0F0', border: '1px solid #E5E5E5', borderRadius: 20, padding: '3px 10px', fontSize: 9, fontWeight: 600, color: '#555', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 14 }}>
            New — AI-Powered Analytics
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 10 }}>
            Ship faster.<br />Convert better.
          </div>
          <div style={{ fontSize: 11, color: '#888', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: 18, maxWidth: 320 }}>
            The all-in-one platform for SaaS teams who care about growth. Built for speed, designed for conversion.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ background: '#111', color: '#fff', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, padding: '8px 16px', borderRadius: 7 }}>Get Started Free</div>
            <div style={{ border: '1px solid #DDD', color: '#333', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 500, padding: '8px 16px', borderRadius: 7 }}>See Demo →</div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', padding: '16px 28px', gap: 0, borderBottom: '1px solid #F5F5F5' }}>
          {[['2,400+','Teams'],['99.9%','Uptime'],['4.9★','Rating']].map(([v, l], i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid #F0F0F0' : 'none', padding: '0 8px' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>{v}</div>
              <div style={{ fontSize: 8, color: '#AAA', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Feature blocks */}
        <div style={{ padding: '16px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {['Realtime Analytics','A/B Testing','Funnel Builder'].map((t, i) => (
            <div key={i} style={{ background: '#F8F8F8', border: '1px solid #EEEEEE', borderRadius: 10, padding: '12px' }}>
              <div style={{ width: 20, height: 20, background: '#E8E8E8', borderRadius: 5, marginBottom: 8 }} />
              <div style={{ fontSize: 10, fontWeight: 600, color: '#111', fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>{t}</div>
              <div style={{ width: '80%', height: 4, background: '#E5E5E5', borderRadius: 2, marginBottom: 3 }} />
              <div style={{ width: '60%', height: 4, background: '#EEEEEE', borderRadius: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Agency Mockup ────────────────────────────────────────────────────────────
function AgencyMockup() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#F2F2F2', borderBottom: '1px solid #E0E0E0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, background: '#E8E8E8', borderRadius: 5, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#AAA" strokeWidth="2"/><path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="#AAA" strokeWidth="2" strokeLinecap="round"/></svg>
          <span style={{ fontSize: 10, color: '#888', fontFamily: 'Inter, sans-serif' }}>elevateco.agency</span>
        </div>
      </div>
      <div style={{ flex: 1, background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Nav */}
        <div style={{ padding: '14px 28px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.04em' }}>elevate.</span>
          <div style={{ display: 'flex', gap: 18 }}>
            {['Work','Services','About','Contact'].map(l => <span key={l} style={{ fontSize: 11, color: '#888', fontFamily: 'Inter, sans-serif' }}>{l}</span>)}
          </div>
          <div style={{ border: '1.5px solid #111', color: '#111', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, padding: '6px 14px', borderRadius: 7 }}>Book A Call</div>
        </div>

        {/* Big hero */}
        <div style={{ padding: '32px 28px 20px' }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: '#AAA', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 18, height: 1, background: '#CCC' }} />
            Growth-Focused Agency
          </div>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#111', fontFamily: 'Inter, sans-serif', lineHeight: 1.0, letterSpacing: '-0.05em', marginBottom: 12 }}>
            We turn traffic<br />into revenue.
          </div>
          <div style={{ fontSize: 11, color: '#777', fontFamily: 'Inter, sans-serif', lineHeight: 1.65, maxWidth: 340, marginBottom: 20 }}>
            Strategy, design, and copy that doesn't just look good — it converts. We've helped 40+ companies grow their pipeline.
          </div>

          {/* Social proof row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ display: 'flex' }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: ['#E8E8E8','#DDD','#D0D0D0','#C8C8C8'][i], border: '2px solid #fff', marginLeft: i > 0 ? -7 : 0 }} />
              ))}
            </div>
            <span style={{ fontSize: 10, color: '#666', fontFamily: 'Inter, sans-serif' }}>Trusted by <strong>40+ companies</strong></span>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ background: '#111', color: '#fff', fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, padding: '8px 16px', borderRadius: 7 }}>See Our Work →</div>
            <div style={{ fontSize: 10, color: '#888', fontFamily: 'Inter, sans-serif', fontWeight: 500, padding: '8px 0', display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#999" strokeWidth="2"/><path d="M10 8l4 4-4 4" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Watch video
            </div>
          </div>
        </div>

        {/* Services strip */}
        <div style={{ padding: '14px 28px', background: '#FAFAFA', borderTop: '1px solid #F0F0F0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {['Paid Ads Strategy','Landing Page Design','Email Funnels','Brand Positioning'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#fff', border: '1px solid #EEEEEE', borderRadius: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#111' }} />
              <span style={{ fontSize: 9.5, color: '#333', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Ecommerce Mockup ─────────────────────────────────────────────────────────
function EcommerceMockup() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#F2F2F2', borderBottom: '1px solid #E0E0E0', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, background: '#E8E8E8', borderRadius: 5, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#AAA" strokeWidth="2"/><path d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" stroke="#AAA" strokeWidth="2" strokeLinecap="round"/></svg>
          <span style={{ fontSize: 10, color: '#888', fontFamily: 'Inter, sans-serif' }}>lumenshop.co</span>
        </div>
      </div>
      <div style={{ flex: 1, background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Nav */}
        <div style={{ padding: '12px 24px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>LUMEN</span>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Shop','Bestsellers','About'].map(l => <span key={l} style={{ fontSize: 10, color: '#666', fontFamily: 'Inter, sans-serif' }}>{l}</span>)}
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#333" strokeWidth="2"/><line x1="3" y1="6" x2="21" y2="6" stroke="#333" strokeWidth="2"/></svg>
          </div>
        </div>

        {/* Product hero — two col */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
          {/* Product image */}
          <div style={{ background: '#F7F7F5', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 20 }}>
            <div style={{ width: 80, height: 100, background: 'linear-gradient(145deg, #E8E5E0, #D5D0C8)', borderRadius: 10, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }} />
            <div style={{ position: 'absolute', top: 10, left: 10, background: '#111', color: '#fff', fontSize: 8, fontFamily: 'Inter, sans-serif', fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.04em' }}>BESTSELLER</div>
          </div>

          {/* Product info */}
          <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 8, fontWeight: 600, color: '#AAA', fontFamily: 'Inter, sans-serif', letterSpacing: '0.10em', textTransform: 'uppercase' }}>Skincare / Serum</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', lineHeight: 1.15, letterSpacing: '-0.03em' }}>Lumen Glow<br />Pro Serum</div>

            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ display: 'flex', gap: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="8" height="8" viewBox="0 0 24 24" fill="#111"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span style={{ fontSize: 8, color: '#888', fontFamily: 'Inter, sans-serif' }}>4.9 (2,841)</span>
            </div>

            <div style={{ fontSize: 16, fontWeight: 800, color: '#111', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>$89.00</div>

            {/* Trust pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['✓  Dermatologist tested','✓  Free returns','✓  Ships in 24hrs'].map((t, i) => (
                <span key={i} style={{ fontSize: 8.5, color: '#555', fontFamily: 'Inter, sans-serif' }}>{t}</span>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ background: '#111', color: '#fff', fontSize: 9, fontFamily: 'Inter, sans-serif', fontWeight: 700, padding: '8px', borderRadius: 7, textAlign: 'center', letterSpacing: '0.02em' }}>Add to Cart</div>
              <div style={{ border: '1px solid #DDD', color: '#333', fontSize: 9, fontFamily: 'Inter, sans-serif', fontWeight: 500, padding: '7px', borderRadius: 7, textAlign: 'center' }}>Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Mockup Wrapper ───────────────────────────────────────────────────────────
function CaseMockup({ type, mousePos }) {
  const tiltX = mousePos.y * 6
  const tiltY = mousePos.x * -6

  return (
    <motion.div
      style={{
        width: '100%',
        maxWidth: 620,
        height: 420,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 40px 100px rgba(0,0,0,0.12), 0 12px 32px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.06)',
        background: '#fff',
        transformStyle: 'preserve-3d',
        rotateX: tiltX,
        rotateY: tiltY,
        perspective: 1200,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 22, mass: 0.6 }}
    >
      {type === 'saas' && <SaaSMockup />}
      {type === 'agency' && <AgencyMockup />}
      {type === 'ecommerce' && <EcommerceMockup />}
    </motion.div>
  )
}

// ─── Portfolio Section ────────────────────────────────────────────────────────
export default function Portfolio() {
  const sectionRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Mouse parallax
  const handleMouseMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }

  return (
    <>
      <style>{`
        .portfolio-section {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          position: relative;
          padding-bottom: 80px;
        }

        .portfolio-list {
          display: flex;
          flex-direction: column;
          gap: 120px;
          margin-top: 60px;
        }

        .portfolio-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          width: 100%;
          align-items: center;
          gap: 80px;
        }

        .portfolio-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .portfolio-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .portfolio-item {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 40px;
          }
          .portfolio-right {
            order: -1;
          }
          .portfolio-list {
            gap: 80px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-item {
            padding: 0 20px;
          }
        }
      `}</style>

      <section
        id="portfolio"
        className="portfolio-section"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
      >
        {/* Top border */}
        <div style={{ width: '100%', height: 1, background: '#EEEEEE' }} />

        {/* Section header */}
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '60px 64px 20px',
          width: '100%',
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 16,
            fontSize: 10.5,
            fontWeight: 700,
            color: '#AAAAAA',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
          }}>
            <div style={{ width: 22, height: 1, background: '#CCCCCC' }} />
            Our Work
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#111111',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            marginBottom: 10,
          }}>
            Landing Pages Built<br />To Convert
          </h2>

          <p style={{
            fontSize: 15,
            lineHeight: 1.65,
            color: '#777777',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            maxWidth: 400,
          }}>
            Every page we design is built with one goal: turning more visitors into customers.
          </p>
        </div>

        {/* Main content list */}
        <div className="portfolio-list">
          {CASES.map((activeCase, index) => (
            <div key={activeCase.id} className="portfolio-item">
              {/* ── Left: Case Study Info ── */}
              <div className="portfolio-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
                >
                  {/* Index + Label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: '#CCCCCC',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}>
                      {activeCase.index}
                    </span>
                    <div style={{ flex: 1, height: 1, background: '#EEEEEE' }} />
                    <span style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: '#BBBBBB',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      {activeCase.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                    fontWeight: 800,
                    color: '#111111',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.15,
                    letterSpacing: '-0.03em',
                    marginBottom: 28,
                  }}>
                    {activeCase.label}
                  </h3>

                  {/* Challenge → Solution */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                    {/* Challenge */}
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, alignItems: 'start' }}>
                      <div style={{ paddingTop: 3 }}>
                        <span style={{
                          fontSize: 9.5,
                          fontWeight: 700,
                          color: '#BBBBBB',
                          fontFamily: 'Inter, sans-serif',
                          letterSpacing: '0.10em',
                          textTransform: 'uppercase',
                          display: 'block',
                        }}>Challenge</span>
                      </div>
                      <p style={{
                        fontSize: 13.5,
                        lineHeight: 1.75,
                        color: '#666666',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                      }}>
                        {activeCase.challenge}
                      </p>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '100%', height: 1, background: '#F3F3F3' }} />

                    {/* Solution */}
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, alignItems: 'start' }}>
                      <div style={{ paddingTop: 3 }}>
                        <span style={{
                          fontSize: 9.5,
                          fontWeight: 700,
                          color: '#BBBBBB',
                          fontFamily: 'Inter, sans-serif',
                          letterSpacing: '0.10em',
                          textTransform: 'uppercase',
                          display: 'block',
                        }}>Solution</span>
                      </div>
                      <p style={{
                        fontSize: 13.5,
                        lineHeight: 1.75,
                        color: '#555555',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                      }}>
                        {activeCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 0,
                    borderTop: '1px solid #EEEEEE',
                    borderLeft: '1px solid #EEEEEE',
                  }}>
                    {activeCase.results.map((r, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '20px 16px',
                          borderRight: '1px solid #EEEEEE',
                          borderBottom: '1px solid #EEEEEE',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{
                          fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                          fontWeight: 800,
                          color: '#111111',
                          fontFamily: 'Inter, sans-serif',
                          lineHeight: 1,
                          letterSpacing: '-0.04em',
                          marginBottom: 6,
                          tabularNums: 'tabular-nums',
                        }}>
                          <Counter
                            value={r.value}
                            suffix={r.suffix}
                            sign={r.sign}
                          />
                        </div>
                        <div style={{
                          fontSize: 10,
                          fontWeight: 500,
                          color: '#AAAAAA',
                          fontFamily: 'Inter, sans-serif',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          lineHeight: 1.4,
                        }}>
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Right: Browser Mockup ── */}
              <div className="portfolio-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
                  style={{ width: '100%', maxWidth: 620, perspective: 1200 }}
                >
                  <CaseMockup type={activeCase.mockupType} mousePos={mousePos} />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
