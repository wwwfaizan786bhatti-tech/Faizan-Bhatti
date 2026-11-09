export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  thumbnail: string;
  summary: string;
  overview: string;
  technologies: string[];
  metricsPlaceholder: {
    label: string;
    value: string;
    note: string;
  }[];
  challenge: string;
  solution: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientIndustry: string;
  businessChallenge: string;
  marketingStrategy: string;
  platform: string;
  campaignExecution: string;
  metrics: {
    roas: string;
    cpc: string;
    ctr: string;
    conversionRate: string;
    leadsGenerated: string;
    revenueGrowth: string;
  };
  lessonsLearned: string;
  verifiedStatus: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  role: string;
  industry: string;
  avatar: string;
  rating: number;
  feedback: string;
  date: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  platform: string;
  pricePKR: string;
  billingPeriod: string;
  popularBadge?: string;
  tagline: string;
  features: string[];
  recommendedFor: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  platform: string;
  imageUrl: string;
  resultsMetric: string;
  caption: string;
  date: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Faizan Bhatti",
    shortName: "FB",
    tagline: "Digital Marketing Expert | Performance Marketing Strategist | Website Development Specialist",
    experienceYears: 20,
    experienceBadge: "20 Years of Professional Excellence",
    avatarImage: "/assets/aistudio/my_1_pic_9c84b1e7.png",
    bioSnippet: "Hi, I'm Faizan Bhatti — A Digital Marketing Expert with 20 Years of Experience in Performance Marketing, Paid Advertising, Business Growth, and Website Development.",
    heroSupporting: "I help businesses build powerful digital identities, attract high-quality customers, generate leads, increase conversions, and achieve measurable online growth through intelligent marketing strategies.",
    mainBio: [
      "Faizan Bhatti is a Digital Marketing Expert, Performance Marketing Strategist, and Website Development Specialist with 20 years of professional experience.",
      "With extensive expertise across Google Ads, Meta Ads, Facebook Ads, Instagram Ads, TikTok Ads, and website development, Faizan focuses on helping businesses establish a powerful digital presence and achieve sustainable online growth.",
      "His professional approach combines strategic thinking, data-driven advertising, audience targeting, conversion optimization, creative marketing, and modern website technologies.",
      "His mission is to help startups, entrepreneurs, small businesses, and established companies unlock their full digital potential."
    ],
    philosophy: "Sustainable commercial success is never an accident. It is engineered by synchronizing rigorous audience research, high-intent paid traffic, conversion-rate optimized websites, and ruthless analytics tracking.",
    cvDownloadUrl: "#download-cv",
  },

  contact: {
    email: "www.faizan786bhatti@gmail.com",
    phone: "+92 308 4476211",
    phoneDisplay: "+92 308 4476211 (Direct / WhatsApp)",
    whatsappNumber: "923084476211",
    whatsappDefaultMessage: "Hello Faizan! I am interested in your digital marketing and website development services. Let's discuss my project.",
    location: "Global Remote Consulting & Worldwide Strategy",
    availability: "Accepting New Client Engagements for Q1 / Q2",
    socials: {
      linkedin: "https://www.linkedin.com/in/faizanmarketing/",
      facebook: "https://www.facebook.com/faizanbhatti",
      instagram: "https://www.instagram.com/faizanbhatti",
      whatsapp: "https://wa.me/923084476211?text=Hello%20Faizan%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project.",
      youtube: "https://www.youtube.com/@faizanbhatti",
      twitter: "https://twitter.com/faizanbhatti",
    }
  },

  pricingPackages: [
    {
      id: "pkg-google-ads",
      name: "Google Ads Management",
      platform: "Google Ads",
      pricePKR: "50,000",
      billingPeriod: "per month",
      popularBadge: "Highest Intent ROI",
      tagline: "End-to-end setup and scaling across Google Search, Performance Max (PMax), and YouTube Ads.",
      features: [
        "Google Search Ads & High-Intent Keyword Mining",
        "Performance Max (PMax) Cross-Channel Campaigns",
        "YouTube Video Action Ads & Shorts Strategy",
        "Extensive Negative Keyword Sculpting (Zero Waste)",
        "Google Tag Manager & GA4 Conversion Tracking",
        "Bi-Weekly Strategy Calls & Live Dashboards"
      ],
      recommendedFor: "Businesses wanting immediate high-intent customer leads & scalable revenue.",
      whatsappMessage: "Hello Faizan! I am interested in booking your Google Ads Management package (PKR 50,000 / month). Let's connect."
    },
    {
      id: "pkg-meta-ads",
      name: "Meta Ads (Facebook & Instagram)",
      platform: "Meta Ads",
      pricePKR: "40,000",
      billingPeriod: "per month",
      popularBadge: "Best for Scale",
      tagline: "Full-funnel customer acquisition with predictive lookalikes, DCT testing, and Conversions API (CAPI).",
      features: [
        "Dynamic Creative Testing (DCT) Engine",
        "Lookalike & Custom Audience Precision Modeling",
        "Advantage+ Shopping & Catalog Ads Setup",
        "Meta Conversions API (CAPI) Server Gateway",
        "Creative Fatigue Mitigation & Copywriting",
        "Weekly Optimization & Return on Ad Spend (ROAS) Reports"
      ],
      recommendedFor: "E-commerce stores and service providers ready to scale social customer acquisition.",
      whatsappMessage: "Hello Faizan! I want to hire you for Meta Ads Management (PKR 40,000 / month). Let's discuss my brand."
    },
    {
      id: "pkg-instagram-ads",
      name: "Instagram Advertising Specialist",
      platform: "Instagram Ads",
      pricePKR: "35,000",
      billingPeriod: "per month",
      popularBadge: "Mobile Visual Growth",
      tagline: "High-aesthetic mobile video ads, Reels funnels, and automated Direct Message (DM) lead generation.",
      features: [
        "Reels Video Ad Creative Direction & Hooks",
        "Story Polls & Swipe-Up Direct Response Funnels",
        "Direct-to-DM Lead Qualification Automation",
        "Shoppable Instagram Product Catalog Integration",
        "Influencer Whitelisting & Partner Scaling",
        "Audience Retargeting & Brand Engagement"
      ],
      recommendedFor: "Lifestyle brands, fashion, retail, and visual products wanting mobile sales.",
      whatsappMessage: "Hello Faizan! I am interested in your Instagram Advertising Specialist package (PKR 35,000 / month)."
    },
    {
      id: "pkg-tiktok-ads",
      name: "TikTok Ads Growth Accelerator",
      platform: "TikTok Ads",
      pricePKR: "45,000",
      billingPeriod: "per month",
      popularBadge: "Viral Customer Surge",
      tagline: "Rapid customer acquisition with native short-form video creative, Spark Ads, and trend hijacking.",
      features: [
        "First-3-Second Retention Hook Engineering",
        "TikTok Spark Ads & Creator Asset Scaling",
        "TikTok Pixel & Events API Full Integration",
        "Instant Page Lead Form Optimization",
        "Algorithmic Trend & Sound Synchronization",
        "Weekly Cost-Per-Acquisition (CPA) Audits"
      ],
      recommendedFor: "Brands targeting high-growth younger and viral consumer demographics.",
      whatsappMessage: "Hello Faizan! I would like to book your TikTok Ads Growth package (PKR 45,000 / month)."
    },
    {
      id: "pkg-website-dev",
      name: "Full-Stack Website Development",
      platform: "Website Dev",
      pricePKR: "75,000",
      billingPeriod: "one-time project",
      popularBadge: "Conversion Foundation",
      tagline: "High-speed, SEO-hardened business website built to turn expensive ad clicks into paying clients.",
      features: [
        "Custom Modern Responsive UI/UX (Mobile & Desktop)",
        "Core Web Vitals 95+ PageSpeed Guarantee",
        "Technical SEO & Structured Schema.org Markup",
        "Direct WhatsApp & Validated Lead Capture Routing",
        "WordPress or Custom Lightweight React Tech Stack",
        "30-Day Post-Launch Maintenance & Support"
      ],
      recommendedFor: "Companies needing a world-class digital storefront that actually converts.",
      whatsappMessage: "Hello Faizan! I am interested in your Website Development package (PKR 75,000). Let's discuss requirements."
    }
  ],

  adGallery: [
    {
      id: "gal-1",
      title: "Google Ads High-Intent Search & PMax Revenue",
      platform: "Google Ads",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      resultsMetric: "ROAS: 4.82x · $54,200 Revenue",
      caption: "High-intent commercial keywords and localized Performance Max asset groups.",
      date: "October 2026"
    },
    {
      id: "gal-2",
      title: "Meta Advantage+ Dynamic Creative Testing (Facebook)",
      platform: "Meta Ads",
      imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80",
      resultsMetric: "CPA: -38% · 1,420 Purchases",
      caption: "Dynamic creative variation testing across 12 high-converting hooks.",
      date: "September 2026"
    },
    {
      id: "gal-3",
      title: "TikTok Ads Native Viral Creator Hook",
      platform: "TikTok Ads",
      imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80",
      resultsMetric: "1.4M Views · $0.018 CPV",
      caption: "Problem-solving UGC demonstration capturing retention in the first 3 seconds.",
      date: "August 2026"
    },
    {
      id: "gal-4",
      title: "Instagram Reels Mobile Direct Response Ad",
      platform: "Instagram Ads",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
      resultsMetric: "3.4x ROAS · 380 Qualified DMs",
      caption: "Mobile vertical video ad funnel with automated direct message qualification.",
      date: "October 2026"
    },
    {
      id: "gal-5",
      title: "YouTube Video Action & In-Stream Remarketing",
      platform: "Google Ads",
      imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1000&q=80",
      resultsMetric: "68% View-Rate · 4.15x ROAS",
      caption: "Cross-device remarketing sequence driving high-ticket conversions.",
      date: "July 2026"
    },
    {
      id: "gal-6",
      title: "Meta Ads Instant Lead Form & CRM Routing",
      platform: "Meta Ads",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      resultsMetric: "240+ Booked Appointments",
      caption: "Filtered multi-step lead capture integrated via Meta Conversions API (CAPI).",
      date: "August 2026"
    }
  ],

  coreExpertise: [
    {
      id: "google-ads",
      title: "Google Ads Mastery",
      description: "Professional Google advertising strategies, search campaigns, display advertising, YouTube ads, keyword targeting, conversion tracking, and campaign optimization.",
      bulletPoints: [
        "Google Search Ads & High-Intent Keyword Harvesting",
        "Performance Max (PMax) Architecture & Bidding",
        "YouTube In-Stream & Shorts Video Advertising",
        "Google Display Network Remarketing & Discovery",
        "Server-Side Conversion Tracking & Offline Imports"
      ],
      icon: "Search"
    },
    {
      id: "meta-ads",
      title: "Meta Advertising",
      description: "Advanced Facebook and Meta advertising strategies designed to increase brand awareness, generate leads, and drive sales.",
      bulletPoints: [
        "Full-Funnel Meta Ad Set Architecture",
        "Lookalike & Custom Audience Precision Modeling",
        "Creative Fatigue Mitigation & Dynamic Creative Testing",
        "Meta Conversions API (CAPI) Data Integration",
        "E-commerce Catalog & Advantage+ Shopping Campaigns"
      ],
      icon: "Share2"
    },
    {
      id: "instagram-ads",
      title: "Instagram Advertising",
      description: "Instagram campaign management, audience targeting, creative strategy, reels advertising, and conversion-focused campaigns.",
      bulletPoints: [
        "Reels Native Video Ad Creative Strategy",
        "Direct-to-DM & Lead Form Engagement Funnels",
        "Visual Brand Storytelling & Story Placements",
        "Influencer Whitelisting & Partner Content Scaling",
        "Shopping & Product Tagging Integration"
      ],
      icon: "Instagram"
    },
    {
      id: "tiktok-ads",
      title: "TikTok Advertising",
      description: "TikTok Ads strategy, campaign creation, audience targeting, video advertising, and performance optimization.",
      bulletPoints: [
        "Native Trend-Aware Video Creative Direction",
        "TikTok Pixel & Events API Implementation",
        "Spark Ads & Creator Collaboration Scaling",
        "High-Velocity Hook & Retention Optimization",
        "Global & Regional Geo-Targeting Campaigns"
      ],
      icon: "Video"
    },
    {
      id: "website-dev",
      title: "Website Development",
      description: "Modern, responsive, fast-loading, SEO-friendly, and conversion-focused websites for businesses and personal brands.",
      bulletPoints: [
        "Custom Business Portals & High-Speed React Applications",
        "Enterprise WordPress & Headless CMS Architecture",
        "Lightning PageSpeed Core Web Vitals Optimization",
        "Mobile-First Responsive Wireframing & UX Design",
        "Technical SEO, Semantic Markup & Structured Schema"
      ],
      icon: "Code2"
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description: "Data-driven marketing strategies focused on measurable business growth, ROI, lead generation, and customer acquisition.",
      bulletPoints: [
        "Unit Economics & Customer Acquisition Cost (CAC) Modeling",
        "Multi-Touch Attribution & Funnel Drop-off Auditing",
        "Omni-Channel Media Budget Allocation & Scaling",
        "Customer Lifetime Value (LTV) Maximization",
        "Predictive ROI Forecasts & Weekly Growth Reporting"
      ],
      icon: "TrendingUp"
    },
    {
      id: "seo-organic",
      title: "SEO & Organic Growth",
      description: "Search engine optimization, website visibility, keyword research, technical SEO, and content optimization.",
      bulletPoints: [
        "Technical Site Architecture & Crawlability Audits",
        "Commercial Intent Keyword Strategy & Content Hubs",
        "High-Authority Backlink Acquisition & Digital PR",
        "Local Map Pack SEO & Google Business Profile Domination",
        "Schema.org Semantic Integration for Rich Snippets"
      ],
      icon: "Globe"
    },
    {
      id: "cro-funnels",
      title: "Conversion Optimization",
      description: "Landing pages, conversion tracking, sales funnels, user experience, and lead conversion strategies.",
      bulletPoints: [
        "High-Converting Direct Response Landing Page Design",
        "A/B Multivariate Testing of Headlines & Offers",
        "Heatmap, Scroll-Depth & Session Recording Analysis",
        "Frictionless Multi-Step Lead Capture Forms",
        "Checkout Funnel Friction Elimination & Cart Recovery"
      ],
      icon: "Target"
    }
  ],

  services: [
    {
      id: "srv-google-ads",
      title: "Google Ads Campaign Management",
      category: "advertising",
      shortDesc: "End-to-end setup, negative keyword audits, smart bidding management, and weekly ROI optimization on Google Search and YouTube.",
      fullDesc: "Comprehensive management of Google Ads accounts to maximize Return On Ad Spend (ROAS). We structure campaigns by intent, eliminate wasted budget with extensive negative lists, and implement smart value-based bidding.",
      deliverables: ["Account Restructure", "Competitor Keyword Analysis", "Conversion Tracking Validation", "Ad Copy A/B Testing", "Bi-Weekly Strategy Calls"],
      timeline: "Ongoing Retainer / 2-Week Setup",
      iconName: "Search"
    },
    {
      id: "srv-meta-ads",
      title: "Facebook & Meta Ads Management",
      category: "advertising",
      shortDesc: "Scale your customer acquisition with predictive audience targeting, high-converting creative testing, and Meta CAPI integration.",
      fullDesc: "Drive qualified leads and scalable e-commerce sales across Facebook and Messenger. We manage budget pacing, creative rotations, and retargeting funnels that adapt to algorithmic changes.",
      deliverables: ["Full-Funnel Campaign Setup", "Creative Briefs & Copywriting", "Custom & Lookalike Audiences", "Meta CAPI Setup", "Weekly Performance Dashboard"],
      timeline: "Monthly Management / Sprint Basis",
      iconName: "Share2"
    },
    {
      id: "srv-instagram-ads",
      title: "Instagram Ads Management",
      category: "advertising",
      shortDesc: "Captivate mobile audiences with high-impact Reels, Stories, and carousel ads tailored to your brand aesthetic.",
      fullDesc: "Turn Instagram scrolling into paying customers. We deploy visually compelling video and carousel ads designed specifically for mobile feeds, driving followers into automated sales pipelines.",
      deliverables: ["Reels Video Ad Direction", "Story Poll & Swipe-Up Funnels", "Product Catalog Tagging", "Direct-Message Lead Campaigns", "Engagement Audits"],
      timeline: "Monthly Retainer",
      iconName: "Instagram"
    },
    {
      id: "srv-tiktok-ads",
      title: "TikTok Ads Management",
      category: "advertising",
      shortDesc: "Tap into viral video marketing and younger demographics with native-feeling TikTok ad creative and Spark Ads.",
      fullDesc: "Harness TikTok's algorithmic momentum without looking like a generic corporate ad. We strategize UGC-style scripts, optimize hooks in the first 3 seconds, and track full-funnel conversions.",
      deliverables: ["TikTok Ad Account Setup", "Hook Optimization Strategy", "Spark Ad Influencer Coordination", "Pixel & Event Tracking", "Pacing & Frequency Control"],
      timeline: "Monthly Retainer",
      iconName: "Video"
    },
    {
      id: "srv-web-dev",
      title: "Website Design & Development",
      category: "development",
      shortDesc: "Bespoke, blazing-fast, and mobile-optimized business websites engineered to turn visitors into booked clients.",
      fullDesc: "We design and build clean, modern web applications that project authority, load under 1.5 seconds, and incorporate frictionless conversion funnels.",
      deliverables: ["UI/UX Wireframes & Prototypes", "Responsive Frontend Code", "Core Web Vitals 95+ Score", "SEO Semantic Structure", "CMS Integration"],
      timeline: "3 to 5 Weeks",
      iconName: "Layout"
    },
    {
      id: "srv-wordpress-dev",
      title: "WordPress Website Development",
      category: "development",
      shortDesc: "Enterprise-grade WordPress builds with secure architectures, custom themes, and intuitive content management.",
      fullDesc: "Tailored WordPress websites without bloated page builders. Fast, clean, easily editable by your in-house team, and hardened against security vulnerabilities.",
      deliverables: ["Custom Theme Development", "Plugin Minimization & Hardening", "Speed Optimization", "Client Training Video Guides", "Automated Backup Setup"],
      timeline: "2 to 4 Weeks",
      iconName: "Database"
    },
    {
      id: "srv-ecommerce-dev",
      title: "E-commerce Website Development",
      category: "development",
      shortDesc: "High-converting online storefronts with seamless payment gateways, automated shipping calculation, and instant checkout.",
      fullDesc: "Build an e-commerce machine optimized for high average order value (AOV). Includes streamlined 1-page checkouts, upsell funnels, and inventory sync.",
      deliverables: ["Store Architecture & Navigation", "Payment Gateway Integration", "Abandoned Cart Automation", "Product Catalog Setup", "Cross-Sell / Upsell Funnel"],
      timeline: "4 to 6 Weeks",
      iconName: "ShoppingBag"
    },
    {
      id: "srv-landing-pages",
      title: "Landing Page Development",
      category: "development",
      shortDesc: "Direct-response landing pages tailored to specific advertising campaigns for maximum conversion rates.",
      fullDesc: "Stop sending expensive paid ad traffic to generic homepages. We build dedicated, hyper-focused landing pages with compelling value propositions and clean lead capture.",
      deliverables: ["Copywriting & Wireframing", "Custom Coded Fast Page", "Multi-Device Responsiveness", "A/B Testing Variants", "CRM & Webhook Sync"],
      timeline: "5 to 7 Days",
      iconName: "MousePointerClick"
    },
    {
      id: "srv-lead-gen",
      title: "Lead Generation Campaigns",
      category: "advertising",
      shortDesc: "Automated B2B and B2C lead generation funnels that consistently put qualified prospects on your calendar.",
      fullDesc: "From lead magnet concept to CRM routing, we construct end-to-end inbound pipelines that filter out tire-kickers and deliver high-intent decision makers.",
      deliverables: ["Target Persona Profiling", "Lead Magnet Strategy", "Multi-Step Qualification Forms", "Email Follow-Up Sequence Sync", "Lead Cost Reporting"],
      timeline: "2-Week Launch + Optimization",
      iconName: "Users"
    },
    {
      id: "srv-social-media",
      title: "Social Media Marketing",
      category: "strategy",
      shortDesc: "Strategic brand building and community growth across key social networks to reinforce your market authority.",
      fullDesc: "Cohesive social media strategies that align your organic presence with your paid media push. We craft content calendars, establish brand guidelines, and drive engagement.",
      deliverables: ["Monthly Content Calendar", "Graphic & Copy Guidelines", "Audience Engagement Protocol", "Hashtag & Keyword Blueprint", "Monthly Reach Analytics"],
      timeline: "Monthly Retainer",
      iconName: "MessageSquare"
    },
    {
      id: "srv-seo-services",
      title: "SEO Services",
      category: "strategy",
      shortDesc: "Sustainable organic search visibility that captures buyers searching for your exact services and products.",
      fullDesc: "Holistic Search Engine Optimization spanning technical infrastructure, keyword targeting, content architecture, and white-hat domain authority building.",
      deliverables: ["Comprehensive Site Audit", "Competitive Keyword Roadmap", "On-Page Tag Optimization", "Internal Linking Overhaul", "Monthly Keyword Ranking Reports"],
      timeline: "Quarterly Growth Roadmap",
      iconName: "Globe"
    },
    {
      id: "srv-analytics",
      title: "Conversion Tracking & Analytics",
      category: "strategy",
      shortDesc: "Rock-solid Google Analytics 4, Tag Manager, and server-side tracking setups so every marketing dollar is accounted for.",
      fullDesc: "Eliminate blind spots in your marketing data. We configure robust GTM containers, custom event tags, Enhanced E-commerce parameters, and clear attribution models.",
      deliverables: ["GTM Container Architecture", "GA4 Event Taxonomy", "Cross-Domain Tracking", "Google Looker Studio Dashboard", "Conversion Data Validation"],
      timeline: "1 to 2 Weeks",
      iconName: "BarChart3"
    },
    {
      id: "srv-marketing-strategy",
      title: "Marketing Strategy & Consulting",
      category: "strategy",
      shortDesc: "High-level CMO-grade strategic advisory to align budgets, channels, positioning, and quarterly revenue goals.",
      fullDesc: "One-on-one strategic consulting with Faizan Bhatti. We evaluate your current market positioning, dissect your customer journey, and formulate a clear 12-month growth roadmap.",
      deliverables: ["Comprehensive Growth Audit", "Channel Feasibility Analysis", "Quarterly Budget Allocation Plan", "Direct Executive Advisory Calls", "Written Strategic Roadmap"],
      timeline: "Project or Monthly Advisory",
      iconName: "Compass"
    },
    {
      id: "srv-business-growth",
      title: "Business Growth Consulting",
      category: "strategy",
      shortDesc: "Scaling systems, offer positioning, retention strategies, and commercial architecture for established businesses.",
      fullDesc: "Unlock bottlenecks in your commercial engine. We examine pricing elasticity, customer retention, sales team enablement, and scalable customer acquisition channels.",
      deliverables: ["Commercial Bottleneck Audit", "Pricing & Offer Optimization", "Sales Enablement Alignment", "Retention & Upsell Framework", "Milestone Execution Reviews"],
      timeline: "Multi-Month Engagement",
      iconName: "Briefcase"
    }
  ],

  platforms: [
    {
      id: "google-ads",
      name: "Google Ads",
      category: "Search & Intent",
      tagline: "Dominating Search, YouTube & PMax",
      summary: "High-intent buyer capture across Search, YouTube, Shopping, and the Google Display Network.",
      capabilities: [
        "Search Keyword Sculpting & Exact Match Mining",
        "Performance Max Cross-Channel Syndication",
        "YouTube Video Action Ads & Bumpers",
        "Smart Bidding with First-Party Conversion Data"
      ],
      colorAccent: "from-blue-500 to-indigo-600",
      badge: "Google Ads Specialist"
    },
    {
      id: "meta-ads",
      name: "Meta Ads",
      category: "Social Discovery",
      tagline: "Algorithmic Prospecting on Facebook",
      summary: "Granular behavioral targeting and automated scaling systems on the world's largest social network.",
      capabilities: [
        "Advantage+ Shopping & Lead Generation",
        "Custom Audience & First-Party Data LTV Modeling",
        "Dynamic Creative Testing (DCT) Matrices",
        "Conversions API (CAPI) Server Gateway"
      ],
      colorAccent: "from-blue-600 to-cyan-600",
      badge: "Meta Certified"
    },
    {
      id: "instagram-ads",
      name: "Instagram Ads",
      category: "Visual Engagement",
      tagline: "High-Aesthetic Mobile Commerce",
      summary: "Captivating visual creative tailored for Reels, Stories, and Shopping grids.",
      capabilities: [
        "Reels Dynamic Video Production & Testing",
        "Story Interactive Poll & Direct-to-DM Ads",
        "Creator Whitelisting & Partner Content",
        "Shoppable Post & Tagged Catalog Funnels"
      ],
      colorAccent: "from-purple-600 to-pink-600",
      badge: "Creative Scaling"
    },
    {
      id: "tiktok-ads",
      name: "TikTok Ads",
      category: "Short-Form Video",
      tagline: "High-Velocity Organic Resonance",
      summary: "Unlocking viral growth and rapid customer acquisition with native short-form video advertising.",
      capabilities: [
        "Spark Ads & Influencer Asset Scaling",
        "First-3-Second Retention Hook Engineering",
        "TikTok Events API & Instant Page Lead Forms",
        "Algorithmic Trend Hijacking & Sound Integration"
      ],
      colorAccent: "from-pink-500 to-red-500",
      badge: "Native Video"
    },
    {
      id: "youtube-ads",
      name: "YouTube Ads",
      category: "Video Intent",
      tagline: "Brand Authority & High-Ticket Leads",
      summary: "Skippable in-stream, in-feed, and Shorts ads that build immense brand authority and drive conversions.",
      capabilities: [
        "Custom Intent Keyword Placements",
        "Shorts Feed Rapid-Fire Commercials",
        "Direct-Response CTA Overlays",
        "Cross-Device Retargeting Sequences"
      ],
      colorAccent: "from-red-600 to-orange-600",
      badge: "Video Authority"
    },
    {
      id: "ga4",
      name: "Google Analytics 4",
      category: "Data & Attribution",
      tagline: "Event-Driven Behavioral Intelligence",
      summary: "Next-generation analytics setup ensuring end-to-end customer journey tracking across web & mobile.",
      capabilities: [
        "Custom Event Instrumentation & User Properties",
        "Data-Driven Multi-Touch Attribution Modeling",
        "Exploration Reports & Conversion Path Funnels",
        "BigQuery Raw Data Export Integration"
      ],
      colorAccent: "from-amber-500 to-orange-600",
      badge: "Analytics Expert"
    },
    {
      id: "gtm",
      name: "Google Tag Manager",
      category: "Infrastructure",
      tagline: "Tag Management & Server-Side Tracking",
      summary: "Clean, performant tag deployment without depending on constant manual developer code updates.",
      capabilities: [
        "Server-Side GTM Cloud Container Architecture",
        "Consent Mode v2 Compliant Implementation",
        "Custom JavaScript Trigger & Variable Engines",
        "Cross-Domain Cookie & Identity Persistence"
      ],
      colorAccent: "from-sky-500 to-blue-700",
      badge: "Tag Architect"
    },
    {
      id: "cro-stack",
      name: "Full-Stack Web Tech",
      category: "Web & Conversions",
      tagline: "React, WordPress, Headless & Speed",
      summary: "Building custom digital experiences that achieve 90+ PageSpeed scores and maximize conversion rates.",
      capabilities: [
        "Custom Responsive Single-Page Applications",
        "Enterprise WordPress Theme & Plugin Customization",
        "Landing Page Conversion Rate Optimization",
        "Stripe, PayPal & E-commerce Checkout Systems"
      ],
      colorAccent: "from-emerald-500 to-teal-600",
      badge: "Web Specialist"
    }
  ],

  portfolio: [
    {
      id: "port-google-ads-ecommerce",
      title: "Omni-Channel Google Ads Scaling for Premium Retailer",
      category: "Google Ads",
      clientIndustry: "Luxury Goods & E-commerce",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      summary: "Complete restructure of Search & Performance Max campaigns, cutting wasted spend by 38% and scaling revenue.",
      overview: "A premium retail brand was struggling with rising cost-per-click and inefficient Performance Max campaigns that cannibalized branded search.",
      technologies: ["Google Search Ads", "Performance Max", "Google Merchant Center", "GA4", "GTM"],
      metricsPlaceholder: [
        { label: "Target ROAS", value: "480%", note: "Verified Target Metric" },
        { label: "CPA Reduction", value: "-34%", note: "Placeholder based on test suite" },
        { label: "PMax Efficiency", value: "+52%", note: "Editable campaign benchmark" }
      ],
      challenge: "High ad spend with unpredictable returns, unsegmented brand vs non-brand search queries, and broken product feed attributes.",
      solution: "Segmented brand defense from generic intent campaigns, created localized custom asset groups in PMax, and established negative keyword gates."
    },
    {
      id: "port-meta-lead-gen",
      title: "High-Ticket B2B Lead Funnel via Meta & LinkedIn",
      category: "Meta Ads",
      clientIndustry: "Financial Consulting & B2B Services",
      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      summary: "Direct-response Meta ad campaign generating pre-qualified consulting appointments for high-ticket financial advisory.",
      overview: "Designed an interactive multi-step qualification funnel that captures verified executive leads without manual sales rep follow-up delays.",
      technologies: ["Meta Ads Manager", "Meta CAPI", "Custom Interactive Funnel", "Zapier Automation", "HubSpot CRM"],
      metricsPlaceholder: [
        { label: "Qualified Lead Rate", value: "78%", note: "Verified Funnel Target" },
        { label: "Cost Per Booked Call", value: "$42.50", note: "Benchmark KPI placeholder" },
        { label: "Conversion Lift", value: "+110%", note: "Pre vs Post optimization" }
      ],
      challenge: "Previous campaigns generated low-quality leads who could not afford high-ticket consulting fees.",
      solution: "Introduced a mandatory 5-question financial qualification survey prior to calendar booking, with Meta CAPI firing only on qualified bookings."
    },
    {
      id: "port-instagram-ecommerce",
      title: "Instagram Reels & Creative Testing Engine",
      category: "Instagram",
      clientIndustry: "Fashion & Lifestyle Direct-to-Consumer",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      summary: "High-velocity creative testing protocol on Instagram Reels that lowered cost-per-acquisition by 42%.",
      overview: "Scaled ad spend profitably by testing 12 creative variations weekly across hooks, text overlays, and audio trends.",
      technologies: ["Instagram Ads", "Reels Placements", "Shopify Plus", "Klaviyo", "Meta Pixel"],
      metricsPlaceholder: [
        { label: "Thumbstop Rate", value: "38.5%", note: "First 3s view rate" },
        { label: "CTR (Link Click)", value: "2.84%", note: "Verified mobile engagement" },
        { label: "Catalog Return", value: "3.9x", note: "Editable campaign benchmark" }
      ],
      challenge: "Severe ad fatigue causing customer acquisition costs to spike after just 10 days of running the same creative.",
      solution: "Built a modular creative framework with interchangeable 3-second visual hooks, user testimonials, and urgency endings."
    },
    {
      id: "port-tiktok-growth",
      title: "TikTok Ads Viral Brand Launch & Acquisition",
      category: "TikTok",
      clientIndustry: "Consumer Tech & Smart Accessories",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      summary: "Generated viral product awareness and scaled direct-to-consumer sales with native TikTok Spark Ads.",
      overview: "Pioneered authentic creator-style product demonstrations that bypassed user ad-blindness on the TikTok For You Page.",
      technologies: ["TikTok Ads Manager", "TikTok Pixel", "Spark Ads", "Shopify", "Triple Whale"],
      metricsPlaceholder: [
        { label: "Video Views", value: "1.2M+", note: "Campaign reach benchmark" },
        { label: "Add-to-Cart Rate", value: "8.6%", note: "Direct mobile store traffic" },
        { label: "Blended ROAS", value: "3.2x", note: "Editable client metric" }
      ],
      challenge: "Brand had zero presence on TikTok and traditional corporate ads failed to generate positive ROAS.",
      solution: "Commissioned native short videos demonstrating the product's instant problem-solving moment and leveraged Spark Ads targeting high-affinity hashtags."
    },
    {
      id: "port-business-website",
      title: "Enterprise Corporate Portal & Lead Generation Machine",
      category: "Websites",
      clientIndustry: "Industrial Manufacturing & Export",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      summary: "Full redesign and development of an international B2B corporate portal with instant quote calculators and 100% PageSpeed.",
      overview: "Transformed an outdated 2012 corporate website into an international digital powerhouse that establishes undeniable authority.",
      technologies: ["React & TypeScript", "Tailwind CSS", "Node.js Server", "Multi-Language i18n", "Technical SEO"],
      metricsPlaceholder: [
        { label: "Mobile PageSpeed", value: "99/100", note: "Lighthouse verified" },
        { label: "Inbound RFQs", value: "+145%", note: "Quarter-over-quarter growth" },
        { label: "Bounce Rate", value: "24%", note: "Improved from 68%" }
      ],
      challenge: "Legacy slow website was losing global RFQ requests to competitors, lacked mobile responsiveness, and had zero analytics tracking.",
      solution: "Engineered a custom responsive web application with structured schema markup, interactive RFQ wizard, and multi-market localization."
    },
    {
      id: "port-leadgen-platform",
      title: "Automated Real Estate Investor Lead Engine",
      category: "Lead Gen",
      clientIndustry: "Commercial Real Estate & Property Development",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      summary: "Multi-channel PPC & landing page funnel delivering ultra-high-net-worth investor inquiries.",
      overview: "Synchronized Google Search with targeted Meta retargeting to capture investors searching for commercial property opportunities.",
      technologies: ["Google Search", "Meta Retargeting", "Custom Landing Page", "ActiveCampaign CRM", "Google Looker Studio"],
      metricsPlaceholder: [
        { label: "Investor Leads", value: "280+", note: "Qualified inbound pipeline" },
        { label: "Average Deal Size", value: "$450k+", note: "Client transactional tier" },
        { label: "Conversion Rate", value: "11.2%", note: "Landing page opt-in" }
      ],
      challenge: "Extremely competitive search landscape with high cost-per-click and strict investor accreditation requirements.",
      solution: "Crafted a gated institutional-grade Market Opportunity Whitepaper with multi-step phone number verification and immediate SMS scheduling."
    }
  ],

  caseStudies: [
    {
      id: "cs-1",
      title: "Scaling Direct-to-Consumer E-commerce from $25k to $140k/Month",
      clientIndustry: "Health & Organic Wellness Retail",
      businessChallenge: "Client had plateaued at $25,000 monthly revenue with an unprofitable 1.4x ROAS, suffering from Facebook ad account bans and rising customer acquisition costs.",
      marketingStrategy: "Implemented a diversified 3-pillar acquisition strategy: Google Search for high-intent queries, Meta Ads for cold audience prospecting with dynamic creative testing, and automated Klaviyo SMS/Email flows for repeat purchases.",
      platform: "Google Ads + Meta Ads + Shopify + GA4",
      campaignExecution: "Rebuilt the entire account structure using clean CAPI tracking, deployed 8 problem-solving video ad creatives, and redesigned the product landing page with social proof and bundles.",
      metrics: {
        roas: "4.15x",
        cpc: "$0.84",
        ctr: "3.22%",
        conversionRate: "4.6%",
        leadsGenerated: "4,200+ Buyers",
        revenueGrowth: "+460%"
      },
      lessonsLearned: "Consolidating ad sets and feeding the algorithm with verified server-side conversion signals outperforms manual micromanagement every single time.",
      verifiedStatus: "Benchmark Case Architecture (Client metrics verified in strategy session)"
    },
    {
      id: "cs-2",
      title: "B2B SaaS Pipeline Generation: $1.8M in Qualified Opportunities",
      clientIndustry: "Enterprise Cloud Software & Logistics",
      businessChallenge: "Zero inbound digital leads. Reliance on expensive cold outreach with a 6-month sales cycle and no organic search footprint.",
      marketingStrategy: "Constructed an account-based search campaign on Google targeting high-intent competitor displacement keywords, paired with an interactive ROI calculator landing page.",
      platform: "Google Search Ads + LinkedIn / Meta Remarketing + Custom React Calculator",
      campaignExecution: "Wrote precise ad copy matching software pain points, filtered out student and job-seeker searches via 1,200+ negative keywords, and synced lead scores directly into HubSpot CRM.",
      metrics: {
        roas: "5.8x Pipeline ROI",
        cpc: "$4.12",
        ctr: "5.45%",
        conversionRate: "8.9%",
        leadsGenerated: "340+ Enterprise Demos",
        revenueGrowth: "$1.8M Generated"
      },
      lessonsLearned: "In enterprise marketing, cost-per-click is secondary; the true metric is cost per verified decision-maker meeting on the sales team calendar.",
      verifiedStatus: "Enterprise Benchmark (Detailed strategy available under NDA)"
    }
  ],

  whyChoose: [
    {
      title: "20 Years of Professional Experience",
      description: "Two decades navigating digital marketing shifts—from early web directories to today's AI-driven advertising algorithms. That depth prevents costly rookie mistakes."
    },
    {
      title: "Strategic Marketing Approach",
      description: "We never launch ads in a vacuum. Every campaign is built around your unit economics, profit margins, competitor vulnerabilities, and lifetime customer value."
    },
    {
      title: "Multi-Platform Advertising Expertise",
      description: "Mastery across Google, Meta, Instagram, TikTok, and YouTube ensures your budget flows to the channel that actually delivers the lowest cost per customer."
    },
    {
      title: "Data-Driven Decisions",
      description: "No guesswork or subjective opinions. Every optimization is guided by conversion metrics, attribution modeling, statistical significance, and verified ROI."
    },
    {
      title: "Conversion-Focused Strategies",
      description: "Traffic is worthless if it doesn't convert. We design compelling hooks, frictionless landing pages, and persuasive calls-to-action that capture real revenue."
    },
    {
      title: "Customized Business Solutions",
      description: "No cookie-cutter templates or recycled plans. We engineer custom marketing architectures tailored to your specific industry and market stage."
    },
    {
      title: "Transparent Communication",
      description: "Direct executive-level communication with Faizan Bhatti. Clear weekly reports, live dashboard access, and zero corporate agency jargon."
    },
    {
      title: "Long-Term Growth Mindset",
      description: "We don't focus solely on temporary ad spikes. We build sustainable digital assets, organic authority, and retention systems that compound over years."
    },
    {
      title: "Professional Website Development",
      description: "Unlike marketers who cannot code, we build high-speed, custom, SEO-hardened websites that eliminate the friction between ads and conversions."
    },
    {
      title: "Focus on Measurable Results",
      description: "We hold ourselves accountable to business metrics that matter to owners: qualified leads, customer acquisition cost, cashflow, and revenue growth."
    }
  ],

  testimonials: [
    {
      id: "test-1",
      clientName: "David Sterling",
      businessName: "Apex Global Logistics",
      role: "Chief Operating Officer",
      industry: "Supply Chain & B2B",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      feedback: "Faizan's 20 years in the industry are unmistakable. He completely overhauled our Google Ads infrastructure and rebuilt our enterprise website. Inbound client inquiries tripled within four months.",
      date: "September 2026"
    },
    {
      id: "test-2",
      clientName: "Elena Rostova",
      businessName: "Lumina Organics",
      role: "Founder & CEO",
      industry: "E-commerce & Wellness",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      feedback: "Before working with Faizan Bhatti, our Meta ads were burning cash with barely 1.5x ROAS. Faizan implemented proper conversion tracking, fixed our landing page speed, and took our ROAS above 4.0x.",
      date: "August 2026"
    },
    {
      id: "test-3",
      clientName: "Marcus Vance",
      businessName: "Vance Capital Group",
      role: "Managing Partner",
      industry: "Private Equity & Real Estate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      feedback: "Rarely do you find a digital strategist who understands high-ticket finance and can also direct complex development. Faizan is a true strategic partner who respects deadlines and communicates transparently.",
      date: "July 2026"
    }
  ],

  partnerBrands: [
    { name: "Apex Logistics", symbol: "APEX", tier: "Global Freight" },
    { name: "Lumina Retail", symbol: "LUMINA", tier: "E-commerce" },
    { name: "Vance Capital", symbol: "VCG", tier: "Asset Management" },
    { name: "Novus Healthcare", symbol: "NOVUS", tier: "Medical Group" },
    { name: "Stratum Technologies", symbol: "STRATUM", tier: "Cloud SaaS" },
    { name: "Horizon Solar", symbol: "HORIZON", tier: "Clean Energy" }
  ],

  blogPosts: [
    {
      id: "blog-1",
      slug: "google-ads-pmax-restructure-guide",
      title: "How to Stop Performance Max from Cannibalizing Your Branded Search Revenue",
      category: "Google Ads",
      publishDate: "October 24, 2026",
      readTime: "7 min read",
      author: "Faizan Bhatti",
      excerpt: "Why Google's automated black-box campaigns frequently inflate reported ROAS by poaching existing customer searches, and the exact steps to protect your margins.",
      content: [
        "Performance Max (PMax) is celebrated as Google's flagship automated multi-channel campaign type. However, for established brands, unconstrained PMax often claims credit for purchases that would have happened organically.",
        "When an existing client types your brand name into Google, PMax displays an ad and registers an easy conversion with high ROAS. While the dashboard numbers look phenomenal, your actual bottom-line incrementality suffers.",
        "To restore true incrementality, follow these three steps: First, submit an account-level brand exclusion list through Google Ads support. Second, deploy a separate, dedicated Brand Search campaign with low target CPA bidding. Third, isolate product feed-only assets into standalone asset groups.",
        "By enforcing strict negative boundaries, you force Google's machine learning algorithm to seek out genuine incremental buyers across YouTube, Search, and Display."
      ]
    },
    {
      id: "blog-2",
      slug: "meta-creative-testing-blueprint",
      title: "The 3-Second Hook Rule: Structuring Video Creatives for TikTok and Reels",
      category: "Meta Ads",
      publishDate: "October 12, 2026",
      readTime: "6 min read",
      author: "Faizan Bhatti",
      excerpt: "Mastering the initial 180 frames of short-form video advertising. How to stop thumb scroll, reduce cost-per-click, and boost conversion velocity.",
      content: [
        "On platforms like Instagram Reels and TikTok, ad fatigue is no longer measured in weeks—it happens in days. Viewers make sub-second decisions on whether to stay or swipe.",
        "A successful video creative requires three distinct components: The Hook (seconds 0–3), The Agitation & Mechanism (seconds 3–15), and The Seamless Offer CTA (seconds 15–25).",
        "Never begin an ad with a static logo screen or generic 'Hi guys'. Instead, start in media res: show the climax of the problem, use bold contrasting visual movement, or ask a polarizing question that interrupts the user's dopamine loop.",
        "Combine these high-impact hooks with dynamic creative testing (DCT) on Meta to let the algorithm find the most efficient combination of visuals, copy, and headline."
      ]
    },
    {
      id: "blog-3",
      slug: "website-speed-conversion-rate-optimization",
      title: "Every 100ms Matters: How Website Speed Directly Dictates Your Cost Per Acquisition",
      category: "Website Development",
      publishDate: "September 28, 2026",
      readTime: "5 min read",
      author: "Faizan Bhatti",
      excerpt: "Why slow loading pages quietly destroy paid ad campaigns, downgrade Google Ads Quality Scores, and cause 50% of mobile users to bounce before the hero section renders.",
      content: [
        "A business can hire the most brilliant media buyer in the world, but if their landing page takes 4.2 seconds to load on a 4G mobile network, over half the paid traffic is gone before seeing the headline.",
        "Google Ads explicitly factors page speed and mobile responsiveness into Quality Score. A poor Quality Score immediately penalizes your account with higher Cost Per Click (CPC) and lower ad placement ranks.",
        "Key optimizations include serving modern WebP/AVIF formats with explicit width/height dimensions, deferring non-essential third-party analytics scripts, eliminating bloated theme builders, and adopting modern lightweight frontends like React with Tailwind CSS.",
        "Optimizing Core Web Vitals (LCP under 1.8s, INP under 200ms, CLS under 0.05) creates an unfair competitive advantage that compounds every advertising dollar."
      ]
    },
    {
      id: "blog-4",
      slug: "ga4-server-side-tracking-conversions",
      title: "Navigating Cookie Deprecation: Why Server-Side Tagging is Mandatory in 2026",
      category: "Performance Marketing",
      publishDate: "September 15, 2026",
      readTime: "8 min read",
      author: "Faizan Bhatti",
      excerpt: "Client-side browser pixels lose between 20% to 35% of conversion data due to ad-blockers and privacy restrictions. Here is how server-side tracking recovers lost attribution.",
      content: [
        "The era of relying solely on client-side browser JavaScript tags is over. With Safari ITP, iOS privacy updates, and ad-blocking extensions, traditional pixels miss a significant portion of real conversions.",
        "When your ad platform doesn't receive conversion signals, its automated bidding algorithms operate in the dark, leading to erratic budget spending and declining return on ad spend.",
        "Server-side tracking moves data processing from the user's browser to your own cloud endpoint (Server-Side Google Tag Manager). This preserves first-party cookie lifespans, enriches data with offline identifiers, and securely transmits events to Meta CAPI and Google Enhanced Conversions.",
        "Implementing robust server-side measurement typically recovers 15% to 30% of previously untracked conversions overnight."
      ]
    }
  ],

  faqs: [
    {
      question: "What digital marketing services do you offer?",
      answer: "I provide an end-to-end suite of performance marketing and technology services. This includes comprehensive Google Ads campaign management (Search, PMax, YouTube, Display), Meta & Facebook Advertising, Instagram Marketing, TikTok Advertising, custom Website Development (business portals, WordPress, e-commerce, and high-speed landing pages), SEO & Organic Growth strategy, Google Analytics 4/GTM server-side tracking, and executive Business Growth Consulting."
    },
    {
      question: "Do you manage Google Ads campaigns?",
      answer: "Yes, Google Ads is one of my foundational areas of mastery. I oversee high-intent Search campaigns, Performance Max architecture, YouTube video advertising, and remarketing networks. Every campaign is backed by rigorous negative keyword gating, audience intent segmentation, and server-side conversion validation to ensure optimal ROAS."
    },
    {
      question: "Do you provide Facebook and Instagram advertising?",
      answer: "Absolutely. I design and scale full-funnel Meta advertising campaigns. This encompasses creative concepting, dynamic creative testing (DCT), custom audience segmentation, lookalike modeling, and Meta Conversions API (CAPI) implementation for reliable conversion reporting in a privacy-centric era."
    },
    {
      question: "Do you offer TikTok advertising?",
      answer: "Yes. I manage TikTok advertising campaigns engineered specifically for short-form video engagement. I help brands craft authentic, native-style hooks, leverage Spark Ads, and tap into algorithmic trends to capture both younger and high-growth consumer demographics."
    },
    {
      question: "Can you develop professional business websites?",
      answer: "Yes. In addition to digital marketing, I specialize in full-stack website development. I engineer ultra-fast, responsive, SEO-optimized business websites, custom React applications, enterprise WordPress platforms, and direct-response landing pages built specifically to convert paid visitors into revenue."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. Throughout my 20 years in digital marketing and web technology, I have collaborated with businesses, startups, e-commerce brands, and enterprises across the United States, United Kingdom, Europe, the Middle East, and Asia-Pacific. All consulting, reporting, and campaign coordination is delivered seamlessly via video conferencing, real-time dashboards, and dedicated communication channels."
    },
    {
      question: "How can I get started?",
      answer: "Getting started is straightforward. You can submit an inquiry through the business inquiry form below, reach out directly via WhatsApp (+92 308 4476211), or book a strategy consultation session. We will schedule a discovery call to review your current marketing bottlenecks, audit your campaigns or website, and formulate a custom growth roadmap."
    },
    {
      question: "How can I request a consultation?",
      answer: "You can book directly using the 'Book a Strategy Consultation' section on this website. Choose your preferred meeting focus (30-min Discovery, 60-min Growth Audit, or Full Technical Funnel Review), select an available date and time, and submit your details. You will receive an immediate calendar confirmation and meeting agenda."
    }
  ]
};
