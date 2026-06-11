import { motion } from 'framer-motion'

const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'Perfect for startups and local businesses.',
    price: 'Starting at ₹9,999',
    features: [
      'Landing Page Design',
      'Mobile Responsive',
      'Fast Loading',
      'Basic SEO',
      '1 Revision Round',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    desc: 'Perfect for businesses looking to increase leads and conversions.',
    price: 'Starting at ₹24,999',
    features: [
      'Everything in Starter',
      'Landing Page Development',
      'Conversion Optimization',
      'Advanced SEO',
      'Analytics Setup',
      '3 Revision Rounds',
    ],
    buttonText: 'Book Strategy Call',
    popular: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    desc: 'For serious businesses ready to maximize growth.',
    price: 'Custom Quote',
    features: [
      'Everything in Growth',
      'Funnel Strategy',
      'A/B Testing Plan',
      'Performance Optimization',
      'Priority Support',
      'Unlimited Revisions During Project',
    ],
    buttonText: 'Contact Us',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <>
      <style>{`
        .pricing-section {
          background: #ffffff;
          padding: 80px 24px;
          position: relative;
        }

        .pricing-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: center;
        }

        .pricing-card {
          background: #ffffff;
          border: 1px solid #EEEEEE;
          border-radius: 24px;
          padding: 48px 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
        }

        .pricing-card.popular {
          border: 2px solid #111111;
          transform: scale(1.03);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
          padding: 56px 40px;
        }

        .pricing-card.popular:hover {
          transform: scale(1.03) translateY(-8px);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.12);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: #111111;
          color: #ffffff;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
        }

        .pricing-name {
          font-size: 20px;
          font-weight: 700;
          color: #111111;
          font-family: 'Inter', sans-serif;
          margin-bottom: 12px;
        }

        .pricing-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #777777;
          font-family: 'Inter', sans-serif;
          margin-bottom: 32px;
          min-height: 44px;
        }

        .pricing-price {
          font-size: 32px;
          font-weight: 800;
          color: #111111;
          font-family: 'Inter', sans-serif;
          margin-bottom: 32px;
          letter-spacing: -0.04em;
        }

        .pricing-card.popular .pricing-price {
          font-size: 36px;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 48px;
          flex: 1;
        }

        .pricing-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #555555;
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
        }

        .pricing-btn {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease, color 0.2s ease;
          border: none;
        }

        .btn-outline {
          background: transparent;
          color: #111111;
          border: 1px solid #DDDDDD;
        }

        .btn-outline:hover {
          background: #F8F8F8;
          border-color: #CCCCCC;
        }

        .btn-solid {
          background: #111111;
          color: #ffffff;
        }

        .btn-solid:hover {
          background: #222222;
          transform: translateY(-2px);
        }

        .trust-row {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 32px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #666666;
          font-family: 'Inter', sans-serif;
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
            gap: 40px;
          }
          .pricing-card.popular {
            transform: scale(1);
            padding: 48px 40px;
          }
          .pricing-card.popular:hover {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 640px) {
          .pricing-card {
            padding: 40px 24px;
          }
          .pricing-card.popular {
            padding: 40px 24px;
          }
          .trust-row {
            gap: 20px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section id="pricing" className="pricing-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#EEEEEE' }} />

        <div className="pricing-inner">
          {/* Header */}
          <div className="pricing-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
                fontSize: 11,
                fontWeight: 600,
                color: '#AAAAAA',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
              }}>
                <div style={{ width: 20, height: 1, background: '#CCCCCC' }} />
                PRICING
                <div style={{ width: 20, height: 1, background: '#CCCCCC' }} />
              </div>
              
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 800,
                color: '#111111',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: 14,
              }}>
                Choose The Right<br />Growth Plan
              </h2>
              
              <p style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: '#666666',
                fontFamily: 'Inter, sans-serif',
                maxWidth: 540,
                margin: '0 auto',
              }}>
                Whether you're launching your first landing page or scaling aggressively, we have a plan built for your goals.
              </p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="pricing-grid">
            {PRICING_PLANS.map((plan, index) => {
              // Custom scale logic depending on desktop/mobile via media queries, 
              // framer-motion might override css transforms, so we'll just handle opacity/y here 
              // and let CSS handle the base scale to avoid fighting.
              return (
                <motion.div
                  key={plan.id}
                  className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                >
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-desc">{plan.desc}</p>
                  <div className="pricing-price">{plan.price}</div>
                  
                  <div className="pricing-features">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="pricing-feature">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                          <circle cx="12" cy="12" r="10" fill="#F4F4F4" />
                          <path d="M8 12.5L10.5 15L16 9" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://calendly.com/zouse/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pricing-btn ${plan.popular ? 'btn-solid' : 'btn-outline'}`}
                    style={{ textDecoration: 'none', display: 'block', boxSizing: 'border-box' }}
                  >
                    {plan.buttonText}
                  </a>
                </motion.div>
              )
            })}
          </div>

          {/* Trust Row */}
          <motion.div 
            className="trust-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['Fast Delivery', 'Mobile Optimized', 'Conversion Focused', 'Performance First'].map((item, i) => (
              <div key={i} className="trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  )
}
