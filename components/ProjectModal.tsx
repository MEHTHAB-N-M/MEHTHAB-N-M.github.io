"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Layers,
  Sparkles,
  Shield,
  Activity,
  HeartHandshake,
  Users,
  Trophy,
  AlertCircle,
  Code2,
  HelpCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { ProjectItem, ProjectStatusType } from "@/config/projectsData";
import { getProjectGallery, GalleryImage } from "@/config/gallery";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const modalRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Retrieve gallery images for current project
  const images: GalleryImage[] = project ? getProjectGallery(project.id) : [];
  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[activeImageIdx] : null;

  // Reset image index and errors when project changes
  useEffect(() => {
    setActiveImageIdx(0);
    setIsLightboxOpen(false);
    setFailedImages({});
  }, [project]);

  // Navigate next image
  const handleNextImage = useCallback(() => {
    if (!hasImages) return;
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  }, [hasImages, images.length]);

  // Navigate previous image
  const handlePrevImage = useCallback(() => {
    if (!hasImages) return;
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [hasImages, images.length]);

  // Keyboard navigation & accessibility (Esc, Arrow keys)
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          e.stopPropagation();
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, isLightboxOpen, onClose, handleNextImage, handlePrevImage]);

  // Prevent background scrolling while modal or lightbox is open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    setTouchStartX(null);
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  if (!project) return null;

  // Status Badge Helper
  const renderStatusBadge = (status: ProjectStatusType, label?: string) => {
    switch (status) {
      case "live":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{label || "Live"}</span>
          </span>
        );
      case "in-development":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>{label || "In development"}</span>
          </span>
        );
      case "hackathon":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>{label || "Hackathon"}</span>
          </span>
        );
      case "client-project":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-purple-400" />
            <span>{label || "Client project"}</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/85 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl rounded-3xl glass-card border border-white/20 p-5 sm:p-8 bg-zinc-900/95 shadow-2xl z-10 my-auto overflow-hidden max-h-[92vh] overflow-y-auto text-left"
          >
            {/* Header Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/15 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 1. GALLERY: Large Main Image + Thumbnail Strip */}
            <div className="mb-6">
              {hasImages && currentImage ? (
                <div className="space-y-3">
                  {/* Large Main Image Display */}
                  <div
                    className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 group cursor-zoom-in"
                    onClick={() => setIsLightboxOpen(true)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsLightboxOpen(true);
                      }
                    }}
                    aria-label={`View fullscreen screenshot ${activeImageIdx + 1} of ${images.length}: ${currentImage.caption}`}
                  >
                    {!failedImages[activeImageIdx] ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={currentImage.src}
                        alt={`${project.title} screenshot ${activeImageIdx + 1}: ${currentImage.caption}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading={activeImageIdx === 0 ? "eager" : "lazy"}
                        onError={() => handleImageError(activeImageIdx)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-400 p-6 text-center space-y-2">
                        <AlertCircle className="w-8 h-8 text-indigo-400" />
                        <p className="text-xs sm:text-sm font-medium">Screenshot preview unavailable</p>
                      </div>
                    )}

                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Row: Image Counter & Expand Button */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90">
                        {activeImageIdx + 1} / {images.length}
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Click to expand</span>
                      </div>
                    </div>

                    {/* Navigation Arrows on Left and Right */}
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/50 hover:bg-black/80 text-white border border-white/15 opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/50 hover:bg-black/80 text-white border border-white/15 opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption Under Active Image */}
                  <div className="text-center px-2">
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed italic">
                      &ldquo;{currentImage.caption}&rdquo;
                    </p>
                  </div>

                  {/* Thumbnail Strip */}
                  {images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
                      {images.map((img, idx) => {
                        const isActive = idx === activeImageIdx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setActiveImageIdx(idx)}
                            className={`relative flex-shrink-0 w-16 sm:w-20 aspect-video rounded-xl overflow-hidden border transition-all ${
                              isActive
                                ? "border-cyan-400 ring-2 ring-cyan-400/40 opacity-100 scale-105"
                                : "border-white/10 opacity-55 hover:opacity-100 hover:border-white/30"
                            } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                            aria-label={`Select screenshot ${idx + 1}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={img.src}
                              alt=""
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center text-zinc-500 p-6 text-center space-y-2">
                  <Code2 className="w-8 h-8 text-indigo-400" />
                  <p className="text-sm font-medium text-zinc-300">{project.title}</p>
                  <p className="text-xs text-zinc-500">Live preview / repository available below</p>
                </div>
              )}
            </div>

            {/* 3. TITLE, STATUS BADGE & ACTION BUTTONS (Visible without scrolling) */}
            <div className="pt-2 border-t border-white/10 mb-5">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  {renderStatusBadge(project.statusBadge, project.badgeLabel)}
                  {project.isFlagship && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-indigo-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      🌟 FLAGSHIP
                    </span>
                  )}
                </div>

                {/* Primary Action Buttons (Live Demo + GitHub) */}
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-600/30 hover:scale-[1.02] active:scale-95"
                      aria-label={`Open live platform for ${project.title}`}
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      aria-label={`Open GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4 text-indigo-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h2
                id="project-modal-title"
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2"
              >
                {project.title}
              </h2>

              {/* Mentorship / Institutional note if present */}
              {(project.contextNote || project.hackathonNote) && (
                <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-medium">
                  <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{project.contextNote || project.hackathonNote}</span>
                </div>
              )}
            </div>

            {/* 4. ONE-LINE HOOK */}
            {project.hook && (
              <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20">
                <p className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-200 to-white italic">
                  &ldquo;{project.hook}&rdquo;
                </p>
              </div>
            )}

            {/* 5. PROBLEM AND SOLUTION (2-3 short lines) */}
            {project.problemSolution && project.problemSolution.length > 0 && (
              <div className="mb-5 rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2.5 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Problem &amp; Solution</span>
                </h3>
                <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.problemSolution.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            )}

            {/* 6. KEY FEATURES (3-5 bullets) */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Engineering Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. TECH STACK TAGS */}
            <div className="mb-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/15 text-xs font-medium text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 8. MY ROLE (For team projects) */}
            {(project.roleOrTeam || project.teamMembers) && (
              <div className="mb-6 p-3.5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                <Users className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-cyan-300">My Role: </span>
                  <span>{project.roleOrTeam || "Lead Developer"}</span>
                  {project.teamMembers && (
                    <div className="text-zinc-400 text-xs mt-1">
                      <span className="font-semibold text-zinc-300">Collaborators: </span>
                      {project.teamMembers}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Footer Close Button */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* 2. FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {isLightboxOpen && hasImages && currentImage && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between items-center p-3 sm:p-6 select-none cursor-pointer"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen image viewer"
          >
            {/* Top Bar */}
            <div
              className="w-full flex items-center justify-between text-white z-10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono">
                {activeImageIdx + 1} / {images.length}
              </div>

              <div className="text-xs sm:text-sm text-zinc-300 truncate max-w-[60%] text-center hidden sm:block">
                {project.title} &bull; {currentImage.caption}
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Close fullscreen lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Image Container */}
            <div
              className="relative w-full max-w-6xl max-h-[82vh] flex items-center justify-center my-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Prev/Next Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption & Controls */}
            <div
              className="w-full text-center py-2 px-4 cursor-default z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm text-zinc-300 font-medium max-w-3xl mx-auto">
                {currentImage.caption}
              </p>
              <p className="text-[11px] text-zinc-500 mt-1">
                Press Left/Right arrow keys or swipe to navigate &bull; Esc to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
