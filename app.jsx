// app.jsx - Playful固定、ダークモードはナビボタンのみ

const { useState: useS, useEffect: useE } = React;

const PALETTE = {
  bg: "#fff8f0", bgDark: "#1a1525",
  fg: "#1a1525", fgDark: "#fff8f0",
  surface: "#ffffff", surfaceDark: "#241d35",
  border: "#1a1525", borderDark: "#fff8f0",
  accent1: "#ff6b9d", accent2: "#7ad3a8",
  accent3: "#a47bff", accent4: "#ff8a5b", accent5: "#ffd166",
};

function applyPalette(dark) {
  const p = PALETTE;
  const r = document.documentElement;
  r.style.setProperty("--bg",      dark ? p.bgDark      : p.bg);
  r.style.setProperty("--fg",      dark ? p.fgDark      : p.fg);
  r.style.setProperty("--surface", dark ? p.surfaceDark : p.surface);
  r.style.setProperty("--border",  dark ? p.borderDark  : p.border);
  r.style.setProperty("--accent-1", p.accent1);
  r.style.setProperty("--accent-2", p.accent2);
  r.style.setProperty("--accent-3", p.accent3);
  r.style.setProperty("--accent-4", p.accent4);
  r.style.setProperty("--accent-5", p.accent5);
}

function NavBar({ darkMode, onToggleDark }) {
  return (
    <nav style={{
      position: "sticky", top: 0,
      display: "flex", justifyContent: "flex-end", alignItems: "center",
      padding: "20px 48px", borderBottom: "1px solid var(--border)",
      background: "var(--bg)", zIndex: 100, backdropFilter: "blur(8px)",
    }}>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        <a href="#works" style={{
          color: "var(--fg)", textDecoration: "none", fontSize: 13,
          fontFamily: "ui-monospace, monospace", letterSpacing: "0.05em",
        }}>WORKS</a>
        <button onClick={onToggleDark} aria-label="Toggle dark mode" style={{
          width: 32, height: 32, borderRadius: "50%",
          border: "1px solid var(--border)", background: "transparent",
          cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", color: "var(--fg)", fontSize: 14,
        }}>
          {darkMode ? "☾" : "☀"}
        </button>
      </div>
    </nav>
  );
}

function App() {
  const [darkMode, setDarkMode] = useS(false);

  useE(() => { applyPalette(darkMode); }, [darkMode]);

  return (
    <div style={{
      minHeight: "100vh", background: "var(--bg)", color: "var(--fg)",
      fontFamily: "'Space Grotesk', system-ui, -apple-system, 'Hiragino Kaku Gothic ProN', sans-serif",
    }}>
      <NavBar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <Hero />
      <div id="works">
        <ProjectsView projects={PROJECTS} />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
