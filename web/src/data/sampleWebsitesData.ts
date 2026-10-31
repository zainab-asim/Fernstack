export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface ClientSite {
  id: string;
  name: string;
  concept: string;
  domain: string;
  image: string;
  badge: string;
  headlineMain: string;
  headlineHighlight: string;
  headlineEnd: string;
  subheadline: string;
  phone: string;
  rating: string;
  ratingCount: number;
  abn: string;
  license: string;
  hours: string;
  address: string;
  featureTitle: string;
  featureDesc: string;
  featureChecks: string[];
  widgetNumber: string;
  widgetText: string;
  stats: { label: string; value: string }[];
  services: ServiceItem[];
  gallery: { title: string; subtitle: string; tag: string; value: string }[];
  reviewsList: { name: string; location: string; time: string; text: string }[];
  testimonial: { quote: string; author: string };
  theme: {
    bg: string;
    navBg: string;
    accent: string;
    accentGrad: string;
    glow: string;
    border: string;
    borderHover: string;
    cardBg: string;
    heroBg: string;
    heading: string;
    dim: string;
  };
}

export const sampleWebsites: ClientSite[] = [
  {
    id: "apex-renovations",
    name: "Apex Build & Renovations",
    concept: "Bespoke Architectural Builders · Adelaide",
    domain: "apexbuildrenovations.com.au",
    image: "/img/showcase/apex_hero.jpg",
    badge: "Master Builders SA · 2026 Excellence Winner",
    headlineMain: "Architectural Perfection.",
    headlineHighlight: "Built For Generations.",
    headlineEnd: "",
    subheadline:
      "Specializing in luxury second-storey extensions, bespoke architectural reconfigurations, and mastercraft renovations across Adelaide and the Eastern Suburbs.",
    phone: "(08) 8234 5678",
    rating: "5.0 ★★★★★ (48 Google Reviews)",
    ratingCount: 48,
    abn: "ABN 43 892 104 221",
    license: "Master Builders Lic #BLD291038",
    hours: "Mon to Fri 7:00am to 5:30pm, Sat by Appt",
    address: "Adelaide CBD & Eastern Suburbs, SA",
    featureTitle: "The Apex Fixed-Price Architecture Guarantee",
    featureDesc:
      "From initial 3D BIM modeling to handover, you receive guaranteed completion dates and rigid cost control with zero hidden variation fees.",
    featureChecks: [
      "Dedicated On-Site Project Manager Everyday",
      "Full Council Approval & Engineering Handled",
      "10-Year Structural Workmanship Warranty",
      "Architectural Grade Materials & Fixtures Only",
    ],
    widgetNumber: "$45M+",
    widgetText: "Luxury residential builds delivered on-budget across South Australia",
    stats: [
      { label: "Completed Projects", value: "240+" },
      { label: "HIA & Master Builders", value: "Licensed" },
      { label: "Design Awards", value: "18" },
      { label: "On-Time Handover", value: "100%" },
    ],
    services: [
      {
        title: "Architectural Extensions",
        desc: "Seamlessly expanding your home footprint with bespoke second-storey additions and indoor-outdoor pavilions.",
        icon: "🏗️",
      },
      {
        title: "Designer Kitchen Remodels",
        desc: "Custom handcrafted cabinetry, seamless natural stone islands, premium Miele/Gaggenau suites, and custom joinery.",
        icon: "🍳",
      },
      {
        title: "Luxury Ensuite Retreats",
        desc: "Large format porcelain tiling, freestanding stone baths, brushed brass tapware, and frameless rainwater showers.",
        icon: "🚿",
      },
    ],
    gallery: [
      {
        title: "Glenelg Heritage Villa Transformation",
        subtitle: "Full ground-floor reconfiguration & outdoor living pavilion",
        tag: "Completed March 2026",
        value: "$480k Value",
      },
      {
        title: "Stirling Modernist Glass Pavilion",
        subtitle: "Second-storey cantilevered master retreat with bushland panoramic views",
        tag: "Completed Jan 2026",
        value: "$620k Value",
      },
      {
        title: "Unley Designer Kitchen & Cellar",
        subtitle: "Calacatta marble island, custom blackbutt joinery & 400-bottle cellar",
        tag: "Completed Nov 2025",
        value: "$195k Value",
      },
    ],
    reviewsList: [
      {
        name: "Marcus & Sarah Sterling",
        location: "Glenelg, SA",
        time: "Reviewed 2 weeks ago",
        text: "Apex Build exceeded every expectation on our 1920s bungalow. They kept the site immaculate, finished 2 weeks early, and the finish is museum quality.",
      },
      {
        name: "Dr. Andrew Harrison",
        location: "Stirling, SA",
        time: "Reviewed 1 month ago",
        text: "Honest upfront fixed pricing. We had zero variation surprises and their daily photo updates gave our family complete confidence.",
      },
      {
        name: "Elena Rostova",
        location: "Unley, SA",
        time: "Reviewed 2 months ago",
        text: "The team treated our heritage property with immense care. The joinery and stonework are breathtaking.",
      },
    ],
    testimonial: {
      quote:
        "Apex Build completely transformed our 1920s heritage bungalow into a breathtaking entertainer's home. The craftsmanship and attention to detail were second to none.",
      author: "Mark & Sarah Jenkins, Glenelg Beach",
    },
    theme: {
      bg: "#0c0e12",
      navBg: "rgba(12, 16, 22, 0.95)",
      accent: "#f59e0b",
      accentGrad: "linear-gradient(135deg, #f59e0b, #d97706)",
      glow: "rgba(245, 158, 11, 0.4)",
      border: "rgba(245, 158, 11, 0.22)",
      borderHover: "rgba(245, 158, 11, 0.55)",
      cardBg: "rgba(255, 255, 255, 0.03)",
      heroBg:
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245, 158, 11, 0.22), transparent 70%), #0c0e12",
      heading: "#ffffff",
      dim: "#94a3b8",
    },
  },
  {
    id: "bondi-clean",
    name: "Bondi Clean Commercial Facilities",
    concept: "Commercial Facilities & Clean Ops · Sydney",
    domain: "bondicleansydney.com.au",
    image: "/img/showcase/bondi_hero.jpg",
    badge: "Triple ISO Certified · 100% Eco-Neutral",
    headlineMain: "Immaculate Workspaces.",
    headlineHighlight: "Zero Downtime Facility Care.",
    headlineEnd: "",
    subheadline:
      "Hospital-grade commercial cleaning, corporate facility management, and green-star sanitation for Sydney CBD high-rises and medical suites.",
    phone: "(02) 9044 1188",
    rating: "5.0 ★★★★★ (112 Google Reviews)",
    ratingCount: 112,
    abn: "ABN 81 445 901 332",
    license: "NSW Commercial Facilities Master Lic #NSW88310",
    hours: "24/7/365 On-Demand & Nightly Operations",
    address: "Sydney CBD & Eastern Suburbs, NSW",
    featureTitle: "The Bondi Clean 65-Point White Glove Standard",
    featureDesc:
      "Every site is systematically maintained by security-cleared cleaning teams using non-toxic botanical hospital grade sanitizers with full digital audit logs.",
    featureChecks: [
      "All Staff Police-Cleared & Insured to $20M",
      "100% Plant-Based Non-Toxic Formulations",
      "Real-Time Digital QR Check-In Verification",
      "Guaranteed 2-Hour Emergency Spill Response",
    ],
    widgetNumber: "99.98%",
    widgetText: "Audit pass rate across 140+ corporate Sydney high-rises",
    stats: [
      { label: "Commercial Sites", value: "140+" },
      { label: "Security Clearance", value: "100%" },
      { label: "Client Retention", value: "98.4%" },
      { label: "ISO Accreditations", value: "Triple" },
    ],
    services: [
      {
        title: "Corporate Office Cleaning",
        desc: "Daily after-hours sanitization, HEPA filtration vacuuming, and premium washroom provisioning.",
        icon: "🏢",
      },
      {
        title: "Medical & Clinical Sanitation",
        desc: "Infection control compliant deep cleaning for dental clinics, day hospitals, and specialist suites.",
        icon: "🏥",
      },
      {
        title: "High-Rise Window & Facades",
        desc: "Rope access and water-fed pole streakless exterior glass cleaning up to 45 storeys.",
        icon: "✨",
      },
    ],
    gallery: [
      {
        title: "Barangaroo Tower 1 Financial Suite",
        subtitle: "Nightly sanitization & botanical surface care across 4 executive floors",
        tag: "Active 3-Year Retainer",
        value: "14,000 sqm",
      },
      {
        title: "Bondi Junction Specialist Medical Centre",
        subtitle: "Clinical terminal cleaning adhering to strict Australian AS/NZS 4187 standards",
        tag: "Daily Clean",
        value: "18 Consulting Rooms",
      },
      {
        title: "Surry Hills Tech Headquarters",
        subtitle: "Day porter services, eco-waste diversion & glass partition detailing",
        tag: "Active Contract",
        value: "350 Staff HQ",
      },
    ],
    reviewsList: [
      {
        name: "Marcus Vance",
        location: "Barangaroo, Sydney",
        time: "Reviewed 3 weeks ago",
        text: "Bondi Clean transformed the hygiene and visual presentation of our 12-floor corporate HQ. The digital QR logs provide absolute accountability.",
      },
      {
        name: "Dr. Chloe Martin",
        location: "Bondi Junction",
        time: "Reviewed 1 month ago",
        text: "Clinical cleaning requires zero compromise. Bondi Clean meets our surgical infection-control standards every single night.",
      },
      {
        name: "Liam O'Connor",
        location: "Surry Hills",
        time: "Reviewed 2 months ago",
        text: "Reliable, police-checked cleaners who take genuine pride in their work. Our office has never looked cleaner.",
      },
    ],
    testimonial: {
      quote:
        "Bondi Clean took over our 12-storey Barangaroo office facility. The difference in hygiene, air quality, and daily presentation was immediate and noticeable to all partners.",
      author: "Marcus Vance, Operations Director, Barangaroo",
    },
    theme: {
      bg: "#05111a",
      navBg: "rgba(5, 17, 26, 0.95)",
      accent: "#38bdf8",
      accentGrad: "linear-gradient(135deg, #0284c7, #38bdf8)",
      glow: "rgba(56, 189, 248, 0.45)",
      border: "rgba(56, 189, 248, 0.22)",
      borderHover: "rgba(56, 189, 248, 0.55)",
      cardBg: "rgba(255, 255, 255, 0.03)",
      heroBg:
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(2, 132, 199, 0.28), transparent 70%), #05111a",
      heading: "#ffffff",
      dim: "#94a3b8",
    },
  },
  {
    id: "truenorth-wealth",
    name: "TrueNorth Private Wealth & Advisory",
    concept: "Family Office & Wealth Stewardship · Melbourne",
    domain: "truenorthwealth.com.au",
    image: "/img/showcase/truenorth_hero.jpg",
    badge: "AFSL Licensed #482910 · FPA Principal Practice",
    headlineMain: "Strategic Wealth Stewardship.",
    headlineHighlight: "Protecting Generational Value.",
    headlineEnd: "",
    subheadline:
      "Discretionary portfolio architecture, family office structuring, and executive tax optimization for Australia's business founders and medical specialists.",
    phone: "(03) 9866 4200",
    rating: "5.0 ★★★★★ (36 Client Reviews)",
    ratingCount: 36,
    abn: "ABN 29 602 114 883",
    license: "ASIC Australian Financial Services Licence #482910",
    hours: "Mon to Fri 8:30am to 5:30pm, By Private Appt",
    address: "Collins St, Melbourne VIC 3000",
    featureTitle: "Fee-Only, Non-Aligned Wealth Advisory Model",
    featureDesc:
      "We accept zero institutional kickbacks or commissions. Every asset allocation decision is 100% fiduciary, transparent, and solely aligned with your family goals.",
    featureChecks: [
      "Completely Independent & Non-Aligned Fiduciary",
      "Tax-Effective Multigenerational Trust Structures",
      "Direct Access to Private Equity & Real Assets",
      "Quarterly C-Suite Risk & Capital Reviews",
    ],
    widgetNumber: "$680M+",
    widgetText: "Private family wealth and investment capital stewarded",
    stats: [
      { label: "Capital Stewarded", value: "$680M+" },
      { label: "Fiduciary Alignment", value: "100%" },
      { label: "Client Retainers", value: "99.1%" },
      { label: "Years Operating", value: "16+" },
    ],
    services: [
      {
        title: "Discretionary Asset Allocation",
        desc: "Macro-resilient multi-asset portfolio construction focusing on capital preservation and franked yields.",
        icon: "📈",
      },
      {
        title: "Family Office Structuring",
        desc: "Comprehensive governance, intergenerational wealth succession, and philanthropic foundation setup.",
        icon: "🏛️",
      },
      {
        title: "Executive Tax & Entity Planning",
        desc: "Corporate restructures, division 7A management, and offshore compliance for high-net-worth directors.",
        icon: "⚖️",
      },
    ],
    gallery: [
      {
        title: "Multi-Generational Family Estate Transfer",
        subtitle: "Restructured $42M family enterprise across 3 generations with zero probate friction",
        tag: "Completed 2025",
        value: "$42M Portfolio",
      },
      {
        title: "Medical Practice Founder Liquidity Event",
        subtitle: "Pre-sale corporate carveout and diversified post-tax bond & global equity structure",
        tag: "Completed 2025",
        value: "$18.5M Exit",
      },
      {
        title: "Private Foundation & Philanthropic Trust",
        subtitle: "Established tax-exempt endowment generating perpetual annual grants for medical research",
        tag: "Ongoing Governance",
        value: "$8M Endowment",
      },
    ],
    reviewsList: [
      {
        name: "Jonathan & Eleanor Hayes",
        location: "Toorak, VIC",
        time: "Reviewed 1 month ago",
        text: "TrueNorth restructured our private family trust with complete fiduciary clarity. We avoided significant tax leakage and gained deep peace of mind.",
      },
      {
        name: "Geoffrey Thorne",
        location: "East Melbourne",
        time: "Reviewed 2 months ago",
        text: "Their independent, non-aligned model is what set them apart from the big banks. Their asset allocation has protected our capital during high inflation.",
      },
      {
        name: "Dr. Marianne Walsh",
        location: "South Yarra",
        time: "Reviewed 3 months ago",
        text: "TrueNorth handled the sale of my specialist clinical group. Outstanding advice on retirement capital sequencing.",
      },
    ],
    testimonial: {
      quote:
        "TrueNorth restructured our family business succession and private trust portfolio. Their fiduciary independence gave us absolute clarity and peace of mind.",
      author: "Dr. Jonathan & Eleanor Hayes, Toorak",
    },
    theme: {
      bg: "#060f18",
      navBg: "rgba(6, 15, 24, 0.95)",
      accent: "#60a5fa",
      accentGrad: "linear-gradient(135deg, #2563eb, #60a5fa)",
      glow: "rgba(96, 165, 250, 0.45)",
      border: "rgba(96, 165, 250, 0.2)",
      borderHover: "rgba(96, 165, 250, 0.5)",
      cardBg: "rgba(255, 255, 255, 0.03)",
      heroBg:
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37, 99, 235, 0.28), transparent 70%), #060f18",
      heading: "#ffffff",
      dim: "#94a3b8",
    },
  },
  {
    id: "pulse-dental",
    name: "Pulse Modern Cosmetic Dentistry",
    concept: "Cosmetic Dentistry & Smile Studio · Brisbane",
    domain: "pulsedentalstudio.com.au",
    image: "/img/showcase/pulse_hero.jpg",
    badge: "AHPRA Accredited · Digital Smile Design Studio",
    headlineMain: "Transformative Smiles.",
    headlineHighlight: "Painless Digital Dentistry.",
    headlineEnd: "",
    subheadline:
      "Handcrafted ultra-thin porcelain veneers, Invisalign clear aligners, and laser smile makeovers in a calming, spa-inspired Brisbane boutique suite.",
    phone: "(07) 3211 4455",
    rating: "5.0 ★★★★★ (284 Google Reviews)",
    ratingCount: 284,
    abn: "ABN 52 918 203 441",
    license: "AHPRA Dental Board Registration #DEN00021940",
    hours: "Mon to Fri 8:00am to 6:30pm, Sat 9:00am to 3:00pm",
    address: "James St, Fortitude Valley, Brisbane QLD",
    featureTitle: "3D Virtual Smile Test-Drive Before Treatment",
    featureDesc:
      "See and feel your new smile in real life before any procedure begins with our 3D intraoral digital scanners and physical aesthetic mockups.",
    featureChecks: [
      "Zero-Drill Minimally Invasive Porcelain Veneers",
      "Same-Day 3D Intraoral Digital Scans (No Goop)",
      "Complimentary Nitrous Sedation & Noise-Cancelling Audio",
      "Flexible Interest-Free Payment Options (From $49/wk)",
    ],
    widgetNumber: "4,200+",
    widgetText: "Custom smile makeovers designed with 5.0 Google stars",
    stats: [
      { label: "Smiles Designed", value: "4,200+" },
      { label: "Google Rating", value: "5.0 ★" },
      { label: "Veneer Warranty", value: "10 Years" },
      { label: "Painless Guarantee", value: "100%" },
    ],
    services: [
      {
        title: "Porcelain Veneers & Bonding",
        desc: "Individually handcrafted porcelain laminates that match your facial proportions with lifelike translucency.",
        icon: "✨",
      },
      {
        title: "Invisalign Clear Aligners",
        desc: "Virtually invisible orthodontic alignment with diamond-tier accredited providers in 6 to 12 months.",
        icon: "💎",
      },
      {
        title: "Laser Teeth Whitening",
        desc: "Philips Zoom Whitespeed in-chair laser lightening up to 8 shades in a single 60-minute relaxing session.",
        icon: "😁",
      },
    ],
    gallery: [
      {
        title: "10-Unit Master Porcelain Smile Design",
        subtitle: "Ultra-thin hand-layered feldspathic porcelain correcting enamel wear and asymmetry",
        tag: "Completed March 2026",
        value: "2 Appointments",
      },
      {
        title: "Invisalign Comprehensive + Laser Whitening",
        subtitle: "Correction of adult crowding followed by in-chair Zoom whitening",
        tag: "Completed Feb 2026",
        value: "7 Months Treatment",
      },
      {
        title: "Full Mouth Aesthetic Rehabilitation",
        subtitle: "Restored vertical dimension, bite equilibrium & radiant natural smile line",
        tag: "Completed Dec 2025",
        value: "Full Suite Makeover",
      },
    ],
    reviewsList: [
      {
        name: "Jessica Caldwell",
        location: "New Farm, Brisbane",
        time: "Reviewed 1 week ago",
        text: "Dr. Claire and the team are true artists. I got 8 porcelain veneers and they look completely natural. The studio feels like a 5-star spa, not a dental clinic.",
      },
      {
        name: "Tom Braithwaite",
        location: "Teneriffe",
        time: "Reviewed 3 weeks ago",
        text: "I had extreme dental anxiety. The sedation, Netflix ceiling screens, and gentle touch made my Invisalign and whitening completely stress-free.",
      },
      {
        name: "Sophie Nguyen",
        location: "Paddington",
        time: "Reviewed 1 month ago",
        text: "Best cosmetic dentists in Australia. The 3D preview allowed me to see exactly how my smile would look before committing.",
      },
    ],
    testimonial: {
      quote:
        "I spent years hiding my smile in photos. Dr. Claire and the Pulse team created 8 custom veneers that look completely natural. The entire experience was pain-free and luxurious.",
      author: "Jessica Caldwell, New Farm",
    },
    theme: {
      bg: "#fffaf7",
      navBg: "rgba(255, 255, 255, 0.96)",
      accent: "#f43f5e",
      accentGrad: "linear-gradient(135deg, #f43f5e, #fb7185)",
      glow: "rgba(244, 63, 94, 0.25)",
      border: "rgba(244, 63, 94, 0.18)",
      borderHover: "rgba(244, 63, 94, 0.45)",
      cardBg: "#ffffff",
      heroBg: "linear-gradient(135deg, #fffaf7 0%, #fff1f2 100%)",
      heading: "#0f172a",
      dim: "#64748b",
    },
  },
  {
    id: "roastcraft-coffee",
    name: "RoastCraft Specialty Coffee Roasters",
    concept: "Artisan Coffee Roastery & Wholesale · Melbourne",
    domain: "roastcraftcoffee.com.au",
    image: "/img/showcase/roastcraft_hero.jpg",
    badge: "Golden Bean Champion 2025 · Direct Trade",
    headlineMain: "Exceptional Single Origins.",
    headlineHighlight: "Roasted Daily in Melbourne.",
    headlineEnd: "",
    subheadline:
      "Ethically sourced microlot beans directly from high-altitude farms in Colombia, Ethiopia, and Guatemala, small-batch roasted on our custom cast-iron drum.",
    phone: "(03) 9419 7722",
    rating: "5.0 ★★★★★ (520 Verified Reviews)",
    ratingCount: 520,
    abn: "ABN 74 190 284 551",
    license: "Australian Specialty Coffee Association (ASCA) Gold Roaster",
    hours: "Mon to Fri 6:30am to 4:00pm, Sat 7:30am to 3:00pm",
    address: "Fitzroy Laneway, Melbourne VIC 3065",
    featureTitle: "Direct-Trade Ethos & Same-Day Dispatch",
    featureDesc:
      "We pay farm-gate prices 250% above fair-trade minimums. Every roast batch is cupped and verified with roast dates stamped on 100% recyclable foil valved bags.",
    featureChecks: [
      "100% Direct-Trade Farm Gate Relationships",
      "Small-Batch Roasted in 15kg Cast-Iron Drums",
      "Dispatched Within 24 Hours of Roasting",
      "Comprehensive Barista Wholesale Equipment & Training",
    ],
    widgetNumber: "18,500+",
    widgetText: "Kilos of specialty coffee shipped to Australian cafes and homes",
    stats: [
      { label: "Cafes Supplied", value: "85+" },
      { label: "Cupping Score", value: "88+ Pts" },
      { label: "Golden Bean Awards", value: "9 Medals" },
      { label: "Fresh Dispatch", value: "24 Hours" },
    ],
    services: [
      {
        title: "Specialty Cafe Wholesale",
        desc: "Custom house blends, single-origin rotating selections, Slayer/La Marzocco machinery, and ongoing staff training.",
        icon: "☕",
      },
      {
        title: "Fresh Coffee Subscriptions",
        desc: "Curated microlot beans delivered to your doorstep fortnightly or monthly, ground to your brewing method.",
        icon: "📦",
      },
      {
        title: "Cold Brew Kegging Systems",
        desc: "Nitrogen-infused cold brew on tap for corporate offices, events, and premium hospitality venues.",
        icon: "🧊",
      },
    ],
    gallery: [
      {
        title: "Colombia Huila Geisha Microlot",
        subtitle: "Anaerobic washed process with jasmine aromatics, bergamot & white peach sweetness",
        tag: "Cup Score 91.5",
        value: "Single Origin",
      },
      {
        title: "Ethiopia Yirgacheffe Natural",
        subtitle: "Sun-dried heirloom varietals delivering lush blueberry jam and dark chocolate body",
        tag: "Cup Score 89.0",
        value: "Direct Trade",
      },
      {
        title: "Velvet Hammer Espresso Blend",
        subtitle: "Our flagship 3-region cafe roast crafted for sweet caramel milk-based drinks",
        tag: "Golden Bean Gold Medal",
        value: "Wholesale Staple",
      },
    ],
    reviewsList: [
      {
        name: "Marco Rossi",
        location: "Fitzroy, Melbourne",
        time: "Reviewed 5 days ago",
        text: "Switching our cafe to RoastCraft increased our morning coffee lines by 40%. The roast consistency is second to none.",
      },
      {
        name: "Sarah Jenkins",
        location: "Carlton",
        time: "Reviewed 2 weeks ago",
        text: "Best home subscription in Australia. Beans always arrive within 48 hours of being roasted with incredible aroma.",
      },
      {
        name: "Dave K.",
        location: "South Melbourne",
        time: "Reviewed 1 month ago",
        text: "Their Colombia Geisha blew our minds. Complex, juicy, and clean. Customer service is also 10/10.",
      },
    ],
    testimonial: {
      quote:
        "Switching our 3 laneway cafes to RoastCraft was the best commercial decision we made. Our morning customer lines doubled, and the roast consistency is flawless.",
      author: "Marco Rossi, Founder, Laneway Espresso Group",
    },
    theme: {
      bg: "#180e07",
      navBg: "rgba(24, 14, 7, 0.95)",
      accent: "#f97316",
      accentGrad: "linear-gradient(135deg, #ea580c, #f97316)",
      glow: "rgba(249, 115, 22, 0.4)",
      border: "rgba(249, 115, 22, 0.25)",
      borderHover: "rgba(249, 115, 22, 0.6)",
      cardBg: "#22130a",
      heroBg:
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(234, 88, 12, 0.35), transparent 70%), #180e07",
      heading: "#fef3c7",
      dim: "#fed7aa",
    },
  },
  {
    id: "tradietrack-mobile",
    name: "FieldFlow & TradieTrack Pro",
    concept: "Job Management & Invoicing App · Australia",
    domain: "fieldflowtradie.com.au",
    image: "/img/showcase/tradietrack_hero.jpg",
    badge: "Built for Aussie Tradies · Xero & MYOB Certified",
    headlineMain: "Quote in 60 Seconds.",
    headlineHighlight: "Get Paid on Job Completion.",
    headlineEnd: "",
    subheadline:
      "The all-in-one mobile app for electricians, plumbers, and builders. Live GPS van tracking, tap-on-phone card payments, automated job scheduling, and supplier price books.",
    phone: "1300 872 343",
    rating: "4.9 ★★★★★ (1,450 App Store Reviews)",
    ratingCount: 1450,
    abn: "ABN 63 901 884 219",
    license: "Australian Financial Services Representative #994103",
    hours: "Support: 6:00am to 8:00pm AEST (7 Days)",
    address: "Adelaide & Melbourne Technical Labs",
    featureTitle: "Cut Admin Time by 14 Hours Every Week",
    featureDesc:
      "Stop doing paperwork at 9 PM at the kitchen table. Generate professional PDF quotes from your ute, capture customer signatures, and take card payments on the spot.",
    featureChecks: [
      "Zero Setup Fee & 14-Day Free Live Trial",
      "Instant 2-Way Sync with Xero, MYOB & QuickBooks",
      "Live Supplier Price Books (Reece, Middy's, Bunnings)",
      "Offline Mode Works in Basements and Rural Sites",
    ],
    widgetNumber: "68%",
    widgetText: "Faster customer invoice payment with on-site tap-to-pay",
    stats: [
      { label: "Tradie Users", value: "3,800+" },
      { label: "Weekly Admin Saved", value: "14 Hours" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Invoices Processed", value: "$120M+" },
    ],
    services: [
      {
        title: "Tap-to-Pay On-Site Payments",
        desc: "Accept Visa, Mastercard, Apple Pay and Google Pay directly on your phone with instant low 1.2% processing.",
        icon: "💳",
      },
      {
        title: "Smart GPS Dispatch & Scheduling",
        desc: "Drag-and-drop crew scheduling with real-time van route optimization and automated SMS arrival updates.",
        icon: "📍",
      },
      {
        title: "Automated Supplier Quoting",
        desc: "Live wholesale pricing integration from major Australian trade suppliers for accurate material markups.",
        icon: "⚡",
      },
    ],
    gallery: [
      {
        title: "BD Electrical Adelaide 6-Van Fleet",
        subtitle: "Replaced paper job cards with TradieTrack iOS iPads across all vans",
        tag: "Fleet Deployment",
        value: "+$42k Cash Flow Lift",
      },
      {
        title: "Coastline Plumbing & Gas Sydney",
        subtitle: "Automated blocked-drain quotes with live Reece price syncing",
        tag: "Active 400 Jobs/Mo",
        value: "Zero Unbilled Parts",
      },
      {
        title: "Apex Air Conditioning Brisbane",
        subtitle: "Instant customer deposit capture with on-site tap-to-pay card reader",
        tag: "Payment Processing",
        value: "68% Faster Pay",
      },
    ],
    reviewsList: [
      {
        name: "Brett Davies",
        location: "BD Electrical, Adelaide",
        time: "Reviewed 4 days ago",
        text: "TradieTrack changed our business. We went from chasing $40k in overdue invoices to getting paid 90% of jobs before the guys drive away from the site.",
      },
      {
        name: "Sam Wilson",
        location: "Coastline Plumbing, Sydney",
        time: "Reviewed 2 weeks ago",
        text: "The Xero sync is flawless. Quoting takes literally 60 seconds from my phone while standing in front of the customer.",
      },
      {
        name: "Jason Miller",
        location: "Apex Air, Brisbane",
        time: "Reviewed 1 month ago",
        text: "Best app on the Australian market for tradies. Saved me at least 15 hours of paperwork every single weekend.",
      },
    ],
    testimonial: {
      quote:
        "TradieTrack changed our 6-van electrical business overnight. We went from chasing $40k in overdue invoices to getting paid 90% of jobs before the guys drive away from the site.",
      author: "Brett Davies, Director, BD Electrical Adelaide",
    },
    theme: {
      bg: "#070e1b",
      navBg: "rgba(7, 14, 27, 0.95)",
      accent: "#3b82f6",
      accentGrad: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
      glow: "rgba(59, 130, 246, 0.5)",
      border: "rgba(59, 130, 246, 0.22)",
      borderHover: "rgba(59, 130, 246, 0.55)",
      cardBg: "rgba(255, 255, 255, 0.03)",
      heroBg:
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(29, 78, 216, 0.32), transparent 70%), #070e1b",
      heading: "#ffffff",
      dim: "#93c5fd",
    },
  },
];
