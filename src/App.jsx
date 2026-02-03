import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from "./components/Section";
import Card from "./components/Card";
import { PROFILE, ABOUT, FEATURED, RESEARCH, PROJECTS, SKILLS } from "./content";

export default function App() {
  return (
    <div style={{ background: "#f6f7fb", minHeight: "100vh" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 20px" }}>
        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800 }}>{PROFILE.name}</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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
                <p key={p} style={{ margin: "0 0 10px" }}>
                  {p}
                </p>
              ))}
            </div>
          </Section>

          <Section id="featured" title="Featured">
            {FEATURED.map((x) => <Card key={x.title} {...x} />)}
          </Section>

          <Section id="research" title="Research">
            {RESEARCH.map((x) => <Card key={x.title} {...x} />)}
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
              <div>Email: <a href="mailto:you@example.com">you@example.com</a></div>
              <div>GitHub: <a href="https://github.com/Michael52555" target="_blank" rel="noreferrer">Michael52555</a></div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
