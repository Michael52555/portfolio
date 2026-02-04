import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from "./components/Section";
import Card from "./components/Card.jsx";
import { PROFILE, ABOUT, RESEARCH, INTERNSHIPS, PROJECTS, SKILLS } from "./content";
import { InlineMath, BlockMath } from 'react-katex'
import MarkdownMath from "./components/MarkdownMath";

const THEME = {
  accent: "#7C1D1D",          
  accentSoft: "rgba(207, 44, 44, 0.1)",
  ink: "rgba(195, 19, 19, 0.88)",
  muted: "rgba(0,0,0,0.62)",
  page: "#f6f7fb",
  panel: "white",
  border: "rgba(0,0,0,0.10)",
};

export default function App() {
  return (
    <div style={{ background: THEME.page, minHeight: "100vh" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 20px" }}>
        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800 }}>{PROFILE.name}</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="#research"style={{ color: THEME.accent, fontWeight: 650 }}> Research</a>
            <a href="#projects"style={{ color: THEME.accent, fontWeight: 650 }}>Projects</a>
            <a href="#contact"style={{ color: THEME.accent, fontWeight: 650 }}>Contact</a>
          </div>
        </div>

        {/* HERO */}
        <header style={{ padding: "54px 0 20px", textAlign: "center" }}>
          <h1 style={{ fontSize: 50, margin: "0 0 8px" }}>{PROFILE.name}</h1>
          <div style={{ color: "rgba(0,0,0,0.65)" }}>{PROFILE.tagline}</div>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {PROFILE.buttons.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target={b.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                style={{
                  border: "1px solid rgba(0,0,0,0.14)",
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "white",
                }}
              >
                {b.label}
              </a>
            ))}
          </div>
        </header>

        {/* CONTENT */}
        <main style={{ background: "white", borderRadius: 18, padding: "0 22px" }}>
          <Section id="about" title="About">
            <div style={{ lineHeight: 1.75 }}>
              {ABOUT.map((p) => (
                <div key={p} style={{ margin: "0 0 10px" }}>
                  <MarkdownMath>{p}</MarkdownMath>
                </div>
              ))}
            </div>
          </Section>

          

          <Section id="research" title="Research">
            {RESEARCH.map((x) => <Card key={x.title} {...x} />)}
          </Section>

          <Section id="internship" title="Internship">
            {INTERNSHIPS.map((x) => <Card key={x.title} {...x} />)}
          </Section>

          <Section id="projects" title="Projects">
            {PROJECTS.map((x) => <Card key={x.title} {...x} />)}
          </Section>

          <Section id="skills" title="Skills">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Software</div>
                <div style={{ color: "rgba(0,0,0,0.7)" }}>{SKILLS.software.join(" • ")}</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Math</div>
                <div style={{ color: "rgba(0,0,0,0.7)" }}>{SKILLS.math.join(" • ")}</div>
              </div>
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div style={{ lineHeight: 1.8 }}>
              <div>Email: <a href="kosukesa@usc.edu">kosukesa@usc.edu</a></div>
              <div>GitHub: <a href="https://github.com/Michael52555" target="_blank" rel="noreferrer">Michael52555</a></div>
            </div>
          </Section>
        </main>
        <footer
        style={{
        marginTop: 36,
        padding: "18px 12px",
        textAlign: "center",
        fontSize: 13,
        color: THEME.muted,
        }}
        >
  ©     2026 {PROFILE.name} · Built with React + Vite · Hosted on GitHub Pages
        </footer>
      </div>
    </div>
  );
}
