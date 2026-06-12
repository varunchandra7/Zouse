import { useEffect } from 'react'
import { smoothScrollTo } from './lenis'

export default function PrivacyPolicy({ onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — Zouse'
    return () => {
      document.title = 'Zouse — Conversion-Focused Landing Pages'
    }
  }, [])

  return (
    <>
      <style>{`
        .legal-page {
          background: #ffffff;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }
        .legal-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #ffffff;
          border-bottom: 1px solid #EEEEEE;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .legal-nav-logo {
          font-size: 18px;
          font-weight: 800;
          color: #111111;
          letter-spacing: -0.04em;
          text-decoration: none;
          cursor: pointer;
        }
        .legal-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 10px;
          background: #F5F5F5;
          border: 1px solid #E5E5E5;
          color: #333333;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: background 0.2s ease;
          text-decoration: none;
        }
        .legal-back-btn:hover {
          background: #EBEBEB;
        }
        .legal-content {
          max-width: 780px;
          margin: 0 auto;
          padding: 72px 32px 120px;
        }
        .legal-content h1 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #111111;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .legal-meta {
          font-size: 13px;
          color: #AAAAAA;
          font-family: 'Inter', sans-serif;
          margin-bottom: 56px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legal-content h2 {
          font-size: 18px;
          font-weight: 700;
          color: #111111;
          margin-top: 48px;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .legal-content p {
          font-size: 15px;
          line-height: 1.8;
          color: #555555;
          margin-bottom: 16px;
        }
        .legal-content ul {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .legal-content ul li {
          font-size: 15px;
          line-height: 1.7;
          color: #555555;
          padding-left: 20px;
          position: relative;
        }
        .legal-content ul li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #CCCCCC;
        }
        .legal-divider {
          border: none;
          border-top: 1px solid #F0F0F0;
          margin: 40px 0;
        }
        .legal-highlight {
          background: #F8F8F8;
          border: 1px solid #EBEBEB;
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 16px;
        }
        .legal-highlight p {
          margin-bottom: 0;
          font-size: 14px;
        }
        @media (max-width: 640px) {
          .legal-content {
            padding: 48px 20px 80px;
          }
          .legal-nav {
            padding: 0 20px;
          }
        }
      `}</style>

      <div className="legal-page">
        {/* Nav */}
        <div className="legal-nav">
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/zouse..png"
              alt="Zouse"
              style={{
                width: 160,
                height: 44,
                objectFit: 'cover',
                objectPosition: 'center center',
                display: 'block',
              }}
            />
          </button>
          <button className="legal-back-btn" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Site
          </button>
        </div>

        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="legal-meta">
            Last updated: June 2025
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#DDDDDD', display: 'inline-block' }} />
            Zouse Agency
          </p>

          <div className="legal-highlight">
            <p>
              This Privacy Policy explains how Zouse ("we", "us", or "our") collects, uses, and protects your personal information when you visit our website or contact us. We are committed to your privacy and comply with applicable data protection laws including the UK GDPR and the Data Protection Act 2018.
            </p>
          </div>

          <h2>1. Who We Are</h2>
          <p>
            Zouse is a landing page and conversion design agency. Our website is located at zouse.co. For any privacy-related queries, contact us at: <strong>zouseagency@gmail.com</strong>
          </p>

          <hr className="legal-divider" />

          <h2>2. What Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact information</strong> — your name and email address when you book a call or fill out a contact form</li>
            <li><strong>Usage data</strong> — pages you visit, how long you stay, your browser type, and approximate location (via analytics tools)</li>
            <li><strong>Communication data</strong> — emails and messages you send us</li>
            <li><strong>Cookie data</strong> — see Section 6 for full cookie details</li>
          </ul>

          <hr className="legal-divider" />

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your enquiries and schedule calls</li>
            <li>Deliver our services to you as a client</li>
            <li>Improve our website and understand how visitors use it</li>
            <li>Send you relevant business communications (only if you have consented or if there is a legitimate interest)</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell, trade, or rent your personal information to third parties for marketing purposes.
          </p>

          <hr className="legal-divider" />

          <h2>4. Legal Basis for Processing (UK GDPR)</h2>
          <p>We rely on the following legal bases to process your personal data:</p>
          <ul>
            <li><strong>Consent</strong> — where you have explicitly agreed (e.g., marketing emails)</li>
            <li><strong>Legitimate interests</strong> — to improve our services and respond to enquiries</li>
            <li><strong>Contractual necessity</strong> — to deliver services you have engaged us for</li>
            <li><strong>Legal obligation</strong> — where required by law</li>
          </ul>

          <hr className="legal-divider" />

          <h2>5. Third-Party Services</h2>
          <p>We use the following third-party tools which may process your data:</p>
          <ul>
            <li><strong>Calendly</strong> — for scheduling strategy calls. Subject to Calendly's own Privacy Policy.</li>
            <li><strong>Google Analytics</strong> — for website analytics (anonymised). Subject to Google's Privacy Policy.</li>
            <li><strong>Email service providers</strong> — for transactional communications</li>
          </ul>

          <hr className="legal-divider" />

          <h2>6. Cookies</h2>
          <p>
            Our website uses cookies — small text files stored on your device — to improve your experience. Types of cookies we may use:
          </p>
          <ul>
            <li><strong>Essential cookies</strong> — necessary for the website to function</li>
            <li><strong>Analytics cookies</strong> — help us understand how visitors use the site (e.g., Google Analytics)</li>
          </ul>
          <p>
            You can control or disable cookies through your browser settings. Disabling cookies may affect some functionality of the site.
          </p>

          <hr className="legal-divider" />

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Typically, contact enquiries are retained for up to 2 years.
          </p>

          <hr className="legal-divider" />

          <h2>8. Your Rights (UK GDPR)</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right to access</strong> — request a copy of the data we hold about you</li>
            <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
            <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten")</li>
            <li><strong>Right to restrict processing</strong> — ask us to limit how we use your data</li>
            <li><strong>Right to data portability</strong> — receive your data in a machine-readable format</li>
            <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
            <li><strong>Right to withdraw consent</strong> — where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <strong>zouseagency@gmail.com</strong>. We will respond within 30 days.
          </p>

          <hr className="legal-divider" />

          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <hr className="legal-divider" />

          <h2>10. International Transfers</h2>
          <p>
            Some of our third-party tools may transfer data outside the UK/EEA. Where this occurs, we ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses or adequacy decisions).
          </p>

          <hr className="legal-divider" />

          <h2>11. Complaints</h2>
          <p>
            If you have concerns about how we handle your data, you have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#111', fontWeight: 600 }}>ico.org.uk</a>.
          </p>

          <hr className="legal-divider" />

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last updated" date at the top of this page.
          </p>

          <hr className="legal-divider" />

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:<br />
            <strong>Email:</strong> zouseagency@gmail.com<br />
            <strong>Website:</strong> zouse.co
          </p>
        </div>
      </div>
    </>
  )
}
