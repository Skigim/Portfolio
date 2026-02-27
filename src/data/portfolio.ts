export const siteConfig = {
  name: "Alex Morgan",
  title: "AI-Assisted Developer",
  tagline: "Building intelligent systems by focusing on methods and logic — not just syntax.",
  email: "alex@example.com",
  github: "https://github.com/example",
  linkedin: "https://linkedin.com/in/example",
};

export const approaches = [
  {
    id: "problem-decomposition",
    title: "Problem Decomposition",
    description:
      "Breaking complex challenges into clearly scoped sub-problems, mapping dependencies, and solving each layer with targeted precision before integrating the solution.",
    icon: "Layers",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "iterative-reasoning",
    title: "Iterative Reasoning",
    description:
      "Hypothesis-driven development: form a model of the problem, test assumptions cheaply, revise, and repeat — treating every sprint as a mini-experiment.",
    icon: "RefreshCw",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "ai-augmentation",
    title: "AI Augmentation",
    description:
      "Pairing human architectural thinking with LLM capabilities to accelerate exploration, generate and evaluate alternatives, and surface edge cases early.",
    icon: "Cpu",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "systems-thinking",
    title: "Systems Thinking",
    description:
      "Modelling the full feedback loop — from user intent through data pipelines to outputs — to anticipate emergent behaviour and build for resilience.",
    icon: "Network",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "abstraction-layers",
    title: "Abstraction & Interfaces",
    description:
      "Designing clean boundaries between concerns so each layer can evolve independently, keeping complexity local and collaboration friction low.",
    icon: "Boxes",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "evidence-driven",
    title: "Evidence-Driven Decisions",
    description:
      "Anchoring design choices in measurable signals — latency budgets, error rates, user paths — rather than intuition or convention alone.",
    icon: "BarChart2",
    color: "from-lime-500 to-green-600",
  },
];

export const caseStudies = [
  {
    id: "intelligent-triage",
    title: "Intelligent Support Triage",
    summary:
      "Reduced mean time-to-resolution by 62% by routing support tickets to the right team using a multi-label classification pipeline trained on historical ticket data.",
    challenge:
      "A growing SaaS company was drowning in mis-routed support tickets, causing SLA breaches and customer churn.",
    approach:
      "Mapped the ticket lifecycle, identified 14 distinct routing categories, then designed a lightweight transformer fine-tune pipeline. Used active learning to prioritise labelling effort and staged roll-out with a confidence threshold to maintain human oversight.",
    outcome: "62% reduction in MTTR · 89% routing accuracy · 0 changes to existing CRM workflow",
    tags: ["NLP", "Classification", "Active Learning", "Pipeline Design"],
    accent: "violet",
    year: "2024",
  },
  {
    id: "data-quality-loop",
    title: "Automated Data Quality Loop",
    summary:
      "Designed a self-healing data pipeline that detected schema drift, quarantined anomalous records, and alerted owners — eliminating weekly manual audits.",
    challenge:
      "An analytics team spent 30% of sprint capacity on ad-hoc data fixes caused by undetected upstream schema changes.",
    approach:
      "Implemented a schema registry with contract testing at ingestion points. Built a statistical anomaly detector (z-score + IQR ensemble) that tagged records in real-time and generated a weekly digest summarising drift trends.",
    outcome: "Zero missed schema changes post-launch · 30% sprint capacity reclaimed · Digest adopted by 3 adjacent teams",
    tags: ["Data Engineering", "Anomaly Detection", "Contract Testing", "Observability"],
    accent: "cyan",
    year: "2024",
  },
  {
    id: "rag-knowledge-base",
    title: "Context-Aware Knowledge Base",
    summary:
      "Built a Retrieval-Augmented Generation system that let a 200-person operations team query internal documentation in plain language with source citations.",
    challenge:
      "Institutional knowledge was locked in 4,000+ unstructured documents across three platforms, creating information asymmetry and onboarding delays.",
    approach:
      "Chunked and embedded documents using a hybrid BM25 + dense retrieval strategy, then layered a re-ranking step to maximise passage relevance before generation. Designed a citation UI that built user trust gradually.",
    outcome: "Avg. query answered in <8 s · Onboarding time cut by 40% · 94% user satisfaction score",
    tags: ["RAG", "Vector Search", "Re-ranking", "UX Design"],
    accent: "emerald",
    year: "2023",
  },
];

export const skills = [
  { category: "Reasoning & Design", items: ["System Architecture", "Algorithm Design", "Data Modelling", "API Design"] },
  { category: "AI / ML", items: ["LLM Fine-tuning", "RAG Pipelines", "Prompt Engineering", "MLOps"] },
  { category: "Engineering", items: ["TypeScript / Python", "Next.js / FastAPI", "PostgreSQL / Redis", "Docker / CI-CD"] },
  { category: "Practices", items: ["Test-Driven Development", "Observability", "Iterative Delivery", "Documentation"] },
];
