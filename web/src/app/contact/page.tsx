"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

interface ContactFormData {
  serviceId: "web" | "app" | "ai-receptionist" | "ai-augmentation" | "ecommerce" | "rebrand";
  tier: "one-page-449" | "multi-page-949" | "eight-pages-1549" | "custom";
  timeline: "express" | "standard" | "flexible";
  name: string;
  phone: string;
  email: string;
  business: string;
  currentWebsite: string;
  goals: string[];
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    serviceId: "web",
    tier: "multi-page-949",
    timeline: "standard",
    name: "",
    phone: "",
    email: "",
    business: "",
    currentWebsite: "",
    goals: ["More Phone Calls", "24/7 AI Voice Answering"],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);
  const [adelaideTime, setAdelaideTime] = useState<string>("");

  useEffect(() => {
    // Format live Adelaide ACST time
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-AU", {
          timeZone: "Australia/Adelaide",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setAdelaideTime(formatted);
      } catch {
        setAdelaideTime("Open 7am to 8pm");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Client-safe URL search params pre-fill (e.g. from service slug or pricing click)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      const tierParam = params.get("tier");
      const validServices: ContactFormData["serviceId"][] = [
        "web",
        "app",
        "ai-receptionist",
        "ai-augmentation",
        "ecommerce",
        "rebrand",
      ];
      const validTiers: ContactFormData["tier"][] = [
        "one-page-449",
        "multi-page-949",
        "eight-pages-1549",
        "custom",
      ];
      if (serviceParam && validServices.includes(serviceParam as any)) {
        setFormData((prev) => ({ ...prev, serviceId: serviceParam as any }));
      }
      if (tierParam && validTiers.includes(tierParam as any)) {
        setFormData((prev) => ({ ...prev, tier: tierParam as any }));
      }
    }
  }, []);

  const handleCopy = (text: string, type: "phone" | "email") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 700);
  };

  const serviceOptions = [
    {
      id: "web" as const,
      icon: "🌐",
      title: "Web Engineering",
      sub: "Next.js 15, SEO & speed",
    },
    {
      id: "app" as const,
      icon: "📱",
      title: "Mobile App",
      sub: "iOS & Android native apps",
    },
    {
      id: "ai-receptionist" as const,
      icon: "🤖",
      title: "AI Receptionist",
      sub: "24/7 voice call answering",
    },
    {
      id: "ai-augmentation" as const,
      icon: "⚡",
      title: "AI Augmentation",
      sub: "LLM, RAG & workflow bots",
    },
    {
      id: "ecommerce" as const,
      icon: "🛍️",
      title: "E-Commerce",
      sub: "High-converting 1-click pay",
    },
    {
      id: "rebrand" as const,
      icon: "🎨",
      title: "Site Modernization",
      sub: "Complete redesign & speed",
    },
  ];

  const getEstimatedTurnaround = () => {
    if (formData.timeline === "express") return "5 to 7 Business Days (Express)";
    if (formData.timeline === "flexible") return "Flexible / Staged Rollout";
    if (formData.tier === "one-page-449") return "5 to 7 Business Days";
    if (formData.tier === "multi-page-949") return "7 to 10 Business Days";
    if (formData.tier === "eight-pages-1549") return "10 to 14 Business Days";
    return "Tailored Timeline (7 to 14 Days)";
  };

  return (
    <>
      {/* Header */}
      <header className="top">
        <div className="wrap">
          <Link href="/" className="brand-logo" aria-label="FernStack home">
            <span className="brand-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">FernStack</span>
              <span className="brand-sub">Web &amp; AI Studio</span>
            </span>
          </Link>

          <div className="top-nav-links">
            <Link href="/services" className="top-nav-link">Services</Link>
            <Link href="/case-studies" className="top-nav-link">Case Studies</Link>
            <Link href="/#work" className="top-nav-link">Recent Work</Link>
            <Link href="/#pricing" className="top-nav-link">Pricing</Link>
            <Link href="/contact" className="top-nav-link active" style={{ color: "var(--acc)", fontWeight: 600 }}>
              Contact Us
            </Link>
          </div>

          <div className="top-nav-actions">
            <ThemeToggle variant="nav" />
            <a className="top-call" href="tel:+61451072412" data-call="contact-header">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
              0451 072 412
            </a>
          </div>
        </div>
      </header>

      <main style={{ paddingBottom: 100 }}>
        {/* Contact Page Hero */}
        <section className="contact-page-hero">
          <div className="contact-hero-ambient" />
          <div className="wrap">
            <div className="contact-hero-pill-badge">
              <span className="services-badge-dot" />
              Live Studio Active · Booking Q4/2026 Launches
            </div>

            <h1>
              Start Your Project. <em>Pay When You Love It.</em>
            </h1>

            <p className="lead">
              Bespoke Next.js web applications, mobile apps, and autonomous 24/7 AI voice receptionists.
              Tell us your vision, and we&apos;ll engineer a live working prototype in 5 to 10 days with $0 upfront deposit.
            </p>

            <div className="contact-quick-stats-row">
              <div className="contact-stat-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span><strong>&lt; 45m</strong> Avg Response Time</span>
              </div>
              <div className="contact-stat-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span><strong>$0 Upfront</strong> Deposit Standard</span>
              </div>
              <div className="contact-stat-chip">
                <span style={{ color: "var(--star)" }}>★★★★★</span>
                <span><strong>5.0 Google Rating</strong> (33 Reviews)</span>
              </div>
              <div className="contact-stat-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span><strong>100% Handcrafted</strong> in Australia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Split Grid */}
        <div className="contact-wrap">
          <div className="contact-split-grid">
            {/* Left Column: Direct Studio Hub & Channels */}
            <div className="contact-hub-sidebar-wrap">
              {/* Studio Radar Box */}
              <div className="studio-presence-card">
                <div className="studio-presence-header">
                  <span className="contact-live-status" style={{ margin: 0 }}>
                    <span className="services-badge-dot" />
                    Adelaide Head Studio
                  </span>
                  {adelaideTime && (
                    <span className="studio-clock-chip">
                      🕒 {adelaideTime} ACST
                    </span>
                  )}
                </div>
                <p>
                  Our senior engineering and architecture team is active. Direct phone and email lines are monitored 7 days a week from 7am to 8pm ACST.
                </p>
              </div>

              {/* Direct Communication Channels with 1-Click Copy */}
              <div className="contact-channels-list">
                <div className="contact-channel-item">
                  <a
                    href="tel:+61451072412"
                    style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: "inherit", flexGrow: 1 }}
                  >
                    <div className="contact-channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                      </svg>
                    </div>
                    <div className="contact-channel-meta">
                      <b>0451 072 412</b>
                      <span>Direct hotline · One-tap call</span>
                    </div>
                  </a>
                  <button
                    type="button"
                    className={`studio-channel-copy-btn ${copiedType === "phone" ? "copied" : ""}`}
                    onClick={() => handleCopy("0451072412", "phone")}
                  >
                    {copiedType === "phone" ? "✓ Copied" : "Copy"}
                  </button>
                </div>

                <div className="contact-channel-item">
                  <a
                    href="mailto:info@fernstack.com.au"
                    style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: "inherit", flexGrow: 1 }}
                  >
                    <div className="contact-channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className="contact-channel-meta">
                      <b>info@fernstack.com.au</b>
                      <span>Direct senior engineering inbox</span>
                    </div>
                  </a>
                  <button
                    type="button"
                    className={`studio-channel-copy-btn ${copiedType === "email" ? "copied" : ""}`}
                    onClick={() => handleCopy("info@fernstack.com.au", "email")}
                  >
                    {copiedType === "email" ? "✓ Copied" : "Copy"}
                  </button>
                </div>

                <div className="contact-channel-item" style={{ cursor: "default" }}>
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <div className="contact-channel-meta">
                    <b>Ste 3/110 Hutt St, Adelaide SA 5000</b>
                    <span>Serving Australia-wide (SA, NSW, VIC, QLD, WA)</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="contact-trust-card">
                <h4>The FernStack Confidence Standard</h4>
                <ul className="contact-trust-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>$0 Upfront Deposit:</strong> We build your full live draft first. Pay strictly when you are 100% happy.
                    </span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>5 to 10 Day Delivery:</strong> Most websites launch in 5 to 10 days once we have your content.
                    </span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Fixed-Price Guarantee:</strong> No unexpected hourly rates or hidden invoice extras. Ever.
                    </span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>100% Client Ownership:</strong> Full code, domain, and asset ownership handed over upon launch.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Verified Review Quote */}
              <div className="contact-sidebar-review-card">
                <div style={{ color: "var(--star)", fontSize: 14, marginBottom: 6 }}>★★★★★</div>
                <p>
                  &ldquo;FernStack was fantastic to work with. They delivered a fully working draft before asking for a cent, and our client conversion rate tripled within two weeks.&rdquo;
                </p>
                <div className="review-author">
                  Lucas Gutterres, Verified Google Review
                </div>
              </div>
            </div>

            {/* Right Column: Elevated Glass Form */}
            <div className="contact-glass-form">
              <div className="contact-form-glow" />

              {submitted ? (
                <div className="contact-celebration-card">
                  <div className="celebration-icon">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Enquiry Confirmed, {formData.name || "friend"}!</h3>
                  <p>
                    We received your project enquiry for &ldquo;{formData.business || "your business"}&rdquo;.
                    A senior solutions engineer from FernStack is already reviewing your details.
                  </p>

                  <div className="celebration-timeline-box">
                    <b>What Happens Next:</b>
                    <span>
                      1. We inspect your business &amp; competitor landscape within 24 hours.
                      <br />
                      2. You receive a fixed-price written quote &amp; project plan.
                      <br />
                      3. We build your initial live working draft free of charge.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-header">
                    <h3>Interactive Project Builder</h3>
                    <p>Select your scope · Receive your free draft &amp; fixed quote within 24 hours</p>
                  </div>

                  {/* 1. Service Capability Grid (6 Options) */}
                  <div style={{ marginBottom: 18 }}>
                    <label className="form-step-section-label">
                      1. What capability are you looking to build?
                    </label>
                    <div className="contact-services-selector-grid">
                      {serviceOptions.map((opt) => (
                        <div
                          key={opt.id}
                          className={`contact-service-choice-card ${formData.serviceId === opt.id ? "active" : ""}`}
                          onClick={() => setFormData((p) => ({ ...p, serviceId: opt.id }))}
                        >
                          <span className="contact-service-choice-icon">{opt.icon}</span>
                          <span className="contact-service-choice-title">{opt.title}</span>
                          <span className="contact-service-choice-sub">{opt.sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Scope & Tier Cards */}
                  <div style={{ marginBottom: 18 }}>
                    <label className="form-step-section-label">
                      2. Select project scope &amp; investment tier:
                    </label>
                    <div className="form-scope-grid">
                      <label
                        className={`form-scope-card ${
                          formData.tier === "one-page-449" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tier"
                          value="one-page-449"
                          checked={formData.tier === "one-page-449"}
                          onChange={() =>
                            setFormData((p) => ({ ...p, tier: "one-page-449" }))
                          }
                        />
                        <b>One page</b>
                        <small>$449</small>
                      </label>

                      <label
                        className={`form-scope-card ${
                          formData.tier === "multi-page-949" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tier"
                          value="multi-page-949"
                          checked={formData.tier === "multi-page-949"}
                          onChange={() =>
                            setFormData((p) => ({ ...p, tier: "multi-page-949" }))
                          }
                        />
                        <b>Multi-page</b>
                        <small>$949 ★</small>
                      </label>

                      <label
                        className={`form-scope-card ${
                          formData.tier === "eight-pages-1549" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tier"
                          value="eight-pages-1549"
                          checked={formData.tier === "eight-pages-1549"}
                          onChange={() =>
                            setFormData((p) => ({
                              ...p,
                              tier: "eight-pages-1549",
                            }))
                          }
                        />
                        <b>Up to 8 pgs</b>
                        <small>$1,549</small>
                      </label>

                      <label
                        className={`form-scope-card ${
                          formData.tier === "custom" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tier"
                          value="custom"
                          checked={formData.tier === "custom"}
                          onChange={() =>
                            setFormData((p) => ({ ...p, tier: "custom" }))
                          }
                        />
                        <b>Custom / AI</b>
                        <small>Bespoke</small>
                      </label>
                    </div>
                  </div>

                  {/* 3. Goals & Capabilities Multi-Pills */}
                  <div className="form-goals-wrap">
                    <label className="form-step-section-label">3. What are your core goals?</label>
                    <div className="form-goals-pills">
                      {[
                        "More Phone Calls",
                        "24/7 AI Voice Answering",
                        "Automate Back-Office Tasks",
                        "Mobile App Launch",
                        "Google SEO Ranking",
                        "Online Bookings & Checkout",
                      ].map((goal) => (
                        <span
                          key={goal}
                          className={`form-goal-pill ${
                            formData.goals.includes(goal) ? "active" : ""
                          }`}
                          onClick={() => toggleGoal(goal)}
                        >
                          {formData.goals.includes(goal) ? "✓ " : "+ "}
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4. Target Timeline Selector */}
                  <div style={{ marginBottom: 20 }}>
                    <label className="form-step-section-label">
                      4. When do you need this live?
                    </label>
                    <div className="timeline-toggle-tabs">
                      <button
                        type="button"
                        className={`timeline-tab-btn ${formData.timeline === "express" ? "active" : ""}`}
                        onClick={() => setFormData((p) => ({ ...p, timeline: "express" }))}
                      >
                        ⚡ Express (&lt; 7 Days)
                      </button>
                      <button
                        type="button"
                        className={`timeline-tab-btn ${formData.timeline === "standard" ? "active" : ""}`}
                        onClick={() => setFormData((p) => ({ ...p, timeline: "standard" }))}
                      >
                        📅 Standard (7 to 10 Days)
                      </button>
                      <button
                        type="button"
                        className={`timeline-tab-btn ${formData.timeline === "flexible" ? "active" : ""}`}
                        onClick={() => setFormData((p) => ({ ...p, timeline: "flexible" }))}
                      >
                        🌿 Flexible
                      </button>
                    </div>
                  </div>

                  {/* 5. Contact Inputs */}
                  <div className="form-input-grid">
                    <div className="form-field-group">
                      <label htmlFor="c-name">Your Full Name</label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Connor"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="c-phone">Mobile Phone</label>
                      <input
                        id="c-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="c-email">Work Email</label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        placeholder="sarah@yourbusiness.com.au"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="c-business">Business Name</label>
                      <input
                        id="c-business"
                        name="business"
                        type="text"
                        required
                        placeholder="e.g. Apex Electrical &amp; Solar"
                        value={formData.business}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-field-group" style={{ marginBottom: 14 }}>
                    <label htmlFor="c-site">
                      Current Website or Social Page{" "}
                      <span className="opt">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="c-site"
                      name="currentWebsite"
                      type="text"
                      placeholder="e.g. www.apexbuild.com.au"
                      value={formData.currentWebsite}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field-group" style={{ marginBottom: 16 }}>
                    <label htmlFor="c-msg">
                      Project Vision &amp; Notes{" "}
                      <span className="opt">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="c-msg"
                      name="message"
                      rows={3}
                      placeholder="Tell us what capabilities, pages, or AI automation you'd like to include..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* 6. Live Dynamic Estimate Breakdown */}
                  <div className="contact-estimate-summary-box">
                    <div className="contact-estimate-row">
                      <span>Selected Capability:</span>
                      <strong>
                        {serviceOptions.find((s) => s.id === formData.serviceId)?.title}
                      </strong>
                    </div>
                    <div className="contact-estimate-row">
                      <span>Estimated Live Turnaround:</span>
                      <strong>{getEstimatedTurnaround()}</strong>
                    </div>
                    <div className="contact-estimate-row">
                      <span>Upfront Deposit Due Today:</span>
                      <strong className="green">$0.00 (Pay Strictly When Happy)</strong>
                    </div>
                  </div>

                  {/* 7. Submit Button */}
                  <button
                    type="submit"
                    className="btn-elevated-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Generating Your Project Proposal..."
                    ) : (
                      <>
                        <span>Claim Free Project Draft &amp; Written Quote</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: 12.5,
                      color: "var(--dim)",
                      textAlign: "center",
                      marginTop: 12,
                    }}
                  >
                    🔒 <strong>Zero upfront deposit.</strong> 100% money-back satisfaction guarantee. Your private details are never shared or sold.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Contact FAQ Section */}
          <section className="contact-faq-wrap">
            <h3 className="contact-faq-title">Frequently Asked Questions</h3>
            <div className="contact-faq-grid">
              <details className="contact-faq-item">
                <summary>How does the $0 deposit draft work?</summary>
                <p>
                  We start by having a 15-minute scoping chat with you. Once we have your vision, our engineers hand-code your live draft website. You get a private staging link to review it, request unlimited revisions, and test it on mobile. You pay only once you are 100% satisfied. If you decide not to proceed, you owe $0.
                </p>
              </details>

              <details className="contact-faq-item">
                <summary>How does the 24/7 AI Voice Receptionist work?</summary>
                <p>
                  Our AI Voice Agent connects directly to your Australian phone number via Twilio Voice. When a customer calls, it answers within 2 rings with natural Australian conversational speech, answers customer questions from your company knowledge base, checks calendar openings, and books appointments directly into your calendar.
                </p>
              </details>

              <details className="contact-faq-item">
                <summary>Can you build a mobile app and website together?</summary>
                <p>
                  Yes! We build cross-platform mobile apps using React Native and Expo alongside Next.js web applications. They share the same backend, database, and authentication, saving up to 50% in development time and maintenance cost.
                </p>
              </details>

              <details className="contact-faq-item">
                <summary>Do I own my code, website and domain?</summary>
                <p>
                  100% yes. You hold full ownership of your domain name, code repository, and design assets. If you ever decide to self-host or migrate, we provide full access and assist with the transition.
                </p>
              </details>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
          <span>
            &copy; 2026 FernStack · Ste 3/110 Hutt St, Adelaide SA 5000 ·
            info@fernstack.com.au ·{" "}
            <a href="tel:+61451072412" data-call="footer">
              0451 072 412
            </a>
          </span>
          <nav aria-label="Legal" style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "var(--b1, #059669)", fontWeight: 600 }}>Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/#work">Recent Work</Link>
            <Link href="/#pricing">Pricing</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

