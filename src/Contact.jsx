import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          background: #ffffff;
          padding: 120px 24px 120px;
          position: relative;
        }

        .contact-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-left h3 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .contact-left p {
          font-size: 18px;
          line-height: 1.65;
          color: #666666;
          fontFamily: 'Inter', sans-serif;
          max-width: 540px;
        }

        .trust-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 8px;
        }

        .trust-point {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
        }

        .booking-card-wrapper {
          background: #ffffff;
          border: 1px solid #EEEEEE;
          border-radius: 32px;
          padding: 56px 48px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
        }

        .booking-card-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: #111111;
        }

        .booking-card-title {
          font-size: 28px;
          font-weight: 800;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .booking-card-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #666666;
          fontFamily: 'Inter', sans-serif;
          margin-bottom: 32px;
        }

        .booking-card-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
          padding-top: 32px;
          border-top: 1px solid #EEEEEE;
        }

        .booking-card-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: #444444;
          fontFamily: 'Inter', sans-serif;
          font-weight: 500;
        }
        
        .booking-card-list-item .dot {
          width: 6px;
          height: 6px;
          background: #111111;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .submit-btn {
          width: 100%;
          padding: 20px;
          background: #111111;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          fontFamily: 'Inter', sans-serif;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
        }

        .submit-btn:hover {
          background: #222222;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .submit-btn-subtext {
          text-align: center;
          font-size: 13px;
          color: #888888;
          fontFamily: 'Inter', sans-serif;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        
        .submit-btn-subtext span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .contact-left {
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 100px 20px 60px;
          }
          .booking-card-wrapper {
            padding: 40px 24px;
            border-radius: 24px;
          }
          .contact-left h3 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#EEEEEE' }} />

        <div className="contact-grid">
          {/* Left Side */}
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              Your Last Agency Built A Website.<br />
              <span style={{ color: '#666666' }}>Let's Build Something That Actually Converts.</span>
            </h3>
            <p>
              If you've hired agencies before and didn't get results, you're not alone.
              <br /><br />
              We focus on conversion strategy, messaging, design, and development that helps businesses generate more leads and customers.
            </p>
            
            <div className="trust-points">
              {['Free 15-Minute Strategy Call', 'Website & Conversion Audit', 'Actionable Recommendations'].map((point, i) => (
                <div key={i} className="trust-point">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="12" fill="#111111" />
                    <path d="M8 12.5L10.5 15L16 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side (Booking Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="booking-card-wrapper">
              <h4 className="booking-card-title">Free Website & Conversion Audit Call</h4>
              <p className="booking-card-desc">We'll review your website and identify opportunities to improve conversions.</p>

              <div className="booking-card-list">
                {[
                  'Conversion bottlenecks',
                  'Messaging issues',
                  'UX improvements',
                  'Revenue opportunities'
                ].map((item, i) => (
                  <div key={i} className="booking-card-list-item">
                    <div className="dot" />
                    {item}
                  </div>
                ))}
              </div>

              <a 
                href="https://calendly.com/zouse/new-meeting" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="submit-btn" 
              >
                Book Your Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="submit-btn-subtext">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  No obligations
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  No sales pressure
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
