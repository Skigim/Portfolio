"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

function SkillGroup({ group, index }: { group: (typeof skills)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
    >
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
        {group.category}
      </h3>
      <ul className="space-y-2.5">
        {group.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3 block">
            Toolkit
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills &amp; Tools
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A curated set of capabilities — chosen for depth, not breadth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
