import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FernFooter from "@/app/components/FernFooter";
import ThemeToggle from "@/app/components/ThemeToggle";
import { servicesList } from "@/data/servicesData";
import { realWorldCaseStudies } from "@/data/caseStudiesData";
import type { Metadata } from "next";

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | FernStack" };

  return {
    title: `${service.title} | FernStack Engineering`,
    description: `${service.overview.slice(0, 155)}... Starting from ${service.pricingStarting}. $0 upfront deposit.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const caseStudy = realWorldCaseStudies.find((c) => c.id === service.caseStudyId);
  const otherServices = servicesList.filter((s) => s.id !== service.id);

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
            <ThemeToggle />
            <a className="top-call" href="tel:+61451072412" data-call="service-slug-header">
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
        {/* Service Hero */}
        <section className="service-artistic-hero">
          <div className="contact-hero-ambient" />
          <div className="wrap">
            {/* Breadcrumb */}
            <div className="service-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span className="current">{service.shortTitle}</span>
            </div>

            <div className="contact-hero-pill-badge">
              <span className="services-badge-dot" />
              {service.badge} · {service.turnaroundTime} Turnaround
            </div>

            <h1>
              {service.heroHeadline} <em>{service.heroHighlight}</em>
            </h1>

            <p className="lead">{service.heroSubheadline}</p>

            {/* Impact Metric Strip */}
            <div className="service-key-impact-bar">
              <div className="impact-item">
                <span className="impact-tag">{service.metric}</span>
                <span className="impact-val">{service.metricBold}</span>
                <span className="impact-sub">{service.metricDescription}</span>
              </div>
              <div className="impact-item">
                <span className="impact-tag">Verified Sales Uplift</span>
                <span className="impact-val">{service.caseStudyMetric}</span>
                <span className="impact-sub">{service.salesImpactQuote}</span>
              </div>
              <div className="impact-item">
                <span className="impact-tag">Pricing Starting</span>
                <span className="impact-val">{service.pricingStarting}</span>
                <span className="impact-sub">Zero deposit upfront · Pay when happy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture & Engineering Philosophy */}
        <section className="wrap" style={{ marginTop: 40 }}>
          <div className="service-content-grid">
            <div className="service-main-content">
              <div className="content-panel">
                <div className="panel-badge">Engineering Deep Dive</div>
                <h2>Overview &amp; Architecture</h2>
                <p className="body-copy">{service.overview}</p>
                <div className="callout-box">
                  <strong>Engineering Philosophy:</strong> {service.engineeringPhilosophy}
                </div>
              </div>

              {/* Core Capabilities */}
              <div className="content-panel" style={{ marginTop: 32 }}>
                <div className="panel-badge">Technical Capabilities</div>
                <h2>What Sets This Architecture Apart</h2>
                <div className="capabilities-detailed-grid">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="capability-card">
                      <div className="cap-icon-bubble">{cap.icon}</div>
                      <h3>{cap.title}</h3>
                      <p>{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Case Study Proving Sales Enhancement */}
              {caseStudy && (
                <div className="content-panel case-study-highlight-panel" style={{ marginTop: 32 }}>
                  <div className="panel-badge highlight">★ Real-World Sales Proof</div>
                  <h2>
                    Case Study: <em>{caseStudy.clientName}</em>
                  </h2>
                  <p className="case-tagline">{caseStudy.tagline}</p>

                  <div className="case-study-hero-stat-grid">
                    <div className="stat-card">
                      <span className="stat-giant">{caseStudy.heroMetric}</span>
                      <span className="stat-lbl">{caseStudy.heroMetricLabel}</span>
                    </div>
                    <div className="stat-card highlight">
                      <span className="stat-giant">3.2x</span>
                      <span className="stat-lbl">Qualified Pipeline Surge</span>
                    </div>
                  </div>

                  <div className="case-study-story-row">
                    <div className="story-col">
                      <h4>The Bottleneck Before</h4>
                      <p>{caseStudy.challenge}</p>
                    </div>
                    <div className="story-col">
                      <h4>The FernStack Solution</h4>
                      <p>{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Before vs After Metric Comparison */}
                  <div className="metrics-comparison-table-wrap">
                    <table className="metrics-comparison-table">
                      <thead>
                        <tr>
                          <th>Performance Metric</th>
                          <th>Before FernStack</th>
                          <th>After Engineering</th>
                          <th>Sales Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {caseStudy.beforeMetrics.map((bm, idx) => {
                          const am = caseStudy.afterMetrics[idx];
                          return (
                            <tr key={idx}>
                              <td><strong>{bm.label}</strong></td>
                              <td className="metric-prev">{bm.value}</td>
                              <td className="metric-new">{am?.value}</td>
                              <td className="metric-growth">✔ Enhanced</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Client Quote */}
                  <blockquote className="case-quote-box">
                    <p>&ldquo;{caseStudy.quote.text}&rdquo;</p>
                    <footer>
                      <strong>{caseStudy.quote.author}</strong>, {caseStudy.quote.title}
                    </footer>
                  </blockquote>

                  <div style={{ marginTop: 20 }}>
                    <Link href={`/case-studies#${caseStudy.id}`} className="case-study-deep-link">
                      View full technical case study breakdown &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* Deliverables Checklist */}
              <div className="content-panel" style={{ marginTop: 32 }}>
                <div className="panel-badge">Scope &amp; Deliverables</div>
                <h2>What&apos;s Included in Every Project</h2>
                <ul className="deliverables-checklist">
                  {service.deliverables.map((d, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div className="content-panel" style={{ marginTop: 32 }}>
                <div className="panel-badge">Frequently Asked Questions</div>
                <h2>Service FAQs</h2>
                <div className="service-faq-accordion">
                  {service.faqs.map((faq, i) => (
                    <details key={i} className="service-faq-item" open={i === 0}>
                      <summary>{faq.q}</summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Sticky CTA Card */}
            <aside className="service-sidebar">
              <div className="sidebar-sticky-box">
                <div className="sidebar-pricing-banner">
                  <span className="sidebar-price-label">Investment Starting At</span>
                  <div className="sidebar-price-figure">
                    <b>{service.pricingStarting}</b>
                    <span>fixed one-off</span>
                  </div>
                  <span className="sidebar-deposit-notice">🔒 $0 Upfront Deposit Standard</span>
                </div>

                <div className="sidebar-spec-list">
                  <div className="spec-row">
                    <span>Turnaround Time:</span>
                    <strong>{service.turnaroundTime}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Payment Model:</span>
                    <strong>Pay When 100% Happy</strong>
                  </div>
                  <div className="spec-row">
                    <span>Code Quality:</span>
                    <strong>Hand-Crafted TypeScript</strong>
                  </div>
                  <div className="spec-row">
                    <span>Core Web Vitals:</span>
                    <strong>100 / 100 Guaranteed</strong>
                  </div>
                </div>

                <div className="sidebar-actions">
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="btn btn-grad"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    Request Free Working Prototype
                  </Link>
                  <a
                    href="tel:+61451072412"
                    className="btn btn-ghost"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    Call Engineer: 0451 072 412
                  </a>
                </div>

                <div className="sidebar-tech-stack-box">
                  <h5>Technologies Utilized</h5>
                  <div className="sidebar-tech-chips">
                    {service.techStack.map((tech, i) => (
                      <span key={i} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* More Services Navigator */}
                <div className="sidebar-other-services">
                  <h5>Other Specialized Services</h5>
                  <ul>
                    {otherServices.map((os) => (
                      <li key={os.id}>
                        <Link href={`/services/${os.slug}`}>
                          <span>{os.icon}</span> {os.shortTitle} &rarr;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* WOW Master Footer */}
      <FernFooter />
    </>
  );
}
