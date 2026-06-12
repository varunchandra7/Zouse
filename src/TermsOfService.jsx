import { useEffect } from 'react'

export default function TermsOfService({ onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service — Zouse'
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
          <h1>Terms of Service</h1>
          <p className="legal-meta">
            Last updated: June 2025
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#DDDDDD', display: 'inline-block' }} />
            Zouse Agency
          </p>

          <div className="legal-highlight">
            <p>
              Please read these Terms of Service carefully before using our website or engaging our services. By accessing our website or using our services, you agree to be bound by these terms.
            </p>
          </div>

          <h2>1. About Us</h2>
          <p>
            Zouse ("we", "us", "our") is a landing page and conversion design agency. These Terms govern your use of our website (zouse.co) and any services you purchase from us. For questions, contact us at <strong>zouseagency@gmail.com</strong>.
          </p>

          <hr className="legal-divider" />

          <h2>2. Services</h2>
          <p>
            We provide landing page design, development, and conversion optimisation services. Specific deliverables, timelines, pricing, and revision rounds for each project are agreed upon separately in a project proposal or service agreement before work begins.
          </p>
          <p>
            All case studies and portfolio work shown on this website are either real client projects (shared with permission) or concept designs created for illustrative purposes. Any metrics shown alongside concept designs are <strong>illustrative examples only</strong> and do not represent guaranteed or typical results.
          </p>

          <hr className="legal-divider" />

          <h2>3. Website Use</h2>
          <p>By using our website, you agree to:</p>
          <ul>
            <li>Use the site only for lawful purposes</li>
            <li>Not attempt to disrupt, damage, or gain unauthorised access to the website or its infrastructure</li>
            <li>Not reproduce, duplicate, or copy any content from the site without written permission</li>
            <li>Not use automated tools to scrape or harvest data from the site</li>
          </ul>

          <hr className="legal-divider" />

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and code — is the property of Zouse or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
          </p>
          <p>
            Upon full payment for a project, clients receive the agreed rights to use the deliverables as specified in the project agreement. We retain the right to display completed work in our portfolio unless otherwise agreed in writing.
          </p>

          <hr className="legal-divider" />

          <h2>5. Payments & Refunds</h2>
          <p>
            Payment terms, deposit requirements, and refund policies are detailed in individual project agreements or proposals. Generally:
          </p>
          <ul>
            <li>A deposit may be required before work begins</li>
            <li>Deposits are non-refundable once work has commenced unless we have failed to deliver agreed services</li>
            <li>Final deliverables are released upon receipt of full payment</li>
          </ul>
          <p>
            If you have a payment dispute, contact us at zouseagency@gmail.com within 14 days of the issue arising.
          </p>

          <hr className="legal-divider" />

          <h2>6. Results Disclaimer</h2>
          <p>
            <strong>We do not guarantee specific results.</strong> The performance of a landing page depends on many factors outside our control, including traffic quality, product-market fit, pricing, competition, and marketing spend. Any results discussed in consultations or shown as illustrative examples on our website represent possibilities, not promises. Individual results will vary.
          </p>

          <hr className="legal-divider" />

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Zouse shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, including but not limited to loss of profits, data, or business opportunities.
          </p>
          <p>
            Our total liability to you in connection with any claim arising from these Terms or our services shall not exceed the amount you have paid us for the specific service giving rise to the claim.
          </p>

          <hr className="legal-divider" />

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites (e.g., Calendly for scheduling). We are not responsible for the content, privacy practices, or terms of any third-party sites. Visiting those sites is at your own risk.
          </p>

          <hr className="legal-divider" />

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with applicable law. Any disputes shall be subject to the exclusive jurisdiction of the relevant courts.
          </p>

          <hr className="legal-divider" />

          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. We will indicate the date of the most recent revision at the top of this page. Continued use of the site after changes constitutes your acceptance of the revised Terms.
          </p>

          <hr className="legal-divider" />

          <h2>11. Contact</h2>
          <p>
            For any questions about these Terms of Service, please contact us:<br />
            <strong>Email:</strong> zouseagency@gmail.com<br />
            <strong>Website:</strong> zouse.co
          </p>
        </div>
      </div>
    </>
  )
}
