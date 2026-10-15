"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  HeartHandshake,
  Brain,
  Ship,
  Palette,
  Users,
  Smartphone,
  Eye,
  ChevronDown,
  ChevronUp,
  Activity,
  Trophy,
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "@/components/SocialIcons";
import {
  ProjectItem,
  ProjectStatusType,
  getFeaturedProjects,
  getAdditionalProjects,
} from "@/config/projectsData";
import { getProjectCardCover } from "@/config/gallery";

export default function ProjectsSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const featuredProjects = getFeaturedProjects();
  const additionalProjects = getAdditionalProjects();

  const getProjectIcon = (category: string) => {
    if (category.includes("Healthcare") || category.includes("Dispatch") || category.includes("Blood")) return Activity;
    if (category.includes("PaaS")) return Sparkles;
    if (category.includes("Authentication") || category.includes("Identity")) return Shield;
    if (category.includes("Client") || category.includes("Design")) return HeartHandshake;
    if (category.includes("ML") || category.includes("AI")) return Brain;
    if (category.includes("Hackathon") || category.includes("Maritime")) return Ship;
    if (category.includes("Mobile") || category.includes("Game")) return Smartphone;
    if (category.includes("Enterprise") || category.includes("SaaS")) return Layers;
    return Code2;
  };

  const renderStatusBadge = (status: ProjectStatusType, label?: string) => {
    switch (status) {
      case "live":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>{label || "Live"}</span>
          </span>
        );
      case "in-development":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
            </span>
            <span>{label || "In development"}</span>
          </span>
        );
      case "hackathon":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <Trophy className="w-3 h-3 text-cyan-400" />
            <span>{label || "Hackathon"}</span>
          </span>
        );
      case "client-project":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            <HeartHandshake className="w-3 h-3 text-purple-400" />
            <span>{label || "Client project"}</span>
          </span>
        );
      default:
        return null;
    }
  };

  const renderProjectCard = (project: ProjectItem, idx: number) => {
    const IconComp = getProjectIcon(project.category);
    const cardThumbnail = getProjectCardCover(project.id);

    return (
      <motion.div
        layout
        key={project.id}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: idx * 0.05 }}
        whileHover={{ y: -6 }}
        className="group relative rounded-3xl glass-card p-5 sm:p-6 border border-white/10 glass-card-hover flex flex-col justify-between cursor-pointer overflow-hidden h-full"
        onClick={() => setActiveModalProject(project)}
      >
        {/* Subtle Card Glow Header */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

        <div className="flex flex-col">
          {/* 16:9 Dedicated Project Thumbnail (Distinct from gallery screenshots) */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-white/10 group-hover:border-indigo-500/30 transition-all">
            {cardThumbnail ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={cardThumbnail}
                alt={`${project.title} project thumbnail`}
                width={640}
                height={360}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".fallback-card");
                  if (fallback) (fallback as HTMLElement).style.display = "flex";
                }}
              />
            ) : null}

            {/* Fallback Placeholder (when image is missing or errors) */}
            <div
              className={`fallback-card ${
                cardThumbnail ? "hidden" : "flex"
              } absolute inset-0 w-full h-full items-center justify-center bg-zinc-900 text-zinc-400 p-4 text-center`}
            >
              <div className="flex flex-col items-center gap-1.5">
                <IconComp className="w-8 h-8 text-indigo-400" />
                <span className="text-xs font-semibold text-zinc-300 line-clamp-1">{project.title}</span>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/20 pointer-events-none" />

            {/* Overlaid Badges */}
            <div className="absolute top-2.5 right-2.5 z-10">
              {renderStatusBadge(project.statusBadge, project.badgeLabel)}
            </div>

            <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-medium">
              <IconComp className="w-3 h-3 text-indigo-400" />
              <span className="truncate max-w-[180px]">{project.category}</span>
            </div>
          </div>

          {/* Project Title */}
          <div className="flex items-start justify-between gap-2 mb-2 min-h-[3rem]">
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400 shrink-0 mt-0.5" />
          </div>

          {/* Institutional / Mentorship / Hackathon lineage notice */}
          {(project.contextNote || project.hackathonNote) && (
            <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium">
              <Users className="w-3 h-3 text-cyan-400 shrink-0" />
              <span className="truncate">{project.contextNote || project.hackathonNote}</span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[3.75rem]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col mt-auto">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5 min-h-[2.5rem] content-start">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300 group-hover:border-white/20 transition-colors"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-zinc-400">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Card Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5 text-indigo-400 group-hover:text-cyan-300 transition-colors font-semibold">
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </span>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600/80 to-cyan-600/80 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold shadow-md shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all text-xs"
                  title="Open Live Deployment"
                  aria-label={`Open live deployment for ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                  title="View Repository"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="relative py-28 bg-zinc-950/80">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio &amp; Engineering Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured Projects &amp; <span className="text-gradient-indigo">Production Builds</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            A curated selection of 6 flagship systems spanning emergency healthcare logistics, cloud PaaS, AI productivity platforms, maritime logistics, and enterprise multi-tenant ecosystems.
          </motion.p>
        </div>

        {/* 6 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {featuredProjects.map((project, idx) => renderProjectCard(project, idx))}
        </div>

        {/* Collapsible "More Projects" Toggle */}
        {additionalProjects.length > 0 && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg"
              aria-expanded={showMoreProjects}
            >
              {showMoreProjects ? (
                <>
                  <span>Show Fewer Projects</span>
                  <ChevronUp className="w-4 h-4 text-cyan-400" />
                </>
              ) : (
                <>
                  <span>Show More Projects (+{additionalProjects.length})</span>
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Additional Projects Expanded Section */}
        <AnimatePresence>
          {showMoreProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="pt-10 overflow-hidden"
            >
              <div className="text-center max-w-xl mx-auto mb-8 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">More Engineering Works</h3>
                <p className="text-zinc-400 text-xs mt-1">
                  Additional machine learning models, client portals, and interactive game projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {additionalProjects.map((project, idx) =>
                  renderProjectCard(project, idx + featuredProjects.length)
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
