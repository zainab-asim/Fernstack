export interface CaseStudy {
  id: string;
  slug: string;
  serviceId: string;
  clientName: string;
  industry: string;
  location: string;
  tagline: string;
  heroMetric: string;
  heroMetricLabel: string;
  salesGrowthHighlight: string;
  challenge: string;
  solution: string;
  techStack: string[];
  beforeMetrics: { label: string; value: string }[];
  afterMetrics: { label: string; value: string }[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
  keyFeatures: string[];
  resultsSummary: string;
  deliverables: string[];
}

export const realWorldCaseStudies: CaseStudy[] = [
  {
    id: "apex-built",
    slug: "apex-built-commercial-renovations",
    serviceId: "web-dev",
    clientName: "Apex Build & Renovations",
    industry: "Commercial Construction & Tradie Services",
    location: "Adelaide, SA",
    tagline: "From sluggish 6.4s WordPress page to sub-second Next.js conversion engine.",
    heroMetric: "+340%",
    heroMetricLabel: "Inbound Quote Conversion Rate",
    salesGrowthHighlight: "+$1.85M in verified commercial contracts won in 90 days",
    challenge:
      "Apex was suffering a 78% mobile bounce rate due to a bloated legacy WordPress template that took over 6 seconds to load. Commercial property managers and homeowners searching for licensed builders were leaving before the first image loaded, leaking high-value six-figure project leads directly to competitors.",
    solution:
      "FernStack engineered a bespoke, hand-coded Next.js 15 App Router web application with Vercel Edge caching, zero unused scripts, an interactive project cost estimator, and instantaneous SMS notifications dispatched to the master builder the second a lead hit submit.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Vercel Edge", "Twilio SMS", "Schema.org"],
    beforeMetrics: [
      { label: "Mobile Page Load Speed", value: "6.4s" },
      { label: "Quote Request Conversion", value: "1.4%" },
      { label: "Mobile Bounce Rate", value: "78%" },
      { label: "Monthly Qualified Pipeline", value: "$280k" },
    ],
    afterMetrics: [
      { label: "Mobile Page Load Speed", value: "0.24s" },
      { label: "Quote Request Conversion", value: "6.2% (+340%)" },
      { label: "Mobile Bounce Rate", value: "19%" },
      { label: "Monthly Qualified Pipeline", value: "$910k (3.2x)" },
    ],
    quote: {
      text: "FernStack transformed our digital presence completely. We signed 38 new commercial contracts within 90 days of launching. The speed alone closed clients who told us other builders' sites wouldn't even load on their phones on job sites.",
      author: "Marcus Vance",
      title: "Managing Director, Apex Build",
    },
    keyFeatures: [
      "Sub-second First Contentful Paint (0.24s) on 4G cellular",
      "Interactive 4-step commercial project cost estimator",
      "Dynamic photo portfolio with WebP image compression",
      "Automated instant SMS dispatch to on-duty project managers",
    ],
    resultsSummary:
      "Generated over $1,850,000 in new commercial contracts within 90 days of rollout, reducing customer acquisition cost by 62%.",
    deliverables: [
      "Custom Next.js 15 Architecture",
      "Interactive Cost Estimator Component",
      "Automated Twilio SMS Lead Dispatch",
      "Technical Local SEO & Schema Markup",
    ],
  },
  {
    id: "roastcraft-coffee",
    slug: "roastcraft-specialty-ecommerce",
    serviceId: "ecommerce",
    clientName: "RoastCraft Specialty Roasters",
    industry: "Artisan E-Commerce & Retail",
    location: "Melbourne, VIC",
    tagline: "Headless Shopify engine with 1-click Apple Pay & dynamic bundle upsells.",
    heroMetric: "+46%",
    heroMetricLabel: "Average Order Value (AOV)",
    salesGrowthHighlight: "+310% mobile checkout completion & +$420k incremental ARR",
    challenge:
      "RoastCraft was losing over 64% of shoppers at checkout due to cumbersome multi-step address forms and slow cart updates on their standard Shopify theme. Furthermore, they lacked automated upselling for grinder pairings and recurring weekly bean subscriptions.",
    solution:
      "FernStack developed a Headless Shopify Plus storefront utilizing Next.js, Stripe Elements, and Algolia instant search. We implemented 1-click Apple Pay and Google Pay accelerated checkout, alongside an AI bundle recommendation engine that suggests matching bean roasts at cart drawer level.",
    techStack: ["Next.js 15", "Shopify Storefront API", "Stripe Elements", "Algolia Search", "Tailwind CSS"],
    beforeMetrics: [
      { label: "Checkout Completion Rate", value: "18.2%" },
      { label: "Average Order Value", value: "$38.50" },
      { label: "Recurring Subscription ARR", value: "$144k" },
      { label: "Mobile Cart Abandonment", value: "64%" },
    ],
    afterMetrics: [
      { label: "Checkout Completion Rate", value: "74.6% (+310%)" },
      { label: "Average Order Value", value: "$56.20 (+46%)" },
      { label: "Recurring Subscription ARR", value: "$564k (3.9x)" },
      { label: "Mobile Cart Abandonment", value: "22%" },
    ],
    quote: {
      text: "The 1-click Apple Pay checkout combined with smart bean bundling changed our entire business trajectory. Our average order went from $38 to over $56 on day one, and subscription revenue has quadrupled.",
      author: "Elena Rostova",
      title: "Co-Founder & Head of Roasting, RoastCraft",
    },
    keyFeatures: [
      "1-Click Accelerated Apple Pay & Google Pay express checkout",
      "Dynamic AI subscription & grinder bundle upselling",
      "Algolia sub-50ms instant fuzzy search across 200+ roast SKUs",
      "Automated multi-origin inventory sync with warehouse ERP",
    ],
    resultsSummary:
      "Unlocked $420,000+ in incremental annual recurring revenue while elevating Average Order Value by 46% across 22,000+ customer orders.",
    deliverables: [
      "Headless Shopify Storefront Integration",
      "Custom Slide-Out AI Cart Upsell Drawer",
      "Accelerated Express Payment Integrations",
      "Real-Time Multi-Warehouse Inventory Sync",
    ],
  },
  {
    id: "pulse-dental",
    slug: "pulse-dental-ai-receptionist",
    serviceId: "ai-receptionist",
    clientName: "Pulse Dental & Healthcare Suites",
    industry: "Healthcare & Specialized Clinics",
    location: "Sydney, NSW",
    tagline: "24/7 conversational Australian-voice AI agent capturing 100% of off-peak leads.",
    heroMetric: "412",
    heroMetricLabel: "After-Hours Bookings Captured",
    salesGrowthHighlight: "+$148,000 in recovered appointment revenue in 6 months",
    challenge:
      "Over 35% of patient inquiries arrived between 6:00 PM and 8:30 AM or on weekends when staff were off-duty. Callers hearing a generic voicemail hung up and immediately dialed competing clinics, costing the practice an estimated $25,000 monthly in lost patient lifetime value.",
    solution:
      "FernStack built and deployed an autonomous AI Voice Receptionist speaking with natural Australian cadence and warmth. The AI answers immediately 24/7, screens emergency dental symptoms, answers pricing queries, checks the clinic's live calendar, and books appointments directly into their practice management software with instant SMS confirmations.",
    techStack: ["OpenAI Realtime Voice", "Twilio Voice API", "Whisper STT", "Cal.com API", "Zapier Webhooks"],
    beforeMetrics: [
      { label: "After-Hours Call Answer Rate", value: "0% (Voicemail)" },
      { label: "Missed Call Conversion", value: "< 4%" },
      { label: "Staff Time Answering Basic FAQs", value: "18 hrs/wk" },
      { label: "Monthly Uncaptured Revenue", value: "~$25,000" },
    ],
    afterMetrics: [
      { label: "After-Hours Call Answer Rate", value: "100% Instant" },
      { label: "Missed Call Conversion", value: "68% Booked" },
      { label: "Staff Time Answering Basic FAQs", value: "2 hrs/wk (-89%)" },
      { label: "Monthly Uncaptured Revenue", value: "$0 (Captured)" },
    ],
    quote: {
      text: "Patients love our voice agent. It sounds indistinguishable from our reception team and books appointments directly into our dental chair calendar at 11:30 PM on Sunday night. It paid for itself in its very first weekend.",
      author: "Dr. Julian Mercer, BDS",
      title: "Lead Practitioner & Practice Owner",
    },
    keyFeatures: [
      "Ultra-low latency speech turnaround (< 420ms) with zero awkward delays",
      "Natural Australian dialect, pronunciation of local suburbs, and warm bedside manner",
      "Direct live integration with practice management appointment book",
      "Immediate SMS calendar invites dispatched to both patient and practice manager",
    ],
    resultsSummary:
      "Captured 412 verified after-hours patient appointments worth $148,000+ in direct billing, with a perfect 100% answering reliability record across 3,400+ total calls.",
    deliverables: [
      "Australian Conversational AI Voice Pipeline",
      "Direct PMS / Calendar Integration & Triage Engine",
      "Emergency SMS Fallback Alert for On-Call Clinicians",
      "Live Analytics Call Transcript Dashboard",
    ],
  },
  {
    id: "fieldflow-tradie",
    slug: "fieldflow-mobile-app-automation",
    serviceId: "app-dev",
    clientName: "TradieTrack & FieldFlow Pro",
    industry: "Trade Services & Field Operations",
    location: "Brisbane, QLD",
    tagline: "iOS and Android field technician application with offline sync and 1-tap card payments.",
    heroMetric: "+185%",
    heroMetricLabel: "Repeat Service Booking Volume",
    salesGrowthHighlight: "68% faster invoice payment cycle & $260k cashflow unlocked",
    challenge:
      "Plumbers, electricians, and technicians in the field were losing up to 14 hours per week filling paper run sheets, deciphering job notes, and mailing invoices days later. Bad mobile reception in basements resulted in lost job photos and delayed invoices by an average of 19 days.",
    solution:
      "FernStack developed a cross-platform React Native & Expo mobile application with native iOS & Android binaries. Equipped with SQLite offline synchronization, on-device photo compression, Bluetooth tap-to-pay card processing, and automatic customer follow-up sequences.",
    techStack: ["React Native", "Expo SDK", "TypeScript", "SQLite Offline", "Stripe Terminal", "OneSignal"],
    beforeMetrics: [
      { label: "Average Invoice Payment Cycle", value: "19 Days" },
      { label: "Weekend Admin Hours / Tech", value: "14 hrs" },
      { label: "On-Site Payment Collection", value: "12%" },
      { label: "Repeat Annual Bookings", value: "24%" },
    ],
    afterMetrics: [
      { label: "Average Invoice Payment Cycle", value: "6.1 Days (-68%)" },
      { label: "Weekend Admin Hours / Tech", value: "0 hrs (Automated)" },
      { label: "On-Site Payment Collection", value: "81%" },
      { label: "Repeat Annual Bookings", value: "68.4% (+185%)" },
    ],
    quote: {
      text: "Our guys collect payments right on the customer's driveway before pulling out. The app works even when underground with zero mobile reception and syncs instantly when they surface. It completely overhauled our cash flow.",
      author: "Brett Callahan",
      title: "Operations Director, FieldFlow Logistics",
    },
    keyFeatures: [
      "Offline-first SQLite database that never freezes or loses data without signal",
      "1-Tap Stripe Terminal contactless payment acceptance on iPhone & Android",
      "Instant PDF invoice and compliance certificate generator with client digital signatures",
      "Automated push notifications reminding homeowners of seasonal HVAC maintenance",
    ],
    resultsSummary:
      "Accelerated payment cycles from 19 days to 6 days, collected 81% of invoices on-site, and drove a 185% increase in recurring annual maintenance contracts.",
    deliverables: [
      "Dual iOS & Android App Store Releases",
      "Offline Sync Engine with Conflict Resolution",
      "Stripe Card Reader Bluetooth SDK Integration",
      "Automated SMS & Push Notification Engine",
    ],
  },
  {
    id: "bondi-clean",
    slug: "bondi-clean-cloud-infrastructure",
    serviceId: "cloud-devops",
    clientName: "Bondi Clean Facilities",
    industry: "Commercial Facility Maintenance",
    location: "Sydney, NSW",
    tagline: "Enterprise cloud architecture with sub-30ms edge caching and 99.999% uptime.",
    heroMetric: "99.999%",
    heroMetricLabel: "Surge Traffic Uptime Guarantee",
    salesGrowthHighlight: "+240% commercial RFP win rate & zero campaign downtime",
    challenge:
      "Bondi Clean's previous server crashed twice during prime-time television and Google Ads blitzes, losing thousands of corporate facility managers attempting to download commercial cleaning tender proposals.",
    solution:
      "FernStack re-architected their entire digital infrastructure using containerized microservices on AWS, Cloudflare Enterprise edge workers, and distributed PostgreSQL. Implemented automated health checks, instant failover, and DDoS mitigation.",
    techStack: ["AWS ECS", "Docker", "Cloudflare Workers", "PostgreSQL", "GitHub Actions CI/CD", "Datadog"],
    beforeMetrics: [
      { label: "Peak Surge Downtime", value: "14 hrs/yr" },
      { label: "Global Edge Latency (TTFB)", value: "340ms" },
      { label: "Commercial RFP Form Drop-Off", value: "48%" },
      { label: "Annual Cloud Hosting Waste", value: "$42,000" },
    ],
    afterMetrics: [
      { label: "Peak Surge Downtime", value: "0 hrs (100% Uptime)" },
      { label: "Global Edge Latency (TTFB)", value: "28ms" },
      { label: "Commercial RFP Form Drop-Off", value: "8%" },
      { label: "Annual Cloud Hosting Waste", value: "$11,200 (-73%)" },
    ],
    quote: {
      text: "When our Sydney commercial campaign aired on national TV, our traffic spiked 15x in four minutes. The site didn't stutter for a millisecond. We captured 140 corporate facility bids in 48 hours without a single glitch.",
      author: "Samantha Lee",
      title: "Chief Operating Officer, Bondi Clean",
    },
    keyFeatures: [
      "Global Edge distribution with 28ms Time-To-First-Byte across Australia",
      "Zero-downtime automated deployment pipelines with rollback safety",
      "Hourly encrypted backups with automated disaster recovery drills",
      "Enterprise Cloudflare DDoS mitigation mitigating up to 100Gbps bursts",
    ],
    resultsSummary:
      "Maintained 99.999% uptime across 1.2M visits, converted 240% more commercial tender proposals, and sliced server infrastructure bills by $30,800 annually.",
    deliverables: [
      "Containerized AWS Microservices Architecture",
      "Cloudflare Enterprise Edge Configuration",
      "Automated CI/CD Pipeline with Instant Rollback",
      "24/7 Real-Time Performance & Security Monitoring",
    ],
  },
  {
    id: "truenorth-wealth",
    slug: "truenorth-ai-document-intelligence",
    serviceId: "ai-augmentation",
    clientName: "TrueNorth Advisory Partners",
    industry: "Wealth Management & Private Advisory",
    location: "Melbourne, VIC",
    tagline: "Private RAG knowledge base & autonomous multi-agent financial document analysis.",
    heroMetric: "22 hrs",
    heroMetricLabel: "Saved Per Advisor / Week",
    salesGrowthHighlight: "4x faster client proposal turnaround & $3.4M new AUM onboarded",
    challenge:
      "Advisors spent up to 22 hours per week manually extracting balance sheet data from 120-page client PDF disclosures and drafting Statement of Advice (SoA) proposals, creating massive backlogs that delayed client onboarding by up to 3 weeks.",
    solution:
      "FernStack engineered a proprietary, bank-grade Private AI Augmentation engine utilizing LangChain, Claude 3.5 Sonnet, and Pinecone vector database. The system automatically ingests tax returns, superannuation statements, and trust deeds, extracting key fiscal metrics and producing formatted compliant advisor drafts in under 4 minutes.",
    techStack: ["Claude 3.5 Sonnet", "Python / FastAPI", "LangChain", "Pinecone Vector DB", "SOC-2 Vault"],
    beforeMetrics: [
      { label: "Proposal Generation Turnaround", value: "4.5 Days" },
      { label: "Weekly Manual Analysis Time", value: "22 hrs/advisor" },
      { label: "New Client Onboarding Capacity", value: "4 clients/mo" },
      { label: "Prospect Lead-to-Close Rate", value: "31%" },
    ],
    afterMetrics: [
      { label: "Proposal Generation Turnaround", value: "28 Mins (96% Faster)" },
      { label: "Weekly Manual Analysis Time", value: "2.5 hrs/advisor" },
      { label: "New Client Onboarding Capacity", value: "16 clients/mo (4x)" },
      { label: "Prospect Lead-to-Close Rate", value: "64% (2.1x)" },
    ],
    quote: {
      text: "The AI system generates accurate client portfolio analysis in minutes rather than days. Our advisors now spend their time speaking with high-net-worth clients instead of copy-pasting numbers from tax returns. We onboarded $3.4M in new assets in month one.",
      author: "David H. Sterling",
      title: "Senior Partner, TrueNorth Advisory",
    },
    keyFeatures: [
      "Bank-grade air-gapped private vector database with zero public model training",
      "Automated extraction from scanned PDFs, bank statements, and Australian trust deeds",
      "Compliance-checked draft generation aligned with Australian AFSL guidelines",
      "Interactive natural language Q&A across historical client portfolios",
    ],
    resultsSummary:
      "Cut proposal drafting turnaround from 4.5 days to under 30 minutes, quadrupled advisor onboarding capacity, and unlocked $3.4M in new assets under management.",
    deliverables: [
      "Private Air-Gapped RAG Knowledge Architecture",
      "Financial PDF Vision Extraction Pipeline",
      "Automated Statement of Advice (SoA) Generator",
      "Role-Based Access Control & SOC-2 Audit Logging",
    ],
  },
];
