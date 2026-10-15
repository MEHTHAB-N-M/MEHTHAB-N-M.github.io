"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Building2,
  ChevronRight,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";

interface DegreeItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  statusPill: string;
  highlightBadge: string;
  focus: string;
  description: string[];
  coursework: string[];
}

const degreesData: DegreeItem[] = [
  {
    id: "mca-ignou",
    degree: "MCA (Distance Learning)",
    institution: "IGNOU",
    period: "Jul 2026 to Jun 2028",
    statusPill: "⚡ Pursuing",
    highlightBadge: "Master's Degree (Distance Learning)",
    focus: "Software engineering, databases, cloud, and applied AI",
    description: [
      "Pursuing alongside full-stack training and project work.",
      "Focus areas: software engineering, databases, cloud, and applied AI.",
    ],
    coursework: [
      "Software Engineering",
      "Database Systems",
      "Cloud Computing",
      "Applied AI",
      "Data Structures & Algorithms",
    ],
  },
  {
    id: "bca-calicut-university",
    degree: "BCA",
    institution: "Nirmala College of Arts and Science (Calicut University)",
    period: "Aug 2023 to Mar 2026",
    statusPill: "🎓 Focus: Programming, Web Dev & ML",
    highlightBadge: "Bachelor's Degree",
    focus: "Programming, web development, and machine learning",
    description: [
      "Focus: programming, web development, and machine learning.",
      "Completed alongside a full-stack traineeship and a 400-hour data science certification.",
      "Led student teams on academic and hackathon projects.",
    ],
    coursework: [
      "Programming (Python, Java)",
      "Web Development",
      "Machine Learning",
      "Database Management Systems & SQL",
      "Data Structures",
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 bg-zinc-950/90 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Formal <span className="text-gradient-indigo">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Academic computer science credentials with specialization in programming, web development, and machine learning.
          </motion.p>
        </div>

        {/* 2-Column Grid for the Degrees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {degreesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-3xl glass-card p-6 sm:p-8 border border-white/10 glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {item.period}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                    {item.statusPill}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{item.highlightBadge}</span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors mb-1">
                  {item.degree}
                </h3>

                {/* Institution */}
                <div className="text-zinc-300 text-sm font-medium flex items-center gap-1.5 mb-2">
                  <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{item.institution}</span>
                </div>

                {/* Focus Line */}
                <div className="text-xs text-cyan-400 font-semibold mb-5">
                  Focus: {item.focus}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 mb-6 text-zinc-300 text-xs sm:text-sm">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework Tags */}
              <div className="pt-5 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Subject Areas</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
