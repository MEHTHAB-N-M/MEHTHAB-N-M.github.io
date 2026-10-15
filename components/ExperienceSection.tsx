"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Users,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Building2,
  ChevronRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";

interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: "work" | "education" | "leadership";
  awardBadge?: string;
  scorePill?: string;
  bullets: string[];
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "camerin-training",
    role: "Python Full-Stack Development Training (Django + React + AI)",
    organization: "Camerin – Indian Institute of Upskill",
    period: "May 2026 – Nov 2026",
    location: "In Progress",
    type: "work",
    awardBadge: "🤖 Advanced Full-Stack & AI",
    scorePill: "In Progress",
    bullets: [
      "Undergoing intensive, hands-on professional training in Python full-stack development, building scalable web applications with Django 5, PostgreSQL, React, and applied AI under trainer Liyat Ps.",
      "Engineered RaktaGrid (Emergency Blood Dispatch Framework), eliminating double-booking via PostgreSQL row-level locks (select_for_update), 2-hour reservation locks, and Haversine geospatial failover routing.",
      "Developing scalable REST APIs, relational database schemas, and integrating generative AI features and automated workflows into web architectures.",
    ],
    skills: ["Python", "Django 5", "PostgreSQL", "Concurrency Locks", "React.js", "AI Integration", "REST APIs", "Render"],
  },
  {
    id: "oceanvoyage-hackathon",
    role: "Backend & Database Developer • OceanVoyage",
    organization: "Technopark × ICT Academy of Kerala × Royal Caribbean Group",
    period: "National Hackathon",
    location: "Technopark, Kerala",
    type: "work",
    awardBadge: "🚢 Hackathon Finalist",
    scorePill: "24h Hackathon",
    bullets: [
      "Architected the PostgreSQL relational database schema and developed NestJS backend APIs for OceanVoyage under 24-hour national hackathon constraints.",
      "Engineered the real-time activity conflict detection engine to eliminate overlapping passenger bookings across onshore excursions and onboard events.",
      "Collaborated in a 3-member squad with Aswin Suresh (Security) and Durga Sunil (Frontend) to deliver an end-to-end maritime booking platform.",
    ],
    skills: ["NestJS", "PostgreSQL", "Database Architecture", "Backend Engineering", "Conflict Detection Algorithm", "REST APIs", "Team Collaboration"],
  },
  {
    id: "logix-space",
    role: "Full Stack Trainee Developer",
    organization: "Logix Space Technologies Pvt. Ltd. (LinkUrCodes)",
    period: "Aug 2024 – Mar 2026",
    location: "Kochi, India",
    type: "work",
    awardBadge: "🏆 Best Performer Award",
    bullets: [
      "Built and maintained front-end and cross-platform applications end-to-end using React.js, Flutter, Bootstrap, HTML, and CSS in an agile, campus-based engineering team.",
      "Collaborated with cross-functional peers and industry mentors to design, test, and deploy production-style features, balancing delivery speed with code quality.",
      "Recognized with the Best Performer Award for consistent technical growth, reliability, and active learning.",
    ],
    skills: ["React.js", "Flutter", "Bootstrap", "HTML5", "CSS3", "JavaScript", "Agile Engineering", "Cross-Platform"],
  },
  {
    id: "hackathon-leadership",
    role: "Engineering Team Lead (7 & 4 Member Teams)",
    organization: "Hackathon & Academic ML Projects",
    period: "Project Leadership",
    type: "leadership",
    awardBadge: "🚀 2 Teams Led to Delivery",
    bullets: [
      "Led two cross-functional teams (7 and 4 members) from design through final delivery on hackathon and academic ML projects.",
      "Spearheaded a 7-member team to design, build, and deploy a role-based task management platform with authentication and automated task workflows, owning UI/UX and backend integration.",
      "Directed a 4-member machine learning team to build a credit card fraud detection system, managing testing, code review, and final delivery.",
    ],
    skills: ["Team Leadership", "Cross-Functional Team Management", "Code Reviews", "System Design", "Agile Planning"],
  },
  {
    id: "ncc-corporal",
    role: "CPL Rank (Corporal) – National Cadet Corps",
    organization: "National Cadet Corps (NCC)",
    period: "2019 – 2025",
    type: "leadership",
    awardBadge: "🎖️ NCC 'A' & 'B' Certificates",
    bullets: [
      "Attained CPL Rank (Corporal) in the National Cadet Corps (NCC) across 6 years of disciplined service (2019–2025).",
      "Awarded official NCC ‘A’ and ‘B’ certificates for exemplary leadership, squad command, and steadfast operational discipline.",
      "Demonstrated high stress tolerance, transparent team communication, and unwavering dedication in rigorous squad drills and camp exercises.",
    ],
    skills: ["Leadership", "Discipline", "Team Management", "Crisis Coordination", "High Stress Tolerance"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 bg-zinc-950/90">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Work Experience & <span className="text-gradient-indigo">Leadership</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Proven history of delivering software products, leading engineering squads, achieving academic distinction, and demonstrating exceptional discipline and leadership.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-emerald-500 opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp =
                item.type === "work"
                  ? Briefcase
                  : item.type === "education"
                  ? GraduationCap
                  : ShieldCheck;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-900 border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-indigo-400 z-10 hidden sm:flex">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="group relative rounded-3xl glass-card p-6 border border-white/10 glass-card-hover">
                      
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                            <IconComp className="w-4 h-4" />
                          </span>
                          <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-cyan-400" />
                            {item.period}
                          </span>
                        </div>

                        {item.awardBadge && (
                          <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-sm">
                            {item.awardBadge}
                          </span>
                        )}

                        {item.scorePill && (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                            {item.scorePill}
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-zinc-400 text-sm font-medium flex items-center gap-1.5 mt-0.5 mb-4">
                        <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.organization}</span>
                        {item.location && <span className="text-zinc-500">• {item.location}</span>}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-6 text-zinc-300 text-xs sm:text-sm">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill Badges */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
