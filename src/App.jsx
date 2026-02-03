import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px", fontFamily: "system-ui" }}>
      <h1>Kosuke Sato</h1>
      <p>USC Math • Algebraic Combinatorics • Software</p>

      <h2>Projects</h2>
      <ul>
        <li><a href="https://github.com/YOURUSERNAME">GitHub</a></li>
      </ul>

      <h2>Contact</h2>
      <p>Email: you@example.com</p>
    </div>
  );
}

const LINKS = [
  { label: "GitHub", href: "https://github.com/Michael52555" },
  // { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
  // { label: "Resume", href: "/resume.pdf" }, // add in Step 3
  { label: "Email", href: "mailto:you@example.com" },
];

const RESEARCH = [
  {
    title: "Weyr Flags & Automorphisms over DVRs",
    subtitle: "Algebraic combinatorics / representation theory",
    bullets: [
      "Classifying automorphisms of surjective flags over DVRs (e.g. ℤₚ, 𝔽_q[[T]])",
      "Exploring Hall polynomial–style counts via flags and Weyr-type invariants",
    ],
    links: [
      // { label: "Notes", href: "/notes/weyr-flags.pdf" },
      // { label: "Slides", href: "https://..." },
    ],
  },
];

const PROJECTS = [
  {
    title: "arXiv Math Paper Miner",
    subtitle: "Python • scraping • embeddings/search",
    bullets: [
      "Scrapes math papers and metadata; builds search over topics/keywords",
      "Indexing + similarity search pipeline (FAISS/embeddings)",
    ],
    links: [
      { label: "Repo", href: "https://github.com/Michael52555" },
      // { label: "Demo", href: "https://..." },
    ],
  },
];

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ padding: "48px 0" }}>
      <h2 style={{ margin: "0 0 16px", fontSize: 22 }}>{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, subtitle, bullets = [], links = [] }) {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.10)",
        borderRadius: 14,
        padding: 18,
        marginBottom: 14,
        background: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>{title}</div>
          {subtitle && (
            <div style={{ marginTop: 6, color: "rgba(0,0,0,0.65)", fontSize: 14 }}>
              {subtitle}
            </div>
          )}
        </div>
        {links.length > 0 && (
          <div style={{ display: "flex", gap: 10, alignItems: "start", flexWrap: "wrap" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {bullets.length > 0 && (
        <ul style={{ margin: "12px 0 0", paddingLeft: 18, lineHeight: 1.6 }}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: "#f6f7fb", minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 20px" }}>
        {/* Top Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>Kosuke Sato</div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Hero */}
        <header style={{ padding: "56px 0 24px", textAlign: "center" }}>
          <h1 style={{ fontSize: 48, margin: "0 0 10px", letterSpacing: "-0.03em" }}>
            Kosuke Sato
          </h1>
          <p style={{ margin: 0, color: "rgba(0,0,0,0.65)", fontSize: 16 }}>
            USC Math • Algebraic Combinatorics • Software
          </p>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                style={{
                  border: "1px solid rgba(0,0,0,0.15)",
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "white",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </header>

        {/* Main content */}
        <main style={{ background: "white", borderRadius: 18, padding: "0 22px" }}>
          <Section id="research" title="Research">
            {RESEARCH.map((r) => (
              <Card key={r.title} {...r} />
            ))}
          </Section>

          <Section id="projects" title="Projects">
            {PROJECTS.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </Section>

          <Section id="contact" title="Contact">
            <div style={{ lineHeight: 1.8 }}>
              <div>
                Email: <a href="mailto:you@example.com">you@example.com</a>
              </div>
              <div>
                GitHub: <a href="https://github.com/Michael52555" target="_blank" rel="noreferrer">
                  Michael52555
                </a>
              </div>
            </div>
          </Section>
        </main>

        <footer style={{ textAlign: "center", marginTop: 22, color: "rgba(0,0,0,0.55)" }}>
          © {new Date().getFullYear()} Kosuke Sato
        </footer>
      </div>
    </div>
  );
}



