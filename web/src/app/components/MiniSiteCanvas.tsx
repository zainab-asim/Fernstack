"use client";

import React from "react";
import { ClientSite } from "@/data/sampleWebsitesData";

export default function MiniSiteCanvas({ site }: { site: ClientSite }) {
  return (
    <div
      className={`mini-site-canvas mini-site-bespoke mini-site-${site.id}`}
      style={
        {
          "--mc-bg": site.theme.bg,
          "--mc-accent": site.theme.accent,
          "--mc-accent-grad": site.theme.accentGrad,
          "--mc-glow": site.theme.glow,
        } as React.CSSProperties
      }
    >
      {/* Photorealistic Background Layer */}
      <div
        className="mini-site-photo-layer"
        style={{ backgroundImage: `url(${site.image})` }}
      />
      {/* Adaptive Theme Scrim */}
      <div className={`mini-site-scrim-layer scrim-${site.id}`} />

      {/* =========================================================================
          1. APEX BUILD & RENOVATIONS (BESPOKE LUXURY ARCHITECTURAL LANDING)
         ========================================================================= */}
      {site.id === "apex-renovations" && (
        <div className="mini-bespoke-container mini-apex-theme">
          {/* Architectural Top Bar */}
          <div className="mini-bespoke-nav">
            <div className="mini-nav-brand">
              <span className="mini-brand-icon">📐</span>
              <div>
                <strong className="mini-brand-name">APEX ARCHITECTURAL BUILDERS</strong>
                <span className="mini-brand-sub">Adelaide CBD &amp; Eastern Suburbs · Lic #BLD291038</span>
              </div>
            </div>
            <div className="mini-nav-pill-group">
              <span className="mini-nav-tag">Extensions</span>
              <span className="mini-nav-tag">Second Storey</span>
              <span className="mini-nav-tag">Kitchen Suites</span>
            </div>
            <div className="mini-nav-phone-chip gold-phone">
              <span>Direct Architect: (08) 8234 5678</span>
            </div>
          </div>

          {/* Asymmetric Studio Hero Body */}
          <div className="mini-bespoke-body">
            <div className="mini-bespoke-left">
              <div className="mini-hero-badge gold-badge">
                <span className="gold-dot" /> Master Builders SA · 2026 Excellence Winner
              </div>
              <h3 className="mini-bespoke-h1">
                Architectural Perfection. <br />
                <em className="gold-shimmer">Built For Generations.</em>
              </h3>
              <p className="mini-bespoke-lead">
                Luxury second-storey extensions, bespoke architectural reconfigurations, and mastercraft renovations across Adelaide and the Eastern Suburbs.
              </p>
              <div className="mini-bespoke-chip-row">
                <span className="mini-spec-chip">📐 3D BIM Modeling</span>
                <span className="mini-spec-chip">💎 Natural Travertine &amp; Stone</span>
                <span className="mini-spec-chip gold-highlight">🔒 10-Yr Structural Guarantee</span>
              </div>
            </div>

            {/* Floating Architectural Cost Calculator Card */}
            <div className="mini-bespoke-right">
              <div className="mini-interactive-card apex-card">
                <div className="mini-card-badge">📐 Project Cost Guide</div>
                <div className="mini-card-row">
                  <span>Build Scope:</span>
                  <strong>Second-Storey Extension</strong>
                </div>
                <div className="mini-card-row">
                  <span>Target Area:</span>
                  <strong>140 m² Architectural</strong>
                </div>
                <div className="mini-card-price-box">
                  <span className="price-lbl">Fixed-Price Guaranteed Range</span>
                  <strong className="price-val">$580,000 to $640,000</strong>
                </div>
                <div className="mini-card-guarantee">
                  <span>✔ Zero variation fees guarantee</span>
                  <span>✔ On-site supervisor everyday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Bottom Trust Strip */}
          <div className="mini-bespoke-footer">
            <span className="mini-foot-item"><strong>$45M+</strong> Residential Builds</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>18</strong> Design Awards</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>100%</strong> On-Time Handover</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item gold-text">★★★★★ 5.0 Google Rating (48 Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. BONDI CLEAN (HIGH-TECH ENTERPRISE FACILITY OPERATIONS LANDING)
         ========================================================================= */}
      {site.id === "bondi-clean" && (
        <div className="mini-bespoke-container mini-bondi-theme">
          {/* Operations Portal Top Bar */}
          <div className="mini-bespoke-nav">
            <div className="mini-nav-brand">
              <span className="mini-brand-icon cyan-icon">🛡️</span>
              <div>
                <strong className="mini-brand-name">BONDI CLEAN FACILITIES</strong>
                <span className="mini-brand-sub">Barangaroo · Sydney CBD High-Rises · ISO 9001/14001</span>
              </div>
            </div>
            <div className="mini-nav-pill-group">
              <span className="mini-nav-tag">Corporate Towers</span>
              <span className="mini-nav-tag">Clinical Deep Clean</span>
              <span className="mini-nav-tag">Rope Facade</span>
            </div>
            <div className="mini-nav-phone-chip cyan-phone">
              <span>🚨 24/7 Dispatch: (02) 9044 1188</span>
            </div>
          </div>

          {/* Operations Command Layout */}
          <div className="mini-bespoke-body">
            <div className="mini-bespoke-left">
              <div className="mini-hero-badge cyan-badge">
                <span className="cyan-pulse-dot" /> 140+ Commercial High-Rises Active Tonight
              </div>
              <h3 className="mini-bespoke-h1">
                Immaculate Workspaces. <br />
                <em className="cyan-shimmer">Zero Downtime Facility Care.</em>
              </h3>
              <p className="mini-bespoke-lead">
                Hospital-grade terminal cleaning, corporate high-rise facility care, and botanical green-star sanitation for Sydney CBD financial institutions.
              </p>
              <div className="mini-bespoke-chip-row">
                <span className="mini-spec-chip cyan-highlight">🏆 Triple ISO Certified</span>
                <span className="mini-spec-chip">📱 Live QR Check-in Audits</span>
                <span className="mini-spec-chip">🏥 Clinical AS/NZS 4187</span>
              </div>
            </div>

            {/* Floating Live Facility Audit Terminal Card */}
            <div className="mini-bespoke-right">
              <div className="mini-interactive-card bondi-card">
                <div className="mini-card-header-cyan">
                  <span className="live-tag">LIVE AUDIT</span>
                  <span>Barangaroo Tower 1 · Level 38</span>
                </div>
                <div className="mini-card-row">
                  <span>Terminal Clean:</span>
                  <strong className="green-txt">Passed (100% Botanical)</strong>
                </div>
                <div className="mini-card-row">
                  <span>HEPA Air Index:</span>
                  <strong>0.02 ppm (Clean Room)</strong>
                </div>
                <div className="mini-card-price-box cyan-box">
                  <span className="price-lbl">Commercial Facility Retainer</span>
                  <strong className="price-val">99.98% Audit Pass SLA</strong>
                </div>
                <div className="mini-card-guarantee">
                  <span>✔ Police-cleared security teams</span>
                  <span>✔ $20M Public liability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Bottom Trust Strip */}
          <div className="mini-bespoke-footer">
            <span className="mini-foot-item"><strong>140+</strong> Corporate Towers</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>100%</strong> Plant-Based Sanitizers</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>2-Hour</strong> Emergency SLA</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item cyan-text">★★★★★ 5.0 Google Rating (112 Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. TRUENORTH PRIVATE WEALTH (ELITE FIDUCIARY FAMILY OFFICE LANDING)
         ========================================================================= */}
      {site.id === "truenorth-wealth" && (
        <div className="mini-bespoke-container mini-truenorth-theme">
          {/* Private Bank Top Bar */}
          <div className="mini-bespoke-nav">
            <div className="mini-nav-brand">
              <span className="mini-brand-icon gold-crest">🏛️</span>
              <div>
                <strong className="mini-brand-name">TRUENORTH PRIVATE WEALTH</strong>
                <span className="mini-brand-sub">Collins St, Melbourne · AFSL #482910 · Fee-Only</span>
              </div>
            </div>
            <div className="mini-nav-pill-group">
              <span className="mini-nav-tag">Family Office</span>
              <span className="mini-nav-tag">Discretionary Equities</span>
              <span className="mini-nav-tag">Asset Shielding</span>
            </div>
            <div className="mini-nav-phone-chip elite-phone">
              <span>Private Client Desk: (03) 9122 4400</span>
            </div>
          </div>

          {/* Prestigious Editorial Wealth Layout */}
          <div className="mini-bespoke-body">
            <div className="mini-bespoke-left">
              <div className="mini-hero-badge platinum-badge">
                <span className="gold-dot" /> 100% Fiduciary Mandate · Zero Commissions
              </div>
              <h3 className="mini-bespoke-h1 serif-headline">
                Preserving Generational Wealth. <br />
                <em className="champagne-shimmer">Built to Endure Market Cycles.</em>
              </h3>
              <p className="mini-bespoke-lead">
                Fiduciary wealth stewardship, direct global equities, and discretionary family office advisory for Australian founders, executives, and affluent families.
              </p>
              <div className="mini-bespoke-chip-row">
                <span className="mini-spec-chip gold-highlight">📈 $680M+ Stewarded</span>
                <span className="mini-spec-chip">🏛️ Multi-Gen Succession</span>
                <span className="mini-spec-chip">🛡️ Private Discretionary Trust</span>
              </div>
            </div>

            {/* Floating Wealth Projection Model Card */}
            <div className="mini-bespoke-right">
              <div className="mini-interactive-card truenorth-card">
                <div className="mini-card-badge gold-pill">🏛️ Portfolio Simulation</div>
                <div className="mini-card-row">
                  <span>Initial Capital:</span>
                  <strong>$3,500,000 Invested</strong>
                </div>
                <div className="mini-card-row">
                  <span>15-Year Horizon:</span>
                  <strong className="gold-txt">$11,240,000 Target</strong>
                </div>
                <div className="mini-card-price-box gold-box">
                  <span className="price-lbl">Projected Annual Passive Yield</span>
                  <strong className="price-val">$182,000 / Year</strong>
                </div>
                <div className="mini-card-guarantee">
                  <span>✔ Zero hidden vendor rebates</span>
                  <span>✔ Discretionary executive invitation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Family Office Bottom Trust Strip */}
          <div className="mini-bespoke-footer">
            <span className="mini-foot-item"><strong>28 Years</strong> Private Advisory</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>64</strong> Wealthy Families</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>Top 1%</strong> Performance Decile</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item gold-text">★★★★★ 5.0 Private Client Trust</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. PULSE DENTAL (LUMINOUS SPA-GRADE COSMETIC CLINIC LANDING)
         ========================================================================= */}
      {site.id === "pulse-dental" && (
        <div className="mini-bespoke-container mini-pulse-theme">
          {/* Aesthetic Clinic Top Bar */}
          <div className="mini-bespoke-nav">
            <div className="mini-nav-brand">
              <span className="mini-brand-icon mint-icon">✨</span>
              <div>
                <strong className="mini-brand-name">PULSE COSMETIC DENTAL STUDIO</strong>
                <span className="mini-brand-sub">Adelaide Penthouse Studio · Dr. Sophie Miller</span>
              </div>
            </div>
            <div className="mini-nav-pill-group">
              <span className="mini-nav-tag">Porcelain Veneers</span>
              <span className="mini-nav-tag">Invisalign Platinum</span>
              <span className="mini-nav-tag">Laser Whitening</span>
            </div>
            <div className="mini-nav-phone-chip mint-phone">
              <span>Emergency &amp; Consult: (08) 8410 3322</span>
            </div>
          </div>

          {/* Modern Beauty & Dental Layout */}
          <div className="mini-bespoke-body">
            <div className="mini-bespoke-left">
              <div className="mini-hero-badge mint-badge">
                <span className="mint-pulse-dot" /> 3D Digital Smile Test-Drive in 15 Mins
              </div>
              <h3 className="mini-bespoke-h1">
                Designing Adelaide&apos;s <br />
                <em className="mint-shimmer">Most Radiant Smiles.</em>
              </h3>
              <p className="mini-bespoke-lead">
                Master ceramic porcelain veneers, clear aligners, and pain-free laser whitening in a relaxed, spa-grade penthouse dental suite.
              </p>
              <div className="mini-bespoke-chip-row">
                <span className="mini-spec-chip mint-highlight">✨ 10-Yr Fracture Warranty</span>
                <span className="mini-spec-chip">📺 Ceiling Netflix Suite</span>
                <span className="mini-spec-chip">💳 From $49/wk (0% Interest)</span>
              </div>
            </div>

            {/* Floating Smile Assessment Card */}
            <div className="mini-bespoke-right">
              <div className="mini-interactive-card pulse-card">
                <div className="mini-card-header-mint">
                  <span>📅 Next Available Booking</span>
                  <strong className="green-txt">Tomorrow 10:15 AM</strong>
                </div>
                <div className="mini-card-row">
                  <span>Lead Clinician:</span>
                  <strong>Dr. Sophie Miller (BDS Hons)</strong>
                </div>
                <div className="mini-card-row">
                  <span>Assessment:</span>
                  <strong>Free 3D Smile Scan Included</strong>
                </div>
                <div className="mini-card-price-box mint-box">
                  <span className="price-lbl">Porcelain Veneer Smile Design</span>
                  <strong className="price-val">From $49 / Week</strong>
                </div>
                <div className="mini-card-guarantee">
                  <span>✔ Zero impression goop (100% digital)</span>
                  <span>✔ HICAPS on-the-spot claim</span>
                </div>
              </div>
            </div>
          </div>

          {/* Aesthetic Bottom Trust Strip */}
          <div className="mini-bespoke-footer">
            <span className="mini-foot-item"><strong>4,200+</strong> Smiles Transformed</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>10-Year</strong> Ceramic Warranty</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>Sleep Dentistry</strong> Available</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item mint-text">★★★★★ 5.0 Google Rating (320+ Reviews)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          5. ROASTCRAFT COFFEE (ARTISANAL FITZROY ROASTERY ECOMMERCE LANDING)
         ========================================================================= */}
      {site.id === "roastcraft-coffee" && (
        <div className="mini-bespoke-container mini-roastcraft-theme">
          {/* Artisanal Craft Top Bar */}
          <div className="mini-bespoke-nav">
            <div className="mini-nav-brand">
              <span className="mini-brand-icon orange-icon">☕</span>
              <div>
                <strong className="mini-brand-name">ROASTCRAFT COFFEE CO.</strong>
                <span className="mini-brand-sub">Fitzroy Roastery &amp; Espresso Lab · Micro-Lots</span>
              </div>
            </div>
            <div className="mini-nav-pill-group">
              <span className="mini-nav-tag">Single Origins</span>
              <span className="mini-nav-tag">Cold Brew Kegs</span>
              <span className="mini-nav-tag">Subscribe &amp; Save 15%</span>
            </div>
            <div className="mini-nav-phone-chip orange-phone">
              <span>📦 Shipped Within 24h of Roast</span>
            </div>
          </div>

          {/* Artisanal Editorial Roastery Layout */}
          <div className="mini-bespoke-body">
            <div className="mini-bespoke-left">
              <div className="mini-hero-badge orange-badge">
                <span className="orange-dot" /> 🥇 Golden Bean 2025 Gold Medalist
              </div>
              <h3 className="mini-bespoke-h1 craft-headline">
                Obsessively Sourced. <br />
                <em className="terracotta-shimmer">Roasted Daily in Fitzroy.</em>
              </h3>
              <p className="mini-bespoke-lead">
                Direct-trade micro-lot specialty beans sourced from high-altitude Ethiopian and Colombian washing stations. Shipped at peak degassing within 24 hours.
              </p>
              <div className="mini-bespoke-chip-row">
                <span className="mini-spec-chip orange-highlight">🌿 100% Direct-Trade</span>
                <span className="mini-spec-chip">☕ SCAA Cup Score 91.5</span>
                <span className="mini-spec-chip">🚚 Free AU Delivery on 2+ Bags</span>
              </div>
            </div>

            {/* Floating Single-Origin Coffee Bag Card */}
            <div className="mini-bespoke-right">
              <div className="mini-interactive-card roastcraft-card">
                <div className="mini-card-header-orange">
                  <span className="batch-tag">MICRO-LOT BATCH #88</span>
                  <span className="roast-badge">Roasted 2 Days Ago</span>
                </div>
                <div className="mini-card-row">
                  <span>Origin / Process:</span>
                  <strong>Ethiopia Yirgacheffe G1 (Natural)</strong>
                </div>
                <div className="mini-card-row">
                  <span>Tasting Notes:</span>
                  <strong className="orange-txt">Jasmine · Candied Peach · Wild Honey</strong>
                </div>
                <div className="mini-card-price-box orange-box">
                  <span className="price-lbl">Whole Bean 250g Roaster Pouch</span>
                  <strong className="price-val">$24.00 AUD (Sub: $20.40)</strong>
                </div>
                <div className="mini-card-guarantee">
                  <span>✔ 100% Home-compostable barrier pouch</span>
                  <span>✔ Freshness sealed valve</span>
                </div>
              </div>
            </div>
          </div>

          {/* Artisanal Bottom Trust Strip */}
          <div className="mini-bespoke-footer">
            <span className="mini-foot-item"><strong>18,000+ kg</strong> Roasted</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>Cup Score 91+</strong> Specialty Grade</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>Australia-Wide</strong> Express Delivery</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item orange-text">★★★★★ 5.0 Rating (410+ Coffee Drinkers)</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          6. TRADIETRACK MOBILE (AUSSIE TRADIE TECH SAAS & FIELD OS LANDING)
         ========================================================================= */}
      {site.id === "tradietrack-mobile" && (
        <div className="mini-bespoke-container mini-tradietrack-theme">
          {/* Tech App Top Bar */}
          <div className="mini-bespoke-nav">
            <div className="mini-nav-brand">
              <span className="mini-brand-icon blue-icon">⚡</span>
              <div>
                <strong className="mini-brand-name">TRADIETRACK MOBILE OS</strong>
                <span className="mini-brand-sub">For Aussie Sparkies, Plumbers &amp; Builders</span>
              </div>
            </div>
            <div className="mini-nav-pill-group">
              <span className="mini-nav-tag">Tap-to-Pay</span>
              <span className="mini-nav-tag">60-Sec PDF Quotes</span>
              <span className="mini-nav-tag">Live Fleet GPS</span>
            </div>
            <div className="mini-nav-phone-chip blue-phone">
              <span>⭐ 4.9★ App Store (1,400+ Tradies)</span>
            </div>
          </div>

          {/* Gritty Tech SaaS Layout */}
          <div className="mini-bespoke-body">
            <div className="mini-bespoke-left">
              <div className="mini-hero-badge blue-badge">
                <span className="blue-pulse-dot" /> ⚡ 60-Second Invoicing &amp; Tap-to-Pay
              </div>
              <h3 className="mini-bespoke-h1">
                Stop Doing Invoices at Night. <br />
                <em className="blue-shimmer">Run Your Ute From Your Phone.</em>
              </h3>
              <p className="mini-bespoke-lead">
                Built for Aussie sparkies, plumbers, chippies, and landscapers. Send professional quotes, track van fleets, and collect instant card payments with $0 terminal hardware.
              </p>
              <div className="mini-bespoke-chip-row">
                <span className="mini-spec-chip blue-highlight">💳 Tap-to-Pay on iPhone</span>
                <span className="mini-spec-chip">🧾 Instant Xero &amp; MYOB Sync</span>
                <span className="mini-spec-chip">📍 Real-time Van GPS</span>
              </div>
            </div>

            {/* Floating Live iPhone Tap-to-Pay Receipt Card */}
            <div className="mini-bespoke-right">
              <div className="mini-interactive-card tradietrack-card">
                <div className="mini-card-header-blue">
                  <span>📱 TradieTrack Field OS</span>
                  <strong className="green-txt">Job #4092 Paid ✅</strong>
                </div>
                <div className="mini-card-row">
                  <span>Client / Address:</span>
                  <strong>James H. · North Adelaide</strong>
                </div>
                <div className="mini-card-row">
                  <span>Work Completed:</span>
                  <strong>Emergency Rinnai Gas Hot Water</strong>
                </div>
                <div className="mini-card-price-box blue-box">
                  <span className="price-lbl">Tap-to-Pay Instant Settlement</span>
                  <strong className="price-val">$840.00 AUD (Paid via Apple Pay)</strong>
                </div>
                <div className="mini-card-guarantee">
                  <span>✔ Sent tax invoice PDF to client SMS</span>
                  <span>✔ Automatically synced to Xero</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tradie Tech Bottom Trust Strip */}
          <div className="mini-bespoke-footer">
            <span className="mini-foot-item"><strong>6,500+</strong> Aussie Tradies</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>14 Hours</strong> Saved Per Week</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item"><strong>30-Day</strong> Free Trial (No Credit Card)</span>
            <span className="mini-foot-sep">·</span>
            <span className="mini-foot-item blue-text">★★★★★ 4.9 App Store Rating</span>
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
