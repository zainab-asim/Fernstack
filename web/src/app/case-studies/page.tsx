"use client";

import React, { useState } from "react";
import Link from "next/link";
import { realWorldCaseStudies, CaseStudy } from "@/data/caseStudiesData";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [expandedStudyId, setExpandedStudyId] = useState<string | null>(null);

  const industries = [
    { id: "all", label: "All Case Studies" },
    { id: "web-dev", label: "Web Engineering" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "ai-receptionist", label: "AI Voice Agents" },
    { id: "app-dev", label: "Mobile Apps" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "ai-augmentation", label: "AI Automation" },
  ];

  const filteredStudies =
    selectedIndustry === "all"
      ? realWorldCaseStudies
      : realWorldCaseStudies.filter((c) => c.serviceId === selectedIndustry);

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
              <Link href="/services" className="top-nav-link">
                Services
              </Link>
              <Link
                href="/case-studies"
                className="top-nav-link"
                style={{ color: "var(--b1, #059669)", fontWeight: 600 }}
              >
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
            <a className="top-call" href="tel:+61451072412" data-call="case-studies-header">
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
        {/* Case Studies Hero */}
        <section className="contact-page-hero">
          <div className="contact-hero-ambient" />
          <div className="wrap">
            <div className="contact-hero-pill-badge">
              <span className="services-badge-dot" />
              Quantifiable Sales Growth · Real-World ROI Proof
            </div>

            <h1>
              Proven Commercial Impact. <em>How We Enhanced Sales.</em>
            </h1>

            <p className="lead">
              Real Australian businesses don&apos;t need vanity metrics. They need more inbound phone calls,
              higher checkout values, and zero missed leads. Explore how our custom engineering directly multiplied
              client revenue and accelerated sales pipelines.
            </p>

            {/* Aggregate Revenue Proof Banner */}
            <div className="case-studies-stats-strip">
              <div className="aggregate-stat-card">
                <span className="agg-number">+$12.4M</span>
                <span className="agg-label">Client Revenue &amp; Pipeline Added</span>
              </div>
              <div className="aggregate-stat-card">
                <span className="agg-number">+340%</span>
                <span className="agg-label">Peak Inbound Quote Uplift</span>
              </div>
              <div className="aggregate-stat-card">
                <span className="agg-number">100%</span>
                <span className="agg-label">After-Hours Call Capture with AI</span>
              </div>
              <div className="aggregate-stat-card">
                <span className="agg-number">68%</span>
                <span className="agg-label">Faster Invoice &amp; Payment Velocity</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="wrap" style={{ marginTop: 40, marginBottom: 30 }}>
          <div className="category-filter-bar">
            {industries.map((ind) => (
              <button
                key={ind.id}
                type="button"
                className={`cat-filter-btn ${selectedIndustry === ind.id ? "active" : ""}`}
                onClick={() => setSelectedIndustry(ind.id)}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </section>

        {/* Case Studies Cards List */}
        <section className="wrap">
          <div className="case-studies-full-list">
            {filteredStudies.map((study) => {
              const isExpanded = expandedStudyId === study.id;

              return (
                <article
                  key={study.id}
                  id={study.id}
                  className={`case-study-hero-card ${isExpanded ? "expanded" : ""}`}
                >
                  <div className="case-card-header">
                    <div className="case-client-meta">
                      <span className="case-industry-tag">{study.industry}</span>
                      <span className="case-location-tag">📍 {study.location}</span>
                    </div>
                    <div className="case-sales-badge">
                      <span>Verified Sales Impact</span>
                      <strong>{study.heroMetric}</strong>
                    </div>
                  </div>

                  <div className="case-headline-row">
                    <h2>{study.clientName}</h2>
                    <p className="case-sales-callout">{study.salesGrowthHighlight}</p>
                  </div>

                  <p className="case-tagline-text">{study.tagline}</p>

                  {/* Challenge & Solution Grid */}
                  <div className="case-story-grid">
                    <div className="case-story-box challenge">
                      <div className="story-box-badge">The Revenue Bottleneck</div>
                      <h3>The Challenge</h3>
                      <p>{study.challenge}</p>
                    </div>

                    <div className="case-story-box solution">
                      <div className="story-box-badge">Bespoke Engineering</div>
                      <h3>The Solution</h3>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  {/* Before vs After Metric Proof Table */}
                  <div className="case-metrics-section">
                    <div className="metrics-table-header">
                      <h4>Quantifiable Sales &amp; Performance Metrics</h4>
                      <span className="audit-note">Verified Client Operational Data</span>
                    </div>

                    <div className="metrics-table-container">
                      <table className="case-proof-table">
                        <thead>
                          <tr>
                            <th>Key Performance Metric</th>
                            <th>Before FernStack</th>
                            <th>After Rollout</th>
                            <th>Revenue &amp; Sales Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {study.beforeMetrics.map((before, idx) => {
                            const after = study.afterMetrics[idx];
                            return (
                              <tr key={idx}>
                                <td>
                                  <strong>{before.label}</strong>
                                </td>
                                <td className="before-val">{before.value}</td>
                                <td className="after-val">{after?.value}</td>
                                <td className="impact-proof-tag">
                                  <span>🚀 Enhanced</span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Client Testimonial Box */}
                  <div className="case-quote-container">
                    <div className="quote-star-row">★★★★★ Verified Google Review</div>
                    <blockquote>&ldquo;{study.quote.text}&rdquo;</blockquote>
                    <div className="quote-author-info">
                      <strong>{study.quote.author}</strong>
                      <span>{study.quote.title}</span>
                    </div>
                  </div>

                  {/* Tech Stack & Deliverables */}
                  <div className="case-footer-details">
                    <div className="tech-stack-group">
                      <span className="group-label">Architecture Stack:</span>
                      <div className="tech-chip-row">
                        {study.techStack.map((tech, i) => (
                          <span key={i} className="tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="case-cta-group">
                      <Link
                        href={`/contact?case=${study.id}&service=${study.serviceId}`}
                        className="btn btn-grad"
                        style={{ minHeight: 46, padding: "11px 22px", fontSize: 14.5 }}
                      >
                        Get Similar Results for Your Business
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="wrap" style={{ marginTop: 80 }}>
          <div className="case-study-cta-banner">
            <h2>Ready to Multiply Your Inbound Sales?</h2>
            <p>
              We craft your initial live working prototype with <strong>$0 upfront deposit</strong>.
              Pay strictly when you are 100% happy with the design and performance.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
              <Link href="/contact" className="btn btn-grad">
                Request Your Free Prototype
              </Link>
              <a href="tel:+61451072412" className="btn btn-ghost">
                Speak with Senior Engineer
              </a>
            </div>
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
