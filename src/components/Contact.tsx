"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, value: siteConfig.email },
  { icon: Github, label: "GitHub", href: siteConfig.github, value: "github.com/example" },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin, value: "linkedin.com/in/example" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(124,58,237,0.15),transparent)] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Start a Conversation
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Have a problem worth solving? I&apos;m always open to discussing new
            projects, interesting challenges, or opportunities to collaborate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {links.map(({ icon: Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200 w-full sm:w-auto"
              >
                <Icon size={18} className="text-violet-400 flex-shrink-0" />
                <span className="flex flex-col text-left">
                  <span className="text-xs text-slate-500 leading-none mb-0.5">{label}</span>
                  <span className="text-sm text-slate-200 group-hover:text-white transition-colors">{value}</span>
                </span>
                <ArrowUpRight size={14} className="ml-auto text-slate-600 group-hover:text-slate-300 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span className="flex items-center gap-1">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </section>
  );
}
