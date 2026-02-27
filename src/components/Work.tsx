"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Tag, ChevronDown, ChevronUp } from "lucide-react";
import { caseStudies } from "@/data/portfolio";

const accentMap: Record<string, { border: string; badge: string; glow: string; text: string; bar: string }> = {
  violet: {
    border: "border-violet-500/30",
    badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    glow: "from-violet-600/20 to-transparent",
    text: "text-violet-400",
    bar: "from-violet-600 to-violet-400",
  },
  cyan: {
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    glow: "from-cyan-600/20 to-transparent",
    text: "text-cyan-400",
    bar: "from-cyan-600 to-cyan-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    glow: "from-emerald-600/20 to-transparent",
    text: "text-emerald-400",
    bar: "from-emerald-600 to-emerald-400",
  },
};

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const accent = accentMap[study.accent] ?? accentMap.violet;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={`relative rounded-2xl border ${accent.border} bg-white/[0.02] overflow-hidden`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${accent.bar}`} />

      <div className="p-8">
        {/* Year + tags */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <span className={`text-xs font-mono font-semibold tracking-wider ${accent.text}`}>
            {study.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${accent.badge}`}>
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-white text-2xl font-bold mb-3">{study.title}</h3>
        <p className="text-slate-300 leading-relaxed mb-5">{study.summary}</p>

        {/* Outcome callout */}
        <div className={`rounded-xl border ${accent.border} bg-white/[0.03] px-4 py-3 text-sm font-mono ${accent.text} mb-5`}>
          ✦ {study.outcome}
        </div>

        {/* Expandable detail */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
        >
          <span>{expanded ? "Hide" : "Show"} full breakdown</span>
          {expanded ? (
            <ChevronUp size={15} className="group-hover:text-white" />
          ) : (
            <ChevronDown size={15} className="group-hover:text-white" />
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                    The Approach
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{study.approach}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="work" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,58,237,0.07),transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">
            Case Studies
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Real problems, documented approaches, and measurable outcomes — the
            &ldquo;how&rdquo; behind each result.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
