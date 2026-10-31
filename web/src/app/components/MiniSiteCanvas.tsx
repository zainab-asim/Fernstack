"use client";

import React, { useState } from "react";
import { ClientSite } from "@/data/sampleWebsitesData";

export default function MiniSiteCanvas({ site }: { site: ClientSite }) {
  // Micro-interaction state
  const [apexScope, setApexScope] = useState<string>("Second Storey");
  const [dentalTreatment, setDentalTreatment] = useState<string>("Porcelain Veneers");
  const [coffeeGrind, setCoffeeGrind] = useState<string>("Whole Bean");

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
          SITE 1: APEX BUILD & RENOVATIONS
          Theme: High-End Architectural Builder (Dark Stone, Brushed Gold, Blueprints)
         ========================================================================= */}
      {site.id === "apex-renovations" && (
        <div className="apex-mini-root">
          <div className="apex-blueprint-grid" />
          <div className="apex-gold-line" />

          {/* Top Bar */}
          <nav className="apex-mini-nav">
            <div className="apex-mini-brand">
              <span className="apex-brand-mark">A</span>
              <div>
                <strong>APEX BUILD &amp; RENOVATIONS</strong>
                <span>Master Builders · Adelaide SA · Lic #BLD291038</span>
              </div>
            </div>
            <div className="apex-mini-nav-links">
              <span>Extensions</span>
              <span>Second Storey</span>
              <span>Kitchens</span>
              <span className="apex-nav-cta">Free Feasibility</span>
            </div>
            <span className="apex-phone-tag">☎ (08) 8234 5678</span>
          </nav>

          {/* Main Body */}
          <div className="apex-mini-body">
            {/* Left Content */}
            <div className="apex-mini-left">
              <div className="apex-award-pill">
                <span className="apex-gold-dot" />
                <span>Master Builders SA · 2026 Excellence Winner</span>
              </div>
              <h3 className="apex-display-h">
                Architectural
                <br />
                <em className="apex-gold-em">Perfection.</em>
                <br />
                Built for Generations.
              </h3>
              <p className="apex-mini-sub">
                Bespoke second-storey extensions, luxury pavilions &amp; architectural
                transformations across Adelaide &amp; the Eastern Suburbs.
              </p>

              <div className="apex-materials-row">
                <span className="apex-mat-chip">🏛️ 3D BIM Modeling</span>
                <span className="apex-mat-chip">📐 Fixed-Price Contract</span>
                <span className="apex-mat-chip">🛡️ 10-Yr Structural Warranty</span>
              </div>

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
                  <strong>5.0★</strong>
                  <span>48 Reviews</span>
                </div>
              </div>
            </div>

            {/* Right Cost Card */}
            <div className="apex-mini-right">
              <div className="apex-cost-card">
                <div className="apex-cost-card-header">
                  <span>📐</span>
                  <span>Instant Project Cost Guide</span>
                </div>

                <div className="apex-scope-tags">
                  {["Second Storey", "Pavilion", "Full Rebuild"].map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      className={`apex-scope-tag ${apexScope === scope ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setApexScope(scope);
                      }}
                    >
                      {scope}
                    </button>
                  ))}
                </div>

                <div className="apex-cost-row">
                  <span>Selected Scope</span>
                  <strong>{apexScope} Extension</strong>
                </div>
                <div className="apex-cost-row">
                  <span>Timeline</span>
                  <strong>18 – 22 Wks Handover</strong>
                </div>
                <div className="apex-cost-price">
                  <span>Guaranteed Fixed-Price Range</span>
                  <strong>
                    {apexScope === "Second Storey"
                      ? "$580,000 – $640,000"
                      : apexScope === "Pavilion"
                      ? "$240,000 – $310,000"
                      : "$890,000 – $1,250,000"}
                  </strong>
                </div>
                <div className="apex-cost-checks">
                  <span>✔ Zero variation fees</span>
                  <span>✔ Dedicated daily supervisor</span>
                </div>
                <button className="apex-cost-btn">Request Feasibility Study →</button>
              </div>
              <div className="apex-stars-badge">
                <span className="apex-stars">★★★★★</span>
                <span>5.0 · Adelaide Master Builder of the Year</span>
              </div>
            </div>
          </div>

          {/* Footer Strip */}
          <div className="apex-mini-footer">
            <span>Architectural Grade Materials</span>
            <span className="apex-foot-div">·</span>
            <span>Full Council Approval Handled</span>
            <span className="apex-foot-div">·</span>
            <span className="apex-foot-gold">apexbuildrenovations.com.au</span>
          </div>

          <div
            className="apex-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
        </div>
      )}

      {/* =========================================================================
          SITE 2: BONDI CLEAN COMMERCIAL
          Theme: High-Tech Enterprise Command Center (Cyber Obsidian, Cyan, Radar)
         ========================================================================= */}
      {site.id === "bondi-clean" && (
        <div className="bondi-mini-root">
          <div
            className="bondi-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="bondi-mini-overlay" />

          {/* Top Bar */}
          <nav className="bondi-mini-nav">
            <div className="bondi-nav-left">
              <span className="bondi-radar-ping">
                <span className="bondi-ping-core" />
                <span className="bondi-ping-ring" />
              </span>
              <span className="bondi-live-label">LIVE TELEMETRY</span>
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

          {/* Body */}
          <div className="bondi-mini-body">
            <div className="bondi-mini-left">
              <p className="bondi-eyebrow">Enterprise Facility &amp; Asset Management · Sydney CBD</p>
              <h3 className="bondi-display-h">
                Immaculate High-Rises.
                <br />
                <span className="bondi-cyan">Zero Operational Downtime.</span>
              </h3>
              <p className="bondi-sub">
                Hospital-grade terminal cleaning &amp; botanical sanitation for 140+ premium commercial towers across Sydney.
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
                  <strong>100%</strong>
                  <span>Botanical Seal</span>
                </div>
              </div>
            </div>

            <div className="bondi-mini-right">
              <div className="bondi-terminal-card">
                <div className="bondi-terminal-header">
                  <div className="bondi-terminal-title">
                    <span className="bondi-terminal-dot" />
                    <span>BARANGAROO TOWER 1 · L38</span>
                  </div>
                  <span className="bondi-time-badge">STATUS: OPTIMAL</span>
                </div>
                <div className="bondi-terminal-row">
                  <span>Terminal Clean</span>
                  <strong className="bondi-green">✓ 100% Botanical Disinfected</strong>
                </div>
                <div className="bondi-terminal-row">
                  <span>HEPA Air Particle</span>
                  <strong>0.02 ppm (Clean Room)</strong>
                </div>
                <div className="bondi-terminal-bar">
                  <span>SLA Compliance</span>
                  <div className="bondi-bar-track">
                    <div className="bondi-bar-fill" style={{ width: "98.4%" }} />
                  </div>
                  <span className="bondi-green">98.4%</span>
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
          SITE 3: TRUENORTH PRIVATE WEALTH
          Theme: Quiet Luxury Family Office (Deep Navy & Champagne Gold)
         ========================================================================= */}
      {site.id === "truenorth-wealth" && (
        <div className="wealth-mini-root">
          <div
            className="wealth-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="wealth-mini-overlay" />

          <nav className="wealth-mini-nav">
            <div className="wealth-nav-brand">
              <span className="wealth-crest">🏛️</span>
              <div>
                <strong>TRUENORTH PRIVATE WEALTH</strong>
                <span>Fiduciary Family Office · Est. 2009 · AFSL 482 211</span>
              </div>
            </div>
            <div className="wealth-nav-links">
              <span>Sydney · Melbourne · Singapore</span>
              <span className="wealth-consult-btn">Initiate Dialogue</span>
            </div>
          </nav>

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
              Comprehensive fiduciary wealth stewardship &amp; private equity allocation for ultra-high-net-worth
              families &amp; estates exceeding $3M.
            </p>

            <div className="wealth-strategy-row">
              <div className="wealth-strategy-card">
                <strong>Capital Preservation</strong>
                <span>12.4% p.a. (15-yr avg)</span>
                <div className="wealth-strategy-bar" style={{ background: "linear-gradient(90deg, #fbbf24, #d97706)", width: "75%" }} />
              </div>
              <div className="wealth-strategy-card active-strategy">
                <strong>Balanced Multi-Asset</strong>
                <span>18.7% p.a. (15-yr avg)</span>
                <div className="wealth-strategy-bar" style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)", width: "88%" }} />
                <span className="wealth-active-tag">Recommended</span>
              </div>
              <div className="wealth-strategy-card">
                <strong>Private Alpha Fund</strong>
                <span>27.2% p.a. (15-yr avg)</span>
                <div className="wealth-strategy-bar" style={{ background: "linear-gradient(90deg, #f59e0b, #ef4444)", width: "100%" }} />
              </div>
            </div>
          </div>

          <div className="wealth-mini-footer">
            <span>🏆 AFA Award Winner 2024</span>
            <span className="wealth-foot-sep">·</span>
            <span>$2.4B Assets Under Guidance</span>
            <span className="wealth-foot-sep">·</span>
            <span>100% Independent Fiduciary</span>
            <span className="wealth-foot-sep">·</span>
            <span className="wealth-foot-gold">★★★★★ 5.0 (63 Private Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          SITE 4: PULSE DENTAL STUDIO
          Theme: Radiant Luxury Aesthetic Clinic & Spa (Warm Alabaster & Blush Rose)
                 RADICALLY DIFFERENT: Crisp, Luminous, High-Fashion Healthcare
         ========================================================================= */}
      {site.id === "pulse-dental" && (
        <div className="dental-mini-root radiant-dental-root">
          <div className="dental-radiant-glow" />

          {/* Top Bar */}
          <nav className="dental-mini-nav radiant-dental-nav">
            <div className="dental-nav-brand">
              <span className="dental-brand-icon">✨</span>
              <div>
                <strong>PULSE DENTAL STUDIO</strong>
                <span className="dental-brand-sub-light">Surry Hills · Sydney · Cosmetic Studio</span>
              </div>
            </div>
            <div className="dental-nav-links">
              <span className="dental-hicaps-badge">HICAPS Instant Rebate</span>
              <span className="dental-book-btn radiant-pink-btn">Book VIP Consult</span>
            </div>
          </nav>

          {/* Main Body */}
          <div className="dental-mini-body radiant-dental-body">
            <div className="dental-mini-left">
              <div className="dental-badge radiant-dental-badge">
                <span className="dental-pink-dot" />
                <span>Sydney&#39;s Premier Cosmetic Studio · 5.0★ 156 Reviews</span>
              </div>
              <h3 className="dental-display-h radiant-dental-h">
                Artistry for Your Smile.
                <br />
                <span className="dental-pink-gradient">Painless. Flawless.</span>
              </h3>
              <p className="dental-sub radiant-dental-sub">
                World-class porcelain veneers, Invisalign Pro &amp; full smile reconstruction in a serene, spa-like studio.
              </p>

              {/* Treatment Buttons */}
              <div className="dental-treatment-row radiant-treat-row">
                {["Porcelain Veneers", "Invisalign Pro", "Laser Whitening", "Implants"].map((treat) => (
                  <button
                    key={treat}
                    type="button"
                    className={`dental-treat-btn radiant-pill ${dentalTreatment === treat ? "active-treat" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDentalTreatment(treat);
                    }}
                  >
                    {treat}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="dental-mini-right">
              <div className="dental-book-card radiant-card">
                <div className="dental-book-header">
                  <span>📅</span>
                  <span>Book Free 3D Smile Simulation</span>
                </div>
                <div className="dental-price-highlight radiant-price-box">
                  <span className="dental-price-sublabel">
                    {dentalTreatment === "Porcelain Veneers"
                      ? "Porcelain Veneers from"
                      : dentalTreatment === "Invisalign Pro"
                      ? "Invisalign Pro from"
                      : "Laser Whitening from"}
                  </span>
                  <strong className="dental-price-big">
                    {dentalTreatment === "Porcelain Veneers"
                      ? "$790 / tooth"
                      : dentalTreatment === "Invisalign Pro"
                      ? "$4,900 Full Course"
                      : "$590 Same-Day"}
                  </strong>
                  <span className="dental-pay-tag">or $49/wk interest-free</span>
                </div>
                <div className="dental-slot-grid">
                  <div className="dental-slot active-slot">Thu 10:30 AM</div>
                  <div className="dental-slot">Fri 9:00 AM</div>
                  <div className="dental-slot">Fri 2:15 PM</div>
                  <div className="dental-slot">Sat 10:00 AM</div>
                </div>
                <button className="dental-confirm-btn radiant-confirm-btn">Reserve Appointment →</button>
                <span className="dental-gap-note">★ HICAPS same-day gap claims processed</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SITE 5: ROASTCRAFT COFFEE ROASTERS
          Theme: Melbourne Artisan Craft Roastery (Warm Amber, Espresso, Craft Paper)
         ========================================================================= */}
      {site.id === "roastcraft-coffee" && (
        <div className="coffee-mini-root craft-roaster-root">
          <div
            className="coffee-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="coffee-mini-overlay" />

          {/* Roaster Nav */}
          <nav className="coffee-mini-nav craft-nav">
            <div className="coffee-nav-brand">
              <span className="coffee-brand-icon">☕</span>
              <div>
                <strong>ROASTCRAFT COFFEE ROASTERS</strong>
                <span className="craft-nav-sub">Fitzroy, Melbourne · Cup Score 91.5+</span>
              </div>
            </div>
            <div className="coffee-nav-links">
              <span className="craft-tag-nav">Direct Trade Only</span>
              <span className="coffee-shop-btn craft-btn">Shop Fresh Roasts</span>
            </div>
          </nav>

          {/* Main Content */}
          <div className="coffee-mini-body">
            <div className="coffee-mini-left">
              <div className="coffee-fresh-badge">
                <span className="coffee-orange-dot" />
                <span>Roasted to Order · Dispatched Within 24hrs</span>
              </div>
              <h3 className="coffee-display-h craft-title">
                Ethiopia Yirgacheffe G1
                <br />
                <span className="coffee-orange">Micro-Lot Batch #88.</span>
              </h3>
              <p className="coffee-sub">
                Cup Score 91.5. Tasting notes of candied peach, jasmine florals &amp; wild orange blossom honey. Shade-ripened at 2,150m.
              </p>

              {/* Sensory Flavour Tags */}
              <div className="coffee-flavour-row">
                <span className="coffee-tag">🌸 Jasmine Blossom No. 04</span>
                <span className="coffee-tag">🍑 White Peach No. 11</span>
                <span className="coffee-tag">🍯 Wild Honey No. 22</span>
              </div>

              {/* Grind Selector */}
              <div className="coffee-options-row">
                <div className="coffee-option-group">
                  <span>Grind Profile:</span>
                  <div className="coffee-option-btns">
                    {["Whole Bean", "Espresso", "Filter / V60"].map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`coffee-opt ${coffeeGrind === g ? "active-opt" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCoffeeGrind(g);
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Card */}
            <div className="coffee-mini-right">
              <div className="coffee-product-card craft-product-card">
                <div className="coffee-product-header">
                  <span className="coffee-batch-tag">MICRO-LOT BATCH #88</span>
                  <span className="coffee-roast-tag">Roasted 48h Ago</span>
                </div>
                <div className="coffee-product-row">
                  <span>Origin &amp; Altitude</span>
                  <strong>Yirgacheffe G1 · 2,150m</strong>
                </div>
                <div className="coffee-product-row">
                  <span>Process</span>
                  <strong>Natural Shade Grown</strong>
                </div>
                <div className="coffee-price-box">
                  <div>
                    <span className="coffee-price-label">250g Artisan Valve Bag</span>
                    <strong className="coffee-price">$24.00 AUD</strong>
                  </div>
                  <div className="coffee-sub-price">
                    <span>Subscribe: <strong className="coffee-orange-txt">$20.40 AUD (-15%)</strong></span>
                  </div>
                </div>
                <button className="coffee-add-btn craft-add-btn">☕ Add to Coffee Bag</button>
                <div className="coffee-guarantees">
                  <span>✔ 100% Home compostable</span>
                  <span>✔ Free express &gt; $60</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="coffee-mini-footer">
            <span><strong>18,000kg+</strong> Specialty Roasted</span>
            <span className="coffee-foot-sep">·</span>
            <span><strong>Cup Score 91.5+</strong></span>
            <span className="coffee-foot-sep">·</span>
            <span>Australia-Wide Express</span>
            <span className="coffee-foot-sep">·</span>
            <span className="coffee-foot-orange">★★★★★ 5.0 (410+ Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          SITE 6: TRADIETRACK MOBILE OS
          Theme: High-Energy Mobile SaaS (Electric Emerald & Floating iPhone Hardware)
         ========================================================================= */}
      {site.id === "tradietrack-mobile" && (
        <div className="tradie-mini-root saas-tradie-root">
          <div
            className="tradie-mini-photo"
            style={{ backgroundImage: `url(${site.image})` }}
          />
          <div className="tradie-mini-overlay" />

          {/* SaaS Nav */}
          <nav className="tradie-mini-nav saas-nav">
            <div className="tradie-nav-brand">
              <span className="tradie-bolt">⚡</span>
              <strong>TradieTrack OS</strong>
              <span className="tradie-nav-sub">Field Software for Aussie Tradies</span>
            </div>
            <div className="tradie-nav-links">
              <span>Xero &amp; MYOB Two-Way Sync</span>
              <span className="tradie-trial-btn saas-trial-btn">Start 30-Day Free Trial</span>
            </div>
            <span className="tradie-rating-chip">⭐ 4.9 App Store · 6,500+ Tradies</span>
          </nav>

          {/* Three-column SaaS Layout */}
          <div className="tradie-mini-body">
            {/* Left Feature List */}
            <div className="tradie-mini-left">
              <div className="tradie-badge">
                <span className="tradie-green-dot" />
                <span>60-Second Invoicing · Tap-to-Pay · Live Van GPS</span>
              </div>
              <h3 className="tradie-display-h">
                Run Your Trade
                <br />
                <span className="tradie-green">From Your Pocket.</span>
              </h3>
              <ul className="tradie-feature-list">
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Instant PDF quotes &amp; contracts signed on doorstep</span>
                </li>
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Tap-to-Pay on iPhone (no card terminal needed)</span>
                </li>
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Live van GPS tracking &amp; instant client arrival SMS</span>
                </li>
                <li>
                  <span className="tradie-check">✓</span>
                  <span>Auto-sync invoices &amp; receipts to Xero &amp; MYOB</span>
                </li>
              </ul>
            </div>

            {/* Center App Mockup Card */}
            <div className="tradie-mini-center">
              <div className="tradie-phone-frame saas-phone-frame">
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
                    <span>Work Scope</span>
                    <strong>Emergency Gas Hot Water Repair</strong>
                  </div>
                  <div className="tradie-screen-amount">
                    <span>Total Collected</span>
                    <strong>$840.00 AUD</strong>
                    <span className="tradie-pay-method">via Apple Pay Tap-to-Pay ✓</span>
                  </div>
                  <div className="tradie-screen-actions">
                    <button className="tradie-action-btn green-btn">Send Invoice</button>
                    <button className="tradie-action-btn grey-btn">Next Job GPS</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metric Cards */}
            <div className="tradie-mini-right">
              <div className="tradie-metric-stack">
                <div className="tradie-metric-card">
                  <strong>6,500+</strong>
                  <span>Active Aussie Tradies</span>
                </div>
                <div className="tradie-metric-card">
                  <strong>14 hrs</strong>
                  <span>Saved on Admin / Wk</span>
                </div>
                <div className="tradie-metric-card highlight-card">
                  <strong>30-Day</strong>
                  <span>Risk-Free Trial</span>
                  <span className="tradie-no-cc">No Credit Card Needed</span>
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
