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
    role: "Python Full-Stack Training (Django, React, AI)",
    organization: "Camerin",
    period: "May to Nov 2026",
    location: "In Progress",
    type: "work",
    awardBadge: "🤖 Full-Stack & AI",
    scorePill: "May – Nov 2026",
    bullets: [
      "Built RaktaGrid, an emergency blood dispatch system that prevents double allocation using PostgreSQL row-level locks and 2-hour reservation locks.",
      "Implemented Haversine-based geospatial failover routing.",
      "Developing REST APIs and relational schemas, and integrating generative AI features.",
    ],
    skills: ["Python", "Django", "React", "PostgreSQL", "Concurrency Locks", "REST APIs", "Geospatial Routing", "Generative AI"],
  },
  {
    id: "logix-space",
    role: "Full Stack Trainee Developer",
    organization: "Logix Space Technologies (LinkUrCodes)",
    period: "Aug 2024 to Mar 2026 (alongside BCA)",
    location: "Kochi, India",
    type: "work",
    awardBadge: "🏆 Best Performer Award",
    bullets: [
      "Built front-end and cross-platform apps with React.js, Flutter, Bootstrap, HTML, and CSS in an agile team.",
      "Worked with mentors and peers to design, test, and deploy features.",
      "Received the Best Performer Award for consistent technical growth and reliability.",
    ],
    skills: ["React.js", "Flutter", "Bootstrap", "HTML5", "CSS3", "JavaScript", "Agile Teamwork", "Cross-Platform"],
  },
  {
    id: "hackathon-leadership",
    role: "Team Lead",
    organization: "Hackathon and Academic ML Projects",
    period: "Project Leadership",
    type: "leadership",
    awardBadge: "🚀 Project Leadership",
    bullets: [
      "Led a 7-member team building a role-based task management platform (authentication, automated workflows), owning UI/UX and backend integration.",
      "Led a 4-member team building a credit card fraud detection system, managing testing, code review, and delivery.",
    ],
    skills: ["Team Leadership", "Cross-Functional Collaboration", "Code Reviews & Testing", "System Architecture", "Agile Delivery"],
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
      "Engineered the real-time activity conflict detection engine to prevent overlapping passenger bookings across onshore excursions and onboard events.",
      "Collaborated in a 3-member team with Aswin Suresh (Security) and Durga Sunil (Frontend) to deliver the maritime booking platform.",
    ],
    skills: ["NestJS", "PostgreSQL", "Database Architecture", "Backend Engineering", "Conflict Detection Algorithm", "REST APIs"],
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
      "Awarded official NCC ‘A’ and ‘B’ certificates for leadership, squad command, and operational discipline.",
      "Demonstrated high stress tolerance, transparent team communication, and disciplined execution in squad drills and camp exercises.",
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
            Proven history of delivering software products, leading engineering squads, achieving academic distinction, and demonstrating disciplined leadership.
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
