"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Mail, Sparkles, Download } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { CONTACT_INFO, getBasePath } from "@/config/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeHref = `${getBasePath()}${CONTACT_INFO.resumePath}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#about"
            className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white transition-transform duration-200 hover:scale-105"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                <Code2 className="w-5 h-5 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <span className="font-extrabold tracking-wider">
              MEHTHAB <span className="text-indigo-400 font-light">N M</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-cyan-600/80 rounded-full border border-indigo-400/30 shadow-lg shadow-indigo-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              download="Mehthab_N_M_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-full transition-all duration-200"
              title="Download Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xl:inline">Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href.substring(1));
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={CONTACT_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={resumeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mehthab_N_M_Resume.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-200 bg-white/5 border border-white/10 rounded-full"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Resume</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full shadow-lg shadow-indigo-500/25"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
