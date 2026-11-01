"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ClientSite } from "@/data/sampleWebsitesData";

export default function MiniSiteCanvas({ site }: { site: ClientSite }) {
  // 1. Heritage interactive state
  const [heritageScope, setHeritageScope] = useState<string>("Sandstone Conservation");

  // 2. Capital Clean interactive state
  const [capitalTower, setCapitalTower] = useState<string>("Sydney CBD High-Rise");

  // 3. TrueNorth Wealth interactive state
  const [wealthStrategy, setWealthStrategy] = useState<string>("Balanced Growth");

  // 4. Pacific Smiles Dental interactive state
  const [dentalTreatment, setDentalTreatment] = useState<string>("Clear Aligners");
  const [selectedSlot, setSelectedSlot] = useState<string>("Today 2:15 PM");

  // 5. RoastCraft Coffee interactive state
  const [coffeeBean, setCoffeeBean] = useState<string>("Ethiopia Geisha");
  const [coffeeGrind, setCoffeeGrind] = useState<string>("Whole Bean");

  // 6. TradieTrack interactive state
  const [tradieTab, setTradieTab] = useState<"quote" | "pay" | "gps">("quote");

  return (
    <div
      className={`mini-site-slide-canvas slide-theme-${site.id}`}
      style={
        {
          "--site-accent": site.theme.accent,
          "--site-accent-grad": site.theme.accentGrad,
          "--site-glow": site.theme.glow,
        } as React.CSSProperties
      }
    >
      {/* Background ambient lighting */}
      <div className="slide-ambient-glow" />

      {/* =========================================================================
          SLIDE 1: THE HOME OF HERITAGE (Australia's Heritage Property Portal)
          Inspired by thehomeofheritage.com - "This Old Home is New"
         ========================================================================= */}
      {site.id === "apex-renovations" && (
        <div className="slide-layout-root slide-heritage-style">
          {/* Top Heritage Editorial Banner */}
          <div className="heritage-top-banner">
            <div className="heritage-masthead">
              <span className="heritage-crest">🏛️</span>
              <div>
                <strong className="heritage-brand-name">THE HOME OF HERITAGE</strong>
                <span className="heritage-brand-sub">This Old Home is New · Australia&apos;s Heritage Restoration Archive</span>
              </div>
            </div>
            <div className="heritage-top-tags">
              <span className="heritage-gold-pill">
                <span className="gold-seal-dot" />
                Est. 1892 · National Heritage Trust Partner
              </span>
              <span className="heritage-phone-tag">Direct: (08) 8234 5678</span>
            </div>
          </div>

          {/* Heritage Slide Main Showcase */}
          <div className="heritage-slide-grid">
            {/* Left: Framed Estate Photography & Conservation Plaque */}
            <div className="heritage-photo-wrapper">
              <div className="heritage-photo-frame">
                <Image
                  src={site.image}
                  alt="The Home of Heritage - Historic Australian Estate Restoration"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="heritage-estate-img"
                  priority
                />
                <div className="heritage-photo-gradient" />

                {/* Conservation Brass Plaque */}
                <div className="heritage-brass-plaque">
                  <div className="plaque-header">
                    <span className="plaque-stamp">NATIONAL TRUST REGISTRY #NSW-1892</span>
                    <span className="plaque-badge">CONSERVATION GRADE A</span>
                  </div>
                  <strong className="plaque-title">Victorian Sandstone &amp; Federation Villa</strong>
                  <p className="plaque-desc">Sympathetic structural restoration, lime mortar repointing &amp; slate replacement.</p>
                  <div className="plaque-meta-row">
                    <span>Sydney · Melbourne · Adelaide · Hobart</span>
                    <strong>100% Fixed-Price Handover</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Architectural Scope & Feasibility Selector */}
            <div className="heritage-info-column">
              <div className="heritage-editorial-header">
                <span className="heritage-eyebrow">AUSTRALIAN HERITAGE RESTORATIONS</span>
                <h3 className="heritage-slide-title">
                  This Old Home Is New. <br />
                  <em>Preserved For Generations.</em>
                </h3>
                <p className="heritage-slide-lead">
                  Specializing in Victorian sandstone conservation, Federation villa restoration, and sympathetic contemporary extensions.
                </p>
              </div>

              {/* Scope Switcher */}
              <div className="heritage-scope-box">
                <span className="scope-box-label">Select Heritage Service Scope:</span>
                <div className="heritage-scope-buttons">
                  {[
                    { id: "Sandstone Conservation", range: "$680k - $920k", time: "22 Weeks" },
                    { id: "Federation Villa Addition", range: "$540k - $780k", time: "18 Weeks" },
                    { id: "Contemporary Pavilion", range: "$420k - $610k", time: "14 Weeks" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`heritage-scope-pill ${heritageScope === s.id ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHeritageScope(s.id);
                      }}
                    >
                      <span>{s.id}</span>
                      <small>{s.range}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guarantees Row */}
              <div className="heritage-credentials-strip">
                <div className="heritage-cred-item">
                  <b>25-Year Guarantee</b>
                  <span>Masonry &amp; Slate Guild</span>
                </div>
                <div className="heritage-cred-item">
                  <b>AIA Conservation Code</b>
                  <span>100% Council Approved</span>
                </div>
                <div className="heritage-cred-item">
                  <b>thehomeofheritage.com.au</b>
                  <span>Official Portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE 2: CAPITAL COMMERCIAL CLEANING & FACILITIES
          Inspired by capitalcleaning.site - Sydney CBD & US Metros
         ========================================================================= */}
      {site.id === "bondi-clean" && (
        <div className="slide-layout-root slide-capital-style">
          {/* Operations Command Bar */}
          <div className="capital-command-bar">
            <div className="capital-command-left">
              <span className="capital-radar-dot" />
              <strong>CAPITAL COMMERCIAL CLEANING &amp; FACILITIES</strong>
              <span className="capital-command-sub">Enterprise Asset Care · Sydney CBD &amp; US Metros</span>
            </div>
            <div className="capital-live-telemetry">
              <span className="capital-pulse-badge">
                <span className="cyan-pulse-indicator" />
                142 Active High-Rise Sites Tonight
              </span>
              <span className="capital-phone-pill">24/7 Ops: 1300 227 482</span>
            </div>
          </div>

          {/* Capital Main Slide Grid */}
          <div className="capital-slide-grid">
            {/* Left: High-Rise Facade with Live Laser Scanner Beam */}
            <div className="capital-media-stage">
              <div className="capital-photo-card">
                <Image
                  src={site.image}
                  alt="Capital Commercial Cleaning - Sydney CBD Financial Towers & High-Rises"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="capital-highrise-img"
                  priority
                />
                <div className="capital-scanner-line" />
                <div className="capital-photo-overlay" />

                {/* Live Diagnostic HUD Card */}
                <div className="capital-hud-box">
                  <div className="hud-title-row">
                    <span className="hud-label">LIVE FACILITY TELEMETRY</span>
                    <span className="hud-status">SYDNEY FINANCIAL CENTRE</span>
                  </div>
                  <div className="hud-metric-grid">
                    <div className="hud-metric">
                      <span>HEPA Air Quality</span>
                      <strong>0.02 ppm (Cleanroom)</strong>
                    </div>
                    <div className="hud-metric">
                      <span>ATP Clinical Swab</span>
                      <strong className="text-cyan">0 RLU (100% Sterile)</strong>
                    </div>
                    <div className="hud-metric">
                      <span>Shift Coverage</span>
                      <strong>100% QR Check-In</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enterprise Rate Calculator & Shift Dispatch */}
            <div className="capital-controls-column">
              <div className="capital-section-header">
                <span className="capital-cyan-tag">ENTERPRISE FACILITY MANAGEMENT</span>
                <h3 className="capital-slide-heading">
                  Immaculate Corporate Workspaces. <br />
                  <em>Zero Downtime Facility Care.</em>
                </h3>
                <p className="capital-slide-desc">
                  Triple ISO certified commercial cleaning for Sydney CBD towers, Barangaroo financial suites, and US executive corporate offices.
                </p>
              </div>

              {/* Tower Selection */}
              <div className="capital-tower-selector">
                <span className="selector-title">Select Facility Class:</span>
                <div className="tower-btn-grid">
                  {[
                    { name: "Sydney CBD High-Rise", rate: "$3,600 / mo", staff: "4 Cleaners" },
                    { name: "Melbourne Financial HQ", rate: "$4,200 / mo", staff: "6 Cleaners" },
                    { name: "US Metros Executive Suites", rate: "$5,100 / mo", staff: "Dedicated Nightly" },
                  ].map((t) => (
                    <button
                      key={t.name}
                      type="button"
                      className={`tower-btn ${capitalTower === t.name ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCapitalTower(t.name);
                      }}
                    >
                      <div className="tower-btn-top">
                        <strong>{t.name}</strong>
                        <span className="tower-rate">{t.rate}</span>
                      </div>
                      <small className="tower-staff">{t.staff} · Rapid Response</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Capabilities Footer */}
              <div className="capital-specs-row">
                <div className="spec-badge">
                  <span className="spec-dot" /> Triple ISO 9001 · 14001 · 45001
                </div>
                <div className="spec-badge">
                  <span className="spec-dot" /> 45-Min Emergency Bio-Spill Response
                </div>
                <div className="spec-badge">
                  <span className="spec-dot" /> capitalcleaning.com.au
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE 3: TRUENORTH PRIVATE WEALTH ADVISORY (COLLINS ST, MELBOURNE)
         ========================================================================= */}
      {site.id === "truenorth-wealth" && (
        <div className="slide-layout-root slide-wealth-style">
          {/* Collins St Wealth Top Bar */}
          <div className="wealth-top-header">
            <div className="wealth-brand-row">
              <span className="wealth-crest-monogram">TN</span>
              <div>
                <strong className="wealth-brand-text">TRUENORTH PRIVATE WEALTH &amp; ADVISORY</strong>
                <span className="wealth-brand-sub">Collins Street, Melbourne · Fiduciary Family Office</span>
              </div>
            </div>
            <div className="wealth-header-badges">
              <span className="wealth-fiduciary-pill">Strictly Fiduciary · Non-Bank Aligned</span>
              <span className="wealth-phone-tag">(03) 9122 4500</span>
            </div>
          </div>

          {/* Wealth Main Slide Grid */}
          <div className="wealth-slide-grid">
            {/* Left: Private Boardroom Photo & Mandate Seal */}
            <div className="wealth-photo-stage">
              <div className="wealth-image-card">
                <Image
                  src={site.image}
                  alt="TrueNorth Wealth Advisory - Collins Street Melbourne Private Boardroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="wealth-room-img"
                  priority
                />
                <div className="wealth-image-overlay" />

                {/* Mandate Floating Card */}
                <div className="wealth-mandate-card">
                  <div className="mandate-tag">PRIVATE CLIENT MANDATE #VIC-490</div>
                  <strong className="mandate-title">Multi-Generational Capital Preservation</strong>
                  <div className="mandate-stats-strip">
                    <div>
                      <span>Baseline Capital</span>
                      <b>$3,500,000 AUD</b>
                    </div>
                    <div>
                      <span>Target CAGR</span>
                      <b className="gold-text">8.2% Net Post-Tax</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Portfolio Strategy Selector & Asset Allocation */}
            <div className="wealth-dashboard-column">
              <div className="wealth-content-header">
                <span className="wealth-gold-eyebrow">FAMILY OFFICE GOVERNANCE</span>
                <h3 className="wealth-slide-title">
                  Generational Wealth. <br />
                  <em>Fiduciary Independence.</em>
                </h3>
                <p className="wealth-slide-desc">
                  Independent wealth structuring, tax-exempt family endowments, and private market liquidity management for Australian founders.
                </p>
              </div>

              {/* Strategy Picker */}
              <div className="wealth-strategy-box">
                <span className="strategy-label">Select Wealth Strategy Mandate:</span>
                <div className="wealth-strategy-pills">
                  {["Capital Preservation (6.5%)", "Balanced Growth (8.2%)", "Max Compound (10.8%)"].map((str) => (
                    <button
                      key={str}
                      type="button"
                      className={`wealth-strat-btn ${wealthStrategy.includes(str.split(" ")[0]) ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setWealthStrategy(str);
                      }}
                    >
                      {str}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Asset Allocation Visualizer */}
              <div className="wealth-allocation-card">
                <div className="alloc-header">
                  <span>Target Asset Allocation</span>
                  <strong>15-Year Projected: $11,850,000</strong>
                </div>
                <div className="alloc-bar-stack">
                  <div className="alloc-segment equities" style={{ width: "45%" }} title="Global Core Equities: 45%" />
                  <div className="alloc-segment debt" style={{ width: "25%" }} title="Private Debt: 25%" />
                  <div className="alloc-segment infra" style={{ width: "20%" }} title="Infrastructure: 20%" />
                  <div className="alloc-segment cash" style={{ width: "10%" }} title="Liquid Cash: 10%" />
                </div>
                <div className="alloc-legend">
                  <span><i className="dot equities" /> Equities 45%</span>
                  <span><i className="dot debt" /> Private Debt 25%</span>
                  <span><i className="dot infra" /> Infra 20%</span>
                  <span><i className="dot cash" /> Cash 10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE 4: PACIFIC SMILES DENTAL (110+ LOCATIONS ACROSS AUSTRALIA)
          Inspired by pacificsmilesdental.com.au
         ========================================================================= */}
      {site.id === "pulse-dental" && (
        <div className="slide-layout-root slide-pacific-style">
          {/* Healthcare Top Navigation */}
          <div className="pacific-top-bar">
            <div className="pacific-brand-group">
              <span className="pacific-smile-icon">✨</span>
              <div>
                <strong className="pacific-brand-name">PACIFIC SMILES DENTAL</strong>
                <span className="pacific-brand-sub">Australia&apos;s Trusted Dental Network · 110+ Clinics Nationwide</span>
              </div>
            </div>
            <div className="pacific-header-info">
              <span className="pacific-emergency-badge">
                <span className="green-ping-dot" />
                Open 7 Days · Emergency Slots Reserved Daily
              </span>
              <span className="pacific-phone-tag">Book Central: 13 13 17</span>
            </div>
          </div>

          {/* Pacific Smiles Main Slide Grid */}
          <div className="pacific-slide-grid">
            {/* Left: Modern Clinic Media & CDBS Bulk Billing Badge */}
            <div className="pacific-photo-stage">
              <div className="pacific-photo-card">
                <Image
                  src={site.image}
                  alt="Pacific Smiles Dental - Modern Australian Dental Clinic & Friendly Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="pacific-clinic-img"
                  priority
                />
                <div className="pacific-photo-tint" />

                {/* CDBS & Preferred Provider Card */}
                <div className="pacific-cdbs-card">
                  <div className="cdbs-top-row">
                    <span className="cdbs-pill">CHILD DENTAL BENEFITS (CDBS)</span>
                    <span className="cdbs-status">BULK BILLED</span>
                  </div>
                  <strong className="cdbs-title">$1,052 Free Dental Care for Eligible Kids</strong>
                  <p className="cdbs-desc">Check-ups, cleans, fillings &amp; fissure sealants with zero out-of-pocket fees.</p>
                  <div className="cdbs-funds-row">
                    <span>Bupa · Medibank · HCF · CBHS · NIB Preferred</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Same-Day Appointment Booking Picker & Procedure Selector */}
            <div className="pacific-booking-column">
              <div className="pacific-section-head">
                <span className="pacific-ocean-eyebrow">EXCEPTIONAL LOCAL DENTAL CARE</span>
                <h3 className="pacific-slide-heading">
                  Making Healthy Smiles Everyday. <br />
                  <em>Gentle, Caring &amp; Open 7 Days.</em>
                </h3>
                <p className="pacific-slide-lead">
                  From routine family checkups and emergency toothache relief to custom porcelain veneers and clear aligners.
                </p>
              </div>

              {/* Procedure Selector */}
              <div className="pacific-treatment-picker">
                <span className="picker-title">Select Dental Care or Cosmetic Service:</span>
                <div className="treatment-btn-row">
                  {["Family Checkup & Clean", "Clear Aligners", "Porcelain Veneers"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`treatment-btn ${dentalTreatment === t ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDentalTreatment(t);
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Slot Booking Simulator */}
              <div className="pacific-live-slots-box">
                <div className="slots-header">
                  <span>Available Appointments Today:</span>
                  <span className="slots-green-tag">⚡ Immediate Confirmation</span>
                </div>
                <div className="slots-chip-grid">
                  {[
                    { time: "Today 2:15 PM", dentist: "Dr. Sarah Lin (BDS)" },
                    { time: "Today 4:00 PM", dentist: "Dr. Michael Chen (BDS)" },
                    { time: "Tomorrow 9:30 AM", dentist: "Emergency Reserved" },
                  ].map((s) => (
                    <button
                      key={s.time}
                      type="button"
                      className={`slot-chip ${selectedSlot === s.time ? "selected" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSlot(s.time);
                      }}
                    >
                      <strong>{s.time}</strong>
                      <small>{s.dentist}</small>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE 5: ROASTCRAFT SPECIALTY COFFEE ROASTERS (FITZROY, MELBOURNE)
         ========================================================================= */}
      {site.id === "roastcraft-coffee" && (
        <div className="slide-layout-root slide-coffee-style">
          {/* Roastery Top Header */}
          <div className="coffee-top-bar">
            <div className="coffee-brand-block">
              <span className="coffee-flame-icon">🔥</span>
              <div>
                <strong className="coffee-brand-title">ROASTCRAFT SPECIALTY ROASTERS</strong>
                <span className="coffee-brand-sub">Fitzroy Roastery · Direct Trade Micro-Lots</span>
              </div>
            </div>
            <div className="coffee-top-badges">
              <span className="coffee-roast-fresh-pill">Roasted 48 Hours Ago · Batch #084</span>
              <span className="coffee-order-tag">Express Australia Shipping</span>
            </div>
          </div>

          {/* Coffee Main Slide Grid */}
          <div className="coffee-slide-grid">
            {/* Left: Artisan Coffee Bag Photography & Flavor Radar */}
            <div className="coffee-photo-stage">
              <div className="coffee-photo-card">
                <Image
                  src={site.image}
                  alt="RoastCraft Specialty Coffee - Micro-Lot Single Origin Roasted in Fitzroy"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="coffee-bag-img"
                  priority
                />
                <div className="coffee-overlay" />

                {/* Single Origin Flavor Notes Card */}
                <div className="coffee-flavor-card">
                  <div className="flavor-top">
                    <span className="origin-badge">ETHIOPIA YIRGACHEFFE GEISHA</span>
                    <span className="scaa-score">SCAA 92.5</span>
                  </div>
                  <strong className="flavor-title">Natural Anaerobic Fermentation · 2,150m</strong>
                  <div className="flavor-pills-row">
                    <span className="flavor-tag">Bergamot</span>
                    <span className="flavor-tag">Jasmine Honey</span>
                    <span className="flavor-tag">White Peach</span>
                    <span className="flavor-tag">Cocoa Nib</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Custom Bean Selection & 1-Tap Subscription */}
            <div className="coffee-customizer-column">
              <div className="coffee-header-info">
                <span className="coffee-amber-eyebrow">MELBOURNE ARTISAN ROASTERY</span>
                <h3 className="coffee-slide-heading">
                  Micro-Lot Single Origins. <br />
                  <em>Roasted To Pure Perfection.</em>
                </h3>
                <p className="coffee-slide-desc">
                  Ethically sourced from high-altitude volcanic soils, roast-profiled in small 12kg batches in Fitzroy, and shipped within 48 hours.
                </p>
              </div>

              {/* Bean Selector */}
              <div className="coffee-beans-selector">
                <span className="selector-title">Select Origin &amp; Roast:</span>
                <div className="beans-pill-row">
                  {["Ethiopia Geisha ($36)", "Colombia Pink Bourbon ($28)", "Guatemala Antigua ($26)"].map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`bean-btn ${coffeeBean.includes(b.split(" ")[0]) ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCoffeeBean(b);
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grind Selector & Apple Pay Preview */}
              <div className="coffee-purchase-card">
                <div className="purchase-head">
                  <div className="grind-toggles">
                    {["Whole Bean", "Espresso", "Filter / V60"].map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`grind-pill ${coffeeGrind === g ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCoffeeGrind(g);
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <strong className="coffee-price-tag">$30.60 <small>/fortnight (Save 15%)</small></strong>
                </div>

                <div className="coffee-perks-row">
                  <span>✔ Fresh Roast Date Guaranteed</span>
                  <span>✔ Free Express Australia Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE 6: FIELDFLOW & TRADIETRACK PRO (AUSSIE TRADIE MOBILE APP)
         ========================================================================= */}
      {site.id === "tradietrack-mobile" && (
        <div className="slide-layout-root slide-tradie-style">
          {/* Tradie Top Command Bar */}
          <div className="tradie-top-bar">
            <div className="tradie-brand-left">
              <span className="tradie-bolt-badge">⚡</span>
              <div>
                <strong className="tradie-brand-title">TRADIETRACK PRO</strong>
                <span className="tradie-brand-sub">Aussie Tradie Job Dispatch &amp; Instant Invoicing Platform</span>
              </div>
            </div>
            <div className="tradie-top-status">
              <span className="tradie-gps-badge">
                <span className="lime-ping-dot" />
                Fleet Active: 4 Licensed Tradesmen Dispatched
              </span>
              <span className="tradie-phone-tag">Call Tradie: 1300 872 343</span>
            </div>
          </div>

          {/* Tradie Main Slide Grid */}
          <div className="tradie-slide-grid">
            {/* Left: Worksite Van Photography & Live Job Ticket */}
            <div className="tradie-photo-stage">
              <div className="tradie-photo-card">
                <Image
                  src={site.image}
                  alt="TradieTrack Pro - Aussie Trade Fleet Management & Instant Doorstep Quoting"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="tradie-van-img"
                  priority
                />
                <div className="tradie-photo-tint" />

                {/* Floating Live Job Ticket */}
                <div className="tradie-live-job-ticket">
                  <div className="job-ticket-top">
                    <span className="job-number">JOB #SYD-4092 · APPROVED</span>
                    <span className="job-paid-tag">PAID ON GLASS</span>
                  </div>
                  <strong className="job-title">Bondi Beach Emergency Pipe Relining</strong>
                  <div className="job-meta-split">
                    <div>
                      <span>Customer Sign-Off</span>
                      <b>Mark S. (Bondi Beach)</b>
                    </div>
                    <div>
                      <span>Amount Invoiced</span>
                      <b className="lime-text">$2,450.00 AUD</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Tradie App Mode Switcher (Quote, Pay, GPS) */}
            <div className="tradie-features-column">
              <div className="tradie-header-block">
                <span className="tradie-lime-eyebrow">FIELD SERVICE OPERATING SYSTEM</span>
                <h3 className="tradie-slide-heading">
                  Doorstep Quotes. Tap To Pay. <br />
                  <em>Zero Late-Night Paperwork.</em>
                </h3>
                <p className="tradie-slide-desc">
                  Built specifically for Australian plumbers, sparkies, and builders. Generate professional PDF quotes in 30 seconds and take card payments on your phone.
                </p>
              </div>

              {/* Mode Switcher */}
              <div className="tradie-mode-switcher">
                <button
                  type="button"
                  className={`tradie-mode-btn ${tradieTab === "quote" ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTradieTab("quote");
                  }}
                >
                  📝 30-Sec Quote
                </button>
                <button
                  type="button"
                  className={`tradie-mode-btn ${tradieTab === "pay" ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTradieTab("pay");
                  }}
                >
                  💳 Tap-To-Pay
                </button>
                <button
                  type="button"
                  className={`tradie-mode-btn ${tradieTab === "gps" ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTradieTab("gps");
                  }}
                >
                  📍 GPS Fleet Radar
                </button>
              </div>

              {/* Dynamic Feature Box */}
              <div className="tradie-feature-display">
                {tradieTab === "quote" && (
                  <div className="tradie-tab-card">
                    <div className="tab-card-head">
                      <span>Instant Doorstep Estimate Engine</span>
                      <span className="badge-lime">Aussie Material Pricing</span>
                    </div>
                    <p className="tab-card-body">
                      Preloaded with Reece, Bunnings &amp; Middy&apos;s trade catalogs. Auto-calculates labor hours, GST, and margin.
                    </p>
                  </div>
                )}
                {tradieTab === "pay" && (
                  <div className="tradie-tab-card">
                    <div className="tab-card-head">
                      <span>Apple Tap to Pay on iPhone</span>
                      <span className="badge-lime">1.4% Flat Rate</span>
                    </div>
                    <p className="tab-card-body">
                      No expensive EFTPOS terminals needed. Hold client cards against your phone. Next-day bank settlement.
                    </p>
                  </div>
                )}
                {tradieTab === "gps" && (
                  <div className="tradie-tab-card">
                    <div className="tab-card-head">
                      <span>Live Van Fleet Radar</span>
                      <span className="badge-lime">En Route to Bondi (ETA 8m)</span>
                    </div>
                    <p className="tab-card-body">
                      Real-time GPS tracking sends automated SMS ETA alerts to clients with live tradie arrival maps.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
