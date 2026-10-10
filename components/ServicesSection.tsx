"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  BarChart3,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageSquare,
  FileCode2,
  Rocket,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

/**
 * FREELANCE SERVICES & PRICING CONFIG
 * ====================================
 * Edit starting prices, titles, descriptions, deliverables, and card notes below in one place.
 */
export const PRICING_NOTES = {
  timeline: "Final price depends on features and timeline.",
  indiaPrefix: "Based in India? ",
  indiaLink: "Contact me for ₹ pricing.",
} as const;

export const SERVICES_PRICE_DISCLAIMER = PRICING_NOTES.timeline;

export interface ServiceItem {
  id: string;
  title: string;
  iconName: "Globe" | "Layers" | "Wrench" | "BarChart3";
  startingPrice: string; // Starting prices in USD ($)
  description: string;
  deliverables: [string, string, string];
  projectType: string; // Maps directly to Contact Form dropdown options
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-portfolio-websites",
    title: "Business & Portfolio Websites",
    iconName: "Globe",
    startingPrice: "$49",
    description: "Fast, responsive websites for businesses, creators, and personal brands.",
    deliverables: [
      "Responsive design with React/Next.js, HTML, CSS, Tailwind or Bootstrap",
      "Clean, mobile-friendly UI with SEO basics",
      "Deployment on Vercel, Netlify, or GitHub Pages",
    ],
    projectType: "Business/Portfolio Website",
  },
  {
    id: "fullstack-web-apps",
    title: "Full-Stack Web Apps",
    iconName: "Layers",
    startingPrice: "$199",
    description: "Complete web applications from database to user interface.",
    deliverables: [
      "React/Next.js frontend with Django, Flask, or Node.js backend",
      "Authentication, user roles, and admin dashboard",
      "PostgreSQL, MySQL, or MongoDB, plus third-party API and AI chatbot integration",
    ],
    projectType: "Full-Stack Web App",
  },
  {
    id: "bug-fixes-deployment-cicd",
    title: "Bug Fixes, Deployment & CI/CD",
    iconName: "Wrench",
    startingPrice: "$25",
    description: "Fix, improve, and ship your existing project.",
    deliverables: [
      "Debugging and code cleanup",
      "Deployment on Render, Vercel, or GitHub Pages",
      "CI/CD pipeline setup with GitHub Actions",
    ],
    projectType: "Bug Fixes & Deployment",
  },
  {
    id: "data-analysis-dashboards",
    title: "Data Analysis & Dashboards",
    iconName: "BarChart3",
    startingPrice: "$79",
    description: "Turn raw data into clear insights.",
    deliverables: [
      "Data cleaning with Pandas and NumPy",
      "Machine learning models with Scikit-Learn",
      "Tableau or web dashboards",
    ],
    projectType: "Data Analysis & Dashboards",
  },
];

const iconMap: Record<ServiceItem["iconName"], LucideIcon> = {
  Globe,
  Layers,
  Wrench,
  BarChart3,
};

const workSteps = [
  {
    step: "01",
    title: "Discuss",
    desc: "Understand your goals, project requirements, deliverables, and timeline.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Plan & Quote",
    desc: "Define the architecture, milestone roadmap, and clear, transparent pricing.",
    icon: FileCode2,
  },
  {
    step: "03",
    title: "Build with Updates",
    desc: "Iterative sprints with clean code, frequent progress previews, and demos.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Deliver & Support",
    desc: "Production deployment, comprehensive handoff documentation, and warranty support.",
    icon: ShieldCheck,
  },
];

export default function ServicesSection() {
  const handleGetQuote = (projectType: string) => {
    // Notify contact section to preselect the matching dropdown option
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-project-type", { detail: projectType })
      );
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="relative py-28 bg-zinc-950">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freelance &amp; Contract Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            What I Can <span className="text-gradient-cyan">Build For You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            From custom business websites and full-stack web applications to bug fixes, data dashboards, and cloud deployments.
          </motion.p>
        </div>

        {/* 4 Services Responsive 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-6 items-stretch mb-20">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative rounded-3xl glass-card p-5 sm:p-7 border border-white/10 glass-card-hover flex flex-col justify-between overflow-hidden h-full"
              >
                {/* Subtle Hover Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

                <div className="flex flex-col flex-1">
                  {/* Top Bar: Icon & Starting Price */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-cyan-500 group-hover:border-transparent transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        Starting from
                      </span>
                      <span className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10 flex-1">
                    <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Pricing Notes & Get a Quote CTA */}
                <div className="pt-4 border-t border-white/10 mt-auto space-y-3">
                  <div className="text-[11px] text-zinc-400 text-center leading-normal space-y-0.5">
                    <p>{PRICING_NOTES.timeline}</p>
                    <p>
                      {PRICING_NOTES.indiaPrefix}
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGetQuote(service.projectType);
                        }}
                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        {PRICING_NOTES.indiaLink}
                      </a>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleGetQuote(service.projectType)}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 border border-white/10 hover:border-transparent text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-200 active:scale-95"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* "How I Work" Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 relative overflow-hidden"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              My Engineering Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              How I Work
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5">
              A transparent, reliable 4-step workflow ensuring rapid execution and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workSteps.map((ws, i) => {
              const StepIcon = ws.icon;
              return (
                <div
                  key={ws.step}
                  className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-white/20">
                      {ws.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <StepIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-base mb-1.5">{ws.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{ws.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
