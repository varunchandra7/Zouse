import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    title: 'Landing Page Design',
    desc: 'Designs engineered for conversions.',
  },
  {
    title: 'Landing Page Development',
    desc: 'Lightning-fast, production-ready code.',
  },
  {
    title: 'Conversion Optimization',
    desc: 'Data-driven strategies for more sales.',
  },
  {
    title: 'Website Audits',
    desc: 'Identify and fix conversion leaks.',
  },
  {
    title: 'Funnel Design',
    desc: 'End-to-end architecture that closes.',
  },
  {
    title: 'A/B Testing',
    desc: 'Scientific testing to maximize revenue.',
  },
]

// Duplicate services to ensure we have enough for a seamless loop
const EXTENDED_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES]

export default function Services() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const tweenRef = useRef(null)
  
  // Drag state
  const isDragging = useRef(false)
  const startX = useRef(0)
  const progressStart = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Calculate the width of ONE set of services
    // Since we have 4 sets (24 items total), one set is 1/4th of the track
    const totalWidth = track.scrollWidth
    const singleSetWidth = totalWidth / 4

    // We animate from 0 to -singleSetWidth to create a seamless loop
    // By animating exactly one set width, it loops perfectly because the next set matches exactly.
    gsap.set(track, { x: 0 })
    
    tweenRef.current = gsap.to(track, {
      x: -singleSetWidth,
      ease: 'none',
      duration: 25,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % singleSetWidth)
      }
    })

    // Scroll speed up effect
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          // Increase timeScale based on scroll velocity. 
          // self.getVelocity() returns pixels/second.
          const velocity = self.getVelocity()
          // clamp timeScale between 1 and 4
          const timeScale = 1 + Math.abs(velocity / 800)
          
          gsap.to(tweenRef.current, {
            timeScale: Math.max(1, Math.min(timeScale, 4)),
            duration: 0.3,
            overwrite: true
          })
        }
      })
    })

    return () => {
      ctx.revert()
      if (tweenRef.current) tweenRef.current.kill()
    }
  }, [])

  // Hover handlers
  const handleMouseEnter = () => {
    if (!isDragging.current && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.4, overwrite: true })
    }
  }

  const handleMouseLeave = () => {
    isDragging.current = false
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.4, overwrite: true })
    }
  }

  // Drag handlers
  const handlePointerDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX || (e.touches && e.touches[0].clientX)
    if (tweenRef.current) {
      progressStart.current = tweenRef.current.progress()
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.1, overwrite: true })
    }
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current || !tweenRef.current) return
    const currentX = e.clientX || (e.touches && e.touches[0].clientX)
    const diff = currentX - startX.current
    
    // Convert pixel diff to progress (approximate, adjust divisor for sensitivity)
    const trackWidth = trackRef.current.scrollWidth / 4
    let progressDelta = -(diff / trackWidth)
    
    let newProgress = progressStart.current + progressDelta
    
    // Wrap progress between 0 and 1
    if (newProgress < 0) newProgress = 1 + (newProgress % 1)
    if (newProgress > 1) newProgress = newProgress % 1
      
    tweenRef.current.progress(newProgress)
  }

  const handlePointerUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.4, overwrite: true })
    }
  }

  return (
    <>
      <style>{`
        .services-section {
          background: #FFFFFF;
          padding: 60px 0;
          overflow: hidden;
          position: relative;
        }

        .services-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 24px;
        }

        .services-marquee {
          display: flex;
          overflow: visible;
          cursor: grab;
          user-select: none;
          touch-action: pan-y;
        }

        .services-marquee:active {
          cursor: grabbing;
        }

        .services-track {
          display: flex;
          gap: 20px;
          width: max-content;
          padding-left: 20px;
        }

        .service-card-minimal {
          width: 280px;
          background: #ffffff;
          border-radius: 16px;
          padding: 28px 24px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .service-card-minimal:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03);
        }

        .service-title-minimal {
          fontSize: 16px;
          fontWeight: 700;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .service-desc-minimal {
          fontSize: 13px;
          color: #777777;
          fontFamily: 'Inter', sans-serif;
          line-height: 1.5;
          font-weight: 400;
        }

        .service-arrow {
          margin-top: 20px;
          color: #CCCCCC;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .service-card-minimal:hover .service-arrow {
          color: #111111;
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .services-section {
            padding: 40px 0;
          }
          .service-card-minimal {
            width: 260px;
            padding: 24px 20px;
          }
        }
      `}</style>

      <section 
        id="services" 
        className="services-section"
        ref={sectionRef}
      >
        <div className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 12,
              fontSize: 10,
              fontWeight: 600,
              color: '#AAAAAA',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
            }}>
              <div style={{ width: 16, height: 1, background: '#CCCCCC' }} />
              Capabilities
              <div style={{ width: 16, height: 1, background: '#CCCCCC' }} />
            </div>
          </motion.div>
        </div>
        
        <div 
          className="services-marquee"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="services-track" ref={trackRef}>
            {EXTENDED_SERVICES.map((service, i) => (
              <div key={i} className="service-card-minimal">
                <h3 className="service-title-minimal">{service.title}</h3>
                <p className="service-desc-minimal">{service.desc}</p>
                <div className="service-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
