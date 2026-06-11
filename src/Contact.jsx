import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          background: #ffffff;
          padding: 80px 24px 80px;
          position: relative;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-left h3 {
          font-size: 32px;
          font-weight: 800;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .contact-left p {
          font-size: 16px;
          line-height: 1.65;
          color: #666666;
          fontFamily: 'Inter', sans-serif;
          max-width: 480px;
        }

        .trust-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }

        .trust-point {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 500;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
        }

        .contact-form-wrapper {
          background: #ffffff;
          border: 1px solid #EEEEEE;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
        }

        .form-input {
          width: 100%;
          padding: 16px;
          background: #FAFAFA;
          border: 1px solid #E5E5E5;
          border-radius: 12px;
          font-size: 15px;
          fontFamily: 'Inter', sans-serif;
          color: #111111;
          transition: all 0.2s ease;
        }

        .form-input::placeholder {
          color: #AAAAAA;
        }

        .form-input:focus {
          outline: none;
          background: #ffffff;
          border-color: #111111;
          box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.05);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px;
          background: #111111;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          fontFamily: 'Inter', sans-serif;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
          margin-top: 8px;
        }

        .submit-btn:hover {
          background: #222222;
          transform: translateY(-2px);
        }

        .contact-info-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid #EEEEEE;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: 11px;
          font-weight: 700;
          color: #AAAAAA;
          fontFamily: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .info-value {
          font-size: 14px;
          font-weight: 600;
          color: #111111;
          fontFamily: 'Inter', sans-serif;
        }

        .final-cta {
          margin-top: 100px;
          text-align: center;
          padding: 60px 24px;
          background: #FAFAFA;
          border-radius: 32px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
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
          .contact-form-wrapper {
            padding: 32px 24px;
          }
          .contact-info-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .final-cta {
            margin-top: 100px;
            padding: 60px 24px;
            border-radius: 24px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#EEEEEE' }} />

        {/* Section Header */}
        <div className="contact-header">
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
              CONTACT
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
              Let's Build Something<br />That Converts
            </h2>
            
            <p style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: '#666666',
              fontFamily: 'Inter, sans-serif',
              maxWidth: 540,
              margin: '0 auto',
            }}>
              Whether you're launching a new business or improving an existing website, we'd love to hear about your project.
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="contact-grid">
          {/* Left Side */}
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Book Your Free Strategy Call</h3>
            <p>Tell us about your business, goals, and challenges. We'll review your current website and suggest ways to increase conversions.</p>
            
            <div className="trust-points">
              {['Free Consultation', 'Conversion-Focused Advice', 'No Obligation', 'Fast Response'].map((point, i) => (
                <div key={i} className="trust-point">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="#111111" />
                    <path d="M8 12.5L10.5 15L16 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="john@company.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" placeholder="Acme Corp" />
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details</label>
                  <textarea className="form-input form-textarea" placeholder="Tell us about your goals..."></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Book Free Strategy Call
                </button>
              </form>

              <div className="contact-info-row">
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">hello@zouse.in</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">India</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Response Time</span>
                  <span className="info-value">Within 24 Hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div 
          className="final-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: '#111111',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.04em',
            marginBottom: 24,
          }}>
            Ready To Turn More<br />Visitors Into Customers?
          </h2>
          <p style={{
            fontSize: 16,
            color: '#666666',
            fontFamily: 'Inter, sans-serif',
            marginBottom: 32,
          }}>
            Let's create a landing page that helps your business grow.
          </p>
          <button style={{
            padding: '18px 32px',
            background: '#111111',
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#222222' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#111111' }}
          onClick={() => {
            const input = document.querySelector('.form-input');
            if (input) input.focus();
          }}
          >
            Book Free Strategy Call
          </button>
        </motion.div>

      </section>
    </>
  );
}
