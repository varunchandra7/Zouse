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
          padding: 200px 24px 200px;
          position: relative;
          color: #111111;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 120px;
          align-items: center;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
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
          font-size: clamp(3.5rem, 5.5vw, 5rem);
          font-weight: 800;
          color: #111111;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 40px;
        }

        .editorial-subtext {
          font-size: 20px;
          line-height: 1.6;
          color: #666666;
          font-family: 'Inter', sans-serif;
          margin-bottom: 60px;
          max-width: 540px;
        }

        .editorial-subtext strong {
          color: #111111;
          font-weight: 600;
        }

        .audit-section h3 {
          font-size: 22px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 32px;
          font-family: 'Inter', sans-serif;
          line-height: 1.4;
        }

        .audit-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .audit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #111111;
          font-family: 'Inter', sans-serif;
        }

        .cta-card {
          background: #ffffff;
          border: 1px solid #E5E5E5;
          border-radius: 32px;
          padding: 64px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .cta-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 60px 140px rgba(0, 0, 0, 0.12);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: #111111;
          border-top-left-radius: 32px;
          border-top-right-radius: 32px;
        }

        .cta-card-title {
          font-size: 36px;
          font-weight: 800;
          color: #111111;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          line-height: 1.15;
        }

        .cta-card-desc {
          font-size: 18px;
          line-height: 1.6;
          color: #666666;
          font-family: 'Inter', sans-serif;
          margin-bottom: 48px;
        }

        .cta-includes {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 56px;
          padding-top: 40px;
          border-top: 1px solid #EEEEEE;
        }

        .cta-include-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 16px;
          color: #444444;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }
        
        .cta-include-item .dot {
          width: 8px;
          height: 8px;
          background: #111111;
          border-radius: 50%;
        }

        .cta-btn {
          width: 100%;
          padding: 24px;
          background: #111111;
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          border: none;
          border-radius: 16px;
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
          gap: 32px;
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

        @media (max-width: 1200px) {
          .contact-grid {
            gap: 60px;
          }
          .cta-card {
            padding: 48px;
          }
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .editorial-headline {
            max-width: 700px;
          }
          .cta-card {
            max-width: 700px;
          }
          .cta-includes {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 120px 20px;
          }
          .editorial-headline {
            font-size: 2.8rem;
          }
          .cta-card {
            padding: 40px 24px;
            border-radius: 24px;
          }
          .cta-card::before {
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
          }
          .cta-includes {
            grid-template-columns: 1fr;
          }
          .trust-elements {
            flex-direction: column;
            gap: 16px;
          }
          .audit-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#EEEEEE' }} />

        <div className="contact-container">
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Left Side: Copy & Audit */}
            <div className="contact-left">
              <motion.div className="editorial-label" variants={itemVariants}>
                FINAL STEP
              </motion.div>
              
              <motion.h2 className="editorial-headline" variants={itemVariants}>
                What If The Problem<br />Isn't Your Traffic?
              </motion.h2>
              
              <motion.p className="editorial-subtext" variants={itemVariants}>
                Most businesses think they need: <br />
                <strong>More Ads. More Followers. More Traffic.</strong>
                <br /><br />
                Usually they don't.<br />
                <strong>They need a landing page that converts.</strong>
                <br /><br />
                Before spending more money on marketing, let's identify what's stopping your visitors from becoming customers.
              </motion.p>

              <motion.div className="audit-section" variants={itemVariants}>
                <h3>In a free 15-minute strategy session we'll identify:</h3>
                
                <div className="audit-list">
                  {[
                    'Conversion bottlenecks',
                    'Messaging mistakes',
                    'UX friction',
                    'Revenue leaks'
                  ].map((item, i) => (
                    <div key={i} className="audit-item">
                      <CheckIcon />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side: CTA Card */}
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
