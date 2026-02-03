export const PROFILE = {
  name: "Kosuke Sato",
  tagline: "USC Math • Algebraic combinatorics • Software",
  buttons: [
    { label: "GitHub", href: "https://github.com/Michael52555" },
    { label: "Email", href: "mailto:you@example.com" },
    // { label: "Resume", href: "/portfolio/resume.pdf" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
  ],
};

export const ABOUT = [
  "I’m a USC math student working in algebraic combinatorics / representation theory. I’m especially interested in the automorphism group of surjective flags of finitely generated modules over DVRs with finite residue fields, such as $\\mathbb{Z}_p$ and $\\mathbb{F}_q[[T]]$, which are highly relevant in the study of Markov property of finitized Cohen Lenstra Measure Heuristics. I'm also interested in Weyr forms, characterizing the isomorphism classes of $\\mathbb{F}_q[[T]]$ modules",
  "On the software side, I built tools for math research: scraping and searching arxIv research papers, and pipelines that matches papers with math topics based on keywords from Abstract."
];

export const FEATURED = [
  {
    title: "Weyr Flags & Automorphisms over DVRs",
    subtitle: "Research highlight",
    bullets: [
      "Classifying automorphisms of surjective flags over DVRs (e.g. Z_p, F_q[[T]])",
      "Exploring Hall-polynomial-like counts via Weyr-type invariants",
    ],
    links: [
      // { label: "Slides", href: "/portfolio/slides/weyr.pdf" },
    ],
  },
  {
    title: "arXiv Math Paper Miner",
    subtitle: "Software highlight",
    bullets: [
      "Scrapes arXiv math papers and builds a topic/keyword search layer",
      "Embeddings + vector search pipeline (FAISS-style approach)",
    ],
    links: [{ label: "Repo", href: "https://github.com/Michael52555" }],
  },
];

export const RESEARCH = [
  {
    title: "Weyr Flags & Automorphisms over DVRs",
    subtitle: "Algebraic combinatorics / representation theory",
    bullets: [
      "Goal: structural classification + counts of automorphisms for flag data",
      "Tech: module/flag invariants, Hall polynomial ideas, Bruhat-style decompositions (where applicable)",
    ],
    links: [],
  },
];

export const PROJECTS = [
  {
    title: "arXiv Math Paper Miner",
    subtitle: "Python • scraping • embeddings/search",
    bullets: [
      "Scrapes math papers + metadata; builds search over topics/keywords",
      "Indexing pipeline with embeddings and similarity search",
    ],
    links: [{ label: "Repo", href: "https://github.com/Michael52555" }],
  },
];

export const SKILLS = {
  software: ["Python", "C++", "Java", "React/Vite", "Git", "Probability Theory", "Mandarin", "English", "Data Science", "LaTeX"],
  math: ["Group Theory", "Module Theory", "Probability Theory", "Linear Algebra", "Combinatorics", "Calculus and Mathematical Analysis", "Basic Representation theory", "Algebraic geometry (intro)", "Mathematical Research"],
};
