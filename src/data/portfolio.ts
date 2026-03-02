export const siteConfig = {
  name: "Taylor Harris",
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
    id: "openfrontio-contributions",
    title: "Open Source Contributions: OpenFrontIO",
    summary:
      "Delivered a series of high-impact pull requests for OpenFrontIO, establishing core architectural patterns for mobile, fixing rendering performance, and streamlining the competitive player experience.",
    challenge:
      "The game client suffered from architectural fragmentation with ad hoc environment detection, rendering performance drops with non-square sprites, and UX friction forcing players to manually navigate back to the menu to requeue for ranked matches.",
    approach:
      "To establish a scalable architecture for mobile (PR #3325), consolidated platform, environment, and viewport detection into a single tested utility, replacing duplicated regex checks across the client. For rendering performance (PR #3320), corrected drawImage dimensions and canvas clearance boundaries for non-square unit scaling. To improve player retention and UX (PR #3121), implemented a 'Play Again' button in the post-game modal for Ranked 1v1s, seamlessly routing players back into the matchmaking queue via URL parameters, complete with state management and unit tests.",
    outcome: "Laid a stable foundation for mobile milestones · Improved client rendering pipeline · Streamlined the ranked competitive loop for players",
    tags: ["Open Source", "Game Dev", "TypeScript", "React", "Architecture"],
    accent: "violet",
    year: "2024",
  },
];

export const skills = [
  { category: "Reasoning & Design", items: ["System Architecture", "Algorithm Design", "Data Modelling", "API Design"] },
  { category: "AI / ML", items: ["LLM Fine-tuning", "RAG Pipelines", "Prompt Engineering", "MLOps"] },
  { category: "Engineering", items: ["TypeScript / Python", "Next.js / FastAPI", "PostgreSQL / Redis", "Docker / CI-CD"] },
  { category: "Practices", items: ["Test-Driven Development", "Observability", "Iterative Delivery", "Documentation"] },
];
