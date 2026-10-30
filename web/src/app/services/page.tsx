"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesList } from "@/data/servicesData";
import { realWorldCaseStudies } from "@/data/caseStudiesData";

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? servicesList
      : servicesList.filter((s) => s.id === activeFilter);

  return (
    <>
      {/* Top Navbar */}
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

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div className="top-nav-links">
              <Link href="/services" className="top-nav-link" style={{ color: "var(--b1, #059669)", fontWeight: 600 }}>
                Services
              </Link>
              <Link href="/case-studies" className="top-nav-link">
                Case Studies
              </Link>
              <Link href="/#work" className="top-nav-link">
                Recent Work
              </Link>
              <Link href="/#pricing" className="top-nav-link">
                Pricing
              </Link>
              <Link href="/contact" className="top-nav-link">
                Contact Us
              </Link>
            </div>
            <a className="top-call" href="tel:+61451072412" data-call="services-header">
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
        {/* Services Page Hero */}
        <section className="contact-page-hero">
          <div className="contact-hero-ambient" />
          <div className="wrap">
            <div className="contact-hero-pill-badge">
              <span className="services-badge-dot" />
              Enterprise-Grade Engineering · Australian Craftsmanship
            </div>

            <h1>
              Specialized Engineering Services. <em>Engineered for Revenue.</em>
            </h1>

            <p className="lead">
              We replace sluggish templates with hand-crafted Next.js platforms, cross-platform mobile apps,
              and 24/7 autonomous AI voice agents. Each discipline engineered with Devsinc-caliber technical rigor
              to directly accelerate your sales pipeline.
            </p>

            {/* Quick Metrics Bar */}
            <div className="services-metrics-strip">
              <div className="services-metric-box">
                <span className="metric-num">0.28s</span>
                <span className="metric-label">Avg Edge Page Load</span>
              </div>
              <div className="services-metric-box">
                <span className="metric-num">+340%</span>
                <span className="metric-label">Max Client Quote Uplift</span>
              </div>
              <div className="services-metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-label">24/7 AI Call Capture Rate</span>
              </div>
              <div className="services-metric-box">
                <span className="metric-num">$0</span>
                <span className="metric-label">Upfront Deposit Standard</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="wrap" style={{ marginTop: 40, marginBottom: 30 }}>
          <div className="category-filter-bar">
            <button
              type="button"
              className={`cat-filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Services ({servicesList.length})
            </button>
            {servicesList.map((svc) => (
              <button
                key={svc.id}
                type="button"
                className={`cat-filter-btn ${activeFilter === svc.id ? "active" : ""}`}
                onClick={() => setActiveFilter(svc.id)}
              >
                <span>{svc.icon}</span> {svc.shortTitle}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="wrap">
          <div className="services-detailed-grid">
            {filteredServices.map((service) => {
              const matchedCaseStudy = realWorldCaseStudies.find(
                (c) => c.id === service.caseStudyId
              );

              return (
                <article key={service.id} className="service-detail-card">
                  <div className="service-card-top-row">
                    <span className="service-detail-icon">{service.icon}</span>
                    <span className="service-detail-badge">{service.badge}</span>
                  </div>

                  <h2 className="service-detail-title">
                    <Link href={`/services/${service.slug}`} className="hover-underline">
                      {service.title}
                    </Link>
                  </h2>

                  <p className="service-detail-desc">{service.overview}</p>

                  {/* Impact Metric Banner */}
                  <div className="service-detail-metric-banner">
                    <div className="metric-stat-pair">
                      <span className="metric-bold-tag">{service.metricBold}</span>
                      <span className="metric-explainer">{service.metricDescription}</span>
                    </div>
                  </div>

                  {/* Real World Case Study Proof Box */}
                  {matchedCaseStudy && (
                    <div className="service-case-study-teaser">
                      <div className="case-study-teaser-head">
                        <span className="proof-indicator">★ Real-World Sales Proof</span>
                        <span className="client-badge">{matchedCaseStudy.clientName}</span>
                      </div>
                      <div className="proof-hero-row">
                        <span className="proof-stat">{matchedCaseStudy.heroMetric}</span>
                        <span className="proof-label">{matchedCaseStudy.salesGrowthHighlight}</span>
                      </div>
                      <Link
                        href={`/case-studies#${matchedCaseStudy.id}`}
                        className="case-study-teaser-link"
                      >
                        Read full case study &rarr;
                      </Link>
                    </div>
                  )}

                  {/* Key Capabilities */}
                  <div className="service-capabilities-list">
                    <h4>Core Technical Deliverables:</h4>
                    <ul>
                      {service.capabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx}>
                          <span>{cap.icon}</span>
                          <div>
                            <strong>{cap.title}:</strong> {cap.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="service-tech-tags">
                    {service.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="service-detail-footer">
                    <div className="service-pricing-info">
                      <span className="turnaround-pill">⏱ {service.turnaroundTime}</span>
                      <span className="price-tag">From {service.pricingStarting}</span>
                    </div>
                    <div className="service-action-buttons">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn btn-ghost"
                        style={{ minHeight: 44, padding: "10px 18px", fontSize: 14 }}
                      >
                        Explore Service Details &rarr;
                      </Link>
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="btn btn-grad"
                        style={{ minHeight: 44, padding: "10px 18px", fontSize: 14 }}
                      >
                        Request Free Prototype
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Real-World Guarantee Section */}
        <section className="wrap" style={{ marginTop: 80 }}>
          <div className="services-guarantee-box">
            <div className="guarantee-icon-box">🛡️</div>
            <div className="guarantee-text">
              <h3>The FernStack $0 Upfront Guarantee</h3>
              <p>
                We do not ask for 50% deposits or billable hours up front. For websites and applications,
                we build your live, interactive draft first. You test it on your smartphone and computer,
                and only pay when you are 100% delighted with the craftsmanship.
              </p>
            </div>
            <Link href="/contact" className="btn btn-grad" style={{ whiteSpace: "nowrap" }}>
              Start with $0 Deposit
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
          <span>
            &copy; 2026 FernStack · Ste 3/110 Hutt St, Adelaide SA 5000 · info@fernstack.com.au ·{" "}
            <a href="tel:+61451072412" data-call="footer">
              0451 072 412
            </a>
          </span>
          <nav aria-label="Legal" style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "var(--b1, #059669)", fontWeight: 600 }}>
              Home
            </Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/#work">Recent Work</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
