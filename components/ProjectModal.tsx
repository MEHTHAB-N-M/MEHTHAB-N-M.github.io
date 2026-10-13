"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Code2,
  Layers,
  CheckCircle2,
  Cpu,
  Image as ImageIcon,
  Video,
  Sparkles,
  Users,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export interface ProjectMediaPlaceholder {
  type: "gallery" | "video";
  label: string;
  screenshots?: string[]; // Drop your image paths here: ['/campyteq-1.png', '/campyteq-2.png']
  videoUrl?: string; // Drop video URL or demo link here
  note?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  period?: string;
  roleOrTeam?: string;
  description: string;
  fullOverview: string;
  tech: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
  status?: "completed" | "ongoing";
  hackathonNote?: string;
  contextNote?: string;
  mediaPlaceholder?: ProjectMediaPlaceholder;
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl rounded-3xl glass-card border border-white/20 p-6 sm:p-8 bg-zinc-900/95 shadow-2xl z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill & Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-8">
            <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            {project.status === "completed" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Completed
              </span>
            )}
            {project.status === "ongoing" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                Ongoing • Work in progress
              </span>
            )}
            {project.roleOrTeam && (
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                👥 {project.roleOrTeam}
              </span>
            )}
            {project.isFlagship && (
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-indigo-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                🌟 FLAGSHIP
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {project.title}
          </h2>

          {/* Institutional / Mentorship / Hackathon lineage note if present */}
          {(project.contextNote || project.hackathonNote) && (
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
              <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{project.contextNote || project.hackathonNote}</span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Media / Screenshot Placeholder (For projects without live demo) */}
          {project.mediaPlaceholder && (
            <div className="mb-6 rounded-2xl bg-zinc-950/80 border border-dashed border-cyan-500/40 p-5 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider">
                  {project.mediaPlaceholder.type === "video" ? (
                    <Video className="w-4 h-4" />
                  ) : (
                    <ImageIcon className="w-4 h-4" />
                  )}
                  <span>{project.mediaPlaceholder.label}</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  Preview Slot
                </span>
              </div>

              {project.mediaPlaceholder.screenshots &&
              project.mediaPlaceholder.screenshots.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.mediaPlaceholder.screenshots.map((src, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video relative flex items-center justify-center text-zinc-500"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${project.title} preview ${sIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    {project.mediaPlaceholder.type === "video" ? (
                      <Video className="w-6 h-6" />
                    ) : (
                      <ImageIcon className="w-6 h-6" />
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-sm">
                    {project.mediaPlaceholder.type === "video"
                      ? "Demo Video Player Slot"
                      : "Screenshot Gallery Placeholder"}
                  </h4>
                  <p className="text-zinc-400 text-xs max-w-md mx-auto leading-relaxed">
                    {project.mediaPlaceholder.note ||
                      "Drop your demo image links in the project config under mediaPlaceholder.screenshots or a video URL in videoUrl."}
                  </p>
                  {project.mediaPlaceholder.videoUrl && (
                    <div className="pt-2">
                      <a
                        href={project.mediaPlaceholder.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold hover:bg-indigo-600/50"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Watch Demo Link</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Detailed Overview Box */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Working Modules &amp; Engineering Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-indigo-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl || "https://github.com/MEHTHAB-N-M"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-indigo-400" />
                <span>Repository</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25 hover:scale-105 active:scale-95"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Open Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
