"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/public/profile.jpeg";
import {
  ArrowRight,
  MapPin,
  Mail,
  Award,
  Terminal,
  Users,
  Code,
  Download,
  Sparkles,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { CONTACT_INFO, getBasePath } from "@/config/portfolio";

const rotatingRoles = [
  "Full-Stack Developer",
  "Python Developer",
  "Software Developer",
];

export default function HeroSection() {
  const [currentRoleText, setCurrentRoleText] = useState("Full-Stack Developer");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = rotatingRoles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentRoleText.length < fullText.length) {
          setCurrentRoleText(fullText.slice(0, currentRoleText.length + 1));
        } else {
          // Pause at end of completed title before backspacing
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentRoleText.length > 0) {
          setCurrentRoleText(fullText.slice(0, currentRoleText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentRoleText, isDeleting, roleIndex]);
  const metrics = [
    {
      value: "Best Performer",
      label: "Logix Space Award",
      detail: "LinkUrCodes Full-Stack Trainee",
      icon: Award,
      color: "from-amber-400 to-amber-300",
    },
    {
      value: "2 Teams Led",
      label: "Engineering Team Lead",
      detail: "7 & 4 Engineers (Hackathon & ML)",
      icon: Users,
      color: "from-sky-400 to-cyan-400",
    },
    {
      value: "30/30",
      label: "ICT Data Science Score",
      detail: "400 hrs Certified Specialist",
      icon: Code,
      color: "from-emerald-400 to-teal-400",
    },
    {
      value: "CPL Rank",
      label: "National Cadet Corps",
      detail: "NCC 'A' & 'B' Leadership Certs",
      icon: ShieldCheck,
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const resumeHref = `${getBasePath()}${CONTACT_INFO.resumePath}`;

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open to full-time roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Kochi, Kerala, India</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-zinc-400 text-lg sm:text-xl font-medium tracking-wide uppercase">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Mehthab <span className="text-gradient-indigo">N M</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start pt-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  {currentRoleText}
                </span>
                <span className="inline-block w-[3px] h-7 sm:h-8 ml-1 bg-cyan-400 animate-pulse rounded-full" />
              </div>
            </motion.div>

            {/* Bio Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal"
            >
              BCA graduate with <span className="text-white font-semibold">1 year 7 months</span> of hands-on experience as a <span className="text-white font-semibold">Full Stack Trainee</span> at LinkUrCodes, where I earned the <span className="text-white font-semibold">Best Performer Award</span>. Currently pursuing an <span className="text-white font-semibold">MCA at IGNOU</span> and advanced Python full-stack training (Django, React, AI) at Camerin. I build products by combining proven ideas into new workflows, such as <span className="text-white font-semibold">RaktaGrid</span>, a deployed emergency blood dispatch system with row-level locking tested against double-booking. I also built <span className="text-white font-semibold">ZynkaraShift</span>, a self-hosted deployment platform with Docker and AI-assisted deploys.
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              {/* Primary: Contact Me */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Contact Me</span>
              </a>

              {/* Secondary: View Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-indigo-500/50 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume */}
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                download="Mehthab_N_M_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-zinc-300 hover:text-white text-sm font-medium transition-all"
                title="Download Resume (PDF)"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-zinc-400 flex-wrap"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Connect:</span>
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Hero Profile Card & Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Animated Glowing Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-500 opacity-50 blur-xl animate-pulse-glow" />

              {/* Profile Card Container */}
              <div className="relative rounded-3xl glass-card p-4 sm:p-5 border border-white/15 overflow-hidden shadow-2xl">
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-zinc-900">
                  <Image
                    src={profilePic}
                    alt="Mehthab N M"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-xs text-zinc-200 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{rotatingRoles[roleIndex]}</span>
                  </div>

                  {/* Bottom Floating Skill Pills */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {["Python", "Django", "React.js", "Next.js", "Docker", "REST APIs", "SQL/NoSQL", "GenAI"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-indigo-300 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Sub-Banner */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base">Mehthab N M</h3>
                    <p className="text-zinc-400 text-xs">Full-Stack Developer • MCA Candidate</p>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400" title="Best Performer Award, LinkUrCodes">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Metrics Highlight Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20"
        >
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-card p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                    <div className="text-white font-bold text-sm mt-1">
                      {metric.label}
                    </div>
                    <div className="text-zinc-400 text-xs mt-0.5">
                      {metric.detail}
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
