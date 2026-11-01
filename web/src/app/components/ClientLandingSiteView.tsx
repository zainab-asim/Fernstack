"use client";

import React, { useState } from "react";
import { ClientSite } from "@/data/sampleWebsitesData";

export default function ClientLandingSiteView({
  site,
  activeTab,
  setActiveTab,
}: {
  site: ClientSite;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  // 1. Apex Builder: Cost Estimator State
  const [apexProjectType, setApexProjectType] = useState<string>("extension");
  const [apexArea, setApexArea] = useState<number>(140);
  const [apexFinish, setApexFinish] = useState<"executive" | "bespoke">("executive");
  const [apexQuoteSent, setApexQuoteSent] = useState<boolean>(false);
  const [apexActiveProject, setApexActiveProject] = useState<number>(0);

  // 2. Bondi Clean: Facility Rate Calculator State
  const [bondiFacility, setBondiFacility] = useState<string>("office");
  const [bondiArea, setBondiArea] = useState<number>(2400);
  const [bondiFrequency, setBondiFrequency] = useState<string>("daily");
  const [bondiChecklistTab, setBondiChecklistTab] = useState<number>(0);
  const [bondiRfpSent, setBondiRfpSent] = useState<boolean>(false);
  const [bondiQrSimulated, setBondiQrSimulated] = useState<boolean>(false);

  // 3. TrueNorth: Wealth Growth Simulator State
  const [wealthCapital, setWealthCapital] = useState<number>(3500000);
  const [wealthYears, setWealthYears] = useState<number>(15);
  const [wealthStrategy, setWealthStrategy] = useState<"preservation" | "balanced" | "growth">("balanced");
  const [wealthApptSent, setWealthApptSent] = useState<boolean>(false);

  // 4. Pulse Dental: Smile Treatment Calculator State
  const [pulseTreatment, setPulseTreatment] = useState<string>("veneers");
  const [pulseTeethCount, setPulseTeethCount] = useState<number>(8);
  const [pulsePayPlan, setPulsePayPlan] = useState<"weekly" | "upfront">("weekly");
  const [pulseActiveCase, setPulseActiveCase] = useState<number>(0);
  const [pulseSlotSelected, setPulseSlotSelected] = useState<string>("Thu 10:30 AM");
  const [pulseBooked, setPulseBooked] = useState<boolean>(false);

  // 5. RoastCraft: Coffee Bean & Subscription Builder State
  const [coffeeSelectedBean, setCoffeeSelectedBean] = useState<string>("geisha");
  const [coffeeGrind, setCoffeeGrind] = useState<string>("whole-bean");
  const [coffeeBagSize, setCoffeeBagSize] = useState<string>("500g");
  const [coffeeSubFrequency, setCoffeeSubFrequency] = useState<string>("fortnightly");
  const [coffeeCartOpen, setCoffeeCartOpen] = useState<boolean>(false);
  const [coffeeAddedCount, setCoffeeAddedCount] = useState<number>(1);
  const [coffeePaidSuccess, setCoffeePaidSuccess] = useState<boolean>(false);

  // 6. FieldFlow / TradieTrack: Interactive Phone App Simulator State
  const [tradieActiveScreen, setTradieActiveScreen] = useState<"quote" | "pay" | "gps">("quote");
  const [tradieVansCount, setTradieVansCount] = useState<number>(4);
  const [tradiePaymentSimulated, setTradiePaymentSimulated] = useState<boolean>(false);
  const [tradieQuoteSentDemo, setTradieQuoteSentDemo] = useState<boolean>(false);
  const [tradieTrialPhone, setTradieTrialPhone] = useState<string>("");
  const [tradieTrialSent, setTradieTrialSent] = useState<boolean>(false);

  // Dynamic calculations
  const calculateApexCost = () => {
    let ratePerM2 = 3800;
    if (apexProjectType === "extension") ratePerM2 = 4200;
    if (apexProjectType === "pavilion") ratePerM2 = 3400;
    if (apexProjectType === "kitchen") return { min: 110000, max: 165000, weeks: "6 to 8" };

    const multiplier = apexFinish === "bespoke" ? 1.22 : 1.0;
    const base = apexArea * ratePerM2 * multiplier;
    const min = Math.round((base * 0.95) / 5000) * 5000;
    const max = Math.round((base * 1.1) / 5000) * 5000;
    const weeks = apexArea > 200 ? "20 to 26" : "16 to 20";
    return { min, max, weeks };
  };

  const calculateBondiRetainer = () => {
    let baseRate = 1.35; // per sqm per month
    if (bondiFacility === "medical") baseRate = 2.1;
    if (bondiFacility === "glass") baseRate = 0.85;
    if (bondiFacility === "campus") baseRate = 1.15;

    let freqMult = 1.0;
    if (bondiFrequency === "daily") freqMult = 1.5;
    if (bondiFrequency === "porter") freqMult = 2.3;

    const monthly = Math.round((bondiArea * baseRate * freqMult) / 50) * 50;
    const staff = Math.max(1, Math.round(bondiArea / 1200));
    return { monthly, staff };
  };

  const calculateWealthProjection = () => {
    let returnRate = 0.082;
    if (wealthStrategy === "preservation") returnRate = 0.065;
    if (wealthStrategy === "growth") returnRate = 0.108;

    const projected = Math.round(wealthCapital * Math.pow(1 + returnRate, wealthYears));
    const annualIncome = Math.round(wealthCapital * 0.052);
    const taxSaved = Math.round((projected - wealthCapital) * 0.18);
    return { projected, annualIncome, taxSaved };
  };

  const calculatePulseEstimate = () => {
    let costPerTooth = 1450;
    if (pulseTreatment === "invisalign") return { upfront: 7800, weekly: 49, duration: "6 to 9 Months" };
    if (pulseTreatment === "whitening") return { upfront: 890, weekly: 19, duration: "60 Mins In-Chair" };
    if (pulseTreatment === "full-arch") return { upfront: 24000, weekly: 139, duration: "2 Appointments" };

    const total = costPerTooth * pulseTeethCount;
    const weekly = Math.round(total / 104);
    return { upfront: total, weekly, duration: "2 Visits (14 Days)" };
  };

  const calculateCoffeePrice = () => {
    let base = 24;
    if (coffeeSelectedBean === "geisha") base = 36;
    if (coffeeSelectedBean === "yirgacheffe") base = 28;
    if (coffeeSelectedBean === "guatemala") base = 26;

    let multiplier = 1.0;
    if (coffeeBagSize === "500g") multiplier = 1.75;
    if (coffeeBagSize === "1kg") multiplier = 3.2;

    const raw = Math.round(base * multiplier);
    const subPrice = Math.round(raw * 0.85); // 15% discount for subscriber
    return { raw, subPrice };
  };

  return (
    <div className={`cs-dedicated-landing cs-theme-${site.id}`}>
      {/* =========================================================================
          SITE 1: APEX BUILD & RENOVATIONS (ARCHITECTURAL LUXURY BUILDER)
         ========================================================================= */}
      {site.id === "apex-renovations" && (
        <div className="cs-apex-wrapper">
          {/* Architectural Top Bar */}
          <nav className="cs-apex-nav">
            <div className="cs-apex-brand">
              <span className="cs-apex-logo-symbol">📐</span>
              <div>
                <strong>THE HOME OF HERITAGE</strong>
                <span className="cs-apex-tagline">This Old Home is New · Australia's Heritage Restoration Portal</span>
              </div>
            </div>

            <div className="cs-apex-nav-links">
              <button
                type="button"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Philosophy
              </button>
              <button
                type="button"
                className={activeTab === "projects" ? "active" : ""}
                onClick={() => setActiveTab("projects")}
              >
                Selected Works
              </button>
              <button
                type="button"
                className={activeTab === "calculator" ? "active" : ""}
                onClick={() => setActiveTab("calculator")}
              >
                Cost Estimator
              </button>
              <button
                type="button"
                className={activeTab === "process" ? "active" : ""}
                onClick={() => setActiveTab("process")}
              >
                Guarantees
              </button>
              <button
                type="button"
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews (5.0★)
              </button>
            </div>

            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="cs-apex-call-btn">
              <span>Direct Architect: {site.phone}</span>
            </a>
          </nav>

          {/* Architectural Hero */}
          <header className="cs-apex-hero">
            <div className="cs-apex-hero-bg" style={{ backgroundImage: `url(${site.image})` }} />
            <div className="cs-apex-hero-scrim" />
            <div className="cs-apex-hero-content">
              <div className="cs-apex-badge-pill">
                <span className="gold-dot" /> National Heritage Trust &amp; AIA · 2026 Preservation Winner
              </div>
              <h1 className="cs-apex-h1">
                This Old Home Is New. <br />
                <em>Preserved For Generations.</em>
              </h1>
              <p className="cs-apex-lead">
                Specializing in iconic Federation restoration, Victorian sandstone conservation,
                and sympathetic contemporary additions across Sydney, Melbourne, Adelaide &amp; Hobart.
              </p>
              <div className="cs-apex-hero-actions">
                <button
                  type="button"
                  className="cs-apex-btn-primary"
                  onClick={() => {
                    const el = document.getElementById("apex-calculator-sec");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Estimate Your Build Cost &rarr;
                </button>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="cs-apex-btn-outline">
                  Call Architect: {site.phone}
                </a>
              </div>

              {/* 4 Architectural Proof Badges */}
              <div className="cs-apex-credentials-strip">
                <div className="apex-cred-item">
                  <b>$45M+ Restored</b>
                  <span>Heritage Residential AU</span>
                </div>
                <div className="apex-cred-item">
                  <b>100% Heritage Approved</b>
                  <span>Conservation Code Signed</span>
                </div>
                <div className="apex-cred-item">
                  <b>Lic #HER921038</b>
                  <span>National Heritage Guild</span>
                </div>
                <div className="apex-cred-item">
                  <b>25-Year Guarantee</b>
                  <span>Masonry &amp; Slate Guild</span>
                </div>
              </div>
            </div>
          </header>

          {/* INTERACTIVE TOOL: Build & Extension Investment Estimator */}
          <section className="cs-apex-section" id="apex-calculator-sec">
            <div className="cs-apex-sec-heading">
              <span className="cs-sec-eyebrow">Interactive Feasibility Tool</span>
              <h2>Heritage Estate Restorations &amp; Extension Cost Estimator</h2>
              <p>
                Get a transparent feasibility budget and conservation timeline tailored to Australian Heritage Trust standards and council conservation guidelines.
              </p>
            </div>

            <div className="cs-apex-calc-container">
              <div className="cs-apex-calc-inputs">
                <label className="cs-calc-label">1. Select Project Scope</label>
                <div className="cs-calc-btn-group">
                  <button
                    type="button"
                    className={apexProjectType === "extension" ? "active" : ""}
                    onClick={() => setApexProjectType("extension")}
                  >
                    Second-Storey Extension
                  </button>
                  <button
                    type="button"
                    className={apexProjectType === "heritage" ? "active" : ""}
                    onClick={() => setApexProjectType("heritage")}
                  >
                    Heritage Villa Overhaul
                  </button>
                  <button
                    type="button"
                    className={apexProjectType === "pavilion" ? "active" : ""}
                    onClick={() => setApexProjectType("pavilion")}
                  >
                    Architectural Living Pavilion
                  </button>
                  <button
                    type="button"
                    className={apexProjectType === "kitchen" ? "active" : ""}
                    onClick={() => setApexProjectType("kitchen")}
                  >
                    Designer Kitchen &amp; Cellar
                  </button>
                </div>

                {apexProjectType !== "kitchen" && (
                  <div style={{ marginTop: 22 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <label className="cs-calc-label">2. Approximate Floor Area</label>
                      <strong style={{ color: "#f59e0b", fontSize: 16 }}>{apexArea} m²</strong>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={350}
                      step={10}
                      value={apexArea}
                      onChange={(e) => setApexArea(Number(e.target.value))}
                      className="cs-calc-range-slider"
                    />
                    <div className="cs-calc-range-ticks">
                      <span>60 m² (Compact)</span>
                      <span>200 m² (Family)</span>
                      <span>350 m² (Estate)</span>
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 22 }}>
                  <label className="cs-calc-label">3. Finish Specification Grade</label>
                  <div className="cs-calc-btn-group">
                    <button
                      type="button"
                      className={apexFinish === "executive" ? "active" : ""}
                      onClick={() => setApexFinish("executive")}
                    >
                      Architectural Executive (Engineered Oak, Miele, Calacatta)
                    </button>
                    <button
                      type="button"
                      className={apexFinish === "bespoke" ? "active" : ""}
                      onClick={() => setApexFinish("bespoke")}
                    >
                      Ultra-Prime Bespoke (Cantilevered Glass, Custom Joinery, Gaggenau)
                    </button>
                  </div>
                </div>
              </div>

              {/* Calculator Output Display */}
              <div className="cs-apex-calc-results">
                <div className="apex-results-badge">Guaranteed Fixed-Price Range</div>
                <div className="apex-calc-price-box">
                  <span className="apex-price-label">Estimated Investment</span>
                  <div className="apex-price-figure">
                    ${calculateApexCost().min.toLocaleString()} to ${calculateApexCost().max.toLocaleString()}
                  </div>
                  <span className="apex-price-note">Includes SA Council Planning, Engineering &amp; Construction</span>
                </div>

                <div className="apex-calc-meta-grid">
                  <div className="apex-calc-meta-cell">
                    <span>Build Timeline:</span>
                    <strong>{calculateApexCost().weeks} Weeks</strong>
                  </div>
                  <div className="apex-calc-meta-cell">
                    <span>Engineering Sign-off:</span>
                    <strong>Included</strong>
                  </div>
                  <div className="apex-calc-meta-cell">
                    <span>Warranty:</span>
                    <strong>10-Year Structural</strong>
                  </div>
                  <div className="apex-calc-meta-cell">
                    <span>Site Supervisor:</span>
                    <strong>Dedicated Daily</strong>
                  </div>
                </div>

                {apexQuoteSent ? (
                  <div className="cs-calc-success-toast">
                    ✔ Feasibility Request Logged! A Home of Heritage architectural director will call within 24 hours.
                  </div>
                ) : (
                  <button
                    type="button"
                    className="cs-apex-btn-calc-submit"
                    onClick={() => setApexQuoteSent(true)}
                  >
                    Lock In Heritage Feasibility Assessment &rarr;
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Selected Architectural Works */}
          <section className="cs-apex-section">
            <div className="cs-apex-sec-heading">
              <span className="cs-sec-eyebrow">Portfolio</span>
              <h2>Selected Australian Heritage Restorations</h2>
              <p>Explore iconic historic estates preserved across Sydney, Melbourne, Adelaide &amp; Hobart.</p>
            </div>

            <div className="cs-apex-projects-grid">
              {site.gallery.map((p, idx) => (
                <article
                  key={idx}
                  className={`cs-apex-project-card ${apexActiveProject === idx ? "active" : ""}`}
                  onClick={() => setApexActiveProject(idx)}
                >
                  <div className="cs-apex-project-head">
                    <span className="apex-proj-tag">{p.tag}</span>
                    <span className="apex-proj-val">{p.value}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.subtitle}</p>
                  <div className="cs-apex-project-footer">
                    <span>Architectural Handover</span>
                    <strong>Verified Completion ★★★★★</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4 Guarantees */}
          <section className="cs-apex-section cs-apex-guarantees-sec">
            <div className="cs-apex-sec-heading">
              <span className="cs-sec-eyebrow">The Heritage Standard</span>
              <h2>The 4 Pillars of Heritage Preservation</h2>
              <p>Why Australian families trust The Home of Heritage with their most cherished properties.</p>
            </div>

            <div className="cs-apex-process-row">
              <div className="apex-process-step">
                <span className="apex-step-num">01</span>
                <h4>Fixed-Price Heritage Contract</h4>
                <p>Every stonemason hour, timber joint, and heritage approval fee locked upfront. Zero surprises.</p>
              </div>
              <div className="apex-process-step">
                <span className="apex-step-num">02</span>
                <h4>Photogrammetry &amp; 3D Laser Mapping</h4>
                <p>Millimeter-accurate 3D digital scans of historic facades and load-bearing masonry.</p>
              </div>
              <div className="apex-process-step">
                <span className="apex-step-num">03</span>
                <h4>Master Artisan Craftsmanship</h4>
                <p>Accredited stonemasons, lime mortars, stained glass restoration, and slate roof specialists.</p>
              </div>
              <div className="apex-process-step">
                <span className="apex-step-num">04</span>
                <h4>25-Year Heritage Warranty</h4>
                <p>Comprehensive structural and material heritage protection warranty backed by national guild standards.</p>
              </div>
            </div>
          </section>

          {/* Homeowner Reviews */}
          <section className="cs-apex-section">
            <div className="cs-apex-sec-heading">
              <span className="cs-sec-eyebrow">Client Endorsements</span>
              <h2>Verified Homeowner Experiences</h2>
              <p>Rated 5.0★ across 86+ heritage restoration projects across Australia.</p>
            </div>

            <div className="cs-apex-reviews-grid">
              {site.reviewsList.map((rev, i) => (
                <div key={i} className="cs-apex-review-card">
                  <div className="cs-apex-stars">★★★★★</div>
                  <p>&ldquo;{rev.text}&rdquo;</p>
                  <footer>
                    <strong>{rev.name}</strong>
                    <span>{rev.location} &middot; {rev.time}</span>
                  </footer>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="cs-apex-footer">
            <div className="cs-apex-foot-wrap">
              <div>
                <strong>The Home of Heritage Pty Ltd</strong> &middot; Master Conservation Lic #HER921038 &middot; {site.address}
              </div>
              <div>
                Phone: <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a> &middot; concierge@thehomeofheritage.com.au
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 2: BONDI CLEAN COMMERCIAL FACILITIES (FACILITY OPS & CLINICAL)
         ========================================================================= */}
      {site.id === "bondi-clean" && (
        <div className="cs-bondi-wrapper">
          {/* Operations Top Header */}
          <nav className="cs-bondi-nav">
            <div className="cs-bondi-brand">
              <div className="cs-bondi-shield">🛡️</div>
              <div>
                <strong>CAPITAL COMMERCIAL CLEANING &amp; FACILITIES</strong>
                <span className="cs-bondi-sub">Triple ISO Certified Enterprise Facility Asset Care · Sydney &amp; US Metros</span>
              </div>
            </div>

            <div className="cs-bondi-nav-links">
              <button
                type="button"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Capabilities
              </button>
              <button
                type="button"
                className={activeTab === "calculator" ? "active" : ""}
                onClick={() => setActiveTab("calculator")}
              >
                RFP Rate Calculator
              </button>
              <button
                type="button"
                className={activeTab === "checklist" ? "active" : ""}
                onClick={() => setActiveTab("checklist")}
              >
                65-Point Clinical Audit
              </button>
              <button
                type="button"
                className={activeTab === "live" ? "active" : ""}
                onClick={() => setActiveTab("live")}
              >
                Live QR Portal
              </button>
            </div>

            <a href="tel:0290441188" className="cs-bondi-call-btn">
              <span className="live-pulse" /> 24/7 Operations: (02) 9044 1188
            </a>
          </nav>

          {/* Bondi Hero with Real Corporate Backdrop */}
          <header className="cs-bondi-hero">
            <div className="cs-bondi-hero-bg" style={{ backgroundImage: `url(${site.image})` }} />
            <div className="cs-bondi-hero-scrim" />
            <div className="cs-bondi-hero-inner">
              <div className="cs-bondi-pill">
                <span>ISO 9001 · ISO 14001 · ISO 45001 ACCREDITED · SYDNEY CBD &amp; US METROS</span>
              </div>
              <h1 className="cs-bondi-h1">
                Immaculate Corporate Workspaces. <br />
                <em>Zero Downtime Facility Care.</em>
              </h1>
              <p className="cs-bondi-lead">
                Hospital-grade commercial cleaning, high-rise facility asset care, and green-star sanitation
                for Sydney CBD towers, Melbourne financial districts, and US executive corporate offices.
              </p>

              <div className="cs-bondi-status-bar">
                <span className="live-dot" />
                <strong>Live Fleet Ops:</strong> 142 active Sydney CBD &amp; US corporate high-rises &middot; 100% digital QR check-in compliance verified tonight
              </div>

              <div className="cs-bondi-hero-btns">
                <button
                  type="button"
                  className="cs-bondi-btn-primary"
                  onClick={() => {
                    const el = document.getElementById("bondi-calc-sec");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Configure Facility Scope &amp; Rates &rarr;
                </button>
                <a href="tel:0290441188" className="cs-bondi-btn-sec">
                  Emergency 2-Hr Response Hotline
                </a>
              </div>
            </div>
          </header>

          {/* INTERACTIVE TOOL: Commercial Facility Cleaning Scope & Rate Calculator */}
          <section className="cs-bondi-section" id="bondi-calc-sec">
            <div className="cs-bondi-sec-title">
              <span className="bondi-tag">Commercial Estimator</span>
              <h2>Commercial Scope &amp; Monthly Retainer Calculator</h2>
              <p>Transparent enterprise rates tailored to square meterage, infection standards, and shift frequency.</p>
            </div>

            <div className="cs-bondi-calc-box">
              <div className="cs-bondi-calc-form">
                <label className="bondi-lbl">Facility Type &amp; Classification</label>
                <div className="bondi-opt-row">
                  <button
                    type="button"
                    className={bondiFacility === "office" ? "active" : ""}
                    onClick={() => setBondiFacility("office")}
                  >
                    🏢 Corporate Office / High-Rise
                  </button>
                  <button
                    type="button"
                    className={bondiFacility === "medical" ? "active" : ""}
                    onClick={() => setBondiFacility("medical")}
                  >
                    🏥 Clinical &amp; Specialist Medical
                  </button>
                  <button
                    type="button"
                    className={bondiFacility === "glass" ? "active" : ""}
                    onClick={() => setBondiFacility("glass")}
                  >
                    🏙️ Architectural Glass &amp; Facade
                  </button>
                  <button
                    type="button"
                    className={bondiFacility === "campus" ? "active" : ""}
                    onClick={() => setBondiFacility("campus")}
                  >
                    🎓 University / Tech Campus
                  </button>
                </div>

                <div style={{ marginTop: 22 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <label className="bondi-lbl">Facility Floor Area</label>
                    <strong style={{ color: "#38bdf8", fontSize: 16 }}>{bondiArea.toLocaleString()} m²</strong>
                  </div>
                  <input
                    type="range"
                    min={400}
                    max={12000}
                    step={200}
                    value={bondiArea}
                    onChange={(e) => setBondiArea(Number(e.target.value))}
                    className="cs-calc-range-slider"
                  />
                  <div className="cs-calc-range-ticks">
                    <span>400 m² (Boutique)</span>
                    <span>5,000 m² (Multi-Floor)</span>
                    <span>12,000 m² (Tower)</span>
                  </div>
                </div>

                <div style={{ marginTop: 22 }}>
                  <label className="bondi-lbl">Service &amp; Shift Frequency</label>
                  <div className="bondi-opt-row">
                    <button
                      type="button"
                      className={bondiFrequency === "weekly" ? "active" : ""}
                      onClick={() => setBondiFrequency("weekly")}
                    >
                      3x Weekly Deep Sanitization
                    </button>
                    <button
                      type="button"
                      className={bondiFrequency === "daily" ? "active" : ""}
                      onClick={() => setBondiFrequency("daily")}
                    >
                      Daily Night Operations (Standard)
                    </button>
                    <button
                      type="button"
                      className={bondiFrequency === "porter" ? "active" : ""}
                      onClick={() => setBondiFrequency("porter")}
                    >
                      24/7 Dedicated Day Porter + Night Shift
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div className="cs-bondi-calc-summary">
                <div className="bondi-summary-head">Enterprise Scope Proposal</div>
                <div className="bondi-price-wrap">
                  <span className="bondi-price-label">Estimated Monthly Retainer</span>
                  <div className="bondi-price-num">${calculateBondiRetainer().monthly.toLocaleString()} <small>/mo + GST</small></div>
                  <span className="bondi-price-sub">Includes 100% Eco-Neutral Consumables, Machine Scrubbing &amp; QA Audits</span>
                </div>

                <div className="bondi-specs-grid">
                  <div className="bondi-spec-col">
                    <span>Assigned Staff:</span>
                    <strong>{calculateBondiRetainer().staff} Licensed Technicians</strong>
                  </div>
                  <div className="bondi-spec-col">
                    <span>Inspection Frequency:</span>
                    <strong>Weekly Area Manager</strong>
                  </div>
                  <div className="bondi-spec-col">
                    <span>Digital Portal:</span>
                    <strong>Real-time QR Logged</strong>
                  </div>
                  <div className="bondi-spec-col">
                    <span>Emergency Response:</span>
                    <strong>2-Hour SLA Sydney CBD</strong>
                  </div>
                </div>

                {bondiRfpSent ? (
                  <div className="cs-calc-success-toast">
                    ✔ Formal Commercial RFP Generated! A Capital Cleaning enterprise director will email the documentation within 2 hours.
                  </div>
                ) : (
                  <button
                    type="button"
                    className="cs-bondi-btn-submit"
                    onClick={() => setBondiRfpSent(true)}
                  >
                    Generate Official Commercial RFP Schedule &rarr;
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Interactive 65-Point Clinical Hygiene Checklist */}
          <section className="cs-bondi-section">
            <div className="cs-bondi-sec-title">
              <span className="bondi-tag">Clinical Compliance</span>
              <h2>Interactive 65-Point Hygiene Audit Matrix</h2>
              <p>Every facility is audited weekly against clinical hygiene protocols under AS/NZS 4187.</p>
            </div>

            <div className="cs-bondi-tabs-bar">
              {["High-Touch Touchpoints", "Air Quality & HEPA", "Clinical Restrooms", "Waste & Bio-Hazard"].map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  className={bondiChecklistTab === i ? "active" : ""}
                  onClick={() => setBondiChecklistTab(i)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="cs-bondi-checklist-grid">
              {bondiChecklistTab === 0 && (
                <>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Hospital-Grade Disinfection</strong>
                      <p>Door handles, biometric scanners, lift buttons treated with TGA-registered antimicrobial solution.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>ATP Bioluminescence Testing</strong>
                      <p>Random swab testing weekly to verify 0.00 RLU bacterial load on conference desks.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Color-Coded Microfiber Protocols</strong>
                      <p>Strict zone segregation: Red (washrooms), Blue (desks), Green (kitchens) to eliminate cross-contamination.</p>
                    </div>
                  </div>
                </>
              )}

              {bondiChecklistTab === 1 && (
                <>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>HEPA H14 Multi-Stage Air Filtration</strong>
                      <p>Vacuum extraction systems certified to trap 99.97% of airborne particles down to 0.3 microns.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Diffuser &amp; Grille De-Dusting</strong>
                      <p>Quarterly high-level cleaning of HVAC return vents to ensure optimal green-star indoor air quality.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Zero-VOC Chemical Formulations</strong>
                      <p>Plant-based GECA-certified cleaning agents leaving zero respiratory irritants in occupied spaces.</p>
                    </div>
                  </div>
                </>
              )}

              {bondiChecklistTab === 2 && (
                <>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Full Ceramic Descaling &amp; Steam Sterilization</strong>
                      <p>High-pressure 140°C thermal vapor injection into tile grout lines and sanitary seals.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Automated Refill Monitoring</strong>
                      <p>Smart dispenser check ensuring zero empty soap, sanitizer, or paper dispensers during tenant hours.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Odor Elimination via Bio-Enzymes</strong>
                      <p>Active enzymatic degradation of organic compounds rather than artificial aerosol masking.</p>
                    </div>
                  </div>
                </>
              )}

              {bondiChecklistTab === 3 && (
                <>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>EPA-Compliant Sharps &amp; Clinical Disposal</strong>
                      <p>Licensed clinical waste containment for specialist medical clinics and day surgery suites.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>Secure Document Shredding Transport</strong>
                      <p>Locked security console maintenance for legal, banking, and government tenancies.</p>
                    </div>
                  </div>
                  <div className="bondi-check-card">
                    <span className="chk-icon">✔</span>
                    <div>
                      <strong>100% Recycling Diversion Tracking</strong>
                      <p>Monthly waste stream weight data provided for corporate ESG and NABERS energy reporting.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Live QR Digital Operations Portal Simulator */}
          <section className="cs-bondi-section">
            <div className="cs-bondi-portal-box">
              <div className="portal-left">
                <span className="bondi-tag">Proprietary Technology</span>
                <h3>Live Digital QR Attendance &amp; Audit Portal</h3>
                <p>
                  Every cleaner scans a dedicated NFC/QR chip at your premises upon arrival and departure. You receive an automated inspection sign-off and photo proof every single morning.
                </p>
                <button
                  type="button"
                  className="cs-bondi-btn-primary"
                  onClick={() => setBondiQrSimulated(true)}
                  style={{ marginTop: 16 }}
                >
                  {bondiQrSimulated ? "✔ QR Log Verified (10:14 PM)" : "Simulate Live QR Scan &rarr;"}
                </button>
              </div>

              <div className="portal-right">
                <div className="portal-screen">
                  <div className="portal-screen-head">
                    <span className="pulse-green" /> <strong>Site #SYD-4091 &middot; Sydney Financial Centre Tower</strong>
                  </div>
                  <div className="portal-screen-body">
                    <div className="log-line">
                      <span>22:04:12</span>
                      <strong>Team Alpha Logged In (4 Cleaners)</strong>
                    </div>
                    <div className="log-line">
                      <span>22:45:00</span>
                      <strong>Level 18 Executive Suites Sanitized</strong>
                    </div>
                    <div className="log-line">
                      <span>23:18:22</span>
                      <strong>ATP Test Score: 0 RLU (Passed)</strong>
                    </div>
                    {bondiQrSimulated && (
                      <div className="log-line success">
                        <span>Just now</span>
                        <strong>Live QR Verification Sign-Off: Approved!</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bondi Footer */}
          <footer className="cs-bondi-footer">
            <div className="cs-bondi-foot-wrap">
              <div>
                <strong>Capital Commercial Cleaning &amp; Facilities</strong> &middot; Enterprise Asset Care &middot; Sydney &amp; US Metros
              </div>
              <div>
                24/7 Operations Command: 1300 227 482 &middot; enterprise@capitalcleaning.com.au
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 3: TRUENORTH PRIVATE WEALTH & ADVISORY (COLLINS ST, MELBOURNE)
         ========================================================================= */}
      {site.id === "truenorth-wealth" && (
        <div className="cs-truenorth-wrapper">
          {/* Wealth Top Bar */}
          <nav className="cs-truenorth-nav">
            <div className="cs-truenorth-brand">
              <span className="cs-truenorth-crest">⚖️</span>
              <div>
                <strong>TRUENORTH PRIVATE WEALTH</strong>
                <span className="cs-truenorth-sub">Family Office &amp; Wealth Stewardship · Collins St, Melbourne</span>
              </div>
            </div>

            <div className="cs-truenorth-nav-links">
              <button
                type="button"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Fiduciary Charter
              </button>
              <button
                type="button"
                className={activeTab === "simulator" ? "active" : ""}
                onClick={() => setActiveTab("simulator")}
              >
                Capital Simulator
              </button>
              <button
                type="button"
                className={activeTab === "structuring" ? "active" : ""}
                onClick={() => setActiveTab("structuring")}
              >
                Family Office Services
              </button>
              <button
                type="button"
                className={activeTab === "advisory" ? "active" : ""}
                onClick={() => setActiveTab("advisory")}
              >
                Private Advisory
              </button>
            </div>

            <a href="tel:0396024100" className="cs-truenorth-call-btn">
              <span>Private Line: (03) 9602 4100</span>
            </a>
          </nav>

          {/* Hero with Real Prestigious Photo */}
          <header className="cs-truenorth-hero">
            <div className="cs-truenorth-hero-bg" style={{ backgroundImage: `url(${site.image})` }} />
            <div className="cs-truenorth-hero-scrim" />
            <div className="cs-truenorth-hero-inner">
              <div className="cs-truenorth-pill">
                <span>AFSL #482910 · 100% INDEPENDENT · ZERO PRODUCT COMMISSIONS</span>
              </div>
              <h1 className="cs-truenorth-h1">
                Fiduciary Wealth Stewardship. <br />
                <em>Protected Across Generations.</em>
              </h1>
              <p className="cs-truenorth-lead">
                Private family office advisory, generational wealth structuring, and institutional investment stewardship for Australian families with $3M to $100M+ net worth.
              </p>

              <div className="cs-truenorth-stats-row">
                <div className="tn-stat-box">
                  <b>$680M+</b>
                  <span>Capital Stewarded</span>
                </div>
                <div className="tn-stat-box">
                  <b>34 Years</b>
                  <span>Average Client Tenure</span>
                </div>
                <div className="tn-stat-box">
                  <b>100% Fee-Only</b>
                  <span>Zero Kickbacks or Trailers</span>
                </div>
                <div className="tn-stat-box">
                  <b>Top 1%</b>
                  <span>Private Advisory VIC/SA</span>
                </div>
              </div>

              <div className="cs-truenorth-btns">
                <button
                  type="button"
                  className="cs-truenorth-btn-primary"
                  onClick={() => {
                    const el = document.getElementById("tn-simulator-sec");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Model Generational Growth Simulator &rarr;
                </button>
                <a href="tel:0396024100" className="cs-truenorth-btn-sec">
                  Request Confidential Consultation
                </a>
              </div>
            </div>
          </header>

          {/* INTERACTIVE TOOL: Generational Wealth & Retirement Capital Growth Simulator */}
          <section className="cs-truenorth-section" id="tn-simulator-sec">
            <div className="cs-truenorth-sec-heading">
              <span className="tn-tag">Private Wealth Modeling</span>
              <h2>Generational Wealth &amp; Retirement Capital Growth Simulator</h2>
              <p>Model compound asset stewardship, annual tax-sheltered income distributions, and generational legacy protection.</p>
            </div>

            <div className="cs-truenorth-calc-card">
              <div className="tn-calc-inputs">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <label className="tn-lbl">Initial Investable Family Capital</label>
                    <strong style={{ color: "#e6ca65", fontSize: 18 }}>
                      ${(wealthCapital / 1000000).toFixed(2)} Million
                    </strong>
                  </div>
                  <input
                    type="range"
                    min={1000000}
                    max={25000000}
                    step={500000}
                    value={wealthCapital}
                    onChange={(e) => setWealthCapital(Number(e.target.value))}
                    className="cs-calc-range-slider"
                  />
                  <div className="cs-calc-range-ticks">
                    <span>$1.0M</span>
                    <span>$10.0M</span>
                    <span>$25.0M+</span>
                  </div>
                </div>

                <div style={{ marginTop: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <label className="tn-lbl">Stewardship Time Horizon</label>
                    <strong style={{ color: "#e6ca65", fontSize: 18 }}>{wealthYears} Years</strong>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={wealthYears}
                    onChange={(e) => setWealthYears(Number(e.target.value))}
                    className="cs-calc-range-slider"
                  />
                  <div className="cs-calc-range-ticks">
                    <span>5 Years</span>
                    <span>15 Years (Generational)</span>
                    <span>30 Years (Dynastic)</span>
                  </div>
                </div>

                <div style={{ marginTop: 24 }}>
                  <label className="tn-lbl">Mandate &amp; Risk Profile</label>
                  <div className="tn-strat-row">
                    <button
                      type="button"
                      className={wealthStrategy === "preservation" ? "active" : ""}
                      onClick={() => setWealthStrategy("preservation")}
                    >
                      🛡️ Capital Preservation &amp; Yield (6.5% p.a.)
                    </button>
                    <button
                      type="button"
                      className={wealthStrategy === "balanced" ? "active" : ""}
                      onClick={() => setWealthStrategy("balanced")}
                    >
                      ⚖️ Balanced Multi-Asset Stewardship (8.2% p.a.)
                    </button>
                    <button
                      type="button"
                      className={wealthStrategy === "growth" ? "active" : ""}
                      onClick={() => setWealthStrategy("growth")}
                    >
                      🚀 Global Equities &amp; Private Markets (10.8% p.a.)
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div className="tn-calc-output">
                <div className="tn-out-title">Projected Family Capital Outlook</div>
                <div className="tn-proj-val">
                  ${(calculateWealthProjection().projected / 1000000).toFixed(2)}M
                </div>
                <div className="tn-proj-sub">Estimated Future Estate Value after {wealthYears} Years</div>

                <div className="tn-meta-grid">
                  <div className="tn-meta-item">
                    <span>Annual Family Cashflow:</span>
                    <strong>${calculateWealthProjection().annualIncome.toLocaleString()} /yr</strong>
                  </div>
                  <div className="tn-meta-item">
                    <span>Est. Tax Sheltered (Trusts):</span>
                    <strong>${calculateWealthProjection().taxSaved.toLocaleString()}</strong>
                  </div>
                  <div className="tn-meta-item">
                    <span>Custody Architecture:</span>
                    <strong>Direct Wholesale Nominee</strong>
                  </div>
                  <div className="tn-meta-item">
                    <span>Advisory Fee:</span>
                    <strong>Fixed-Tier (Zero Trails)</strong>
                  </div>
                </div>

                {wealthApptSent ? (
                  <div className="cs-calc-success-toast">
                    ✔ Confidential Inquiry Received. A Senior TrueNorth Partner will contact you within 24 business hours under strict NDA.
                  </div>
                ) : (
                  <button
                    type="button"
                    className="cs-truenorth-btn-primary"
                    style={{ width: "100%", marginTop: 16 }}
                    onClick={() => setWealthApptSent(true)}
                  >
                    Schedule Private Partner Consultation &rarr;
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Fiduciary Comparison */}
          <section className="cs-truenorth-section">
            <div className="cs-truenorth-sec-heading">
              <span className="tn-tag">Transparency Guarantee</span>
              <h2>The TrueNorth Fiduciary Standard vs Retail Banking</h2>
              <p>Why Australia's high-net-worth families refuse commission-driven advisory models.</p>
            </div>

            <div className="tn-compare-table">
              <div className="tn-tbl-head">
                <div>Advisory Dimension</div>
                <div className="highlight">TrueNorth Family Office</div>
                <div>Typical Big 4 Bank / Broker</div>
              </div>
              <div className="tn-tbl-row">
                <div>Fee Transparency</div>
                <div className="highlight">100% Fee-Only (Direct Invoiced)</div>
                <div>Hidden product trails &amp; platform rebates</div>
              </div>
              <div className="tn-tbl-row">
                <div>Asset Custody</div>
                <div className="highlight">Direct client legal ownership (CHESS)</div>
                <div>Pooled internal bank wraps</div>
              </div>
              <div className="tn-tbl-row">
                <div>Tax &amp; Estate Integration</div>
                <div className="highlight">Bespoke family discretionary trusts &amp; SMSFs</div>
                <div>Cookie-cutter retail products</div>
              </div>
              <div className="tn-tbl-row">
                <div>Conflict of Interest</div>
                <div className="highlight">Fiduciary pledge: No owned products sold</div>
                <div>Quotas on in-house managed funds</div>
              </div>
            </div>
          </section>

          {/* Wealth Footer */}
          <footer className="cs-truenorth-footer">
            <div className="cs-truenorth-foot-wrap">
              <div>
                <strong>TrueNorth Private Wealth &amp; Advisory Pty Ltd</strong> &middot; AFSL #482910 &middot; {site.address}
              </div>
              <div>
                Confidential Telephone: (03) 9602 4100 &middot; advisory@truenorthprivatewealth.com.au
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 4: PULSE MODERN COSMETIC DENTISTRY (JAMES ST, BRISBANE)
         ========================================================================= */}
      {site.id === "pulse-dental" && (
        <div className="cs-pulse-wrapper">
          {/* Dental Top Bar */}
          <nav className="cs-pulse-nav">
            <div className="cs-pulse-brand">
              <span className="cs-pulse-gem">💎</span>
              <div>
                <strong>PACIFIC SMILES DENTAL</strong>
                <span className="cs-pulse-sub">Australia's Trusted Local Dental Network · 110+ Modern Clinics</span>
              </div>
            </div>

            <div className="cs-pulse-nav-links">
              <button
                type="button"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Smile Test-Drive
              </button>
              <button
                type="button"
                className={activeTab === "calculator" ? "active" : ""}
                onClick={() => setActiveTab("calculator")}
              >
                Payment Calculator
              </button>
              <button
                type="button"
                className={activeTab === "cases" ? "active" : ""}
                onClick={() => setActiveTab("cases")}
              >
                Before &amp; After
              </button>
              <button
                type="button"
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => setActiveTab("experience")}
              >
                Luxury Suite
              </button>
            </div>

            <a href="tel:0738541900" className="cs-pulse-call-btn">
              <span>Book Today: 13 13 17 (7 Days)</span>
            </a>
          </nav>

          {/* Hero with Real Studio Photo */}
          <header className="cs-pulse-hero">
            <div className="cs-pulse-hero-bg" style={{ backgroundImage: `url(${site.image})` }} />
            <div className="cs-pulse-hero-scrim" />
            <div className="cs-pulse-hero-inner">
              <div className="cs-pulse-pill">
                <span>110+ AUSTRALIAN CLINICS · 7 DAYS EMERGENCY CARE · CDBS BULK BILLED</span>
              </div>
              <h1 className="cs-pulse-h1">
                Exceptional Dental Care. <br />
                <em>Making Healthy Smiles Everyday.</em>
              </h1>
              <p className="cs-pulse-lead">
                From gentle family check-ups and emergency dental care to custom porcelain veneers
                and clear aligners. Open 7 days with emergency appointments reserved daily across Australia.
              </p>

              <div className="cs-pulse-features-strip">
                <div className="pulse-feat-badge">
                  <span>✨</span> 3D Digital Smile Test-Drive
                </div>
                <div className="pulse-feat-badge">
                  <span>📺</span> Ceiling Netflix &amp; Bose Suite
                </div>
                <div className="pulse-feat-badge">
                  <span>💳</span> Interest-Free from $49/week
                </div>
                <div className="pulse-feat-badge">
                  <span>🦷</span> Zero-Drill Micro-Veneers
                </div>
              </div>

              <div className="cs-pulse-btns">
                <button
                  type="button"
                  className="cs-pulse-btn-primary"
                  onClick={() => {
                    const el = document.getElementById("pulse-calc-sec");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Calculate Smile Investment &rarr;
                </button>
                <a href="tel:0738541900" className="cs-pulse-btn-sec">
                  Book 3D Smile Consultation
                </a>
              </div>
            </div>
          </header>

          {/* INTERACTIVE TOOL: Smile Treatment & Weekly Payment Calculator */}
          <section className="cs-pulse-section" id="pulse-calc-sec">
            <div className="cs-pulse-sec-heading">
              <span className="pulse-tag">Transparent Cosmetic Pricing</span>
              <h2>Smile Transformation &amp; Weekly Payment Calculator</h2>
              <p>Explore weekly payment plan options with 0% interest tailored to your treatment preferences.</p>
            </div>

            <div className="cs-pulse-calc-card">
              <div className="pulse-calc-left">
                <label className="pulse-lbl">1. Select Cosmetic Treatment</label>
                <div className="pulse-opt-grid">
                  <button
                    type="button"
                    className={pulseTreatment === "veneers" ? "active" : ""}
                    onClick={() => setPulseTreatment("veneers")}
                  >
                    ✨ Handcrafted Porcelain Veneers
                  </button>
                  <button
                    type="button"
                    className={pulseTreatment === "invisalign" ? "active" : ""}
                    onClick={() => setPulseTreatment("invisalign")}
                  >
                    📐 Invisalign Diamond Clear Aligners
                  </button>
                  <button
                    type="button"
                    className={pulseTreatment === "whitening" ? "active" : ""}
                    onClick={() => setPulseTreatment("whitening")}
                  >
                    💡 In-Chair Philips Zoom Laser Whitening
                  </button>
                  <button
                    type="button"
                    className={pulseTreatment === "full-arch" ? "active" : ""}
                    onClick={() => setPulseTreatment("full-arch")}
                  >
                    👑 Full Arch Smile Makeover Suite
                  </button>
                </div>

                {pulseTreatment === "veneers" && (
                  <div style={{ marginTop: 22 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <label className="pulse-lbl">2. Number of Veneers in Smile Zone</label>
                      <strong style={{ color: "#2dd4bf", fontSize: 17 }}>{pulseTeethCount} Handcrafted Teeth</strong>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={16}
                      step={2}
                      value={pulseTeethCount}
                      onChange={(e) => setPulseTeethCount(Number(e.target.value))}
                      className="cs-calc-range-slider"
                    />
                    <div className="cs-calc-range-ticks">
                      <span>4 Teeth (Center)</span>
                      <span>8 Teeth (Social Zone)</span>
                      <span>16 Teeth (Full Arch)</span>
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 22 }}>
                  <label className="pulse-lbl">3. Payment Preference</label>
                  <div className="pulse-opt-grid">
                    <button
                      type="button"
                      className={pulsePayPlan === "weekly" ? "active" : ""}
                      onClick={() => setPulsePayPlan("weekly")}
                    >
                      💳 Weekly Payment Plan (0% Interest)
                    </button>
                    <button
                      type="button"
                      className={pulsePayPlan === "upfront" ? "active" : ""}
                      onClick={() => setPulsePayPlan("upfront")}
                    >
                      💰 Full Upfront Investment (Save 5%)
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div className="pulse-calc-right">
                <div className="pulse-out-badge">Cosmetic Investment Estimate</div>
                <div className="pulse-price-box">
                  <span className="pulse-price-lbl">
                    {pulsePayPlan === "weekly" ? "Weekly Payment (0% Interest)" : "Total Upfront Investment"}
                  </span>
                  <div className="pulse-price-num">
                    {pulsePayPlan === "weekly" ? (
                      <>
                        ${calculatePulseEstimate().weekly} <small>/week</small>
                      </>
                    ) : (
                      <>${calculatePulseEstimate().upfront.toLocaleString()}</>
                    )}
                  </div>
                  <span className="pulse-price-note">
                    {pulsePayPlan === "weekly"
                      ? "Billed weekly over 24 months with zero interest"
                      : "Includes all preparation, temporary mockups & final ceramic bonding"}
                  </span>
                </div>

                <div className="pulse-meta-list">
                  <div className="pulse-meta-row">
                    <span>Clinical Timeline:</span>
                    <strong>{calculatePulseEstimate().duration}</strong>
                  </div>
                  <div className="pulse-meta-row">
                    <span>3D Digital Mockup:</span>
                    <strong>Complimentary Trial Smile</strong>
                  </div>
                  <div className="pulse-meta-row">
                    <span>Ceramic Warranty:</span>
                    <strong>10-Year Guarantee</strong>
                  </div>
                  <div className="pulse-meta-row">
                    <span>Comfort Amenities:</span>
                    <strong>Noise-Canceling Bose &amp; Ceiling TV</strong>
                  </div>
                </div>

                {pulseBooked ? (
                  <div className="cs-calc-success-toast">
                    ✔ Consultation Reserved for {pulseSlotSelected}! Our James St concierge will send SMS confirmation.
                  </div>
                ) : (
                  <div style={{ marginTop: 14 }}>
                    <label className="pulse-lbl" style={{ marginBottom: 6 }}>Select 3D Scan Time Slot:</label>
                    <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                      {["Thu 10:30 AM", "Fri 2:15 PM", "Sat 11:00 AM"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`pulse-slot-btn ${pulseSlotSelected === slot ? "active" : ""}`}
                          onClick={() => setPulseSlotSelected(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="cs-pulse-btn-primary"
                      style={{ width: "100%" }}
                      onClick={() => setPulseBooked(true)}
                    >
                      Book 3D Smile Test-Drive &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Before & After Cases */}
          <section className="cs-pulse-section">
            <div className="cs-pulse-sec-heading">
              <span className="pulse-tag">Results Gallery</span>
              <h2>Real Patient Smiles &amp; Transformations</h2>
              <p>Explore real patient results achieved across 110+ Pacific Smiles Dental clinics nationwide.</p>
            </div>

            <div className="cs-pulse-gallery-grid">
              {site.gallery.map((g, idx) => (
                <div
                  key={idx}
                  className={`cs-pulse-case-card ${pulseActiveCase === idx ? "active" : ""}`}
                  onClick={() => setPulseActiveCase(idx)}
                >
                  <div className="pulse-case-header">
                    <span className="pulse-case-tag">{g.tag}</span>
                    <span className="pulse-case-val">{g.value}</span>
                  </div>
                  <h3>{g.title}</h3>
                  <p>{g.subtitle}</p>
                  <div className="pulse-case-footer">
                    <span>Ceramic Shade: BL1 Ultra-Natural</span>
                    <strong>Verified Patient Review ★★★★★</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pulse Footer */}
          <footer className="cs-pulse-footer">
            <div className="cs-pulse-foot-wrap">
              <div>
                <strong>Pacific Smiles Dental</strong> &middot; Australia's Trusted Dental Care Network &middot; 110+ Clinics Nationwide
              </div>
              <div>
                Central Bookings: 13 13 17 (7 Days) &middot; info@pacificsmilesdental.com.au
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 5: ROASTCRAFT SPECIALTY COFFEE (FITZROY, MELBOURNE)
         ========================================================================= */}
      {site.id === "roastcraft-coffee" && (
        <div className="cs-roastcraft-wrapper">
          {/* Coffee Top Bar */}
          <nav className="cs-roastcraft-nav">
            <div className="cs-roastcraft-brand">
              <span className="cs-roastcraft-logo">☕</span>
              <div>
                <strong>ROASTCRAFT SPECIALTY ROASTERS</strong>
                <span className="cs-roastcraft-sub">Artisan Fitzroy Roastery &amp; Espresso Bar · Melbourne</span>
              </div>
            </div>

            <div className="cs-roastcraft-nav-links">
              <button
                type="button"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Origins
              </button>
              <button
                type="button"
                className={activeTab === "builder" ? "active" : ""}
                onClick={() => setActiveTab("builder")}
              >
                Coffee Builder
              </button>
              <button
                type="button"
                className={activeTab === "subscriptions" ? "active" : ""}
                onClick={() => setActiveTab("subscriptions")}
              >
                Subscriptions (-15%)
              </button>
              <button
                type="button"
                className={activeTab === "cupping" ? "active" : ""}
                onClick={() => setActiveTab("cupping")}
              >
                Cupping Scores
              </button>
            </div>

            <button
              type="button"
              className="cs-roastcraft-cart-btn"
              onClick={() => setCoffeeCartOpen(!coffeeCartOpen)}
            >
              <span>🛒 Roastery Cart ({coffeeAddedCount})</span>
            </button>
          </nav>

          {/* Hero with Real Roastery Photo */}
          <header className="cs-roastcraft-hero">
            <div className="cs-roastcraft-hero-bg" style={{ backgroundImage: `url(${site.image})` }} />
            <div className="cs-roastcraft-hero-scrim" />
            <div className="cs-roastcraft-hero-inner">
              <div className="cs-roastcraft-pill">
                <span>GOLDEN BEAN AUSTRALIA 2025 ROASTER CHAMPION</span>
              </div>
              <h1 className="cs-roastcraft-h1">
                Micro-Lot Specialty Coffee. <br />
                <em>Roasted Daily in Fitzroy.</em>
              </h1>
              <p className="cs-roastcraft-lead">
                Direct-trade single origins, award-winning espresso blends, and curated weekly subscriptions
                roasted on our vintage Diedrich roaster in Melbourne.
              </p>

              <div className="cs-roastcraft-badges-row">
                <div className="rc-badge">🥇 Golden Bean 2025</div>
                <div className="rc-badge">☕ Cupping Score 91.5+</div>
                <div className="rc-badge">📦 Roasted Fresh in Fitzroy</div>
                <div className="rc-badge">🚚 Same-Day Melbourne Dispatch</div>
              </div>

              <div className="cs-roastcraft-btns">
                <button
                  type="button"
                  className="cs-roastcraft-btn-primary"
                  onClick={() => {
                    const el = document.getElementById("coffee-builder-sec");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Customize Your Coffee Subscription &rarr;
                </button>
                <button
                  type="button"
                  className="cs-roastcraft-btn-sec"
                  onClick={() => setCoffeeCartOpen(true)}
                >
                  Quick Order 1-Click Apple Pay
                </button>
              </div>
            </div>
          </header>

          {/* INTERACTIVE TOOL: Coffee Bean & Subscription Builder */}
          <section className="cs-roastcraft-section" id="coffee-builder-sec">
            <div className="cs-roastcraft-sec-heading">
              <span className="rc-tag">Fresh Batch Customizer</span>
              <h2>Interactive Roast &amp; Subscription Builder</h2>
              <p>Select your micro-lot origin, precision grind profile, and delivery rhythm.</p>
            </div>

            <div className="cs-roastcraft-builder-grid">
              <div className="rc-builder-form">
                <label className="rc-lbl">1. Select Micro-Lot Single Origin or Blend</label>
                <div className="rc-origin-cards-grid">
                  <div
                    className={`rc-origin-card ${coffeeSelectedBean === "geisha" ? "active" : ""}`}
                    onClick={() => setCoffeeSelectedBean("geisha")}
                  >
                    <div className="rc-card-head">
                      <strong>Colombia Huila Geisha Honey</strong>
                      <span className="rc-cup-tag">Cupping 93.5</span>
                    </div>
                    <p>Notes of Meyer lemon, white peach, wild honeycomb, and jasmine blossom.</p>
                    <span className="rc-process">Process: Honey Maceration &middot; 1,950m ASL</span>
                  </div>

                  <div
                    className={`rc-origin-card ${coffeeSelectedBean === "yirgacheffe" ? "active" : ""}`}
                    onClick={() => setCoffeeSelectedBean("yirgacheffe")}
                  >
                    <div className="rc-card-head">
                      <strong>Ethiopia Yirgacheffe Anaerobic</strong>
                      <span className="rc-cup-tag">Cupping 92.0</span>
                    </div>
                    <p>Notes of ripe blueberry, bergamot, dark cacao nibs, and lavender finish.</p>
                    <span className="rc-process">Process: 72hr Anaerobic &middot; 2,100m ASL</span>
                  </div>

                  <div
                    className={`rc-origin-card ${coffeeSelectedBean === "guatemala" ? "active" : ""}`}
                    onClick={() => setCoffeeSelectedBean("guatemala")}
                  >
                    <div className="rc-card-head">
                      <strong>Guatemala Antigua Bourbon</strong>
                      <span className="rc-cup-tag">Cupping 90.5</span>
                    </div>
                    <p>Notes of rich toffee caramel, red fuji apple, roasted hazelnut, and milk chocolate.</p>
                    <span className="rc-process">Process: Fully Washed &middot; 1,700m ASL</span>
                  </div>

                  <div
                    className={`rc-origin-card ${coffeeSelectedBean === "blend" ? "active" : ""}`}
                    onClick={() => setCoffeeSelectedBean("blend")}
                  >
                    <div className="rc-card-head">
                      <strong>Fitzroy Champion Espresso Blend</strong>
                      <span className="rc-cup-tag">Cupping 89.5</span>
                    </div>
                    <p>Our flagship cafe blend: bold crema, Belgian chocolate, maple syrup, and almond butter.</p>
                    <span className="rc-process">Process: Multi-Region Direct Trade</span>
                  </div>
                </div>

                <div style={{ marginTop: 22 }}>
                  <label className="rc-lbl">2. Precision Grind Method</label>
                  <div className="rc-btn-row">
                    <button
                      type="button"
                      className={coffeeGrind === "whole-bean" ? "active" : ""}
                      onClick={() => setCoffeeGrind("whole-bean")}
                    >
                      ☕ Whole Bean (Max Freshness)
                    </button>
                    <button
                      type="button"
                      className={coffeeGrind === "espresso" ? "active" : ""}
                      onClick={() => setCoffeeGrind("espresso")}
                    >
                      ⚡ Espresso Machine (Fine)
                    </button>
                    <button
                      type="button"
                      className={coffeeGrind === "filter" ? "active" : ""}
                      onClick={() => setCoffeeGrind("filter")}
                    >
                      💧 V60 &amp; Pour-Over (Medium)
                    </button>
                    <button
                      type="button"
                      className={coffeeGrind === "plunger" ? "active" : ""}
                      onClick={() => setCoffeeGrind("plunger")}
                    >
                      🧊 French Press &amp; Cold Brew (Coarse)
                    </button>
                  </div>
                </div>

                <div style={{ marginTop: 22 }}>
                  <label className="rc-lbl">3. Bag Volume &amp; Delivery Frequency</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div className="rc-btn-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                      <button
                        type="button"
                        className={coffeeBagSize === "250g" ? "active" : ""}
                        onClick={() => setCoffeeBagSize("250g")}
                      >
                        250g
                      </button>
                      <button
                        type="button"
                        className={coffeeBagSize === "500g" ? "active" : ""}
                        onClick={() => setCoffeeBagSize("500g")}
                      >
                        500g
                      </button>
                      <button
                        type="button"
                        className={coffeeBagSize === "1kg" ? "active" : ""}
                        onClick={() => setCoffeeBagSize("1kg")}
                      >
                        1kg
                      </button>
                    </div>

                    <div className="rc-btn-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                      <button
                        type="button"
                        className={coffeeSubFrequency === "weekly" ? "active" : ""}
                        onClick={() => setCoffeeSubFrequency("weekly")}
                      >
                        Weekly
                      </button>
                      <button
                        type="button"
                        className={coffeeSubFrequency === "fortnightly" ? "active" : ""}
                        onClick={() => setCoffeeSubFrequency("fortnightly")}
                      >
                        Fortnightly
                      </button>
                      <button
                        type="button"
                        className={coffeeSubFrequency === "monthly" ? "active" : ""}
                        onClick={() => setCoffeeSubFrequency("monthly")}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Box */}
              <div className="rc-order-card">
                <div className="rc-order-head">Roastery Dispatch Summary</div>
                <div className="rc-price-display">
                  <span className="rc-price-lbl">Subscriber Price (-15% Off)</span>
                  <div className="rc-price-num">${calculateCoffeePrice().subPrice} <small>AUD</small></div>
                  <span className="rc-price-strike">One-time price: ${calculateCoffeePrice().raw}</span>
                </div>

                <div className="rc-summary-list">
                  <div className="rc-sum-row">
                    <span>Bean Origin:</span>
                    <strong>{coffeeSelectedBean.toUpperCase()}</strong>
                  </div>
                  <div className="rc-sum-row">
                    <span>Grind Spec:</span>
                    <strong>{coffeeGrind.toUpperCase()}</strong>
                  </div>
                  <div className="rc-sum-row">
                    <span>Bag Size:</span>
                    <strong>{coffeeBagSize} Airtight Valve Bag</strong>
                  </div>
                  <div className="rc-sum-row">
                    <span>Delivery Cadence:</span>
                    <strong>Every {coffeeSubFrequency} (Cancel anytime)</strong>
                  </div>
                  <div className="rc-sum-row">
                    <span>Next Roast Date:</span>
                    <strong>Tomorrow Morning in Fitzroy</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="cs-roastcraft-btn-primary"
                  style={{ width: "100%", marginTop: 14 }}
                  onClick={() => {
                    setCoffeeAddedCount((prev) => prev + 1);
                    setCoffeeCartOpen(true);
                  }}
                >
                  Add To Roastery Cart (${calculateCoffeePrice().subPrice}) &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* Slide-out Cart Drawer Simulator */}
          {coffeeCartOpen && (
            <div className="rc-cart-drawer-overlay" onClick={() => setCoffeeCartOpen(false)}>
              <div className="rc-cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="rc-cart-head">
                  <h3>Roastery Bag &amp; Checkout</h3>
                  <button type="button" onClick={() => setCoffeeCartOpen(false)}>✕</button>
                </div>

                <div className="rc-cart-body">
                  <div className="rc-cart-item">
                    <div>
                      <strong>Micro-Lot: {coffeeSelectedBean.toUpperCase()}</strong>
                      <p>{coffeeBagSize} &middot; {coffeeGrind} &middot; {coffeeSubFrequency}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <strong>${calculateCoffeePrice().subPrice}</strong>
                      <span style={{ fontSize: 11, color: "#f59e0b", display: "block" }}>15% Sub Discount</span>
                    </div>
                  </div>

                  <div className="rc-cart-total-row">
                    <span>Total Express Dispatch:</span>
                    <strong>${calculateCoffeePrice().subPrice} AUD</strong>
                  </div>

                  {coffeePaidSuccess ? (
                    <div className="cs-calc-success-toast">
                      ✔ Order Confirmed via Apple Pay! Fresh batch roasted tomorrow in Fitzroy and dispatched via AusPost Express.
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                      <button
                        type="button"
                        className="rc-apple-pay-btn"
                        onClick={() => setCoffeePaidSuccess(true)}
                      >
                        Pay 1-Click Checkout
                      </button>
                      <button
                        type="button"
                        className="cs-roastcraft-btn-primary"
                        onClick={() => setCoffeePaidSuccess(true)}
                      >
                        Checkout with Credit Card &rarr;
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Coffee Footer */}
          <footer className="cs-roastcraft-footer">
            <div className="cs-roastcraft-foot-wrap">
              <div>
                <strong>RoastCraft Specialty Coffee Roasters Pty Ltd</strong> &middot; {site.address}
              </div>
              <div>
                Fitzroy Roastery: (03) 9419 8820 &middot; wholesale@roastcraftcoffee.com.au
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* =========================================================================
          SITE 6: FIELDFLOW & TRADIETRACK PRO (JOB & INVOICING APP FOR TRADIES)
         ========================================================================= */}
      {site.id === "tradietrack-mobile" && (
        <div className="cs-tradie-wrapper">
          {/* Tradie Top Bar */}
          <nav className="cs-tradie-nav">
            <div className="cs-tradie-brand">
              <span className="cs-tradie-bolt">⚡</span>
              <div>
                <strong>FIELDFLOW &amp; TRADIETRACK PRO</strong>
                <span className="cs-tradie-sub">Job Management, Quoting &amp; Tap-To-Pay App for Tradies</span>
              </div>
            </div>

            <div className="cs-tradie-nav-links">
              <button
                type="button"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Features
              </button>
              <button
                type="button"
                className={activeTab === "simulator" ? "active" : ""}
                onClick={() => setActiveTab("simulator")}
              >
                Interactive iPhone App
              </button>
              <button
                type="button"
                className={activeTab === "roi" ? "active" : ""}
                onClick={() => setActiveTab("roi")}
              >
                ROI Calculator
              </button>
              <button
                type="button"
                className={activeTab === "pricing" ? "active" : ""}
                onClick={() => setActiveTab("pricing")}
              >
                Plans
              </button>
            </div>

            <a href="#trial" className="cs-tradie-call-btn">
              <span>Start 14-Day Free Trial</span>
            </a>
          </nav>

          {/* Hero with Real Tradie Photo */}
          <header className="cs-tradie-hero">
            <div className="cs-tradie-hero-bg" style={{ backgroundImage: `url(${site.image})` }} />
            <div className="cs-tradie-hero-scrim" />
            <div className="cs-tradie-hero-inner">
              <div className="cs-tradie-pill">
                <span>RATED 4.9★ ON APPLE APP STORE (1,400+ AUSSIE TRADIES)</span>
              </div>
              <h1 className="cs-tradie-h1">
                Quote in 60 Seconds. <br />
                <em>Get Paid Before Leaving the Driveway.</em>
              </h1>
              <p className="cs-tradie-lead">
                The all-in-one job management and invoicing app built specifically for Australian plumbers,
                sparkies, builders, and HVAC technicians. Tap-to-pay on phone, automated invoice chasing, and live fleet GPS.
              </p>

              <div className="cs-tradie-stats-strip">
                <div className="tradie-stat-col">
                  <b>60 Secs</b>
                  <span>Professional PDF Quoting</span>
                </div>
                <div className="tradie-stat-col">
                  <b>0 Extra Hardware</b>
                  <span>Tap-to-Pay Directly on Phone</span>
                </div>
                <div className="tradie-stat-col">
                  <b>Live 2-Way Sync</b>
                  <span>Xero, MYOB &amp; QuickBooks</span>
                </div>
                <div className="tradie-stat-col">
                  <b>14 Hours/Wk</b>
                  <span>Admin Saved Per Tradie</span>
                </div>
              </div>

              <div className="cs-tradie-btns">
                <button
                  type="button"
                  className="cs-tradie-btn-primary"
                  onClick={() => {
                    const el = document.getElementById("tradie-simulator-sec");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Test Drive Interactive iPhone App &rarr;
                </button>
                <a href="#trial" className="cs-tradie-btn-sec">
                  Get Free SMS Invite Link
                </a>
              </div>
            </div>
          </header>

          {/* INTERACTIVE TOOL: Interactive Phone App Simulator */}
          <section className="cs-tradie-section" id="tradie-simulator-sec">
            <div className="cs-tradie-sec-heading">
              <span className="tradie-tag">Live App Simulator</span>
              <h2>Interactive Tradie App Experience</h2>
              <p>Click the interactive screens below to experience how fast Aussie tradies quote, take payments, and track vans.</p>
            </div>

            <div className="cs-tradie-simulator-container">
              {/* Screen Selector Buttons */}
              <div className="tradie-screen-selector">
                <button
                  type="button"
                  className={tradieActiveScreen === "quote" ? "active" : ""}
                  onClick={() => setTradieActiveScreen("quote")}
                >
                  📄 60-Second Quoting Demo
                </button>
                <button
                  type="button"
                  className={tradieActiveScreen === "pay" ? "active" : ""}
                  onClick={() => setTradieActiveScreen("pay")}
                >
                  💳 Tap-to-Pay on iPhone
                </button>
                <button
                  type="button"
                  className={tradieActiveScreen === "gps" ? "active" : ""}
                  onClick={() => setTradieActiveScreen("gps")}
                >
                  🛰️ Live Van Fleet GPS Dispatch
                </button>
              </div>

              {/* Realistic iPhone Simulator Chassis */}
              <div className="tradie-iphone-chassis">
                <div className="iphone-dynamic-island" />
                <div className="iphone-screen">
                  {tradieActiveScreen === "quote" && (
                    <div className="iphone-inner-view">
                      <div className="app-bar">
                        <span>New Quote #8491</span>
                        <span className="app-status">Draft</span>
                      </div>
                      <div className="app-client-box">
                        <strong>Client: Sarah Henderson</strong>
                        <p>14 Park Ave, Mosman NSW &middot; 0418 992 110</p>
                      </div>

                      <div className="app-line-items">
                        <div className="app-item">
                          <div>
                            <b>Emergency Hot Water Overhaul</b>
                            <p>Rheem 250L Electric Tank + Valves</p>
                          </div>
                          <strong>$1,850.00</strong>
                        </div>
                        <div className="app-item">
                          <div>
                            <b>Plumbing Labor (2 Technicians)</b>
                            <p>3.5 hrs @ $120/hr</p>
                          </div>
                          <strong>$420.00</strong>
                        </div>
                      </div>

                      <div className="app-total-box">
                        <span>Total (inc GST):</span>
                        <b>$2,270.00</b>
                      </div>

                      {tradieQuoteSentDemo ? (
                        <div className="app-toast-success">
                          ✔ Professional PDF Quote Sent via SMS &amp; Email with 1-Click Client Approval!
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="app-action-btn"
                          onClick={() => setTradieQuoteSentDemo(true)}
                        >
                          Send Instant Quote via SMS &rarr;
                        </button>
                      )}
                    </div>
                  )}

                  {tradieActiveScreen === "pay" && (
                    <div className="iphone-inner-view">
                      <div className="app-bar">
                        <span>Tap to Pay on Phone</span>
                        <span className="app-status">NFC Active</span>
                      </div>
                      <div className="app-pay-circle">
                        <div className="nfc-wave">📶</div>
                        <h3>Hold Card Here</h3>
                        <p>Ready to charge customer card directly on your phone terminal</p>
                      </div>

                      <div className="app-charge-box">
                        <span>Amount to Charge:</span>
                        <strong>$840.00 AUD</strong>
                      </div>

                      {tradiePaymentSimulated ? (
                        <div className="app-toast-success" style={{ background: "#059669" }}>
                          ✔ Approved! $840.00 paid instantly &middot; Receipt sent &middot; Synced to Xero!
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="app-action-btn"
                          onClick={() => setTradiePaymentSimulated(true)}
                        >
                          Simulate Customer Tapping Card
                        </button>
                      )}
                    </div>
                  )}

                  {tradieActiveScreen === "gps" && (
                    <div className="iphone-inner-view">
                      <div className="app-bar">
                        <span>Live Fleet Map</span>
                        <span className="app-status">4 Active Vans</span>
                      </div>
                      <div className="app-fleet-list">
                        <div className="app-van-item">
                          <span className="van-dot green" />
                          <div>
                            <strong>Dave (Van #1 - Plumber)</strong>
                            <p>On-site in Manly &middot; Job 85% Completed</p>
                          </div>
                        </div>
                        <div className="app-van-item">
                          <span className="van-dot blue" />
                          <div>
                            <strong>Mick (Van #2 - HVAC)</strong>
                            <p>En route to Bondi &middot; ETA: 8 Mins</p>
                          </div>
                        </div>
                        <div className="app-van-item">
                          <span className="van-dot yellow" />
                          <div>
                            <strong>Sam (Van #3 - Apprentice)</strong>
                            <p>Picking up parts at Reece Plumbing</p>
                          </div>
                        </div>
                        <div className="app-van-item">
                          <span className="van-dot green" />
                          <div>
                            <strong>Chris (Van #4 - Electrician)</strong>
                            <p>Completed 4 of 5 jobs today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ROI Calculator for Tradie Business Owners */}
          <section className="cs-tradie-section" id="trial">
            <div className="cs-tradie-sec-heading">
              <span className="tradie-tag">Financial Impact</span>
              <h2>How Much Time &amp; Cash Does Your Business Save?</h2>
              <p>Calculate estimated hours recovered and extra cash flow generated per month.</p>
            </div>

            <div className="tradie-roi-box">
              <div className="roi-slider-wrap">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <label className="tradie-lbl">Number of Tradies / Vans on the Road</label>
                  <strong style={{ color: "#60a5fa", fontSize: 20 }}>{tradieVansCount} Tradies</strong>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={tradieVansCount}
                  onChange={(e) => setTradieVansCount(Number(e.target.value))}
                  className="cs-calc-range-slider"
                />
                <div className="cs-calc-range-ticks">
                  <span>1 Tradie (Solo)</span>
                  <span>10 Tradies (Growing Crew)</span>
                  <span>20 Tradies (Fleet)</span>
                </div>

                <div className="roi-metrics-grid">
                  <div className="roi-metric">
                    <b>{tradieVansCount * 14} hrs</b>
                    <span>Admin Hours Saved / Month</span>
                  </div>
                  <div className="roi-metric">
                    <b>${(tradieVansCount * 1250).toLocaleString()}</b>
                    <span>Faster Cash Recovered / Month</span>
                  </div>
                  <div className="roi-metric">
                    <b>0 Paper</b>
                    <span>100% Digital Job Handover</span>
                  </div>
                </div>
              </div>

              <div className="tradie-trial-form">
                <h4>Get 14 Days Free Access</h4>
                <p>We'll text an instant setup link directly to your mobile.</p>
                {tradieTrialSent ? (
                  <div className="cs-calc-success-toast">
                    ✔ Setup SMS Dispatched to {tradieTrialPhone || "your phone"}! Download app from App Store to activate.
                  </div>
                ) : (
                  <div className="trial-input-row">
                    <input
                      type="tel"
                      placeholder="Enter mobile (e.g. 0412 345 678)"
                      value={tradieTrialPhone}
                      onChange={(e) => setTradieTrialPhone(e.target.value)}
                      className="trial-input"
                    />
                    <button
                      type="button"
                      className="trial-btn"
                      onClick={() => setTradieTrialSent(true)}
                    >
                      Send SMS Invite &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Tradie Footer */}
          <footer className="cs-tradie-footer">
            <div className="cs-tradie-foot-wrap">
              <div>
                <strong>FieldFlow &amp; TradieTrack Pro Pty Ltd</strong> &middot; ABN 94 620 481 992 &middot; Sydney &amp; Melbourne
              </div>
              <div>
                Support: 1300 872 343 &middot; <a href="mailto:support@fieldflowtradie.com.au">support@fieldflowtradie.com.au</a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
