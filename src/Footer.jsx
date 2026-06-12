import { smoothScrollTo } from './lenis'

export default function Footer({ onPrivacyClick, onTermsClick }) {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer-root {
          background: #111111;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }

        .footer-top {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 60px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 60px;
        }

        .footer-brand h3 {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.04em;
          margin-bottom: 14px;
        }

        .footer-brand p {
          font-size: 14px;
          line-height: 1.7;
          color: #888888;
          max-width: 300px;
          margin-bottom: 28px;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 10px;
          background: #ffffff;
          color: #111111;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          cursor: pointer;
          border: none;
        }

        .footer-cta-btn:hover {
          background: #F0F0F0;
          transform: translateY(-1px);
        }

        .footer-col h4 {
          font-size: 11px;
          font-weight: 700;
          color: #666666;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li a,
        .footer-links li button {
          font-size: 14px;
          font-weight: 400;
          color: #888888;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: 'Inter', sans-serif;
          transition: color 0.2s ease;
          text-align: left;
        }

        .footer-links li a:hover,
        .footer-links li button:hover {
          color: #ffffff;
        }

        .footer-bottom {
          border-top: 1px solid #1E1E1E;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-bottom-left {
          font-size: 13px;
          color: #555555;
          font-family: 'Inter', sans-serif;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-legal-links button {
          font-size: 13px;
          color: #555555;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: color 0.2s ease;
          padding: 0;
        }

        .footer-legal-links button:hover {
          color: #aaaaaa;
        }

        .footer-disclaimer {
          border-top: 1px solid #1A1A1A;
          padding: 20px 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-disclaimer p {
          font-size: 11px;
          color: #444444;
          line-height: 1.6;
          font-family: 'Inter', sans-serif;
          margin: 0;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .footer-top {
            grid-template-columns: 1fr;
            padding: 60px 20px 40px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
          .footer-disclaimer {
            padding: 16px 20px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h3>Zouse.</h3>
            <p>
              Conversion-focused landing pages for startups and growing businesses. We turn visitors into customers.
            </p>
            <a
              href="https://calendly.com/zouse/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn"
            >
              Book Free Strategy Call
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {[
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Services', id: 'services' },
                { label: 'Process', id: 'process' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); smoothScrollTo(id, -64) }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>
                <button onClick={onPrivacyClick}>Privacy Policy</button>
              </li>
              <li>
                <button onClick={onTermsClick}>Terms of Service</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-bottom-left">
            © {year} Zouse. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <button onClick={onPrivacyClick}>Privacy Policy</button>
            <button onClick={onTermsClick}>Terms of Service</button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            Portfolio case studies labelled "Concept Redesign" are illustrative examples created to demonstrate design and strategy capabilities — they do not represent actual client results. Any metrics shown alongside these concepts are hypothetical and for illustrative purposes only. Individual results vary and are not guaranteed. Zouse does not warrant any specific business outcome from its services.
          </p>
        </div>
      </footer>
    </>
  )
}
