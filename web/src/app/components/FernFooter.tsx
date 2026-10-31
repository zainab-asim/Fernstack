"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  footerRef?: React.RefObject<HTMLElement | null>;
}

export default function FernFooter({ footerRef }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="fern-clean-footer" ref={footerRef}>
      <div className="wrap">
        {/* Top Section: Brand Statement & Navigation Columns */}
        <div className="footer-clean-top">
          <div className="footer-brand-side">
            <Link href="/" className="footer-clean-logo" aria-label="FernStack Home">
              <span className="clean-logo-icon">🌿</span>
              <span className="clean-logo-name">FernStack</span>
              <span className="clean-logo-badge">Studio</span>
            </Link>
            <p className="footer-clean-tagline">
              Bespoke digital engineering studio based in Adelaide. Hand-coding high-speed Next.js platforms, native mobile applications, and autonomous AI voice systems.
            </p>
            <div className="footer-status-pill">
              <span className="footer-status-dot" />
              <span>Adelaide Studio · Available for New Builds</span>
            </div>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <span className="footer-col-title">Services</span>
              <ul className="footer-col-list">
                <li><Link href="/services/web-development">Web Platforms</Link></li>
                <li><Link href="/services/mobile-apps">Mobile Apps</Link></li>
                <li><Link href="/services/ai-receptionist">AI Voice Receptionist</Link></li>
                <li><Link href="/services/ai-automation">Workflow Automation</Link></li>
                <li><Link href="/services/ecommerce">Headless E-Commerce</Link></li>
                <li><Link href="/services/cloud-devops">Cloud &amp; DevOps</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Navigation</span>
              <ul className="footer-col-list">
                <li><Link href="/services">All Services</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/#work">Recent Work</Link></li>
                <li><Link href="/#pricing">Pricing Plans</Link></li>
                <li><Link href="/contact">Contact Studio</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Studio</span>
              <ul className="footer-col-list">
                <li><a href="tel:+61451072412">0451 072 412</a></li>
                <li><a href="mailto:info@fernstack.com.au">info@fernstack.com.au</a></li>
                <li><span className="footer-address">Ste 3/110 Hutt St, Adelaide</span></li>
                <li><span className="footer-hours">Mon–Fri 7am–8pm ACST</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Minimal Legal & Back to Top */}
        <div className="footer-clean-bottom">
          <div className="footer-bottom-copy">
            <span>&copy; {new Date().getFullYear()} FernStack Studio Pty Ltd. All rights reserved.</span>
            <span className="footer-bullet">·</span>
            <span>ABN 74 612 908 143</span>
            <span className="footer-bullet">·</span>
            <span>$0 Upfront Deposit Standard</span>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
