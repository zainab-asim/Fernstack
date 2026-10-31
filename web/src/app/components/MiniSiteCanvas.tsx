"use client";

import React from "react";
import { ClientSite } from "@/data/sampleWebsitesData";

export default function MiniSiteCanvas({ site }: { site: ClientSite }) {
  return (
    <div
      className={`mini-site-canvas mini-site-${site.id}`}
      style={
        {
          "--mc-bg": site.theme.bg,
          "--mc-accent": site.theme.accent,
          "--mc-accent-grad": site.theme.accentGrad,
          "--mc-glow": site.theme.glow,
        } as React.CSSProperties
      }
    >
      {/* =========================================================================
          1. APEX BUILD & RENOVATIONS
          Layout: Editorial Magazine Split — dark stony bg, oversized headline
                  left side, floating cost card right, gold accent bar at top
         ========================================================================= */}
      {site.id === "apex-renovations" && (
        <div className="apex-mini-root">
          {/* Gold accent line */}
          <div className="apex-gold-line" />

          {/* Top Nav */}
          <nav className="apex-mini-nav">
            <div className="apex-mini-brand">
              <span className="apex-brand-mark">A</span>
              <div>
                <strong>APEX BUILD & RENOVATIONS</strong>
                <span>Master Builders · Adelaide SA · Lic #BLD291038</span>
              </div>
            </div>
            <div className="apex-mini-nav-links">
              <span>Extensions</span>
              <span>Second Storey</span>
              <span>Kitchens</span>
              <span className="apex-nav-cta">Free Estimate</span>
            </div>
            <span className="apex-phone-tag">☎ (08) 8234 5678</span>
          </nav>

          {/* Main Body */}
          <div className="apex-mini-body">
            {/* Left Editorial Content */}
            <div className="apex-mini-left">
              <div className="apex-award-pill">
                <span className="apex-gold-dot" />
                <span>Master Builders SA 2026 Excellence Winner</span>
              </div>
              <h3 className="apex-display-h">
                Architectural
                <br />
                <em className="apex-gold-em">Perfection.</em>
                <br />
                Built for Generations.
              </h3>
              <p className="apex-mini-sub">
                Luxury extensions, second-storey additions &amp; bespoke
                renovations across Adelaide &amp; Eastern Suburbs.
              </p>
              <div className="apex-stat-row">
                <div className="apex-stat">
                  <strong>$45M+</strong>
                  <span>Delivered</span>
                </div>
                <div className="apex-stat-div" />
                <div className="apex-stat">
                  <strong>100%</strong>
                  <span>On-Time</span>
                </div>
                <div className="apex-stat-div" />
                <div className="apex-stat">
                  <strong>10-Year</strong>
                  <span>Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Floating Cost Card */}
            <div className="apex-mini-right">
              <div className="apex-cost-card">
                <div className="apex-cost-card-header">
                  <span>📐</span>
                  <span>Instant Project Cost Guide</span>
                </div>
                <div className="apex-cost-row">
                  <span>Scope</span>
                  <strong>Second-Storey Extension</strong>
                </div>
                <div className="apex-cost-row">
                  <span>Size</span>
                  <strong>140 m² · Architectural Grade</strong>
                </div>
                <div className="apex-cost-price">
                  <span>Guaranteed Fixed-Price Range</span>
                  <strong>$580,000 – $640,000</strong>
                </div>
                <div className="apex-cost-checks">
                  <span>✔ Zero variation fees</span>
                  <span>✔ On-site supervisor daily</span>
                </div>
                <button className="apex-cost-btn">Get My Free Quote</button>
              </div>
              <div className="apex-stars-badge">
                <span className="apex-stars">★★★★★</span>
                <span>5.0 · 48 Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="apex-mini-footer">
            <span>3D BIM Modeling</span>
            <span className="apex-foot-div">·</span>
            <span>Full Council Approval Managed</span>
            <span className="apex-foot-div">·</span>
            <span>Architectural Grade Materials</span>
            <span className="apex-foot-div">·</span>
            <span className="apex-foot-gold">apexbuildrenovations.com.au</span>
          </div>

          {/* Background Photo */}
          <div
            className="apex-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
        </div>
      )}

      {/* =========================================================================
          2. BONDI CLEAN COMMERCIAL
          Layout: Dark tech command center — full-width operations header, live
                  status grid, metrics dashboard feel, cyan accent
         ========================================================================= */}
      {site.id === "bondi-clean" && (
        <div className="bondi-mini-root">
          {/* Background photo */}
          <div
            className="bondi-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="bondi-mini-overlay" />

          {/* Command Header */}
          <nav className="bondi-mini-nav">
            <div className="bondi-nav-left">
              <span className="bondi-live-dot" />
              <span className="bondi-live-label">LIVE</span>
              <span className="bondi-brand-name">BONDI CLEAN FACILITIES</span>
              <span className="bondi-brand-sep">|</span>
              <span className="bondi-brand-sub">Sydney CBD High-Rises</span>
            </div>
            <div className="bondi-nav-right">
              <span className="bondi-iso-tag">ISO 9001</span>
              <span className="bondi-iso-tag">ISO 14001</span>
              <span className="bondi-dispatch-chip">🚨 24/7 Dispatch: (02) 9044 1188</span>
            </div>
          </nav>

          {/* Dashboard Body */}
          <div className="bondi-mini-body">
            {/* Left Stats Panel */}
            <div className="bondi-mini-left">
              <p className="bondi-eyebrow">Enterprise Facility Management · Sydney CBD</p>
              <h3 className="bondi-display-h">
                Immaculate Spaces.
                <br />
                <span className="bondi-cyan">Zero Downtime.</span>
              </h3>
              <p className="bondi-sub">
                Hospital-grade terminal cleaning &amp; botanical sanitation for 140+ commercial high-rises.
              </p>

              <div className="bondi-metric-grid">
                <div className="bondi-metric">
                  <strong>140+</strong>
                  <span>Active High-Rises</span>
                </div>
                <div className="bondi-metric">
                  <strong>99.98%</strong>
                  <span>SLA Audit Pass</span>
                </div>
                <div className="bondi-metric">
                  <strong>2-Hr</strong>
                  <span>Emergency SLA</span>
                </div>
                <div className="bondi-metric">
                  <strong>5.0★</strong>
                  <span>Google Rating</span>
                </div>
              </div>
            </div>

            {/* Right Live Audit Terminal */}
            <div className="bondi-mini-right">
              <div className="bondi-terminal-card">
                <div className="bondi-terminal-header">
                  <div className="bondi-terminal-title">
                    <span className="bondi-terminal-dot" />
                    <span>LIVE AUDIT REPORT</span>
                  </div>
                  <span className="bondi-time-badge">01:44 AEST</span>
                </div>
                <div className="bondi-terminal-row">
                  <span>Location</span>
                  <strong>Barangaroo Tower 1 · L38</strong>
                </div>
                <div className="bondi-terminal-row">
                  <span>Terminal Clean</span>
                  <strong className="bondi-green">✓ Passed (100% Botanical)</strong>
                </div>
                <div className="bondi-terminal-row">
                  <span>HEPA Air Index</span>
                  <strong>0.02 ppm (Clean Room)</strong>
                </div>
                <div className="bondi-terminal-bar">
                  <span>Compliance</span>
                  <div className="bondi-bar-track">
                    <div className="bondi-bar-fill" style={{ width: "97%" }} />
                  </div>
                  <span className="bondi-green">97%</span>
                </div>
                <div className="bondi-terminal-footer">
                  <span>✔ Police-cleared teams</span>
                  <span>✔ $20M Public Liability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. TRUENORTH PRIVATE WEALTH
          Layout: Minimalist private bank — centered serif hero with marble texture
                  overlay, horizontal feature cards below, deep navy + gold
         ========================================================================= */}
      {site.id === "truenorth-wealth" && (
        <div className="wealth-mini-root">
          {/* Background */}
          <div
            className="wealth-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="wealth-mini-overlay" />

          {/* Top Bar */}
          <nav className="wealth-mini-nav">
            <div className="wealth-nav-brand">
              <span className="wealth-crest">🏛️</span>
              <div>
                <strong>TRUENORTH PRIVATE WEALTH</strong>
                <span>Fiduciary Family Office · Est. 2009 · AFSL 482 211</span>
              </div>
            </div>
            <div className="wealth-nav-links">
              <span>Family Office</span>
              <span>Investments</span>
              <span>Estate Planning</span>
              <span className="wealth-consult-btn">Private Consultation</span>
            </div>
          </nav>

          {/* Centered Hero */}
          <div className="wealth-mini-hero">
            <div className="wealth-discreet-badge">
              <span className="wealth-gold-bar" />
              By Private Introduction Only
              <span className="wealth-gold-bar" />
            </div>
            <h3 className="wealth-display-h">
              Preserving Generational Wealth
              <br />
              <em className="wealth-gold-em">With Absolute Discretion.</em>
            </h3>
            <p className="wealth-sub">
              Comprehensive fiduciary wealth management for ultra-high-net-worth
              families &amp; estates exceeding $3M.
            </p>

            {/* Wealth Strategy Cards */}
            <div className="wealth-strategy-row">
              <div className="wealth-strategy-card">
                <strong>Capital Preservation</strong>
                <span>12.4% p.a. (15-yr avg)</span>
                <div className="wealth-strategy-bar" style={{ background: "linear-gradient(90deg, #fbbf24, #d97706)", width: "75%" }} />
              </div>
              <div className="wealth-strategy-card active-strategy">
                <strong>Balanced Growth</strong>
                <span>18.7% p.a. (15-yr avg)</span>
                <div className="wealth-strategy-bar" style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)", width: "88%" }} />
                <span className="wealth-active-tag">Recommended</span>
              </div>
              <div className="wealth-strategy-card">
                <strong>Aggressive Growth</strong>
                <span>27.2% p.a. (15-yr avg)</span>
                <div className="wealth-strategy-bar" style={{ background: "linear-gradient(90deg, #f59e0b, #ef4444)", width: "100%" }} />
              </div>
            </div>
          </div>

          {/* Bottom Credibility Strip */}
          <div className="wealth-mini-footer">
            <span>🏆 AFA Award Winner 2024</span>
            <span className="wealth-foot-sep">·</span>
            <span>$2.4B Assets Under Guidance</span>
            <span className="wealth-foot-sep">·</span>
            <span>AFSL Regulated</span>
            <span className="wealth-foot-sep">·</span>
            <span className="wealth-foot-gold">★★★★★ 5.0 (63 Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. PULSE DENTAL STUDIO
          Layout: Clean healthcare — bright white/rose hero, bold booking card,
                  treatment tabs, modern friendly clinic aesthetic
         ========================================================================= */}
      {site.id === "pulse-dental" && (
        <div className="dental-mini-root">
          {/* Background */}
          <div
            className="dental-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="dental-mini-overlay" />

          {/* Clinic Nav */}
          <nav className="dental-mini-nav">
            <div className="dental-nav-brand">
              <span className="dental-brand-icon">🦷</span>
              <div>
                <strong>PULSE DENTAL STUDIO</strong>
                <span>Surry Hills · Sydney · HICAPS · All Funds Welcome</span>
              </div>
            </div>
            <div className="dental-nav-links">
              <span>Veneers</span>
              <span>Invisalign</span>
              <span>Whitening</span>
              <span className="dental-book-btn">Book Online</span>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="dental-mini-body">
            <div className="dental-mini-left">
              <div className="dental-badge">
                <span className="dental-pink-dot" />
                <span>Sydney&#39;s #1 Cosmetic Dental Studio · 5.0★ 156 Reviews</span>
              </div>
              <h3 className="dental-display-h">
                Your Dream Smile
                <br />
                <span className="dental-pink">Starts Today.</span>
              </h3>
              <p className="dental-sub">
                Award-winning cosmetic dentistry — veneers, Invisalign, whitening
                &amp; full-mouth restoration in Surry Hills.
              </p>

              {/* Treatment Buttons */}
              <div className="dental-treatment-row">
                <button className="dental-treat-btn active-treat">Veneers</button>
                <button className="dental-treat-btn">Invisalign</button>
                <button className="dental-treat-btn">Whitening</button>
                <button className="dental-treat-btn">Implants</button>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="dental-mini-right">
              <div className="dental-book-card">
                <div className="dental-book-header">
                  <span>📅</span>
                  <span>Book a Free Smile Consult</span>
                </div>
                <div className="dental-price-highlight">
                  <span>Porcelain Veneers from</span>
                  <strong>$790 / tooth</strong>
                  <span className="dental-pay-tag">or $49/wk interest-free</span>
                </div>
                <div className="dental-slot-grid">
                  <div className="dental-slot active-slot">Thu 10:30</div>
                  <div className="dental-slot">Fri 9:00</div>
                  <div className="dental-slot">Fri 2:00</div>
                  <div className="dental-slot">Sat 10:00</div>
                </div>
                <button className="dental-confirm-btn">Confirm Booking</button>
                <span className="dental-gap-note">★ HICAPS gap claims processed same-day</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          5. ROASTCRAFT COFFEE
          Layout: Warm artisan e-commerce — dark espresso bg, textured warmth,
                  product card right, earthy typography
         ========================================================================= */}
      {site.id === "roastcraft-coffee" && (
        <div className="coffee-mini-root">
          {/* Background */}
          <div
            className="coffee-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="coffee-mini-overlay" />

          {/* Roaster Nav */}
          <nav className="coffee-mini-nav">
            <div className="coffee-nav-brand">
              <span className="coffee-brand-icon">☕</span>
              <div>
                <strong>ROASTCRAFT COFFEE ROASTERS</strong>
                <span>Melbourne · Specialty Single-Origin · Cup Score 91+</span>
              </div>
            </div>
            <div className="coffee-nav-links">
              <span>Single Origins</span>
              <span>Blends</span>
              <span>Subscriptions</span>
              <span className="coffee-shop-btn">Shop Now</span>
            </div>
          </nav>

          {/* Main Content */}
          <div className="coffee-mini-body">
            <div className="coffee-mini-left">
              <div className="coffee-fresh-badge">
                <span className="coffee-orange-dot" />
                <span>Roasted to Order · Dispatched Within 24hrs</span>
              </div>
              <h3 className="coffee-display-h">
                Ethiopia Yirgacheffe
                <br />
                <span className="coffee-orange">Micro-Lot Batch #88.</span>
              </h3>
              <p className="coffee-sub">
                Cup Score 91. Tasting notes of jasmine, candied peach &amp; wild honey.
                Natural process, shade grown, farmer direct.
              </p>

              {/* Flavour Tags */}
              <div className="coffee-flavour-row">
                <span className="coffee-tag">🌸 Jasmine</span>
                <span className="coffee-tag">🍑 Candied Peach</span>
                <span className="coffee-tag">🍯 Wild Honey</span>
              </div>

              {/* Grind + Size Picker */}
              <div className="coffee-options-row">
                <div className="coffee-option-group">
                  <span>Grind</span>
                  <div className="coffee-option-btns">
                    <button className="coffee-opt active-opt">Whole Bean</button>
                    <button className="coffee-opt">Espresso</button>
                    <button className="coffee-opt">Filter</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Card */}
            <div className="coffee-mini-right">
              <div className="coffee-product-card">
                <div className="coffee-product-header">
                  <span className="coffee-batch-tag">MICRO-LOT BATCH #88</span>
                  <span className="coffee-roast-tag">Roasted 2 Days Ago</span>
                </div>
                <div className="coffee-product-row">
                  <span>Origin</span>
                  <strong>Ethiopia Yirgacheffe G1</strong>
                </div>
                <div className="coffee-product-row">
                  <span>Process</span>
                  <strong>Natural — Shade Grown</strong>
                </div>
                <div className="coffee-price-box">
                  <div>
                    <span className="coffee-price-label">Whole Bean 250g Pouch</span>
                    <strong className="coffee-price">$24.00 AUD</strong>
                  </div>
                  <div className="coffee-sub-price">
                    <span>Sub price: <strong className="coffee-orange-txt">$20.40</strong></span>
                  </div>
                </div>
                <button className="coffee-add-btn">☕ Add to Cart</button>
                <div className="coffee-guarantees">
                  <span>✔ Compostable pouch</span>
                  <span>✔ Free over $60</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="coffee-mini-footer">
            <span><strong>18,000kg+</strong> Roasted</span>
            <span className="coffee-foot-sep">·</span>
            <span><strong>Cup Score 91+</strong> Specialty Grade</span>
            <span className="coffee-foot-sep">·</span>
            <span>Australia-Wide Express</span>
            <span className="coffee-foot-sep">·</span>
            <span className="coffee-foot-orange">★★★★★ 5.0 (410+ Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          6. TRADIETRACK MOBILE OS
          Layout: Bold SaaS green/dark — app phone mockup center, feature list
                  left, metric chips right, energetic tech startup feel
         ========================================================================= */}
      {site.id === "tradietrack-mobile" && (
        <div className="tradie-mini-root">
          {/* Background */}
          <div
            className="tradie-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="tradie-mini-overlay" />

          {/* SaaS Nav */}
          <nav className="tradie-mini-nav">
            <div className="tradie-nav-brand">
              <span className="tradie-bolt">⚡</span>
              <strong>TradieTrack</strong>
              <span className="tradie-nav-sub">Field OS for Aussie Tradies</span>
            </div>
            <div className="tradie-nav-links">
              <span>Features</span>
              <span>Pricing</span>
              <span>Reviews</span>
              <span className="tradie-trial-btn">Free Trial</span>
            </div>
            <span className="tradie-rating-chip">⭐ 4.9 App Store · 1,400+ Tradies</span>
          </nav>

          {/* Three-column SaaS Layout */}
          <div className="tradie-mini-body">
            {/* Left Feature List */}
            <div className="tradie-mini-left">
              <div className="tradie-badge">
                <span className="tradie-green-dot" />
                <span>60-Second Invoicing · Tap-to-Pay · Live GPS</span>
              </div>
              <h3 className="tradie-display-h">
                Run Your Trade
                <br />
                <span className="tradie-green">From Your Phone.</span>
              </h3>
              <ul className="tradie-feature-list">
                <li>
                  <span className="tradie-check">✓</span>
                  <span>60-sec PDF quotes sent to client instantly</span>
                </li>
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Tap-to-Pay on iPhone (no terminal needed)</span>
                </li>
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Live van fleet GPS tracking &amp; dispatch</span>
                </li>
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Auto-sync to Xero, MYOB &amp; Jobber</span>
                </li>
              </ul>
            </div>

            {/* Center App Mockup Card */}
            <div className="tradie-mini-center">
              <div className="tradie-phone-frame">
                <div className="tradie-phone-notch" />
                <div className="tradie-phone-screen">
                  <div className="tradie-screen-header">
                    <span>TradieTrack</span>
                    <span className="tradie-green-txt">Job #4092 ✅</span>
                  </div>
                  <div className="tradie-screen-row">
                    <span>Client</span>
                    <strong>James H. · North Adelaide</strong>
                  </div>
                  <div className="tradie-screen-row">
                    <span>Work</span>
                    <strong>Emergency Gas Hot Water</strong>
                  </div>
                  <div className="tradie-screen-amount">
                    <span>Total Collected</span>
                    <strong>$840.00</strong>
                    <span className="tradie-pay-method">via Apple Pay ✓</span>
                  </div>
                  <div className="tradie-screen-actions">
                    <button className="tradie-action-btn green-btn">Send Invoice</button>
                    <button className="tradie-action-btn grey-btn">Next Job</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metric Cards */}
            <div className="tradie-mini-right">
              <div className="tradie-metric-stack">
                <div className="tradie-metric-card">
                  <strong>6,500+</strong>
                  <span>Aussie Tradies</span>
                </div>
                <div className="tradie-metric-card">
                  <strong>14 hrs</strong>
                  <span>Saved / Week</span>
                </div>
                <div className="tradie-metric-card highlight-card">
                  <strong>30-Day</strong>
                  <span>Free Trial</span>
                  <span className="tradie-no-cc">No Credit Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hover Interactive Simulator Launch Overlay */}
      <div className="mini-site-interactive-overlay">
        <span className="mini-site-overlay-btn">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          Open Live Interactive Prototype
        </span>
        <span className="mini-site-overlay-hint">
          Includes live calculators, interactive tools &amp; responsive simulator
        </span>
      </div>
    </div>
  );
}
