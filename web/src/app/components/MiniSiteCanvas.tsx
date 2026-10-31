"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ClientSite } from "@/data/sampleWebsitesData";

export default function MiniSiteCanvas({ site }: { site: ClientSite }) {
  // 1. Apex Builder interactive state
  const [apexScope, setApexScope] = useState<string>("Second Storey");

  // 2. Bondi Clean interactive state
  const [bondiTower, setBondiTower] = useState<string>("Barangaroo Tower 1");

  // 3. TrueNorth Wealth interactive state
  const [wealthStrategy, setWealthStrategy] = useState<string>("Balanced Growth");

  // 4. Pulse Dental interactive state
  const [dentalTreatment, setDentalTreatment] = useState<string>("Porcelain Veneers");

  // 5. RoastCraft Coffee interactive state
  const [coffeeBean, setCoffeeBean] = useState<string>("Ethiopia Geisha");
  const [coffeeGrind, setCoffeeGrind] = useState<string>("Whole Bean");

  // 6. TradieTrack interactive state
  const [tradieTab, setTradieTab] = useState<"quote" | "pay" | "gps">("quote");

  return (
    <div
      className={`mini-site-canvas-v2 site-theme-${site.id}`}
      style={
        {
          "--site-accent": site.theme.accent,
          "--site-accent-grad": site.theme.accentGrad,
          "--site-glow": site.theme.glow,
        } as React.CSSProperties
      }
    >
      {/* Ambient background glow */}
      <div className="canvas-ambient-spotlight" />

      {/* =========================================================================
          SITE 1: APEX BUILD & RENOVATIONS (Luxury Architectural Atelier)
         ========================================================================= */}
      {site.id === "apex-renovations" && (
        <div className="canvas-inner-root apex-v2-theme">
          <header className="canvas-top-nav">
            <div className="canvas-brand-block">
              <span className="apex-brand-monogram">A</span>
              <div>
                <strong className="canvas-brand-title">APEX BUILD &amp; RENOVATIONS</strong>
                <span className="canvas-brand-sub">Adelaide Master Builders · Lic #BLD291038</span>
              </div>
            </div>
            <div className="canvas-nav-badges">
              <span className="canvas-live-badge gold">
                <span className="status-ping-dot gold" />
                2026 Master Builders Excellence Award
              </span>
              <a href="tel:0882345678" className="canvas-phone-pill" onClick={(e) => e.stopPropagation()}>
                ☎ (08) 8234 5678
              </a>
            </div>
          </header>

          <div className="canvas-main-grid apex-layout-split">
            {/* Left: Editorial Hero & Interactive Scope Selector */}
            <div className="canvas-hero-col">
              <span className="canvas-category-tag gold">ARCHITECTURAL RESIDENTIAL ATELIER</span>
              <h3 className="canvas-headline">
                Architectural Living. <br />
                <span className="gold-highlight">Built for Generations.</span>
              </h3>
              <p className="canvas-subtext">
                Bespoke second-storey extensions, luxury pavilions, and heritage restorations across Adelaide &amp; Eastern Suburbs.
              </p>

              {/* Interactive Scope Buttons */}
              <div className="showcase-scope-wrap">
                <span className="scope-row-title">Select Build Scope:</span>
                <div className="scope-button-row">
                  {["Second Storey", "Pavilion", "Heritage Rebuild"].map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      className={`scope-btn ${apexScope === scope ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setApexScope(scope);
                      }}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              <div className="canvas-trust-chips">
                <span className="trust-chip">📐 3D BIM Walkthroughs</span>
                <span className="trust-chip">🛡️ Fixed-Price Guarantee</span>
                <span className="trust-chip">🏛️ 10-Yr Structural Warranty</span>
              </div>
            </div>

            {/* Right: Prominent Real Architectural Photo Showcase */}
            <div className="canvas-photo-showcase-col">
              <div className="featured-photo-card gold-frame">
                <div className="photo-card-media">
                  <Image
                    src={site.image}
                    alt="Apex Luxury Residential Architecture"
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="photo-scrim-gradient" />
                  
                  {/* Floating Architectural Details on the Photo */}
                  <div className="photo-floating-pill top-left">
                    <span className="gold-dot-pulse" />
                    <span>Master Builders SA Excellence Winner</span>
                  </div>

                  <div className="photo-floating-glass-box bottom-full">
                    <div className="glass-box-top">
                      <span className="glass-scope-tag">{apexScope} Extension</span>
                      <span className="glass-timeline-tag">
                        {apexScope === "Second Storey" ? "18–22 Wks" : apexScope === "Pavilion" ? "12–16 Wks" : "24–30 Wks"}
                      </span>
                    </div>
                    <div className="glass-box-price-row">
                      <span className="glass-label">Guaranteed Fixed Contract:</span>
                      <strong className="glass-price gold-text">
                        {apexScope === "Second Storey"
                          ? "$580,000 – $640,000"
                          : apexScope === "Pavilion"
                          ? "$240,000 – $310,000"
                          : "$890,000 – $1,250,000"}
                      </strong>
                    </div>
                    <button type="button" className="glass-cta-btn gold-btn">
                      Request Feasibility Study &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="canvas-bottom-bar">
            <span><strong>$45M+</strong> High-End Residential Handed Over</span>
            <span className="bar-bullet">·</span>
            <span><strong>5.0 ★★★★★</strong> 48 Client Reviews</span>
            <span className="bar-bullet">·</span>
            <span className="domain-tag">apexbuildrenovations.com.au</span>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 2: BONDI CLEAN COMMERCIAL (Cyber-Precision High-Rise Command Center)
         ========================================================================= */}
      {site.id === "bondi-clean" && (
        <div className="canvas-inner-root bondi-v2-theme">
          <header className="canvas-top-nav">
            <div className="canvas-brand-block">
              <span className="bondi-radar-circle">
                <span className="radar-ping" />
              </span>
              <div>
                <strong className="canvas-brand-title">BONDI CLEAN FACILITIES</strong>
                <span className="canvas-brand-sub">Sydney CBD High-Rise Operations · ISO 9001/14001</span>
              </div>
            </div>
            <div className="canvas-nav-badges">
              <span className="canvas-live-badge cyan">
                <span className="status-ping-dot cyan" />
                Live Telemetry: 140+ Towers Optimal
              </span>
              <a href="tel:0290441188" className="canvas-phone-pill" onClick={(e) => e.stopPropagation()}>
                🚨 24/7 Dispatch: (02) 9044 1188
              </a>
            </div>
          </header>

          <div className="canvas-main-grid bondi-layout-split">
            {/* Left: Prominent High-Rise Tower Photo with Live Telemetry Scanner */}
            <div className="canvas-photo-showcase-col">
              <div className="featured-photo-card cyan-frame">
                <div className="photo-card-media">
                  <Image
                    src={site.image}
                    alt="Bondi Clean Commercial High-Rise Facilities"
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="cyan-scanner-beam" />
                  <div className="photo-scrim-gradient" />

                  <div className="photo-floating-pill top-left cyan-glass">
                    <span className="cyan-dot-pulse" />
                    <span>{bondiTower} · MONITORED</span>
                  </div>

                  <div className="photo-floating-glass-box bottom-full cyan-glass-box">
                    <div className="telemetry-stat-row">
                      <div className="telem-item">
                        <span>Air Particulate</span>
                        <strong className="cyan-text">0.02 ppm (HEPA Pass)</strong>
                      </div>
                      <div className="telem-item">
                        <span>Terminal Clean</span>
                        <strong className="text-green">100% Disinfected</strong>
                      </div>
                      <div className="telem-item">
                        <span>Emergency SLA</span>
                        <strong className="cyan-text">45-Min Rapid Active</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enterprise Controls & Tower Switcher */}
            <div className="canvas-hero-col">
              <span className="canvas-category-tag cyan">COMMERCIAL FACILITY &amp; ASSET CARE</span>
              <h3 className="canvas-headline">
                Immaculate Towers. <br />
                <span className="cyan-highlight">Zero Operational Downtime.</span>
              </h3>
              <p className="canvas-subtext">
                Hospital-grade terminal sanitation and corporate facility management for Sydney CBD commercial towers and financial institutions.
              </p>

              <div className="showcase-scope-wrap">
                <span className="scope-row-title">Active Monitored Tower:</span>
                <div className="scope-button-row">
                  {["Barangaroo Tower 1", "Martin Place 50", "Crown Sydney L22"].map((tower) => (
                    <button
                      key={tower}
                      type="button"
                      className={`scope-btn cyan-btn-tab ${bondiTower === tower ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setBondiTower(tower);
                      }}
                    >
                      {tower.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card-action-row" style={{ marginTop: 8 }}>
                <button type="button" className="card-action-btn cyan-btn">
                  <span>Request Enterprise Facility Audit &rarr;</span>
                </button>
                <span className="card-guarantee-note">✓ Triple ISO 9001 / 14001 / 45001 Certified</span>
              </div>
            </div>
          </div>

          <footer className="canvas-bottom-bar">
            <span><strong>99.98%</strong> Audit Pass Across 140+ Towers</span>
            <span className="bar-bullet">·</span>
            <span><strong>5.0 ★★★★★</strong> 112 Commercial Reviews</span>
            <span className="bar-bullet">·</span>
            <span className="domain-tag">bondicleansydney.com.au</span>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 3: TRUENORTH WEALTH & ADVISORY (Swiss Private Wealth & Family Office)
         ========================================================================= */}
      {site.id === "truenorth-wealth" && (
        <div className="canvas-inner-root wealth-v2-theme">
          <header className="canvas-top-nav">
            <div className="canvas-brand-block">
              <span className="wealth-shield-icon">🛡️</span>
              <div>
                <strong className="canvas-brand-title">TRUENORTH ADVISORY PARTNERS</strong>
                <span className="canvas-brand-sub">Private Wealth &amp; Family Office · AFSL #491204</span>
              </div>
            </div>
            <div className="canvas-nav-badges">
              <span className="canvas-live-badge blue">
                <span className="status-ping-dot blue" />
                Fiduciary Non-Commission Mandate
              </span>
              <a href="tel:0391228800" className="canvas-phone-pill" onClick={(e) => e.stopPropagation()}>
                (03) 9122 8800
              </a>
            </div>
          </header>

          <div className="canvas-main-grid truenorth-layout-split">
            {/* Left: Wealth Preservation Narrative & Interactive Strategy */}
            <div className="canvas-hero-col">
              <span className="canvas-category-tag blue">PRIVATE WEALTH &amp; FAMILY OFFICE</span>
              <h3 className="canvas-headline">
                Preserving Capital. <br />
                <span className="blue-highlight">Across Generations.</span>
              </h3>
              <p className="canvas-subtext">
                Fiduciary investment architecture, cross-border tax governance, and private asset growth for high-net-worth Australian families.
              </p>

              <div className="showcase-scope-wrap">
                <span className="scope-row-title">Select Investment Mandate:</span>
                <div className="scope-button-row">
                  {["Preservation", "Balanced Growth", "Yield Focus"].map((strat) => (
                    <button
                      key={strat}
                      type="button"
                      className={`scope-btn blue-btn-tab ${wealthStrategy.includes(strat.split(" ")[0]) ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setWealthStrategy(strat);
                      }}
                    >
                      {strat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="canvas-trust-chips">
                <span className="trust-chip">💼 $320M+ Private AUM</span>
                <span className="trust-chip">⚖️ 100% Non-Commission Fiduciary</span>
                <span className="trust-chip">📈 +18.4% 3-Yr Net CAGR</span>
              </div>
            </div>

            {/* Right: Framed Private Advisory Photo with Live Projected Returns Card */}
            <div className="canvas-photo-showcase-col">
              <div className="featured-photo-card blue-frame">
                <div className="photo-card-media">
                  <Image
                    src={site.image}
                    alt="TrueNorth Advisory Private Family Office"
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="photo-scrim-gradient" />

                  <div className="photo-floating-pill top-left blue-glass">
                    <span className="blue-dot-pulse" />
                    <span>Fiduciary Non-Commission Asset Model</span>
                  </div>

                  <div className="photo-floating-glass-box bottom-full blue-glass-box">
                    <div className="glass-box-top">
                      <span className="glass-scope-tag">{wealthStrategy}</span>
                      <span className="glass-timeline-tag blue-text">
                        {wealthStrategy === "Preservation" ? "6.5% Net CAGR" : wealthStrategy.includes("Balanced") ? "8.2% Net CAGR" : "10.8% Net CAGR"}
                      </span>
                    </div>
                    <div className="glass-box-price-row">
                      <span className="glass-label">15-Yr Projected Growth ($3.5M Basis):</span>
                      <strong className="glass-price blue-text">
                        {wealthStrategy === "Preservation"
                          ? "$8,950,000 AUD"
                          : wealthStrategy.includes("Balanced")
                          ? "$11,480,000 AUD"
                          : "$16,200,000 AUD"}
                      </strong>
                    </div>
                    <button type="button" className="glass-cta-btn blue-btn">
                      Schedule Confidential Review &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="canvas-bottom-bar">
            <span><strong>$320M+</strong> Managed for 180 Families</span>
            <span className="bar-bullet">·</span>
            <span><strong>ASIC AFSL Licensed</strong></span>
            <span className="bar-bullet">·</span>
            <span className="domain-tag">truenorthadvisory.com.au</span>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 4: PULSE DENTAL & AESTHETIC SUITES (Luxury Boutique Cosmetic Spa)
         ========================================================================= */}
      {site.id === "pulse-dental" && (
        <div className="canvas-inner-root dental-v2-theme">
          <header className="canvas-top-nav">
            <div className="canvas-brand-block">
              <span className="dental-tooth-icon">✨</span>
              <div>
                <strong className="canvas-brand-title">PULSE DENTAL &amp; AESTHETIC SUITES</strong>
                <span className="canvas-brand-sub">Modern Smile Architecture · North Adelaide</span>
              </div>
            </div>
            <div className="canvas-nav-badges">
              <span className="canvas-live-badge mint">
                <span className="status-ping-dot mint" />
                Available Today: 2:15 PM Open Slot
              </span>
              <a href="tel:0883621144" className="canvas-phone-pill" onClick={(e) => e.stopPropagation()}>
                (08) 8362 1144
              </a>
            </div>
          </header>

          <div className="canvas-main-grid pulse-layout-split">
            {/* Left: Framed Boutique Clinic & Smile Suite Photo */}
            <div className="canvas-photo-showcase-col">
              <div className="featured-photo-card mint-frame">
                <div className="photo-card-media">
                  <Image
                    src={site.image}
                    alt="Pulse Aesthetic Dental Clinic Suites"
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="photo-scrim-gradient" />

                  <div className="photo-floating-pill top-left mint-glass">
                    <span className="mint-dot-pulse" />
                    <span>3D Digital Smile Scan Included ($350 Value)</span>
                  </div>

                  <div className="photo-floating-glass-box bottom-full mint-glass-box">
                    <div className="glass-box-top">
                      <span className="glass-scope-tag">{dentalTreatment}</span>
                      <span className="glass-timeline-tag mint-text">Next Opening: Today 2:15 PM</span>
                    </div>
                    <div className="glass-box-price-row">
                      <span className="glass-label">Interest-Free Plan:</span>
                      <strong className="glass-price mint-text">
                        {dentalTreatment === "Porcelain Veneers"
                          ? "$149 / Week"
                          : dentalTreatment === "Clear Aligners"
                          ? "$49 / Week"
                          : "$19 / Week"}
                      </strong>
                    </div>
                    <button type="button" className="glass-cta-btn mint-btn">
                      Reserve 2:15 PM Smile Consultation &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Luxury Hospitality & Treatment Options */}
            <div className="canvas-hero-col">
              <span className="canvas-category-tag mint">BOUTIQUE AESTHETIC DENTISTRY</span>
              <h3 className="canvas-headline">
                Smile Architecture. <br />
                <span className="mint-highlight">Precision Without Anxiety.</span>
              </h3>
              <p className="canvas-subtext">
                Experience spa-grade hospitality, 3D smile design simulations, and painless porcelain veneers with zero dental anxiety.
              </p>

              <div className="showcase-scope-wrap">
                <span className="scope-row-title">Select Cosmetic Procedure:</span>
                <div className="scope-button-row">
                  {["Porcelain Veneers", "Clear Aligners", "Laser Whitening"].map((treatment) => (
                    <button
                      key={treatment}
                      type="button"
                      className={`scope-btn mint-btn-tab ${dentalTreatment === treatment ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDentalTreatment(treatment);
                      }}
                    >
                      {treatment.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="canvas-trust-chips">
                <span className="trust-chip">✨ 3D Digital Smile Previews</span>
                <span className="trust-chip">🕊️ Sleep Dentistry Available</span>
                <span className="trust-chip">⭐ 5.0 Rating (240+ Reviews)</span>
              </div>
            </div>
          </div>

          <footer className="canvas-bottom-bar">
            <span><strong>2,800+</strong> Smiles Transformed</span>
            <span className="bar-bullet">·</span>
            <span><strong>5.0 ★★★★★</strong> 240+ Verified Reviews</span>
            <span className="bar-bullet">·</span>
            <span className="domain-tag">pulsedentaladelaide.com.au</span>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 5: ROASTCRAFT SPECIALTY COFFEE (Artisan Roastery & E-Commerce)
         ========================================================================= */}
      {site.id === "roastcraft-coffee" && (
        <div className="canvas-inner-root coffee-v2-theme">
          <header className="canvas-top-nav">
            <div className="canvas-brand-block">
              <span className="coffee-cup-icon">☕</span>
              <div>
                <strong className="canvas-brand-title">ROASTCRAFT SPECIALTY ROASTERS</strong>
                <span className="canvas-brand-sub">Small-Batch Micro-Lot Roastery · Melbourne &amp; Adelaide</span>
              </div>
            </div>
            <div className="canvas-nav-badges">
              <span className="canvas-live-badge amber">
                <span className="status-ping-dot amber" />
                Batch #88 Roasted 48h Ago
              </span>
              <span className="canvas-phone-pill amber-pill">
                Free Express Over $50
              </span>
            </div>
          </header>

          <div className="canvas-main-grid coffee-layout-split">
            {/* Left: Roastery Manifesto & Bean Selector */}
            <div className="canvas-hero-col">
              <span className="canvas-category-tag amber">SINGLE-ORIGIN MICRO-LOT COFFEE</span>
              <h3 className="canvas-headline">
                Roasted Tuesday. <br />
                <span className="amber-highlight">Delivered Thursday.</span>
              </h3>
              <p className="canvas-subtext">
                Direct-trade specialty beans ethically sourced from high-altitude micro-farms in Ethiopia, Colombia, and Guatemala.
              </p>

              <div className="showcase-scope-wrap">
                <span className="scope-row-title">Select Origin Micro-Lot:</span>
                <div className="scope-button-row">
                  {["Ethiopia Geisha", "Yirgacheffe Honey", "Guatemala Reserve"].map((bean) => (
                    <button
                      key={bean}
                      type="button"
                      className={`scope-btn amber-btn-tab ${coffeeBean === bean ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCoffeeBean(bean);
                      }}
                    >
                      {bean.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="canvas-trust-chips">
                <span className="trust-chip">🌱 100% Home Compostable Bags</span>
                <span className="trust-chip">🔥 Cup Score 91.5+ Guaranteed</span>
                <span className="trust-chip">🚚 Australia-Wide Express Delivery</span>
              </div>
            </div>

            {/* Right: Tactile Coffee Photo with Flavor Notes Overlay & 1-Tap Apple Pay */}
            <div className="canvas-photo-showcase-col">
              <div className="featured-photo-card amber-frame">
                <div className="photo-card-media">
                  <Image
                    src={site.image}
                    alt="RoastCraft Specialty Artisan Coffee"
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="photo-scrim-gradient" />

                  {/* Flavor Notes Floating Banner */}
                  <div className="photo-floating-pill top-left amber-glass">
                    <span>Notes: {coffeeBean.includes("Geisha") ? "Bergamot · Jasmine · Peach" : coffeeBean.includes("Honey") ? "Blueberry · Lemon · Cocoa" : "Dark Chocolate · Fig · Almond"}</span>
                  </div>

                  <div className="photo-floating-glass-box bottom-full amber-glass-box">
                    <div className="glass-box-top">
                      <span className="glass-scope-tag">{coffeeBean} (250g)</span>
                      <span className="glass-timeline-tag amber-text">Roasted 48h Ago</span>
                    </div>
                    <div className="glass-box-price-row">
                      <span className="glass-label">Fresh Roast Bag:</span>
                      <strong className="glass-price amber-text">
                        {coffeeBean.includes("Geisha") ? "$36.00 AUD" : "$28.00 AUD"}
                        <small className="sub-discount-text"> (Sub: -15%)</small>
                      </strong>
                    </div>
                    <button type="button" className="glass-cta-btn amber-btn">
                      Pay Instant 1-Tap Checkout &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="canvas-bottom-bar">
            <span><strong>18,000kg+</strong> Roasted for 4,200 Subscribers</span>
            <span className="bar-bullet">·</span>
            <span><strong>5.0 ★★★★★</strong> 410+ Reviews</span>
            <span className="bar-bullet">·</span>
            <span className="domain-tag">roastcraftcoffee.com.au</span>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 6: TRADIETRACK / FIELDFLOW PRO (High-Velocity Field Service App)
         ========================================================================= */}
      {site.id === "tradietrack-mobile" && (
        <div className="canvas-inner-root tradie-v2-theme">
          <header className="canvas-top-nav">
            <div className="canvas-brand-block">
              <span className="tradie-bolt-icon">⚡</span>
              <div>
                <strong className="canvas-brand-title">FIELDFLOW &amp; TRADIETRACK PRO</strong>
                <span className="canvas-brand-sub">Field Service Operations OS · Built for Aussie Tradies</span>
              </div>
            </div>
            <div className="canvas-nav-badges">
              <span className="canvas-live-badge green">
                <span className="status-ping-dot green" />
                6,500+ Active Tradies on Job Sites
              </span>
              <span className="canvas-phone-pill green-pill">
                Xero &amp; MYOB Two-Way Sync
              </span>
            </div>
          </header>

          <div className="canvas-main-grid tradie-layout-split">
            {/* Left: Trade Operations Narrative & Mode Selector */}
            <div className="canvas-hero-col">
              <span className="canvas-category-tag green">FIELD OPERATIONS &amp; INVOICING APP</span>
              <h3 className="canvas-headline">
                Run Your Trade. <br />
                <span className="green-highlight">Right From Your Pocket.</span>
              </h3>
              <p className="canvas-subtext">
                Instant doorstep PDF quotes, tap-to-pay on iPhone with zero hardware, live GPS fleet dispatch, and automated Xero reconciliation.
              </p>

              <div className="showcase-scope-wrap">
                <span className="scope-row-title">Interactive App Feature:</span>
                <div className="scope-button-row">
                  {[
                    { id: "quote", label: "Doorstep Quote" },
                    { id: "pay", label: "Tap-to-Pay" },
                    { id: "gps", label: "Van Fleet GPS" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`scope-btn green-btn-tab ${tradieTab === tab.id ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTradieTab(tab.id as "quote" | "pay" | "gps");
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="canvas-trust-chips">
                <span className="trust-chip">⚡ 60-Second Invoicing on Site</span>
                <span className="trust-chip">💳 Tap-to-Pay (Apple &amp; Google Pay)</span>
                <span className="trust-chip">📍 Real-Time Van GPS Dispatch</span>
              </div>
            </div>

            {/* Right: Real Trade Work Van Photo with Inset Live Phone App Card */}
            <div className="canvas-photo-showcase-col">
              <div className="featured-photo-card green-frame">
                <div className="photo-card-media">
                  <Image
                    src={site.image}
                    alt="TradieTrack Field Operations Fleet"
                    fill
                    className="photo-img"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="photo-scrim-gradient" />

                  <div className="photo-floating-pill top-left green-glass">
                    <span className="green-dot-pulse" />
                    <span>Works 100% Offline with Auto Cloud Sync</span>
                  </div>

                  <div className="photo-floating-glass-box bottom-full green-glass-box">
                    {tradieTab === "quote" && (
                      <div className="phone-preview-stack">
                        <div className="glass-box-top">
                          <span className="glass-scope-tag">Job #8942 · Emergency Repair</span>
                          <span className="glass-timeline-tag text-green">Signed by Client ✓</span>
                        </div>
                        <div className="glass-box-price-row">
                          <span className="glass-label">Doorstep Quote Approved:</span>
                          <strong className="glass-price green-text">$1,850.00 AUD (Fixed)</strong>
                        </div>
                      </div>
                    )}
                    {tradieTab === "pay" && (
                      <div className="phone-preview-stack">
                        <div className="glass-box-top">
                          <span className="glass-scope-tag">Tap to Pay on iPhone</span>
                          <span className="glass-timeline-tag text-green">Settled in Bank ✓</span>
                        </div>
                        <div className="glass-box-price-row">
                          <span className="glass-label">Apple Pay Contactless:</span>
                          <strong className="glass-price green-text">$1,850.00 AUD Paid</strong>
                        </div>
                      </div>
                    )}
                    {tradieTab === "gps" && (
                      <div className="phone-preview-stack">
                        <div className="glass-box-top">
                          <span className="glass-scope-tag">Fleet Van #2 (Burnside)</span>
                          <span className="glass-timeline-tag text-green">Arriving in 12 Mins</span>
                        </div>
                        <div className="glass-box-price-row">
                          <span className="glass-label">Route Optimization:</span>
                          <strong className="glass-price green-text">+38% Fuel &amp; Time Saved</strong>
                        </div>
                      </div>
                    )}
                    <button type="button" className="glass-cta-btn green-btn">
                      Start 30-Day Free Trial &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="canvas-bottom-bar">
            <span><strong>14 hrs / Wk</strong> Saved on Paperwork</span>
            <span className="bar-bullet">·</span>
            <span><strong>4.9 ★★★★★</strong> 1,450+ App Store Reviews</span>
            <span className="bar-bullet">·</span>
            <span className="domain-tag">fieldflowtradie.com.au</span>
          </footer>
        </div>
      )}
    </div>
  );
}
