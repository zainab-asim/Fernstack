export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubheadline: string;
  metric: string;
  metricBold: string;
  metricDescription: string;
  salesImpactQuote: string;
  caseStudyId: string;
  caseStudyClient: string;
  caseStudyMetric: string;
  pricingStarting: string;
  turnaroundTime: string;
  overview: string;
  engineeringPhilosophy: string;
  capabilities: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: string[];
  deliverables: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const servicesList: ServiceData[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Custom Web Engineering & Next.js Platforms",
    shortTitle: "Web Engineering",
    badge: "Most Requested",
    icon: "🌐",
    heroHeadline: "Hand-Coded Next.js Platforms Engineered to",
    heroHighlight: "Convert Visitors into Paying Customers",
    heroSubheadline:
      "Sub-second load speeds, zero template bloat, and surgical SEO architecture designed to dominate organic Google search results.",
    metric: "Load Speed",
    metricBold: "0.28s Avg (100/100 Core Web Vitals)",
    metricDescription: "Loads instantly on mobile 4G networks, eliminating visitor bounce rate.",
    salesImpactQuote: "+340% increase in inbound quote conversions for client Apex Build within 90 days.",
    caseStudyId: "apex-built",
    caseStudyClient: "Apex Build & Renovations",
    caseStudyMetric: "+340% Inbound Quotes ($1.85M Pipeline)",
    pricingStarting: "$449",
    turnaroundTime: "5 to 10 Business Days",
    overview:
      "Templates from generic page builders are slow, heavy, and leak sales. At FernStack, we engineer every web application from scratch using Next.js 15, TypeScript, and modern semantic HTML. Our sites load in under 300 milliseconds, rank higher on Google, and guide visitors straight to high-value quote requests and direct phone calls.",
    engineeringPhilosophy:
      "We believe code should be lean, typed, and resilient. No 5MB theme plugins or broken updates. By employing Vercel Edge caching and server-side rendering, we achieve perfect 100/100 Lighthouse performance scores across every viewport.",
    capabilities: [
      {
        icon: "⚡",
        title: "Sub-Second Global Edge Delivery",
        description:
          "Vercel Edge Network CDN distribution ensures your site renders within 300ms across Sydney, Melbourne, Brisbane, and Adelaide.",
      },
      {
        icon: "🎯",
        title: "Technical Local SEO & Structured Schema",
        description:
          "Pre-rendered Schema.org JSON-LD structured data and OpenGraph tags built into every page to rank top in local Google Map Packs.",
      },
      {
        icon: "📱",
        title: "100% Mobile-First Responsive Precision",
        description:
          "Custom adaptive CSS layouts crafted for seamless thumb-navigation, sticky calling buttons, and frictionless contact forms.",
      },
      {
        icon: "🔒",
        title: "Zero-Vulnerability Architecture",
        description:
          "Static generation and serverless endpoints eliminate traditional WordPress database injection and plugin vulnerability vectors.",
      },
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Vercel Edge", "Semantic CSS", "Google Tag Manager"],
    deliverables: [
      "Bespoke Responsive Next.js Web Application",
      "Interactive Project Cost Estimator or Quote Calculator",
      "Automated Instant SMS & Email Lead Notifications",
      "Google Business Profile & Local Schema Markup Setup",
      "Zero Upfront Deposit, Pay Only When 100% Delighted",
    ],
    faqs: [
      {
        q: "How does FernStack build websites without an upfront deposit?",
        a: "We believe in earning your trust through engineering excellence. We build your complete working draft first on our private staging servers. You review every screen, test the forms, and only pay once you are 100% happy.",
      },
      {
        q: "Can I make changes to my website after it launches?",
        a: "Yes! Our all-inclusive $30/month hosting package includes unlimited text, pricing, and photo updates carried out directly by our team. Just email us what you need changed, and we deploy it within 24 to 48 hours.",
      },
      {
        q: "Why is a custom Next.js website better than WordPress or Wix?",
        a: "WordPress sites rely on dozens of third-party plugins that bloat code, cause security vulnerabilities, and take 4 to 8 seconds to load on phones. Every second of delay reduces sales by 20%. Next.js delivers pure, pre-compiled code that loads in under 0.3s, maximizing customer conversion.",
      },
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Native & Cross-Platform Mobile Apps",
    shortTitle: "Mobile Apps",
    badge: "iOS & Android",
    icon: "📱",
    heroHeadline: "High-Performance iOS & Android Applications That",
    heroHighlight: "Automate Operations and Accelerate Revenue",
    heroSubheadline:
      "Crafted with React Native and native Swift/Kotlin bridges. Offline-first local databases, frictionless Apple Pay, and automated client re-engagement.",
    metric: "Performance",
    metricBold: "120 FPS Fluid Native Experience",
    metricDescription: "Silky smooth gesture handling and instant offline response.",
    salesImpactQuote: "+185% increase in repeat bookings and 68% faster payment turnaround for FieldFlow Pro.",
    caseStudyId: "fieldflow-tradie",
    caseStudyClient: "TradieTrack & FieldFlow Pro",
    caseStudyMetric: "+185% Repeat Bookings ($260k Unlocked)",
    pricingStarting: "$1,549",
    turnaroundTime: "3 to 4 Weeks",
    overview:
      "Whether you need an internal operations application for field technicians or a customer-facing product driving recurring subscriptions, we architect cross-platform mobile apps that feel indistinguishable from pure native code. We handle the entire lifecycle from UX design to App Store approval.",
    engineeringPhilosophy:
      "Offline-first by default. Your users shouldn't be blocked because they entered an underground parking garage or remote job site. We use SQLite local sync with automatic background conflict resolution.",
    capabilities: [
      {
        icon: "🔄",
        title: "Offline-First Local SQLite Sync",
        description:
          "Zero loading spinners when offline. Changes save immediately to local storage and sync silently when network connectivity restores.",
      },
      {
        icon: "💳",
        title: "In-App Apple Pay & Stripe Tap-to-Pay",
        description:
          "Collect payments instantly on-site or in-app with 1-touch biometric FaceID authentication and contactless reader support.",
      },
      {
        icon: "🔔",
        title: "Targeted Push Notification Workflows",
        description:
          "Automate reminders, job dispatch status alerts, and re-order triggers that bring customers back into your sales funnel.",
      },
      {
        icon: "🚀",
        title: "Simultaneous iOS & Android Store Deployment",
        description:
          "Single typed codebase deployed seamlessly to Apple TestFlight, App Store, and Google Play Store.",
      },
    ],
    techStack: ["React Native", "Expo SDK", "TypeScript", "SQLite", "Stripe Terminal", "OneSignal Push"],
    deliverables: [
      "Production iOS & Android App Store Ready Binaries",
      "Offline Sync Data Engine with Cloud Backup",
      "Biometric Authentication & Payment Integration",
      "Full Store Submission & Approval Management",
    ],
    faqs: [
      {
        q: "Do you publish the apps to the Apple App Store and Google Play?",
        a: "Yes. We guide you through developer account setup, assemble all required screenshots and compliance metadata, and manage the submission through App Store Review to live public release.",
      },
      {
        q: "Will the app work when my team has no cellular reception?",
        a: "Absolutely. We build with an offline-first architecture using local SQLite databases. All data, photo captures, and forms save locally and sync automatically when internet restores.",
      },
    ],
  },
  {
    id: "ai-receptionist",
    slug: "ai-receptionist",
    title: "Autonomous AI Receptionist & Voice Agents",
    shortTitle: "AI Voice Agents",
    badge: "Breakthrough AI",
    icon: "🤖",
    heroHeadline: "24/7 Australian-Cadence AI Voice Receptionist That",
    heroHighlight: "Captures 100% of Inbound Sales Calls",
    heroSubheadline:
      "Ultra-low latency speech turnaround (<420ms). Answers customer questions, handles emergencies, checks calendars, and books leads straight into your CRM.",
    metric: "Call Pickup Rate",
    metricBold: "100% 24/7/365, Zero Missed Leads",
    metricDescription: "Never miss another after-hours client inquiry or emergency job.",
    salesImpactQuote: "412 after-hours appointments captured and $148,000+ recovered revenue for Pulse Dental.",
    caseStudyId: "pulse-dental",
    caseStudyClient: "Pulse Dental & Healthcare Suites",
    caseStudyMetric: "412 After-Hours Bookings ($148k Recovered)",
    pricingStarting: "$899 setup",
    turnaroundTime: "5 to 7 Business Days",
    overview:
      "Every missed phone call is money handed directly to your competitors. FernStack engineers intelligent, conversational AI Voice Agents tailored specifically for Australian businesses. With authentic Aussie accents and natural pauses, our voice agents answer immediately, qualify the prospect, answer pricing and service questions, and schedule bookings directly into your calendar.",
    engineeringPhilosophy:
      "Conversational latency is everything. We combine Whisper STT, OpenAI Realtime voice models, and streaming audio pipelines over Twilio WebSockets to achieve a human-like response turnaround of under 420 milliseconds.",
    capabilities: [
      {
        icon: "🇦🇺",
        title: "Natural Australian Dialect & Cadence",
        description:
          "Trained on Australian conversational phrasing, suburb name pronunciations, and warm professional tone.",
      },
      {
        icon: "📅",
        title: "Live Real-Time Calendar Booking",
        description:
          "Checks doctor, technician, or consultant availability in real-time and books appointments straight into Google Calendar, Cal.com, or Jobber.",
      },
      {
        icon: "📲",
        title: "Instant Dual SMS Notifications",
        description:
          "Immediately sends appointment confirmation to the caller and an alert summary to your mobile phone with full call transcript.",
      },
      {
        icon: "🚨",
        title: "Intelligent Emergency Escalation",
        description:
          "Detects urgent scenarios (e.g. severe water leaks, emergency dental trauma) and live-transfers the caller straight to on-call staff.",
      },
    ],
    techStack: ["OpenAI Realtime", "Twilio Voice API", "Whisper STT", "Cal.com API", "Zapier / n8n Webhooks"],
    deliverables: [
      "Custom Australian AI Voice Agent Persona & Knowledge Base",
      "Twilio Dedicated Phone Number or Live Call-Forwarding Setup",
      "Direct Calendar Integration & SMS Dispatch Rules",
      "Web Dashboard with Audio Recordings and Text Transcripts",
    ],
    faqs: [
      {
        q: "Does the voice agent sound like a robot?",
        a: "Not at all. We use state-of-the-art neural speech synthesis that incorporates natural Australian inflections, breathing pauses, and responsive listening. Callers frequently mistake our agent for a real front-desk staff member.",
      },
      {
        q: "What happens if a caller has a complex emergency?",
        a: "The agent is programmed with strict escalation protocols. In emergency cases, it can instantly transfer the call to your mobile number or dispatch an urgent SMS alert.",
      },
    ],
  },
  {
    id: "ai-augmentation",
    slug: "ai-automation",
    title: "Enterprise AI Augmentation & Automation",
    shortTitle: "AI Automation",
    badge: "ROI Multiplier",
    icon: "⚡",
    heroHeadline: "Private LLM Workflows & Intelligent Document Systems That",
    heroHighlight: "Eliminate 80% of Repetitive Labor",
    heroSubheadline:
      "Bank-grade air-gapped RAG knowledge bases, auto-quoting pipelines, and multi-agent document intelligence tailored to your internal operations.",
    metric: "Operational Savings",
    metricBold: "Up to 80% Time & Labor Saved",
    metricDescription: "Accelerates proposal turnaround from days to under 30 minutes.",
    salesImpactQuote: "22 hours saved per advisor weekly and 4x faster deal velocity for TrueNorth Advisory.",
    caseStudyId: "truenorth-wealth",
    caseStudyClient: "TrueNorth Advisory Partners",
    caseStudyMetric: "22 hrs/week saved (4x Faster Deals)",
    pricingStarting: "$949 setup",
    turnaroundTime: "1 to 2 Weeks",
    overview:
      "Stop paying skilled professionals to copy and paste data between PDFs, spreadsheets, and emails. We build bespoke AI automation pipelines that digest complex unstructured documents, extract verified data, draft client proposals, and orchestrate multi-step business workflows with human-in-the-loop oversight.",
    engineeringPhilosophy:
      "Enterprise security and accuracy come first. We use private vector databases with zero public model training, ensuring your proprietary business data and client files remain strictly confidential and SOC-2 compliant.",
    capabilities: [
      {
        icon: "📑",
        title: "Automated PDF Document Intelligence",
        description:
          "Extract financial metrics, invoices, trade plans, and legal contracts with 99.4% precision using vision LLM pipelines.",
      },
      {
        icon: "🧠",
        title: "Private Retrieval-Augmented Generation (RAG)",
        description:
          "Query your entire internal operations manual, price sheets, and historical client cases with instant grounded answers.",
      },
      {
        icon: "✉️",
        title: "Autonomous Email Triage & Draft Generation",
        description:
          "Analyzes incoming customer requests, references internal systems, and prepares ready-to-send responses for team approval.",
      },
      {
        icon: "🔒",
        title: "Air-Gapped Bank-Grade Data Privacy",
        description:
          "Private endpoints configured with zero data retention clauses to meet strict Australian Privacy Act standards.",
      },
    ],
    techStack: ["Claude 3.5 Sonnet", "LangChain", "Pinecone Vector DB", "Python / FastAPI", "n8n Automation"],
    deliverables: [
      "Custom Enterprise RAG Knowledge Base Architecture",
      "Automated Document Ingestion & Vision OCR Pipeline",
      "Custom Web Interface for Staff Interaction",
      "Security & Data Privacy Audit Compliance Protocol",
    ],
    faqs: [
      {
        q: "Will our company data be used to train public AI models?",
        a: "Never. We enforce strict enterprise API agreements with Anthropic and OpenAI that guarantee zero training on customer data, encrypted storage at rest, and total isolation.",
      },
      {
        q: "How does our team interact with the AI system?",
        a: "We provide an intuitive web portal that your team can open in any browser, or we integrate directly into your existing Slack, Microsoft Teams, or email inbox.",
      },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "High-Converting E-Commerce Engines",
    shortTitle: "E-Commerce",
    badge: "Revenue Growth",
    icon: "🛍️",
    heroHeadline: "Headless Shopify & Custom E-Commerce Engines Engineered to",
    heroHighlight: "Maximize Average Order Value and Checkout Velocity",
    heroSubheadline:
      "Sub-second catalog browsing, 1-click Apple Pay checkout, and AI dynamic cart upselling that turns casual window-shoppers into high-spending customers.",
    metric: "Conversion Lift",
    metricBold: "+42% Higher Cart Checkout Rate",
    metricDescription: "Reduces cart abandonment with express accelerated mobile payments.",
    salesImpactQuote: "+46% Average Order Value and +310% mobile checkout completion for RoastCraft Roasters.",
    caseStudyId: "roastcraft-coffee",
    caseStudyClient: "RoastCraft Specialty Roasters",
    caseStudyMetric: "+46% AOV & +310% Mobile Sales ($420k ARR)",
    pricingStarting: "$949",
    turnaroundTime: "2 to 3 Weeks",
    overview:
      "Standard ecommerce templates are bloated with third-party tracking scripts that slow down mobile checkouts and crater conversion rates. FernStack builds headless ecommerce storefronts and Shopify Plus architectures with instant faceted filtering, seamless 1-tap payments, and intelligent bundle recommendations.",
    engineeringPhilosophy:
      "Every millisecond of friction at checkout costs money. We separate the front-end user experience from the commerce backend, enabling sub-second catalog transitions and 1-click accelerated checkout paths.",
    capabilities: [
      {
        icon: "🍎",
        title: "1-Click Accelerated Mobile Checkout",
        description:
          "Direct Apple Pay, Google Pay, and Shop Pay integration allowing customers to buy in 2 taps without typing an address.",
      },
      {
        icon: "📈",
        title: "Dynamic AI Cart Upselling & Bundles",
        description:
          "Intelligent slide-out cart recommendations that suggest matching accessories and volume discounts to boost Average Order Value.",
      },
      {
        icon: "🔍",
        title: "Algolia Sub-50ms Instant Fuzzy Search",
        description:
          "Instant product search with typo tolerance, facet filtering, and automated out-of-stock product suppression.",
      },
      {
        icon: "📦",
        title: "Multi-Warehouse Inventory Synchronization",
        description:
          "Real-time webhooks connecting your storefront to warehouse logistics, ERP systems, and shipping carriers.",
      },
    ],
    techStack: ["Next.js 15", "Shopify Storefront API", "Stripe API", "Algolia", "Sanity CMS", "Tailwind CSS"],
    deliverables: [
      "Headless Storefront or Custom Shopify Plus Architecture",
      "Accelerated 1-Click Mobile Payment Setup",
      "Dynamic Slide-Out Cart Upsell Drawer",
      "Real-Time Warehouse & Shipping Carrier Integration",
    ],
    faqs: [
      {
        q: "Can I manage products and inventory easily in Shopify?",
        a: "Yes! You still use the familiar, powerful Shopify backend to add products, adjust prices, and fulfill orders. Our custom front-end simply talks to your Shopify catalog via fast APIs.",
      },
      {
        q: "How does the AI upselling feature increase order value?",
        a: "When a customer adds an item to their cart, our system analyzes purchase history to present complementary products (e.g. suggesting coffee filters and a travel canister when beans are added) with a single 'Add for 15% off' button.",
      },
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps Reliability",
    shortTitle: "Cloud & DevOps",
    badge: "Enterprise SLA",
    icon: "☁️",
    heroHeadline: "Zero-Downtime AWS & Cloudflare Architecture Engineered for",
    heroHighlight: "Unshakeable 99.999% Reliability and Peak Scale",
    heroSubheadline:
      "Automated Git deployment pipelines, sub-30ms global edge caching, automated hourly snapshots, and SOC-2 standard controls.",
    metric: "Platform Reliability",
    metricBold: "99.99% Uptime Guarantee",
    metricDescription: "Survives massive TV ad traffic spikes without a hiccup.",
    salesImpactQuote: "100% uptime during national TV surge and +240% commercial RFP win rate for Bondi Clean.",
    caseStudyId: "bondi-clean",
    caseStudyClient: "Bondi Clean Facilities",
    caseStudyMetric: "99.999% Surge Uptime ($30.8k Cloud Savings)",
    pricingStarting: "$899 setup",
    turnaroundTime: "1 to 2 Weeks",
    overview:
      "When your business grows, server crashes during marketing campaigns can destroy client trust and waste advertising dollars. FernStack architectures bulletproof cloud environments on AWS, Google Cloud, and Cloudflare. We automate continuous deployment, establish redundant failovers, and guarantee enterprise reliability.",
    engineeringPhilosophy:
      "Infrastructure as Code (IaC) with automated rollbacks. Every change is tested automatically in ephemeral staging environments before going live.",
    capabilities: [
      {
        icon: "🌐",
        title: "Sub-30ms Global Edge Caching",
        description:
          "Distributes static and dynamic assets across 300+ global edge nodes to deliver near-instant response times nationwide.",
      },
      {
        icon: "🔁",
        title: "Automated Zero-Downtime CI/CD Pipelines",
        description:
          "Push code to GitHub and watch it test and deploy automatically with instant automated rollback if any health check fails.",
      },
      {
        icon: "🛡️",
        title: "Enterprise DDoS Mitigation & WAF",
        description:
          "Protects your infrastructure against malicious bot traffic, brute-force attacks, and distributed denial-of-service attempts.",
      },
      {
        icon: "💾",
        title: "Automated Hourly Encrypted Backups",
        description:
          "Point-in-time recovery for critical databases with automated weekly disaster recovery verification testing.",
      },
    ],
    techStack: ["AWS ECS / Lambda", "Cloudflare Workers", "Docker", "PostgreSQL", "GitHub Actions", "Datadog"],
    deliverables: [
      "Containerized Cloud Architecture Setup",
      "Automated Git CI/CD Deployment Workflow",
      "Cloudflare Enterprise Security & SSL Configuration",
      "24/7 Health Monitoring & Automated Alerting",
    ],
    faqs: [
      {
        q: "Can this scale automatically when we run high-profile advertising campaigns?",
        a: "Yes. Our architectures use auto-scaling container groups and serverless edge functions that automatically provision additional compute resources within seconds of a traffic spike, scaling down when traffic returns to normal to save money.",
      },
      {
        q: "What monitoring do you set up?",
        a: "We configure real-time Datadog and Cloudflare health checks that monitor response latency, error rates, and server memory. If any anomaly is detected, automated alerts ping our engineering team immediately.",
      },
    ],
  },
];
