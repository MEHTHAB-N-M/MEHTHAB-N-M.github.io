"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Building2,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Brain,
  Terminal,
  ExternalLink,
} from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeText: string;
  badgeColor?: string;
  scoreOrTier?: string;
  credentialId?: string;
  description: string[];
  skills: string[];
}

const certificationsList: CertificationItem[] = [
  {
    id: "ict-data-science",
    title: "Certified Specialist in Data Science & Analytics",
    issuer: "ICT Academy of Kerala",
    date: "Nov 2023 - Mar 2026",
    badgeText: "Perfect 30/30 Score",
    scoreOrTier: "Score 30/30 (400 Hours)",
    description: [
      "Completed an intensive 400-hour specialized curriculum covering data wrangling, statistical exploratory data analysis, and predictive modeling.",
      "Achieved a distinction score of 30/30 across hands-on laboratory assessments and data engineering projects.",
      "Constructed machine learning classification models with Python (Pandas, NumPy, Scikit-Learn) and dynamic analytical dashboards in Tableau.",
    ],
    skills: ["Data Science", "Analytics", "Pandas", "NumPy", "Scikit-Learn", "Tableau", "Machine Learning", "EDA"],
  },
  {
    id: "hackerrank-frontend-react",
    title: "Frontend Developer (React) & Software Engineer",
    issuer: "HackerRank",
    date: "2026",
    badgeText: "Verified Role Certification",
    scoreOrTier: "Certificates of Accomplishment",
    credentialId: "CDA7C4373E05",
    description: [
      "Evaluated and certified for modern React.js architecture, component lifecycle management, and clean state handling.",
      "Demonstrated proficiency in algorithmic problem solving, asynchronous JavaScript, and data structures.",
    ],
    skills: ["React.js", "Software Engineering", "JavaScript (ES6+)", "State Management", "Component Architecture"],
  },
  {
    id: "hackerrank-rest-api",
    title: "REST API (Intermediate)",
    issuer: "HackerRank",
    date: "Sep 2026",
    badgeText: "HackerRank Certified",
    scoreOrTier: "Certificate of Accomplishment",
    description: [
      "Earned intermediate accreditation validating robust RESTful service design, HTTP protocols, query optimizations, and endpoint security.",
      "Assessed on structured API contracts, status code standards, payload filtering, and rate-limiting patterns.",
    ],
    skills: ["REST APIs", "API Design", "HTTP Protocols", "Endpoint Integration", "Backend Services"],
  },
  {
    id: "google-developer-program",
    title: "Google Developer Program — Premium Tier Membership",
    issuer: "Google Developers",
    date: "Jul 2026",
    badgeText: "Premium Tier Member",
    scoreOrTier: "4 Verified Skill Badges",
    description: [
      "Completed specialized hands-on technical labs across Google's developer ecosystem:",
      "• API Key Management & Security",
      "• AI-Assisted Data Science with BigQuery",
      "• Firebase Phone Number Verification",
      "• AI Speech Recognition with TensorFlow Lite",
    ],
    skills: ["Google Cloud", "BigQuery AI", "Firebase", "TensorFlow Lite", "API Security"],
  },
];

const honorsList = [
  {
    badge: "Award of Excellence",
    title: "Best Performer Award",
    organization: "Logix Space Technologies (LinkUrCodes)",
    detail: "Recognized for outstanding technical growth, code reliability, active learning, and consistent dedication as Full Stack Trainee Developer.",
    color: "border-amber-500/20 group-hover:border-amber-500/40",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-300",
  },
  {
    badge: "Engineering Leadership",
    title: "2 Cross-Functional Teams Led",
    organization: "Hackathon & Academic ML Projects",
    detail: "Directed 7-member team (Task Management Platform) and 4-member team (Credit Card Fraud Detection) from initial design through final delivery.",
    color: "border-cyan-500/20 group-hover:border-cyan-500/40",
    badgeColor: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
  },
  {
    badge: "Service & Discipline",
    title: "CPL Rank (Corporal) – NCC",
    organization: "National Cadet Corps (2019–2025)",
    detail: "Attained promotion to Corporal (CPL Rank) with official NCC 'A' and 'B' certificates recognized for leadership, command drills, and discipline.",
    color: "border-indigo-500/20 group-hover:border-indigo-500/40",
    badgeColor: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  },
];

const additionalWorkshops = [
  "Google Cloud Workshop",
  "Flutter Cross-Platform Workshop",
  "Cybersecurity Workshop",
  "AI & Data Science Workshop",
  "Python Full-Stack Internship",
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-28 bg-zinc-950 overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Honors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="text-gradient-cyan">Badges</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Industry certifications in Data Science, React frontend development, REST APIs, and Google Developer Program skill badges.
          </motion.p>
        </div>

        {/* Certifications 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-3xl glass-card p-6 sm:p-7 border border-white/10 glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {cert.date}
                  </span>

                  {cert.scoreOrTier && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                      {cert.scoreOrTier}
                    </span>
                  )}
                </div>

                {/* Badge text */}
                <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{cert.badgeText}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer & Credential */}
                <div className="text-zinc-300 text-sm font-medium flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{cert.issuer}</span>
                  </span>
                  {cert.credentialId && (
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-6 text-zinc-300 text-xs sm:text-sm">
                  {cert.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements & Honors Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-16 pt-10 border-t border-white/10"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">Key Achievements & Honors</h3>
              <p className="text-zinc-400 text-xs">Recognitions and verified distinctions highlighted in resume</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {honorsList.map((honor, idx) => (
              <div
                key={idx}
                className={`group p-5 rounded-2xl glass-card border ${honor.color} transition-colors flex flex-col justify-between`}
              >
                <div>
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${honor.badgeColor}`}>
                    {honor.badge}
                  </span>
                  <h4 className="text-base font-bold text-white mt-3 mb-1">{honor.title}</h4>
                  <div className="text-xs text-zinc-400 font-medium mb-2">{honor.organization}</div>
                  <p className="text-zinc-300 text-xs leading-relaxed">{honor.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Supplementary Workshops */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-2">Additional Training:</span>
            {additionalWorkshops.map((workshop) => (
              <span
                key={workshop}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {workshop}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
