/**
 * PORTFOLIO CONFIGURATION
 * =======================
 * Edit your prices, contact links, external URLs, Formspree endpoint,
 * and testimonials all in one place.
 */

// Helper to determine the Next.js basePath (handles GitHub Pages subfolder deployment)
export const getBasePath = (): string => {
  if (typeof process !== "undefined") {
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
      return process.env.NEXT_PUBLIC_BASE_PATH;
    }
    if (process.env.NODE_ENV === "production") {
      return "/My_portfolio";
    }
  }
  return "";
};

export const SITE_CONFIG = {
  name: "Mehthab N M",
  role: "Full-Stack Developer • Python Developer • Software Developer",
  url: "https://mehthab-n-m.github.io/My_portfolio/",
  ogImage: "/og-image.png",
  canonicalUrl: "https://mehthab-n-m.github.io/My_portfolio/",
};

/**
 * CONTACT & EXTERNAL LINKS
 * Update your direct contact details and professional platform profiles here.
 */
export const CONTACT_INFO = {
  email: "mehthabnm7@gmail.com",
  phone: "+91 95262 56761",
  phoneRaw: "919526256761",
  location: "Kochi, Kerala, India",

  // GitHub & LinkedIn
  githubUrl: "https://github.com/MEHTHAB-N-M",
  linkedinUrl: "https://www.linkedin.com/in/mehthab-n-m-637611344",

  // WhatsApp link with pre-filled message
  whatsappUrl:
    "https://wa.me/919526256761?text=Hi%20Mehthab%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",

  // Resume file location in /public directory
  resumePath: "/mehthab_n_m.pdf",

  // Timezone and international business hours overlap
  timezone: "IST (UTC +05:30) • Flexible overlap with US, UK & Gulf business hours",
};

/**
 * CLIENT TESTIMONIALS
 * ===================
 * Edit testimonials here. If you clear this array (i.e. set to []),
 * the Testimonials section will automatically hide from the website.
 */
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [];

