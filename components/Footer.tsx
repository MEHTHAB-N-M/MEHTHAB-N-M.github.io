"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Code2, Mail, Heart, Clock } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { CONTACT_INFO } from "@/config/portfolio";

export default function Footer() {
  const [istTime, setIstTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setIstTime(formatter.format(new Date()));
      } catch {
        setIstTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    setMounted(true);
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Info */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-base">MEHTHAB N M</span>
              <p className="text-zinc-500 text-xs">
                Software Engineer • Full-Stack Developer &amp; Freelance Solutions
              </p>
            </div>
          </div>

          {/* Dynamic Live Clock Widget */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kochi, IN:</span>
            <span className="text-white font-bold tracking-wider">
              {mounted && istTime ? istTime : "12:00:00 AM"}
            </span>
          </div>

          {/* Socials & Top Scroll Button */}
          <div className="flex items-center gap-2.5">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <p>© {new Date().getFullYear()} Mehthab N M. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-indigo-400 fill-indigo-400" />
            <span>Next.js, Tailwind CSS &amp; Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
