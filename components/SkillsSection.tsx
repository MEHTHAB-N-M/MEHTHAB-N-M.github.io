"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Brain,
  Search,
  Terminal,
  Sparkles,
  Server,
  Wrench,
  Layers,
  HeartHandshake,
  Globe,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "web" | "database" | "ai" | "tools";
  isCore?: boolean;
}

const skillsData: SkillItem[] = [
  // --- 10 CORE PRODUCTION SKILLS ---
  { name: "Python", category: "languages", isCore: true },
  { name: "Django", category: "web", isCore: true },
  { name: "FastAPI", category: "web", isCore: true },
  { name: "JavaScript", category: "languages", isCore: true },
  { name: "React.js", category: "web", isCore: true },
  { name: "Next.js", category: "web", isCore: true },
  { name: "PostgreSQL", category: "database", isCore: true },
  { name: "REST APIs", category: "web", isCore: true },
  { name: "Docker", category: "tools", isCore: true },
  { name: "Git / GitHub", category: "tools", isCore: true },

  // --- ADDITIONAL TECHNICAL SKILLS ---
  // Languages
  { name: "Java", category: "languages" },
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "PHP", category: "languages" },

  // Web & Frontend
  { name: "Flask", category: "web" },
  { name: "Node.js", category: "web" },
  { name: "HTML5 & CSS3", category: "web" },
  { name: "Bootstrap & Tailwind", category: "web" },

  // Databases & Caching
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "SQL Schema Design", category: "database" },

  // Data & Applied AI
  { name: "Scikit-Learn", category: "ai" },
  { name: "Pandas & NumPy", category: "ai" },
  { name: "Tableau", category: "ai" },
  { name: "Generative AI Integration", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "Agentic AI Workflows", category: "ai" },

  // Tools & Cloud
  { name: "VS Code", category: "tools" },
  { name: "Render", category: "tools" },
  { name: "Netlify & Vercel", category: "tools" },
];

const categoryTabs = [
  { id: "all", label: "All Tech Stack", icon: Layers },
  { id: "languages", label: "Languages", icon: Terminal },
  { id: "web", label: "Web & Frameworks", icon: Server },
  { id: "database", label: "Databases", icon: Database },
  { id: "ai", label: "Data & AI", icon: Brain },
  { id: "tools", label: "Tools & Platforms", icon: Wrench },
];

const softSkills = [
  "Communication & Collaboration",
  "Problem Solving",
  "Team Leadership",
  "Continuous Learning",
  "Time Management",
];

const spokenLanguages = [
  { lang: "English", level: "Professional Working" },
  { lang: "Malayalam", level: "Native / Bilingual" },
  { lang: "Hindi", level: "Working Knowledge" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  // Filter skills based on search query and category
  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Split into core skills and additional skills
  const coreSkills = filteredSkills.filter((s) => s.isCore);
  const additionalSkills = filteredSkills.filter((s) => !s.isCore);

  // If user is searching or viewing a specific category, show all matching skills,
  // otherwise respect the showMoreSkills toggle for additional skills.
  const isFiltering = searchQuery.trim().length > 0 || activeCategory !== "all";
  const visibleAdditionalSkills = isFiltering || showMoreSkills ? additionalSkills : [];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "languages":
        return "Language";
      case "web":
        return "Web & Framework";
      case "database":
        return "Database";
      case "ai":
        return "Data & AI";
      case "tools":
        return "Tool & Platform";
      default:
        return cat;
    }
  };

  return (
    <section id="skills" className="relative py-28 bg-zinc-950">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills Matrix</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills, Frameworks &amp; <span className="text-gradient-cyan">AI Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Focused around 10 core production pillars spanning Python, modern React, database architecture, and containerization.
          </motion.p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categoryTabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20 scale-105"
                      : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-colors"
            />
          </div>
        </div>

        {/* Core 10 Skills Grid */}
        <div className="space-y-6">
          {!isFiltering && (
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>10 Core Production Skills</span>
              </span>
              <span className="text-xs text-zinc-500 font-mono">10 of 10 visible</span>
            </div>
          )}

          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {coreSkills.map((skill, idx) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group relative rounded-2xl glass-card p-4 border border-white/15 bg-white/[0.04] hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Skill Title */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Bottom Subtle Bar */}
                <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
                  <span>{getCategoryLabel(skill.category)}</span>
                  <Sparkles className="w-3 h-3 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Collapsible / Filtered Additional Skills */}
          <AnimatePresence>
            {visibleAdditionalSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6"
              >
                <div className="flex items-center justify-between pb-3 border-t border-white/10 pt-6">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Additional Technical Skills</span>
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {visibleAdditionalSkills.length} additional skills
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {visibleAdditionalSkills.map((skill, idx) => (
                    <motion.div
                      layout
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: idx * 0.02 }}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className="group relative rounded-2xl glass-card p-4 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between"
                    >
                      {/* Header Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 transition-colors">
                          <Code2 className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Skill Title */}
                      <div>
                        <h3 className="text-white font-bold text-sm tracking-tight group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Bottom Subtle Bar */}
                      <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
                        <span>{getCategoryLabel(skill.category)}</span>
                        <Sparkles className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* "More Skills" Toggle Button (shown when not searching and viewing 'all') */}
          {!isFiltering && additionalSkills.length > 0 && (
            <div className="text-center pt-6">
              <button
                type="button"
                onClick={() => setShowMoreSkills(!showMoreSkills)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                {showMoreSkills ? (
                  <>
                    <span>Show Fewer Skills</span>
                    <ChevronUp className="w-4 h-4 text-cyan-400" />
                  </>
                ) : (
                  <>
                    <span>Show More Skills (+{additionalSkills.length})</span>
                    <ChevronDown className="w-4 h-4 text-cyan-400" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No matching skills found for &quot;{searchQuery}&quot;.
          </div>
        )}

        {/* Soft Skills & Spoken Languages Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 pt-8 border-t border-white/10">
          {/* Soft Skills Box */}
          <div className="rounded-3xl glass-card p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-white font-bold text-base">Soft Skills &amp; Leadership</h3>
                <p className="text-zinc-400 text-xs">Professional interpersonal and managerial strengths</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-zinc-200 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  ✨ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Spoken Box */}
          <div className="rounded-3xl glass-card p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Globe className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-white font-bold text-base">Languages (Communication)</h3>
                <p className="text-zinc-400 text-xs">Multilingual working proficiency</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {spokenLanguages.map((langItem) => (
                <div
                  key={langItem.lang}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-white font-bold text-sm">{langItem.lang}</span>
                  <span className="text-zinc-400 text-[11px] mt-1">{langItem.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
