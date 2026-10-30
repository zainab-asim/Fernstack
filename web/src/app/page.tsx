"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { sampleWebsites, type ClientSite } from "@/data/sampleWebsitesData";
import MiniSiteCanvas from "@/app/components/MiniSiteCanvas";
import ClientLandingSiteView from "@/app/components/ClientLandingSiteView";
import ThemeToggle from "@/app/components/ThemeToggle";

interface WOWService {
  id: string;
  title: string;
  badge?: string;
  icon: string;
  metric: string;
  metricBold: string;
  desc: string;
  features: string[];
  techStack: string[];
}

const serviceSlugMap: Record<string, string> = {
  "web-dev": "web-development",
  "app-dev": "mobile-apps",
  "ai-receptionist": "ai-receptionist",
  "ai-augmentation": "ai-automation",
  "ecommerce": "ecommerce",
  "cloud-devops": "cloud-devops",
};

const wowServices: WOWService[] = [
  {
    id: "web-dev",
    title: "Custom Web Engineering & Next.js Platforms",
    badge: "Most Requested",
    icon: "🌐",
    metric: "Load Speed",
    metricBold: "0.28s Avg (100/100 Core Web Vitals)",
    desc: "Bespoke, hand-coded Next.js web applications engineered for aggressive organic SEO ranking, instant page transitions, and unmatched conversion rates.",
    features: [
      "Sub-second First Contentful Paint (FCP) on mobile",
      "Dynamic Next.js 15 App Router & Server Actions",
      "Built-in Google Local Schema & Technical SEO",
      "Zero template bloat, 100% custom bespoke code",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Vercel Edge"],
  },
  {
    id: "app-dev",
    title: "Native & Cross-Platform Mobile Apps",
    badge: "iOS & Android",
    icon: "📱",
    metric: "Performance",
    metricBold: "120 FPS Fluid Native Experience",
    desc: "Production-grade iOS and Android mobile apps crafted with React Native and Expo. Offline-first local storage, push notifications, and frictionless biometric security.",
    features: [
      "Simultaneous iOS & Android native deployment",
      "Offline database sync with local SQLite",
      "Biometric FaceID & Fingerprint authentication",
      "Apple Pay & Google Pay 1-tap checkout",
    ],
    techStack: ["React Native", "Expo", "Swift/Kotlin", "SQLite", "OneSignal"],
  },
  {
    id: "ai-receptionist",
    title: "Autonomous AI Receptionist & Voice Agents",
    badge: "Breakthrough AI",
    icon: "🤖",
    metric: "Call Pickup Rate",
    metricBold: "100% 24/7/365, Zero Missed Leads",
    desc: "24/7 intelligent voice answering agent speaking in natural, conversational Australian cadence. Answers customer questions, handles emergencies, checks calendars, and books leads.",
    features: [
      "Ultra-low latency speech turnaround (< 450ms)",
      "Direct live booking into Cal.com, Calendly & Google",
      "Instant SMS confirmation sent to customer & owner",
      "Live CRM pipeline insertion (HubSpot, Jobber, Zoho)",
    ],
    techStack: ["Whisper AI", "OpenAI Realtime", "Twilio Voice", "Cal.com", "Webhooks"],
  },
  {
    id: "ai-augmentation",
    title: "Enterprise AI Augmentation & Automation",
    badge: "ROI Multiplier",
    icon: "⚡",
    metric: "Operational Savings",
    metricBold: "Up to 80% Time & Labor Saved",
    desc: "Eliminate manual repetitive bottlenecks with bespoke LLM workflows, private company RAG knowledge bases, auto-quoting pipelines, and multi-agent document intelligence.",
    features: [
      "Proprietary company knowledge retrieval (RAG)",
      "Automated PDF invoice & quote extraction",
      "Autonomous email triage and client draft generation",
      "Private bank-grade data security with zero model training",
    ],
    techStack: ["LangChain", "Claude 3.5 & GPT-4o", "Pinecone DB", "n8n", "Python"],
  },
  {
    id: "ecommerce",
    title: "High-Converting E-Commerce Engines",
    badge: "Revenue Growth",
    icon: "🛍️",
    metric: "Conversion Lift",
    metricBold: "+42% Higher Cart Checkout Rate",
    desc: "High-velocity custom online stores engineered for maximum average order value. Instant 1-click accelerated checkout, dynamic AI upselling, and automated inventory sync.",
    features: [
      "Headless Shopify & Stripe Elements architecture",
      "Instant 1-click Apple Pay & Google Pay checkout",
      "Dynamic AI cart upselling & bundle recommendations",
      "Automated multi-warehouse inventory synchronization",
    ],
    techStack: ["Shopify Headless", "Stripe API", "Sanity CMS", "Algolia", "Webhooks"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps Reliability",
    badge: "Enterprise SLA",
    icon: "☁️",
    metric: "Platform Reliability",
    metricBold: "99.99% Uptime Guarantee",
    desc: "High-availability AWS, Cloudflare, and Vercel infrastructure. Zero-downtime automated deployment pipelines, enterprise DDoS defense, automated hourly snapshots, and SOC-2 standard controls.",
    features: [
      "Global edge caching with < 25ms global TTFB",
      "Automated Git-triggered CI/CD test and deploy pipelines",
      "Hourly encrypted database backups & instant failover",
      "Enterprise Cloudflare DDoS mitigation & TLS 1.3",
    ],
    techStack: ["AWS / GCP", "Cloudflare Workers", "Docker", "GitHub Actions", "PostgreSQL"],
  },
];



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

const serviceOptions = [
  {
    id: "web" as const,
    icon: "🌐",
    title: "Web Platform",
    sub: "Bespoke Next.js from $449",
  },
  {
    id: "app" as const,
    icon: "📱",
    title: "Mobile App",
    sub: "React Native iOS & Android",
  },
  {
    id: "ai-receptionist" as const,
    icon: "🤖",
    title: "AI Receptionist",
    sub: "24/7 Voice & Cal.com booking",
  },
  {
    id: "ai-augmentation" as const,
    icon: "⚡",
    title: "Back-Office AI",
    sub: "Auto-quotes, RAG & triage",
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

export default function Home() {
  const [city, setCity] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("multi-page-949");
  const [workViewMode, setWorkViewMode] = useState<"slide" | "grid">("slide");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [previewSite, setPreviewSite] = useState<ClientSite | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [clientActiveTab, setClientActiveTab] = useState<string>("overview");
  const [simBookingSubmitted, setSimBookingSubmitted] = useState<boolean>(false);
  const [simName, setSimName] = useState<string>("");
  const [simPhone, setSimPhone] = useState<string>("");
  const [simService, setSimService] = useState<string>("");

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
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showMbar, setShowMbar] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);
  const [adelaideTime, setAdelaideTime] = useState<string>("");

  const heroCtaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const footRef = useRef<HTMLElement>(null);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : sampleWebsites.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < sampleWebsites.length - 1 ? prev + 1 : 0));
  };

  const handleModalPrevSite = () => {
    if (!previewSite) return;
    const currentIdx = sampleWebsites.findIndex((s) => s.id === previewSite.id);
    const prevIdx = currentIdx > 0 ? currentIdx - 1 : sampleWebsites.length - 1;
    const target = sampleWebsites[prevIdx];
    setPreviewSite(target);
    setSimBookingSubmitted(false);
    setSimName("");
    setSimPhone("");
    setSimService(target.services[0]?.title || "");
  };

  const handleModalNextSite = () => {
    if (!previewSite) return;
    const currentIdx = sampleWebsites.findIndex((s) => s.id === previewSite.id);
    const nextIdx = currentIdx < sampleWebsites.length - 1 ? currentIdx + 1 : 0;
    const target = sampleWebsites[nextIdx];
    setPreviewSite(target);
    setSimBookingSubmitted(false);
    setSimName("");
    setSimPhone("");
    setSimService(target.services[0]?.title || "");
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  useEffect(() => {
    // City ad group query param detection
    if (typeof window !== "undefined") {
      const cityMap: Record<string, string> = {
        adelaide: "Adelaide",
        sydney: "Sydney",
        melbourne: "Melbourne",
        brisbane: "Brisbane",
        perth: "Perth",
        hobart: "Hobart",
        canberra: "Canberra",
        darwin: "Darwin",
        "gold-coast": "Gold Coast",
        "sunshine-coast": "Sunshine Coast",
        newcastle: "Newcastle",
        "central-coast": "Central Coast",
        wollongong: "Wollongong",
        geelong: "Geelong",
        ballarat: "Ballarat",
        bendigo: "Bendigo",
        townsville: "Townsville",
        cairns: "Cairns",
        toowoomba: "Toowoomba",
        mackay: "Mackay",
        launceston: "Launceston",
        mandurah: "Mandurah",
      };
      const params = new URLSearchParams(window.location.search);
      const cityParam = params.get("city")?.toLowerCase();
      if (cityParam && cityMap[cityParam]) {
        setCity(cityMap[cityParam]);
      }
    }
  }, []);

  useEffect(() => {
    // Escape and arrow keys listener for preview modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewSite(null);
      } else if (previewSite && e.key === "ArrowLeft") {
        handleModalPrevSite();
      } else if (previewSite && e.key === "ArrowRight") {
        handleModalNextSite();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewSite]);

  useEffect(() => {
    // Sticky mobile action bar observation
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    let heroGone = false;
    let formSeen = false;
    let footSeen = false;

    const syncBar = () => {
      setShowMbar(heroGone && !formSeen && !footSeen);
    };

    const heroObserver = new IntersectionObserver((entries) => {
      heroGone = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
      syncBar();
    });

    const formObserver = new IntersectionObserver(
      (entries) => {
        formSeen = entries[0].isIntersecting;
        syncBar();
      },
      { rootMargin: "0px 0px -30% 0px" }
    );

    const footObserver = new IntersectionObserver((entries) => {
      footSeen = entries[0].isIntersecting;
      syncBar();
    });

    if (heroCtaRef.current) heroObserver.observe(heroCtaRef.current);
    if (formRef.current) formObserver.observe(formRef.current);
    if (footRef.current) footObserver.observe(footRef.current);

    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
      footObserver.disconnect();
    };
  }, []);

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

  const handleCopy = (text: string, type: "phone" | "email") => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2400);
    } catch {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2400);
    }
  };

  const getEstimatedTurnaround = () => {
    if (formData.timeline === "express") return "5 to 7 Business Days (Express)";
    if (formData.timeline === "flexible") return "Flexible / Staged Rollout";
    if (formData.tier === "one-page-449") return "5 to 7 Business Days";
    if (formData.tier === "multi-page-949") return "7 to 10 Business Days";
    if (formData.tier === "eight-pages-1549") return "10 to 14 Business Days";
    return "Tailored Timeline (7 to 14 Days)";
  };

  const handlePlanSelect = (planVal: string) => {
    const validTier =
      planVal === "one-page-449" || planVal === "eight-pages-1549" || planVal === "custom"
        ? planVal
        : "multi-page-949";
    setSelectedPlan(validTier);
    setFormData((prev) => ({ ...prev, tier: validTier as ContactFormData["tier"] }));
    const formEl = document.getElementById("quote");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
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
    }, 700);
  };

  const openClientPreview = (site: ClientSite) => {
    setPreviewSite(site);
    setClientActiveTab("overview");
    setSimBookingSubmitted(false);
    setSimName("");
    setSimPhone("");
    setSimService(site.services[0]?.title || "");
  };

  return (
    <>
      {/* Header with FernStack branding */}
      <header className="top">
        <div className="wrap">
          <a href="#" className="brand-logo" aria-label="FernStack home">
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
          </a>

          <div className="top-nav-links">
            <Link href="/services" className="top-nav-link">Services</Link>
            <Link href="/case-studies" className="top-nav-link">Case Studies</Link>
            <a href="#work" className="top-nav-link">Recent Work</a>
            <a href="#price-h" className="top-nav-link">Pricing</a>
            <Link href="/contact" className="top-nav-link">Contact Us</Link>
          </div>

          <div className="top-nav-actions">
            <ThemeToggle variant="nav" />
            <a className="top-call" href="tel:+61451072412" data-call="header">
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

      <main>
        {/* 1. Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              {city && (
                <p className="hero-pill">Websites &amp; AI for {city} businesses</p>
              )}
              <h1>
                Your new website, <em>built first.</em>{" "}
                <span className="l2">Pay only when you&apos;re happy.</span>
              </h1>
              <p className="sub">
                Hand-coded small business websites from $449 by{" "}
                <strong>FernStack</strong>.{" "}
                <strong>Most sites live in 5 to 10 days</strong> once we have your words and
                photos. No deposit, no lock-in.
              </p>

              <div className="cta-row" id="hero-cta" ref={heroCtaRef}>
                <a className="btn btn-primary" href="#quote">
                  Get my free quote
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M7 2v10M2.5 7.5 7 12l4.5-4.5" />
                  </svg>
                </a>
                <a
                  className="btn btn-ghost"
                  href="tel:+61451072412"
                  data-call="hero"
                  aria-label="Call now on 0451 072 412"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  Call now
                </a>
              </div>
            </div>

            {/* Hero Visual Mockup: Crisp Live Vector Display */}
            <figure
              className="hv"
              onClick={() =>
                openClientPreview(
                  sampleWebsites.find((s) => s.id === "pioneer-flow-plumbing") ||
                    sampleWebsites[0]
                )
              }
              title="Click to view full landing page preview"
            >
              <div className="hv-browser">
                <div className="hv-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>pioneerflow.com.au</span>
                </div>
                <div className="hv-live-canvas">
                  <div>
                    <div className="hv-live-top-badge">
                      <span className="services-badge-dot" />
                      Master Plumbers SA · 24/7 Rapid Response
                    </div>
                    <div className="hv-live-headline">
                      Adelaide&apos;s <span>Rapid-Response</span> Plumbing &amp; Gas.
                    </div>
                    <p className="hv-live-sub">
                      Licensed Master Plumbers arriving in fully equipped mobile workshops with CCTV drain cameras and upfront fixed quotes.
                    </p>
                    <div className="hv-live-chips">
                      <div className="hv-live-chip"><strong>100%</strong> Guaranteed Arrival</div>
                      <div className="hv-live-chip"><strong>Zero</strong> Callout Fee</div>
                      <div className="hv-live-chip"><strong>5.0★</strong> 180+ Reviews</div>
                    </div>
                  </div>
                  <div className="hv-live-footer">
                    <span style={{ fontSize: 13, color: "var(--b1, #059669)", fontWeight: 700 }}>
                      📞 24/7 Hotline: 08 8345 6789
                    </span>
                    <span style={{ fontSize: 12, color: "var(--dim, #64748b)" }}>
                      Click to interactively preview →
                    </span>
                  </div>
                </div>
              </div>
              <div className="hv-phone">
                <div className="hv-phone-live">
                  <div className="hv-phone-notch" />
                  <div style={{ textAlign: "center", padding: "10px 4px" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "var(--b1, #059669)", marginBottom: 4 }}>
                      PIONEER FLOW
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "var(--ink, #090e17)", lineHeight: 1.25 }}>
                      Emergency Plumber in 60 Mins
                    </div>
                    <div style={{ fontSize: 10, color: "var(--dim, #475569)", marginTop: 8 }}>
                      Fixed price quotes before any work begins.
                    </div>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, var(--b1, #059669), var(--b2, #10b981))", color: "#fff", padding: "8px 12px", borderRadius: 8, textAlign: "center", fontSize: 11, fontWeight: 700, boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)" }}>
                    Call 08 8345 6789
                  </div>
                </div>
              </div>
              <figcaption className="hv-chip">
                <span className="dot" aria-hidden="true" />
                Recent build: Pioneer Flow Plumbing &amp; Gas (Click to preview)
              </figcaption>
            </figure>

            {/* Trust List */}
            <ul className="trust" aria-label="Why people trust us">
              <li>
                <span className="ic" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
                  </svg>
                </span>
                <span>
                  <span className="stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  <br />
                  <strong>5.0 Google rating</strong> · 33 reviews
                </span>
              </li>
              <li>
                <span className="ic" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  <strong>Clients in SA, NSW, VIC and QLD</strong>
                </span>
              </li>
              <li>
                <span className="ic" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22b573"
                    strokeWidth="2"
                  >
                    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
                  </svg>
                </span>
                <span>
                  <strong>Made in Australia</strong>
                </span>
              </li>
            </ul>

            <figure className="hero-quote">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <blockquote>
                &ldquo;I have so many clients coming through from it, truly amazing.&rdquo;
              </blockquote>
              <figcaption>Lucas Gutterres, Google review</figcaption>
            </figure>
          </div>
        </section>

        {/* 2. How it works */}
        <section className="sec" aria-labelledby="how-h">
          <div className="wrap">
            <p className="eyebrow">How it works</p>
            <h2 id="how-h">
              You see your website <em>before you pay for it.</em>
            </h2>
            <p className="lede">
              Here&apos;s exactly when money changes hands. Spoiler: not until the end.
            </p>
            <ol className="steps">
              <li className="step">
                <div className="step-top">
                  <span className="step-n">STEP 1</span>
                  <span className="pay">You pay $0</span>
                </div>
                <h3>Free 15-minute chat</h3>
                <p>Tell us about your business and what you need. No obligation.</p>
              </li>
              <li className="step">
                <div className="step-top">
                  <span className="step-n">STEP 2</span>
                  <span className="pay">You pay $0</span>
                </div>
                <h3>Fixed quote</h3>
                <p>
                  You get one fixed price in writing, plus a timeline. No hourly rates, no
                  surprises.
                </p>
              </li>
              <li className="step">
                <div className="step-top">
                  <span className="step-n">STEP 3</span>
                  <span className="pay">You pay $0</span>
                </div>
                <h3>We build your draft</h3>
                <p>We design and hand-code your site. You pay nothing while we build it.</p>
              </li>
              <li className="step last">
                <div className="step-top">
                  <span className="step-n">STEP 4</span>
                  <span className="pay pay-now">Now you pay</span>
                </div>
                <h3>Pay when you&apos;re happy, then we launch</h3>
                <p>
                  Ask for as many changes as you like. Once you&apos;re happy, you pay your
                  quoted price and your site goes live.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* WOW Services Section */}
        <section className="services-section" id="services" aria-labelledby="services-h">
          <div className="services-ambient-glow" />
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
              <span className="services-badge-pill">
                <span className="services-badge-dot" />
                Next-Gen Engineering &amp; AI
              </span>
              <h2 id="services-h" style={{ fontSize: "clamp(28px, 4vw, 42px)", marginBottom: 14 }}>
                Bespoke Digital Craftsmanship. <em>Built For Market Dominance.</em>
              </h2>
              <p style={{ color: "var(--dim)", fontSize: 17, lineHeight: 1.6 }}>
                From high-speed React/Next.js architectures and native apps to autonomous 24/7 AI voice receptionists, we engineer platforms that capture market share.
              </p>
            </div>

            <div className="services-grid">
              {wowServices.map((svc) => (
                <article key={svc.id} className={`service-card ${svc.badge === "Most Requested" ? "featured" : ""}`}>
                  <div className="service-top-row">
                    <div className="service-icon-box">{svc.icon}</div>
                    {svc.badge && (
                      <span className="service-hot-badge">{svc.badge}</span>
                    )}
                  </div>

                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.desc}</p>

                  <div className="service-metrics-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    <span>{svc.metric}: <strong>{svc.metricBold}</strong></span>
                  </div>

                  <ul className="service-features-list">
                    {svc.features.map((feat, fi) => (
                      <li key={fi}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-tech-pills">
                    {svc.techStack.map((tech, ti) => (
                      <span key={ti} className="service-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="service-card-actions-row">
                    <Link
                      href={`/services/${serviceSlugMap[svc.id] || "web-development"}`}
                      className="service-deep-page-link"
                    >
                      <span>Dedicated Page &amp; Case Study &rarr;</span>
                    </Link>
                    <a href="#quote" className="service-cta-btn">
                      <span>Enquire Now</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Pricing */}
        <section className="sec" id="pricing" aria-labelledby="price-h">
          <div className="wrap">
            <p className="eyebrow">Pricing</p>
            <h2 id="price-h">
              One fixed price, <em>paid at the end.</em>
            </h2>
            <div className="plans">
              <article className="plan">
                <h3>One page</h3>
                <p className="for">For tradies, consultants and service businesses.</p>
                <div className="price">
                  <b>$449</b>
                  <span>one-off</span>
                </div>
                <ul>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Single-page design
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Looks great on phones
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Contact form
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Google Maps and social links
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => handlePlanSelect("one-page-449")}
                >
                  Choose one page
                </button>
              </article>

              <article className="plan pop">
                <span className="badge">Most popular</span>
                <h3>Multi-page</h3>
                <p className="for">Room to show off your services and your work.</p>
                <div className="price">
                  <b>$949</b>
                  <span>one-off</span>
                </div>
                <ul>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Up to 3 pages
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    About and services pages
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Photo gallery
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Contact form, Google Maps, social links
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-grad"
                  onClick={() => handlePlanSelect("multi-page-949")}
                >
                  Choose multi-page
                </button>
              </article>

              <article className="plan">
                <h3>Up to 8 pages</h3>
                <p className="for">For established businesses with more to say.</p>
                <div className="price">
                  <b>$1,549</b>
                  <span>one-off</span>
                </div>
                <ul>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Up to 8 pages
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Blog or news section
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Custom forms and photo gallery
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m2.5 7.5 3 3 6-7" />
                    </svg>
                    Visitor stats (Google Analytics) set up
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => handlePlanSelect("eight-pages-1549")}
                >
                  Choose up to 8 pages
                </button>
              </article>
            </div>

            {/* Hosting Card */}
            <div className="hosting">
              <div>
                <div className="h-price">
                  <b>$30</b>
                  <span>/ month</span>
                </div>
              </div>
              <div>
                <h3>Hosting and changes</h3>
                <p>
                  Hosting, security, backups and email support, plus unlimited text and
                  image changes by FernStack. No contract, cancel anytime. Starts when
                  your site goes live.
                </p>
              </div>
              <div className="addon">
                <span>Add online bookings and payments</span>
                <b>+$349</b>
              </div>
            </div>
            <p className="fine">
              No GST added, the price you see is the price you pay. If you need a domain name
              (yourbusiness.com.au), that&apos;s around $20 a year, and we&apos;ll set it up
              for you along with your business email.
            </p>
          </div>
        </section>

        {/* 4. Recent work (Interactive Slide View for small landing pages) */}
        <section className="sec" id="work" aria-labelledby="work-h">
          <div className="wrap">
            <div className="work-header-row">
              <div>
                <p className="eyebrow">Recent work</p>
                <h2 id="work-h">
                  Real sites for <em>real Australian businesses.</em>
                </h2>
                <p className="lede">
                  Explore our small business landing pages below. Switch between <strong>Slide View</strong> and{" "}
                  <strong>Grid View</strong>, or click any website to launch its entire interactive live draft.
                </p>
              </div>

              {/* View Mode Toggle: Slide View vs Grid View */}
              <div className="work-view-toggle-bar">
                <button
                  type="button"
                  className={`view-mode-toggle-btn ${workViewMode === "slide" ? "active" : ""}`}
                  onClick={() => setWorkViewMode("slide")}
                  aria-label="Switch to Slide View"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Slide View</span>
                </button>
                <button
                  type="button"
                  className={`view-mode-toggle-btn ${workViewMode === "grid" ? "active" : ""}`}
                  onClick={() => setWorkViewMode("grid")}
                  aria-label="Switch to Grid View"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>Grid View</span>
                </button>
              </div>
            </div>


            {/* SLIDE VIEW MODE */}
            {workViewMode === "slide" ? (
              <div className="slide-view-container">
                <div className="slide-showcase-stage">
                  {/* Previous Arrow */}
                  <button
                    type="button"
                    className="slide-nav-arrow prev"
                    onClick={handlePrevSlide}
                    aria-label="Previous landing page slide"
                    title="Previous Slide"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* Active Featured Slide */}
                  <div className="slide-stage-card-wrap">
                    <figure
                      className="site slide-featured-card"
                      onClick={() => openClientPreview(sampleWebsites[currentSlideIndex])}
                      title={`Click to open full interactive landing page for ${sampleWebsites[currentSlideIndex].name}`}
                    >
                      <div className="chrome" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span className="chrome-url">https://{sampleWebsites[currentSlideIndex].domain}</span>
                      </div>

                      <div className="slide-canvas-viewport">
                        <MiniSiteCanvas site={sampleWebsites[currentSlideIndex]} />
                      </div>

                      <figcaption className="slide-card-caption">
                        <div className="slide-caption-meta">
                          <div className="caption-client-title">
                            <b>{sampleWebsites[currentSlideIndex].name}</b>
                            <span className="caption-client-badge">
                              {sampleWebsites[currentSlideIndex].badge}
                            </span>
                          </div>
                          <span className="caption-client-concept">
                            {sampleWebsites[currentSlideIndex].concept}
                          </span>
                        </div>

                        <div className="slide-caption-actions">
                          <Link
                            href="/case-studies"
                            className="btn btn-ghost"
                            onClick={(e) => e.stopPropagation()}
                            style={{ minHeight: 42, padding: "9px 18px", fontSize: 13.5 }}
                          >
                            <span>Sales Case Study</span>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-grad"
                            onClick={(e) => {
                              e.stopPropagation();
                              openClientPreview(sampleWebsites[currentSlideIndex]);
                            }}
                            style={{ minHeight: 42, padding: "9px 20px", fontSize: 13.5 }}
                          >
                            <span>Launch Live Draft ↗</span>
                          </button>
                        </div>
                      </figcaption>
                    </figure>
                  </div>

                  {/* Next Arrow */}
                  <button
                    type="button"
                    className="slide-nav-arrow next"
                    onClick={handleNextSlide}
                    aria-label="Next landing page slide"
                    title="Next Slide"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                {/* Slide Pagination Dots */}
                <div className="slide-dots-pagination">
                  {sampleWebsites.map((site, dIdx) => (
                    <button
                      key={site.id}
                      type="button"
                      className={`slide-dot-btn ${currentSlideIndex === dIdx ? "active" : ""}`}
                      onClick={() => setCurrentSlideIndex(dIdx)}
                      aria-label={`Jump to slide ${dIdx + 1}: ${site.name}`}
                    >
                      <span className="dot-fill" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* GRID VIEW MODE */
              <div className="work">
                {sampleWebsites.map((site) => (
                  <figure
                    key={site.id}
                    className="site"
                    onClick={() => openClientPreview(site)}
                    title={`Click to view entire landing page for ${site.name}`}
                  >
                    <div className="chrome" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>{site.domain}</span>
                    </div>
                    <MiniSiteCanvas site={site} />
                    <figcaption>
                      <b>{site.name}</b>
                      <span>{site.concept}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. Reviews */}
        <section className="sec" aria-labelledby="rev-h">
          <div className="wrap">
            <p className="eyebrow">Reviews</p>
            <h2 id="rev-h">
              What clients say <em>on Google.</em>
            </h2>
            <p className="rating">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span>
                <strong style={{ color: "var(--ink)" }}>5.0</strong> from 33 Google reviews
              </span>
            </p>
            <ul className="reviews">
              <li>
                <figure className="review">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <blockquote>
                    &ldquo;…FernStack walked us through everything, gave us a fixed quote so
                    we knew exactly what we were paying, and turned around the build faster
                    than we thought possible.&rdquo;
                  </blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      A
                    </span>
                    <span className="who">
                      <strong>Apex Build &amp; Renovations</strong>
                      <span>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="review">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <blockquote>
                    &ldquo;They listened to my feedback and made no hesitations to revise and
                    adjust my website until we were completely happy with it.&rdquo;
                  </blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      P
                    </span>
                    <span className="who">
                      <strong>ProCoat Master Painters</strong>
                      <span>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="review">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <blockquote>
                    &ldquo;From day one they were very professional and patient when making my
                    website. I have so many clients coming through from it, truly
                    amazing.&rdquo;
                  </blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      L
                    </span>
                    <span className="who">
                      <strong>Lucas Gutterres</strong>
                      <span>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="review">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <blockquote>
                    &ldquo;Rebuilt our website and saved us a fortune on hosting. Nothing is
                    ever a problem, FernStack replies on a Saturday night if need be.&rdquo;
                  </blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      M
                    </span>
                    <span className="who">
                      <strong>Metro Alliance Club</strong>
                      <span>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="review">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <blockquote>
                    &ldquo;My website is exactly how I wanted. I highly recommend FernStack for
                    any business wanting a professional website without the bull.&rdquo;
                  </blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      C
                    </span>
                    <span className="who">
                      <strong>CrystalClear Housekeeping</strong>
                      <span>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="review">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <blockquote>
                    &ldquo;FernStack was fantastic to work with on our practice website.
                    From day one, they were responsive and delivered ahead of
                    schedule.&rdquo;
                  </blockquote>
                  <figcaption>
                    <span className="av" aria-hidden="true">
                      V
                    </span>
                    <span className="who">
                      <strong>Vanguard Leadership</strong>
                      <span>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="sec" aria-labelledby="faq-h">
          <div className="wrap">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-h">Straight answers.</h2>
            <div className="faq">
              <details>
                <summary>What&apos;s the catch with no deposit?</summary>
                <p>
                  There isn&apos;t one. We build your draft first because most people who see
                  their site want to go ahead. You pay your fixed price only once you&apos;re happy
                  with it, before it goes live. After launch, hosting is $30 a month and you can
                  cancel anytime.
                </p>
              </details>
              <details>
                <summary>What if I don&apos;t like the draft?</summary>
                <p>
                  Tell us what&apos;s not right and we&apos;ll rework it, as many times as it takes.
                  Changes to your draft are unlimited. If you still decide not to go ahead, you can
                  walk away and owe nothing for the draft, and it&apos;s never published.
                </p>
              </details>
              <details>
                <summary>Do I own my domain and site?</summary>
                <p>
                  Yes. Your domain is registered in your name, so it&apos;s yours. Once you&apos;ve
                  paid for your website, the design and files are yours too, and if you ever leave
                  we&apos;ll hand them over.
                </p>
              </details>
              <details>
                <summary>Can you set up my domain and email?</summary>
                <p>
                  Yes, we handle all of it. We register your domain in your name (around $20 a
                  year), connect it to your website and set up your business email, like
                  you@yourbusiness.com.au. Already have a domain or email? We&apos;ll connect
                  those for you instead.
                </p>
              </details>
              <details>
                <summary>What does hosting include?</summary>
                <p>
                  For $30 a month: hosting, security monitoring, regular backups, email support,
                  and unlimited changes to the text and images on your site by FernStack. New pages
                  or new features are quoted separately, so there are no surprises.
                </p>
              </details>
              <details>
                <summary>Can I leave anytime?</summary>
                <p>
                  Yes. There&apos;s no contract and no notice period. Just email us and we&apos;ll
                  stop billing from your next month. We&apos;ll give you a copy of your website files
                  and help you move it to a new host.
                </p>
              </details>
              <details>
                <summary>How long does it take?</summary>
                <p>
                  Most sites are live within 5 to 10 days of us getting your words and photos,
                  depending on how quickly you review the draft. Bigger sites, up to 8 pages,
                  usually take 2 to 3 weeks. Your quote includes a timeline.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 7. Closing call to action + form: Centered Interactive WOW Contact Builder */}
        <section className="contact-section-split" id="quote" aria-labelledby="quote-h">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", marginBottom: 28 }}>
              <div className="contact-hero-pill-badge" style={{ marginBottom: 14 }}>
                <span className="services-badge-dot" />
                Live Studio Active · Booking Q4/2026 Launches
              </div>
              <h2 id="quote-h" style={{ fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 800 }}>
                Start Your Project. <em>Pay When You Love It.</em>
              </h2>
              <p className="lead" style={{ margin: "0 auto 20px", maxWidth: 660 }}>
                Bespoke Next.js web applications, mobile apps, and autonomous 24/7 AI voice receptionists.
                Tell us your vision, and we&apos;ll engineer a live working prototype in 5 to 10 days with $0 upfront deposit.
              </p>

              {/* Responsive Trust & Availability Pill Bar */}
              <div className="contact-quick-stats-row" style={{ marginTop: 0, marginBottom: 8 }}>
                <div className="contact-stat-chip">
                  <span className="services-badge-dot" />
                  <span><strong>Adelaide Live Studio</strong> · {adelaideTime || "Open 7am to 8pm"} ACST</span>
                </div>
                <div className="contact-stat-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span><strong>$0 Upfront</strong> Deposit Standard</span>
                </div>
                <div className="contact-stat-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span><strong>5 to 10 Days</strong> Delivery</span>
                </div>
                <div className="contact-stat-chip">
                  <span style={{ color: "var(--star)" }}>★★★★★</span>
                  <span><strong>5.0 Google Rating</strong> (33 Reviews)</span>
                </div>
              </div>
            </div>

            {/* Centered WOW Form Container */}
            <div className="contact-centered-container">
              <div className="contact-centered-ambient-glow" />

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
                  <form id="quote-form" ref={formRef} onSubmit={handleSubmit}>
                    <div className="contact-form-header" style={{ textAlign: "center", marginBottom: 28 }}>
                      <h3>Interactive Project Builder</h3>
                      <p>Select your scope · Receive your free draft &amp; fixed quote within 24 hours</p>
                    </div>

                    {/* 1. Service Capability Grid (6 Options) */}
                    <div style={{ marginBottom: 22 }}>
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
                            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                              <span className="contact-service-choice-title">{opt.title}</span>
                              <span className="contact-service-choice-sub">{opt.sub}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. Scope & Tier Cards */}
                    <div style={{ marginBottom: 22 }}>
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
                    <div className="form-goals-wrap" style={{ marginBottom: 22 }}>
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
                    <div style={{ marginBottom: 22 }}>
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
                        <label htmlFor="f-name">Your Full Name</label>
                        <input
                          id="f-name"
                          name="name"
                          type="text"
                          required
                          placeholder="e.g. Sarah Connor"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field-group">
                        <label htmlFor="f-phone">Mobile Phone</label>
                        <input
                          id="f-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="0400 000 000"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field-group">
                        <label htmlFor="f-email">Work Email</label>
                        <input
                          id="f-email"
                          name="email"
                          type="email"
                          required
                          placeholder="sarah@yourbusiness.com.au"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field-group">
                        <label htmlFor="f-business">Business Name</label>
                        <input
                          id="f-business"
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
                      <label htmlFor="f-site">
                        Current Website or Social Page{" "}
                        <span className="opt">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="f-site"
                        name="currentWebsite"
                        type="text"
                        placeholder="e.g. www.apexbuild.com.au"
                        value={formData.currentWebsite}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-field-group" style={{ marginBottom: 18 }}>
                      <label htmlFor="f-msg">
                        Project Vision &amp; Notes{" "}
                        <span className="opt">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="f-msg"
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

              {/* Direct Studio Hotline Assistance Bar */}
              <div className="contact-center-direct-call">
                <span>Prefer direct communication?</span>
                <span>
                  Call <a href="tel:+61451072412">0451 072 412</a>
                </span>
                <span>·</span>
                <span>
                  Email <a href="mailto:info@fernstack.com.au">info@fernstack.com.au</a>
                </span>
                <span>·</span>
                <span>Ste 3/110 Hutt St, Adelaide SA 5000</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="foot" ref={footRef}>
        <div className="wrap">
          <span>
            &copy; 2026 FernStack · Ste 3/110 Hutt St, Adelaide SA 5000 ·
            info@fernstack.com.au ·{" "}
            <a href="tel:+61451072412" data-call="footer">
              0451 072 412
            </a>
          </span>
          <nav aria-label="Footer Navigation" style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "var(--b1, #059669)", fontWeight: 600 }}>Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/contact">Contact Page</Link>
            <a href="#work">Recent Work</a>
            <a href="#price-h">Pricing</a>
            <a href="#quote">Free Quote</a>
          </nav>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className={`mbar ${showMbar ? "show" : ""}`} id="mbar" aria-hidden={!showMbar}>
        <a className="btn btn-ghost" href="tel:+61451072412" data-call="sticky">
          Call us
        </a>
        <a className="btn btn-grad" href="#quote">
          Get my free quote
        </a>
      </div>

      {/* Fullscreen Interactive Landing Page Preview Modal */}
      {previewSite && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPreviewSite(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${previewSite.name}`}
        >
          <div className="modal-window">
            {/* Modal Browser Header Bar */}
            <div className="modal-bar">
              <div className="modal-bar-left">
                <div className="traffic-dots" aria-hidden="true">
                  <span
                    className="traffic-dot red"
                    onClick={() => setPreviewSite(null)}
                    title="Close"
                    style={{ cursor: "pointer" }}
                  />
                  <span className="traffic-dot yellow" />
                  <span className="traffic-dot green" />
                </div>
                <div className="modal-url-bar">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>https://{previewSite.domain}</span>
                </div>
              </div>

              {/* Slide Navigation within Modal */}
              <div className="modal-slide-navigator" role="group" aria-label="Slide to next or previous site">
                <button
                  type="button"
                  className="modal-slide-nav-btn"
                  onClick={handleModalPrevSite}
                  title="Slide to Previous Site (or press Left Arrow)"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <span>Prev</span>
                </button>
                <span className="modal-slide-count-tag">
                  Site {sampleWebsites.findIndex((s) => s.id === previewSite.id) + 1} of {sampleWebsites.length}
                </span>
                <button
                  type="button"
                  className="modal-slide-nav-btn"
                  onClick={handleModalNextSite}
                  title="Slide to Next Site (or press Right Arrow)"
                >
                  <span>Next</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Viewport switcher: Desktop / Tablet / Phone */}
              <div
                className="modal-device-toggles"
                role="group"
                aria-label="Responsive Viewport Options"
              >
                <button
                  type="button"
                  className={`device-btn ${previewDevice === "desktop" ? "active" : ""}`}
                  onClick={() => setPreviewDevice("desktop")}
                  title="Full Desktop View (100%)"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  Desktop
                </button>
                <button
                  type="button"
                  className={`device-btn ${previewDevice === "tablet" ? "active" : ""}`}
                  onClick={() => setPreviewDevice("tablet")}
                  title="Tablet View (768px iPad Chassis)"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                  </svg>
                  Tablet
                </button>
                <button
                  type="button"
                  className={`device-btn ${previewDevice === "mobile" ? "active" : ""}`}
                  onClick={() => setPreviewDevice("mobile")}
                  title="Mobile View (390px iPhone Chassis)"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                  </svg>
                  Phone
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setPreviewSite(null)}
                aria-label="Close preview"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Close</span>
              </button>
            </div>

            {/* Modal Body: Scrollable Client Landing Page with Device Frame */}
            <div className="modal-body">
              <div className={`client-device-shell ${previewDevice}`}>
                {/* Mobile Dynamic Island / Notch */}
                {previewDevice === "mobile" && (
                  <div className="mobile-notch-bar">
                    <span>9:41</span>
                    <div className="mobile-island" />
                    <span>5G 100%</span>
                  </div>
                )}

                {/* Themed Bespoke Client Landing Page View */}
                <ClientLandingSiteView
                  site={previewSite}
                  activeTab={clientActiveTab}
                  setActiveTab={setClientActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
