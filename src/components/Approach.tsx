"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  RefreshCw,
  Cpu,
  Network,
  Boxes,
  BarChart2,
  type LucideIcon,
} from "lucide-react";
import { approaches } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  RefreshCw,
  Cpu,
  Network,
  Boxes,
  BarChart2,
};

function ApproachCard({
  item,
  index,
}: {
  item: (typeof approaches)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = iconMap[item.icon] ?? Layers;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] p-6 transition-all duration-300 hover:border-white/10 overflow-hidden"
    >
      {/* Glow on hover */}
      <div
        className={`absolute -inset-px opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-2xl`}
        style={{ zIndex: -1 }}
      />

      <div
        className={`inline-flex w-11 h-11 rounded-xl items-center justify-center mb-4 bg-gradient-to-br ${item.color} shadow-lg`}
      >
        <Icon size={20} className="text-white" />
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

export default function Approach() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="approach" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3 block">
            How I Think
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Methods &amp; Approach
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            The reasoning patterns I apply to every project — independent of
            the language or framework in use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {approaches.map((item, i) => (
            <ApproachCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
