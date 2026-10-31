"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FooterProps {
  footerRef?: React.RefObject<HTMLElement | null>;
}

export default function FernFooter({ footerRef }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes("@")) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="fern-master-footer" ref={footerRef}>
      {/* Background Decorative Ambient Radial Glows */}
      <div className="fern-footer-glow-left" aria-hidden="true" />
      <div className="fern-footer-glow-right" aria-hidden="true" />
      <div className="fern-footer-grid-overlay" aria-hidden="true" />

      {/* Top Banner: Elevated Pre-Footer Conversion Callout */}
      <div className="fern-footer-cta-banner">
        <div className="wrap">
          <div className="fern-footer-cta-card">
            <div className="fern-footer-cta-text">
              <span className="fern-footer-pill">
                <span className="fern-pulse-dot" />
                Available for New Builds Australia Wide
              </span>
              <h3>Ready to transform your business with a world class digital presence?</h3>
              <p>
                We build your full live working prototype first with a strict $0 upfront deposit.
                Experience your new bespoke platform before you commit a single dollar.
              </p>
            </div>
            <div className="fern-footer-cta-actions">
              <Link href="/contact" className="fern-footer-primary-btn">
                <span>Start with $0 Deposit</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="tel:+61451072412" className="fern-footer-secondary-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call 0451 072 412</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="wrap">
        <div className="fern-footer-main-grid">
          {/* Column 1: Studio Brand, Trust Signals, and Direct Address */}
          <div className="fern-footer-col brand-col">
            <Link href="/" className="fern-footer-brand-logo" aria-label="FernStack Home">
              <span className="logo-icon">🌿</span>
              <span className="logo-text">FernStack</span>
              <span className="logo-studio-tag">Studio</span>
            </Link>

            <p className="fern-footer-bio">
              Adelaide digital engineering studio specializing in hand coded Next.js web applications,
              native mobile apps, and autonomous 24/7 AI voice agents for high growth Australian businesses.
            </p>

            <div className="fern-footer-rating-badge">
              <div className="rating-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <div className="rating-details">
                <strong>5.0 Google Rating</strong>
                <span>from 33+ Verified Australian Clients</span>
              </div>
            </div>

            <div className="fern-footer-office-box">
              <div className="office-pin">📍</div>
              <div>
                <strong>Adelaide Head Studio:</strong>
                <span>Ste 3/110 Hutt St, Adelaide SA 5000</span>
                <span className="studio-time-note">Mon to Fri: 7:00am to 8:00pm ACST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering & Digital Services */}
          <div className="fern-footer-col">
            <h4 className="fern-footer-heading">Services</h4>
            <ul className="fern-footer-links">
              <li>
                <Link href="/services/web-development">
                  <span>Custom Web Engineering</span>
                  <span className="link-tag popular">Next.js 15</span>
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps">
                  <span>Mobile Applications</span>
                  <span className="link-tag">iOS & Android</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ai-receptionist">
                  <span>24/7 AI Voice Receptionist</span>
                  <span className="link-tag ai">New</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ai-augmentation">
                  <span>Workflow Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services/high-speed-hosting">
                  <span>Managed Vercel Edge Cloud</span>
                  <span className="link-tag">$30/mo</span>
                </Link>
              </li>
              <li>
                <Link href="/services/seo-local-rankings">
                  <span>Local SEO & Google Search</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Showcase & Quick Navigation */}
          <div className="fern-footer-col">
            <h4 className="fern-footer-heading">Explore Studio</h4>
            <ul className="fern-footer-links">
              <li>
                <Link href="/case-studies">
                  <span>Verified Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/#work">
                  <span>Sample Client Platforms</span>
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <span>Fixed Price Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span>Project Cost Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/#faq">
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link href="/#why-us">
                  <span>Why Hand Coded Code Wins</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Guarantees & Newsletter Studio Dispatch */}
          <div className="fern-footer-col dispatch-col">
            <h4 className="fern-footer-heading">Studio Guarantees</h4>

            <div className="fern-footer-guarantee-list">
              <div className="guarantee-item">
                <span className="guarantee-check">✓</span>
                <div>
                  <strong>$0 Upfront Deposit</strong>
                  <p>You pay only when delighted with the working live build.</p>
                </div>
              </div>

              <div className="guarantee-item">
                <span className="guarantee-check">✓</span>
                <div>
                  <strong>5 to 10 Day Delivery</strong>
                  <p>Rapid deployment without sacrificing performance or design.</p>
                </div>
              </div>

              <div className="guarantee-item">
                <span className="guarantee-check">✓</span>
                <div>
                  <strong>100% Client Ownership</strong>
                  <p>Full GitHub repository and domain ownership upon launch.</p>
                </div>
              </div>
            </div>

            {/* Newsletter Dispatch Box */}
            <div className="fern-footer-newsletter-box">
              <h5>Studio Tech Updates</h5>
              <p>Actionable web speed, local SEO, and AI insights for business owners.</p>
              {subscribed ? (
                <div className="newsletter-success">
                  <span>✓ You are on the VIP dispatch list!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter business email..."
                    required
                    aria-label="Newsletter email"
                  />
                  <button type="submit" aria-label="Subscribe to updates">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Feature Badges Ribbon */}
        <div className="fern-footer-feature-ribbon">
          <div className="ribbon-card">
            <span className="ribbon-icon">⚡</span>
            <div>
              <strong>100/100 Core Web Vitals</strong>
              <small>Sub second FCP load on mobile devices</small>
            </div>
          </div>
          <div className="ribbon-card">
            <span className="ribbon-icon">🔒</span>
            <div>
              <strong>Enterprise SSL & Edge CDN</strong>
              <small>Global DDoS mitigation & 99.99% uptime</small>
            </div>
          </div>
          <div className="ribbon-card">
            <span className="ribbon-icon">🇦🇺</span>
            <div>
              <strong>100% Australian Owned & Built</strong>
              <small>Direct communication with senior engineers</small>
            </div>
          </div>
          <div className="ribbon-card">
            <span className="ribbon-icon">🛡️</span>
            <div>
              <strong>No Vendor Lock In</strong>
              <small>Standard clean TypeScript, React 19 & Next.js</small>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="fern-footer-bottom-bar">
          <div className="bottom-left">
            <span>&copy; {new Date().getFullYear()} FernStack Studio Pty Ltd. All rights reserved.</span>
            <span className="bottom-divider">·</span>
            <span>ABN 74 612 908 143</span>
            <span className="bottom-divider">·</span>
            <span>Ste 3/110 Hutt St, Adelaide SA 5000</span>
          </div>

          <div className="bottom-right">
            <nav className="bottom-legal-nav" aria-label="Legal and contact links">
              <a href="mailto:info@fernstack.com.au">info@fernstack.com.au</a>
              <span className="bottom-divider">·</span>
              <a href="tel:+61451072412">0451 072 412</a>
              <span className="bottom-divider">·</span>
              <Link href="/contact">Support</Link>
            </nav>

            <button
              type="button"
              className="scroll-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              title="Back to top"
            >
              <span>Back to top</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
