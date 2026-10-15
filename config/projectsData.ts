export type ProjectStatusType =
  | "live"
  | "in-development"
  | "hackathon"
  | "client-project";

export interface ProjectItem {
  id: string; // Project slug matching gallery.json
  title: string;
  category: string;
  statusBadge: ProjectStatusType;
  badgeLabel?: string;
  isFlagship?: boolean;
  period?: string;
  roleOrTeam?: string;
  teamMembers?: string;
  description: string;
  hook: string;
  problemSolution: string[];
  keyFeatures: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  contextNote?: string;
  hackathonNote?: string;
}

/**
 * PROJECT ORDER CONFIGURATION
 * Edit these arrays to easily reorder projects on the main grid!
 */
export const FEATURED_PROJECT_IDS: string[] = [
  "raktagrid",
  "quicktask",
  "zynkarashift",
  "noorjahan",
  "credsecure",
  "oceanvoyage",
];

export const ADDITIONAL_PROJECT_IDS: string[] = [
  "campyteq",
  "zynkaraauth",
  "wedding-platform",
  "tictactoe-mobile",
];

export const PROJECTS_DICTIONARY: Record<string, ProjectItem> = {
  raktagrid: {
    id: "raktagrid",
    title: "RaktaGrid – Emergency Blood Dispatch Framework",
    category: "Healthcare Logistics & Concurrency Engine",
    statusBadge: "live",
    badgeLabel: "Live",
    isFlagship: true,
    period: "Completed • Production Live on Render",
    roleOrTeam: "Lead Backend & Full-Stack Architect",
    contextNote: "Camerin Institute • Mentored by Liyat Ps",
    description:
      "Municipal emergency blood dispatch framework engineered with PostgreSQL row-level locks, 3-tier geospatial failover routing, and clinical cold-chain verification to eliminate double-allocation.",
    hook: "5 threads, 1 unit, exactly 1 reservation.",
    problemSolution: [
      "Trauma emergencies across multi-hospital networks are vulnerable to critical race conditions and inventory double-booking when allocating scarce life-saving blood units.",
      "RaktaGrid guarantees atomic reservations by executing select_for_update(skip_locked=True) inside atomic transactions, ensuring exactly one reservation per unit.",
      "Integrates a 3-tier dispatch waterfall with Haversine proximity failover, 90-day clinical recovery cooldowns, and zero-login public emergency search.",
    ],
    keyFeatures: [
      "PostgreSQL row-level locking via select_for_update(skip_locked=True) inside atomic transactions to eliminate double-booking",
      "3-tier dispatch waterfall: local ABO/Rh matching, regional Haversine proximity failover, and voluntary donor cascade",
      "2-hour auto-lapsing reservation lock engine preventing inventory deadlocks on unissued units",
      "Clinical 90-day whole-blood biological recovery cooldown enforced with HMAC-SHA256 donor privacy",
      "Zero-login public emergency search with real-time stock availability and hospital contact dispatch",
    ],
    tech: [
      "Python 3",
      "Django 5",
      "PostgreSQL (Neon)",
      "Concurrency Locks",
      "Haversine Routing",
      "HMAC-SHA256",
      "Gunicorn",
      "WhiteNoise",
      "Render",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/RaktaGrid",
    liveUrl: "https://raktagrid.onrender.com/",
  },

  zynkarashift: {
    id: "zynkarashift",
    title: "ZynkaraShift – Self-Hosted PaaS",
    category: "Self-Hosted Platform-as-a-Service",
    statusBadge: "live",
    badgeLabel: "Live",
    isFlagship: true,
    period: "Completed Flagship Build",
    roleOrTeam: "Lead Architect & Developer",
    description:
      "Zero-cost self-hosted Platform-as-a-Service that deploys web applications directly from GitHub repositories or Docker images, featuring an AI deployment copilot, custom multi-tenancy routing, and container orchestration.",
    hook: "Zero-cost self-hosted Platform-as-a-Service with AI deployment diagnostics.",
    problemSolution: [
      "Commercial cloud hosting platforms incur high recurring bills, vendor lock-in, and complex server setup for individual developers and small teams.",
      "ZynkaraShift allows developers to deploy directly from GitHub repositories or Docker images onto their own infrastructure with automated reverse proxying.",
      "An integrated AI deployment copilot inspects build logs in real time to diagnose syntax, dependency, and configuration failures automatically.",
    ],
    keyFeatures: [
      "One-click deployment pipeline from GitHub repositories or Docker container images",
      "AI-driven deployment copilot diagnosing build failures from real-time log streams",
      "Custom multi-tenancy routing engine with automated reverse proxy and dynamic domain mapping",
      "Container lifecycle orchestration, automated environment isolation, and resource telemetry",
    ],
    tech: [
      "Node.js",
      "Docker",
      "GitHub API",
      "Reverse Proxy",
      "Multi-Tenancy",
      "Container Orchestration",
      "AI Copilot",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/Zynkara_Shift",
  },

  quicktask: {
    id: "quicktask",
    title: "QuickTask – AI-Powered Task & Productivity Platform",
    category: "Enterprise Full-Stack Platform",
    statusBadge: "live",
    badgeLabel: "Live",
    isFlagship: true,
    period: "Completed • Production Verified",
    roleOrTeam: "Lead Full-Stack & ML Architect",
    hackathonNote: "Solo build • Evolved from a 24-hour hackathon project",
    teamMembers: "Solo build (evolved from an initial 7-member 24-hour hackathon project)",
    description:
      "AI-powered employee productivity platform consolidating task management, daily attendance, real-time WebSocket team chat, and predictive AI productivity scoring with automated vector PDF audit reporting.",
    hook: "AI-powered employee productivity platform, solo build, evolved from a 24-hour hackathon project.",
    problemSolution: [
      "Modern workplaces struggle with fragmented tooling across task delegation, daily HR attendance, team chat, and retroactive performance audits.",
      "QuickTask centralizes sprint task workflows, check-in timestamps, low-latency WebSocket communication, and automated vector executive reporting.",
      "A machine learning regression engine evaluates velocity ratio, deadline pressure, and attendance consistency to forecast delivery slips proactively.",
    ],
    keyFeatures: [
      "Predictive Scikit-Learn regression engine forecasting employee efficiency trajectories and deadline risks",
      "Native FastAPI bi-directional WebSockets delivering low-latency real-time duplex team messaging",
      "Interactive Kanban task state machine (Pending → In Progress → Completed) with priority flags",
      "Daily employee attendance check-in/out engine tracking active hours and validating continuity",
      "Automated vector PDF executive summaries and productivity audit reports compiled via ReportLab",
    ],
    tech: [
      "React 19",
      "FastAPI",
      "Python",
      "Scikit-Learn",
      "Tailwind CSS v4",
      "WebSockets",
      "ReportLab PDF",
      "PostgreSQL",
      "Docker",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/QUICK_TASK",
    liveUrl: "https://mehthab7.github.io/QUICK_TASK/",
  },

  oceanvoyage: {
    id: "oceanvoyage",
    title: "OceanVoyage – Maritime Logistics & Cruise Booking",
    category: "Maritime Logistics & Scheduling Engine",
    statusBadge: "hackathon",
    badgeLabel: "Hackathon",
    period: "24h Hackathon Build",
    roleOrTeam: "Database & Backend Architecture",
    teamMembers: "Aswin Suresh (Security), Durga Sunil (Frontend), Mehthab N M (Database & Backend)",
    contextNote: "Technopark x ICT Academy of Kerala x Royal Caribbean Group",
    description:
      "Cruise booking platform with real-time activity conflict detection, interactive stateroom selection, and maritime operations manifests developed under 24-hour hackathon constraints.",
    hook: "Cruise booking with real-time activity conflict detection.",
    problemSolution: [
      "Cruise passengers booking onshore excursions, specialty dining, and onboard entertainment frequently schedule overlapping activities.",
      "OceanVoyage evaluates calendar intervals in real time during the booking flow to alert guests to time collisions before confirmations.",
      "Integrates visual stateroom deck plans, vessel route telemetry, and an administrative passenger manifest operations console.",
    ],
    keyFeatures: [
      "Real-time activity conflict detection preventing overlapping excursion and entertainment bookings",
      "Interactive stateroom and cabin reservation with visual deck plan availability and pricing tiers",
      "Administrative maritime operations console managing voyage routes, vessel itineraries, and passenger manifests",
      "Responsive mobile-first booking experience tailored for guests on shipboard networks",
    ],
    tech: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/cruise_booking",
  },

  campyteq: {
    id: "campyteq",
    title: "CampyTeq – Unified Multi-College Digital Ecosystem",
    category: "Multi-Tenant Enterprise SaaS",
    statusBadge: "in-development",
    badgeLabel: "In development",
    isFlagship: true,
    period: "Ongoing • In Active Development",
    roleOrTeam: "Lead System Architect & Full-Stack Developer",
    description:
      "Enterprise higher education digital operating system uniting administrative governance, dual attendance, fee invoicing, biometric timesheets, and campus automation across 10 institutional roles.",
    hook: "Enterprise multi-tenant SaaS uniting 10 institutional roles with strict row-level isolation.",
    problemSolution: [
      "Colleges and universities rely on disjointed legacy software for admissions, fees, attendance, and campus safety, causing operational overhead.",
      "CampyTeq delivers an enterprise digital operating system with strict multi-tenant row-level database isolation bound to college UUIDs.",
      "Incorporates Edge Computer Vision camera ingestion for student zone telemetry, explainable AI failure risk radar, and campus print kiosk PIN workflows.",
    ],
    keyFeatures: [
      "Strict multi-tenant row-level database isolation with verified X-College-ID context switching",
      "10 granular institutional RBAC roles with tailored dashboard workflows",
      "Dual attendance engine with statutory 75% defaulters radar and faculty biometric timesheet logging",
      "Campus fast-print kiosk queue with instant cost estimation and 4-digit PIN verification",
      "Edge Computer Vision RTSP camera ingestion prototype for student zone presence detection",
    ],
    tech: [
      "Next.js 14",
      "Django 5.1",
      "DRF",
      "TypeScript",
      "PostgreSQL 16",
      "Redis 7",
      "OpenCV / YOLO",
      "Tailwind CSS",
      "Docker Compose",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/CampyTeq",
  },

  zynkaraauth: {
    id: "zynkaraauth",
    title: "ZynkaraAuth – Centralized Identity Engine",
    category: "Authentication Platform",
    statusBadge: "in-development",
    badgeLabel: "In development",
    period: "Ongoing • In Active Development",
    roleOrTeam: "Backend Engineer",
    description:
      "Centralized identity and authentication platform with MFA, OAuth, RBAC, signed webhooks, and Python/JS/PHP SDKs managing secure user sessions and JWT verification.",
    hook: "Authentication platform with MFA, OAuth, RBAC, signed webhooks and Python/JS/PHP SDKs.",
    problemSolution: [
      "Building bespoke authentication, session management, and OAuth integrations for each application creates vulnerabilities and technical debt.",
      "ZynkaraAuth provides an enterprise-grade centralized authentication layer with cryptographic JWT token rotation and TOTP multi-factor verification.",
      "Features sliding session renewal in Redis, Role-Based Access Control middleware, cryptographically signed webhooks, and SDKs.",
    ],
    keyFeatures: [
      "Centralized authentication with TOTP multi-factor authentication (MFA) and OAuth2 social logins",
      "High-speed Redis cache for token revocation lists and sliding session management",
      "Role-Based Access Control (RBAC) middleware with granular permission scopes",
      "Cryptographically signed webhooks delivering real-time user event notifications",
      "Interactive OpenAPI/Swagger documentation and SDK integration architecture",
    ],
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "React",
      "OAuth2",
      "JWT",
      "Python",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/SecureAuth",
  },

  credsecure: {
    id: "credsecure",
    title: "CredSecure – Credit Card Fraud Detection System",
    category: "Machine Learning & Web API",
    statusBadge: "live",
    badgeLabel: "Live",
    period: "Academic Project • Team Lead",
    roleOrTeam: "Team Lead",
    teamMembers: "Team Lead (directed 4 engineers through full ML lifecycle)",
    description:
      "Fraud detection with a Random Forest model. Directed a 4-member team to construct a machine-learning fraud detection system deployed live on Render with interactive prediction APIs.",
    hook: "Fraud detection with a Random Forest machine learning classifier deployed live on Render.",
    problemSolution: [
      "Financial payment gateways process high transaction volumes where fraud must be intercepted instantly without rejecting authentic customers.",
      "CredSecure employs a Random Forest machine learning classifier trained on balanced transaction data to evaluate transaction risk in milliseconds.",
      "Deployed live on Render with interactive prediction REST APIs and an analyst verification portal.",
    ],
    keyFeatures: [
      "Machine learning classification model trained on balanced datasets with precision-recall optimization",
      "Real-time transaction inference REST API returning risk probabilities and fraud classification flags",
      "Responsive Python/Flask application interfacing with MongoDB for transaction audit logging",
      "Live deployment on Render with interactive testing dashboard for transaction analysts",
    ],
    tech: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Random Forest",
      "Render",
      "MongoDB",
      "HTML5",
      "CSS3",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/credit_card_fraud_detection",
    liveUrl: "https://credit-card-fraud-detection-1-41ac.onrender.com/",
  },

  noorjahan: {
    id: "noorjahan",
    title: "Interior Design Showcase (Noorjahan)",
    category: "Design Portfolio & Client Build",
    statusBadge: "client-project",
    badgeLabel: "Client project",
    period: "Client Project",
    roleOrTeam: "Frontend Engineer",
    description:
      "Aesthetic, image-rich portfolio web application engineered for an interior designer featuring spatial project showcases, live on Netlify.",
    hook: "Aesthetic spatial portfolio and architectural showcase for high-end interior design.",
    problemSolution: [
      "Interior designers need a high-aesthetic, lightning-fast digital portfolio that showcases photography and spatial transformations without mobile lag.",
      "Crafted for Noorjahan Interior Design featuring dark glassmorphism, responsive photo galleries, and client consultation pipelines.",
      "Deployed live on Netlify with automated CI/CD and mobile touch gesture optimization.",
    ],
    keyFeatures: [
      "High-resolution spatial project galleries with fluid image lightboxes",
      "Interactive before-and-after concept transformations and architectural showcases",
      "Bespoke dark glassmorphism layout tailored for premium interior and spatial design",
      "Client inquiry and project consultation pipeline deployed live on Netlify",
    ],
    tech: [
      "React",
      "Next.js",
      "Netlify",
      "Framer Motion",
      "Tailwind CSS",
      "UX Design",
    ],
    githubUrl: "https://github.com/MEHTHAB-N-M/Web-Page-App",
    liveUrl: "https://noorjahan-interior-designer.netlify.app/",
  },

  "wedding-platform": {
    id: "wedding-platform",
    title: "Wedding Company Platform",
    category: "Commercial Client Build",
    statusBadge: "client-project",
    badgeLabel: "Client project",
    period: "Client Project",
    roleOrTeam: "Full-Stack Developer",
    description:
      "Production application for a client featuring media galleries, booking workflows, and responsive high-performance UI.",
    hook: "High-traffic commercial web platform crafted for a premier wedding event firm.",
    problemSolution: [
      "Commercial event firms need rich media storytelling and smooth package inquiry flows without compromising page load speeds.",
      "Constructed a responsive, media-rich web application with lazy-loaded imagery and interactive booking inquiry calendars.",
      "Optimized for 100/100 Lighthouse performance and smooth cross-device presentation.",
    ],
    keyFeatures: [
      "Ultra-responsive media gallery with lazy-loaded high-res event photography",
      "Interactive event booking & inquiry calendar pipeline",
      "Custom layout animations with Framer Motion and fluid glassmorphism",
      "Deployed live on Render for client evaluation and interactive demo",
    ],
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/MEHTHAB-N-M/wedding_company",
    liveUrl: "https://wedding-company-2-49p1.onrender.com/",
  },

  "tictactoe-mobile": {
    id: "tictactoe-mobile",
    title: "Tic Tac Toe – Interactive AI Game",
    category: "Web & Mobile Game • Minimax AI",
    statusBadge: "live",
    badgeLabel: "Live",
    period: "Interactive Game Project",
    roleOrTeam: "Full-Stack & Game Developer",
    description:
      "Interactive game featuring Minimax algorithm for unbeatable single-player AI, local multiplayer mode, and smooth particle transitions deployed live.",
    hook: "Interactive game featuring unbeatable Minimax AI and 60fps haptics.",
    problemSolution: [
      "Classic web games often feel sluggish on mobile touchscreens and lack intelligent automated opponents.",
      "Engineered an unbeatable single-player mode driven by the recursive Minimax decision algorithm.",
      "Delivers 60fps celebratory particle transitions and touch-friendly controls deployed live.",
    ],
    keyFeatures: [
      "Minimax decision algorithm ensuring an unbeatably smart AI opponent",
      "60fps touch haptics and celebratory particle effect transitions",
      "Local multi-player game session state persistent store",
      "Deployed live on Tiiny for instant browser and mobile device testing",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Minimax Algorithm", "Mobile UX", "Tiiny Host"],
    githubUrl: "https://github.com/MEHTHAB-N-M/Tic_Tac_Toe",
    liveUrl: "https://tictac2oe.tiiny.site/",
  },
};

/**
 * Returns the array of featured ProjectItem objects in configured order.
 */
export function getFeaturedProjects(): ProjectItem[] {
  return FEATURED_PROJECT_IDS.map((id) => PROJECTS_DICTIONARY[id]).filter(Boolean);
}

/**
 * Returns the array of additional ProjectItem objects in configured order.
 */
export function getAdditionalProjects(): ProjectItem[] {
  return ADDITIONAL_PROJECT_IDS.map((id) => PROJECTS_DICTIONARY[id]).filter(Boolean);
}
