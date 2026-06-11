import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const diagramVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M20 6L9 17L4 12" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>{`
        .contact-section {
          background: #ffffff;
          padding: 180px 24px 160px;
          position: relative;
          color: #111111;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .editorial-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 80px;
        }

        .editorial-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #111111;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Inter', sans-serif;
        }

        .editorial-label::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #111111;
          border-radius: 50%;
        }

        .editorial-headline {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          color: #111111;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.04em;
          line-height: 1.05;
        }

        .editorial-subtext {
          font-size: 20px;
          line-height: 1.6;
          color: #666666;
          font-family: 'Inter', sans-serif;
          padding-top: 12px;
        }

        .editorial-subtext strong {
          color: #111111;
          font-weight: 600;
        }

        .diagram-container {
          width: 100%;
          background: #FAFAFA;
          border-radius: 32px;
          padding: 80px 24px;
          margin-bottom: 120px;
          display: flex;
          justify-content: center;
          overflow: hidden;
          border: 1px solid #EEEEEE;
        }

        .audit-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .audit-section h3 {
          font-size: 24px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 40px;
          font-family: 'Inter', sans-serif;
          line-height: 1.4;
        }

        .audit-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .audit-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 18px;
          font-weight: 600;
          color: #111111;
          font-family: 'Inter', sans-serif;
          padding: 24px 0;
          border-bottom: 1px solid #EEEEEE;
        }

        .audit-item:last-child {
          border-bottom: none;
        }

        .cta-card {
          background: #ffffff;
          border: 1px solid #E5E5E5;
          border-radius: 24px;
          padding: 56px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .cta-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 50px 120px rgba(0, 0, 0, 0.12);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: #111111;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
        }

        .cta-card-title {
          font-size: 32px;
          font-weight: 800;
          color: #111111;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-card-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #666666;
          font-family: 'Inter', sans-serif;
          margin-bottom: 40px;
        }

        .cta-includes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 48px;
        }

        .cta-include-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #444444;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }
        
        .cta-include-item .dot {
          width: 6px;
          height: 6px;
          background: #111111;
          border-radius: 50%;
        }

        .cta-btn {
          width: 100%;
          padding: 24px;
          background: #111111;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .cta-btn:hover {
          background: #222222;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .trust-elements {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 32px;
        }

        .trust-element {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #666666;
          font-family: 'Inter', sans-serif;
        }

        @media (max-width: 1024px) {
          .editorial-header {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }
          .audit-cta-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 100px 20px;
          }
          .editorial-headline {
            font-size: 2.8rem;
          }
          .diagram-container {
            padding: 40px 0;
            margin-bottom: 80px;
            border-radius: 24px;
          }
          .cta-card {
            padding: 40px 24px;
          }
          .cta-includes {
            grid-template-columns: 1fr;
          }
          .trust-elements {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#EEEEEE' }} />

        <div className="contact-container">
          
          {/* Editorial Header */}
          <motion.div 
            className="editorial-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <div>
              <motion.div className="editorial-label" variants={itemVariants}>
                FINAL STEP
              </motion.div>
              <motion.h2 className="editorial-headline" variants={itemVariants}>
                What If The Problem<br />Isn't Your Traffic?
              </motion.h2>
            </div>
            
            <motion.div variants={itemVariants}>
              <p className="editorial-subtext">
                Most businesses think they need:<br />
                <strong>More Ads. More Followers. More Traffic.</strong>
                <br /><br />
                Usually they don't.<br />
                <strong>They need a landing page that converts.</strong>
                <br /><br />
                Before spending more money on marketing, let's identify what's stopping your visitors from becoming customers.
              </p>
            </motion.div>
          </motion.div>

          {/* Animated Diagram */}
          <div className="diagram-container">
            <motion.svg 
              width="100%" 
              height="auto" 
              viewBox="0 0 800 560" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-10%" }} 
              variants={diagramVariants} 
              style={{ maxWidth: '800px', width: '100%', display: 'block', margin: '0 auto' }}
            >
              {/* Paths */}
              <motion.path d="M 270 80 L 270 120" stroke="#E5E5E5" strokeWidth="2" variants={lineVariants} fill="none" />
              <motion.path d="M 270 180 L 270 480" stroke="#E5E5E5" strokeWidth="2" variants={lineVariants} fill="none" />
              
              <motion.path d="M 270 230 L 460 230" stroke="#E5E5E5" strokeWidth="2" strokeDasharray="6 6" variants={lineVariants} fill="none" />
              <motion.path d="M 270 310 L 460 310" stroke="#E5E5E5" strokeWidth="2" strokeDasharray="6 6" variants={lineVariants} fill="none" />
              <motion.path d="M 270 390 L 460 390" stroke="#E5E5E5" strokeWidth="2" strokeDasharray="6 6" variants={lineVariants} fill="none" />

              {/* Nodes */}
              <motion.g variants={nodeVariants}>
                <rect x="160" y="20" width="220" height="60" rx="30" fill="#ffffff" stroke="#E5E5E5" strokeWidth="1" />
                <text x="270" y="56" textAnchor="middle" fill="#111111" fontSize="16" fontWeight="600" fontFamily="Inter">Visitors</text>
              </motion.g>

              <motion.g variants={nodeVariants}>
                <rect x="160" y="120" width="220" height="60" rx="30" fill="#111111" />
                <text x="270" y="156" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="600" fontFamily="Inter">Landing Page</text>
              </motion.g>

              <motion.g variants={nodeVariants}>
                <rect x="460" y="200" width="180" height="60" rx="30" fill="#ffffff" stroke="#EEEEEE" strokeWidth="1" />
                <text x="550" y="236" textAnchor="middle" fill="#666666" fontSize="15" fontWeight="500" fontFamily="Inter">Drop Off ❌</text>
              </motion.g>

              <motion.g variants={nodeVariants}>
                <rect x="460" y="280" width="180" height="60" rx="30" fill="#ffffff" stroke="#EEEEEE" strokeWidth="1" />
                <text x="550" y="316" textAnchor="middle" fill="#666666" fontSize="15" fontWeight="500" fontFamily="Inter">Drop Off ❌</text>
              </motion.g>

              <motion.g variants={nodeVariants}>
                <rect x="460" y="360" width="180" height="60" rx="30" fill="#ffffff" stroke="#EEEEEE" strokeWidth="1" />
                <text x="550" y="396" textAnchor="middle" fill="#666666" fontSize="15" fontWeight="500" fontFamily="Inter">Drop Off ❌</text>
              </motion.g>

              <motion.g variants={nodeVariants}>
                <rect x="160" y="480" width="220" height="60" rx="30" fill="#111111" />
                <text x="270" y="516" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="600" fontFamily="Inter">Customer ✅</text>
              </motion.g>
              
              {/* Junction dots */}
              <motion.circle cx="270" cy="230" r="4" fill="#111111" variants={nodeVariants} />
              <motion.circle cx="270" cy="310" r="4" fill="#111111" variants={nodeVariants} />
              <motion.circle cx="270" cy="390" r="4" fill="#111111" variants={nodeVariants} />

            </motion.svg>
          </div>

          {/* Audit & CTA Section */}
          <motion.div 
            className="audit-cta-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Left: Audit Section */}
            <div className="audit-section">
              <motion.h3 variants={itemVariants}>
                In a free 15-minute strategy session we'll identify:
              </motion.h3>
              
              <div className="audit-list">
                {[
                  'Conversion bottlenecks',
                  'Messaging mistakes',
                  'UX friction',
                  'Revenue leaks'
                ].map((item, i) => (
                  <motion.div key={i} className="audit-item" variants={itemVariants}>
                    <CheckIcon />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: CTA Card */}
            <motion.div variants={itemVariants}>
              <div className="cta-card">
                <h4 className="cta-card-title">Free Website & Conversion Audit</h4>
                <p className="cta-card-desc">We'll review your website and show you exactly where potential customers are dropping off.</p>

                <div className="cta-includes">
                  {[
                    'Landing Page Review',
                    'Messaging Analysis',
                    'Conversion Feedback',
                    'Launch Recommendations'
                  ].map((item, i) => (
                    <div key={i} className="cta-include-item">
                      <div className="dot" />
                      {item}
                    </div>
                  ))}
                </div>

                <a 
                  href="https://calendly.com/zouse/new-meeting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-btn" 
                >
                  Find Out What's Costing You Customers
                </a>

                {/* Trust Elements */}
                <div className="trust-elements">
                  {[
                    'No obligations',
                    'No sales pressure',
                    'Actionable feedback'
                  ].map((item, i) => (
                    <div key={i} className="trust-element">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
