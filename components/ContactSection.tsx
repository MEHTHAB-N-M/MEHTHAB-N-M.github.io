"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  Phone,
  ExternalLink,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { CONTACT_INFO } from "@/config/portfolio";

const PROJECT_TYPE_OPTIONS = [
  "Business/Portfolio Website",
  "Full-Stack Web App",
  "Bug Fixes & Deployment",
  "Data Analysis & Dashboards",
  "Full-Time / Developer Role",
  "Other",
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "Business/Portfolio Website",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  // Listen for 'select-project-type' events triggered by "Get a Quote" buttons in ServicesSection
  useEffect(() => {
    const handleSelectProjectType = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, projectType: customEvent.detail }));
      }
    };

    window.addEventListener("select-project-type", handleSelectProjectType);
    return () => {
      window.removeEventListener("select-project-type", handleSelectProjectType);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = () => {
    const errors: typeof validationErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please enter a message with at least 10 characters.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildMailtoUrl = () => {
    const subjectLine =
      formData.subject.trim() ||
      `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`;

    const bodyContent = `Hi Mehthab,

Name: ${formData.name}
Email: ${formData.email}
Project / Inquiry Type: ${formData.projectType}

Message:
${formData.message}
`;

    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;
  };

  const buildWhatsAppUrl = () => {
    const text = `Hi Mehthab, I saw your portfolio.
My Name: ${formData.name || "Client"}
Project Type: ${formData.projectType}
Message: ${formData.message || "I would like to discuss a project."}`;

    return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleCopyFullMessage = () => {
    const fullText = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Launch email app with drafted inquiry
    setTimeout(() => {
      window.location.href = buildMailtoUrl();
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-950">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Build Something <span className="text-gradient-indigo">Exceptional</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Whether you are looking to hire for a full-time engineering role, need a custom web application built, or have an API/AI project — I am ready to collaborate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Direct Email Card */}
            <div className="group relative rounded-3xl glass-card p-5 sm:p-6 border border-white/10 glass-card-hover overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Direct Response
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-0.5">Email Address</h3>
              <p className="text-zinc-400 text-xs mb-3">Click to copy or compose message</p>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-indigo-500/40 transition-colors">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-zinc-200 hover:text-white font-mono text-xs sm:text-sm font-semibold truncate"
                >
                  {CONTACT_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all shrink-0 active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="group relative rounded-3xl glass-card p-5 sm:p-6 border border-white/10 glass-card-hover overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Call / WhatsApp
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-0.5">Direct Phone &amp; WhatsApp</h3>
              <p className="text-zinc-400 text-xs mb-3">Available for urgent project queries</p>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/40 transition-colors">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-zinc-200 hover:text-white font-mono text-xs sm:text-sm font-semibold truncate"
                >
                  {CONTACT_INFO.phone}
                </a>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-3xl glass-card p-5 sm:p-6 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Location &amp; Availability</h3>
                  <p className="text-zinc-300 text-xs sm:text-sm font-semibold">
                    {CONTACT_INFO.location}
                  </p>
                  <span className="text-emerald-400 text-[11px] font-medium block mt-0.5">
                    IST (UTC +05:30) • Flexible overlap with US, UK &amp; Gulf hours
                  </span>
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
            </div>

            {/* Social Channels */}
            <div className="rounded-3xl glass-card p-5 sm:p-6 border border-white/10 space-y-3">
              <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-wider">
                Connect Channels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={CONTACT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                    <span className="text-xs font-semibold text-zinc-200">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400" />
                </a>

                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                    <span className="text-xs font-semibold text-zinc-200">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Pre-formatted Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-card p-6 sm:p-8 border border-white/15 relative overflow-hidden shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Opening Email Client...</h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formatted and opened in your email app. If your mail app didn&apos;t launch automatically, use one of the options below:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <a
                      href={buildMailtoUrl()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail App</span>
                    </a>

                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFullMessage}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-semibold transition-all"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Message Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-zinc-400 hover:text-white underline transition-colors"
                    >
                      Edit or Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-white font-bold text-xl">Send an Inquiry</h3>
                      <p className="text-zinc-400 text-xs">
                        Available for full-time engineering roles &amp; technical inquiries
                      </p>
                    </div>
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (validationErrors.name) {
                            setValidationErrors({ ...validationErrors, name: undefined });
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                          validationErrors.name
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        }`}
                      />
                      {validationErrors.name && (
                        <p className="text-rose-400 text-xs mt-1">
                          {validationErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (validationErrors.email) {
                            setValidationErrors({ ...validationErrors, email: undefined });
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                          validationErrors.email
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        }`}
                      />
                      {validationErrors.email && (
                        <p className="text-rose-400 text-xs mt-1">
                          {validationErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Selector & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Inquiry / Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Project or Role Discussion"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Mehthab, I would like to discuss a project / full-time role regarding..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (validationErrors.message) {
                          setValidationErrors({
                            ...validationErrors,
                            message: undefined,
                          });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                        validationErrors.message
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      }`}
                    />
                    {validationErrors.message && (
                      <p className="text-rose-400 text-xs mt-1">
                        {validationErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 disabled:opacity-60 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Opening Mail..." : "Send Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
