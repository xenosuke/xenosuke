const { useState: useStateL } = React;

// ヒーローカード
function Hero() {
  return (
    <header style={{ padding: "48px 48px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", right: "8%", top: "20%",
        width: 120, height: 120, borderRadius: "50%",
        background: "var(--accent-2)", opacity: 0.9,
      }} />
      <div style={{
        position: "absolute", right: "22%", top: "55%",
        width: 56, height: 56, borderRadius: 10,
        background: "var(--accent-3)", opacity: 0.9,
        transform: "rotate(15deg)",
      }} />
      <div style={{
        position: "absolute", right: "4%", top: "65%",
        width: 44, height: 44,
        background: "var(--accent-4)", opacity: 0.9,
        clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
      }} />
      <div style={{
        fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: 11, letterSpacing: "0.2em", opacity: 0.6, marginBottom: 16,
      }}>
        game developer 2025–2026
      </div>
      <h1 style={{
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        fontSize: "clamp(48px, 9vw, 120px)",
        fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em",
        margin: 0, color: "var(--fg)", maxWidth: "70%",
      }}>
        My<span style={{
          background: "var(--accent-1)", color: "var(--bg)",
          padding: "0 0.15em", display: "inline-block",
          transform: "rotate(-2deg)",
        }}>Game</span>Projects
      </h1>
    </header>
  );
}

// プロジェクトグリッド
function ProjectsView({ projects }) {
  const [hover, setHover] = useStateL(null);
  return (
    <section style={{ padding: "48px 48px 80px" }}>
      <SectionLabel num="01">PROJECTS — {String(projects.length).padStart(2, "0")}</SectionLabel>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 24,
      }}>
        {projects.map((p, i) => (
          <article
            key={p.id}
            onMouseEnter={() => setHover(p.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 16, overflow: "hidden",
              background: "var(--surface)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              transform: hover === p.id ? "translateY(-4px)" : "translateY(0)",
              boxShadow: hover === p.id ? "8px 8px 0 var(--fg)" : "0 0 0 var(--fg)",
              cursor: "pointer",
            }}
          >
            <div style={{ aspectRatio: "16 / 10", borderBottom: "1px solid var(--border)" }}>
              {p.image
                ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                : <GamePlaceholder palette={p.palette} label={`${p.title.toLowerCase()}_01.png`} seed={p.id} />
              }
            </div>
            <div style={{ padding: 24 }}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                fontFamily: "ui-monospace, monospace", fontSize: 11,
                opacity: 0.6, letterSpacing: "0.1em", marginBottom: 12,
              }}>
                <span>#{String(i + 1).padStart(2, "0")} · {p.year}</span>
                <span style={{
                  padding: "2px 8px", border: "1px solid var(--border)",
                  borderRadius: 999, fontSize: 10,
                }}>{p.status}</span>
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 28, fontWeight: 700, margin: "0 0 4px",
                letterSpacing: "-0.02em",
              }}>{p.title}</h3>
              <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 16 }}>{p.subtitle}</div>
              <p style={{ fontSize: 14, lineHeight: 1.65, opacity: 0.85, marginBottom: 16 }}>
                {p.description}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.tools.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// フッター
function Footer() {
  return (
    <footer style={{
      padding: "40px 48px",
      borderTop: "1px solid var(--border)",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 32, alignItems: "center",
    }}>
      <div style={{ fontSize: 13, fontFamily: "ui-monospace, monospace" }}>
        <span style={{ opacity: 0.6 }}>© 2026 sukenosuke · Hosted on GitHub Pages · </span>
        <a
          href="./notes.html"
          style={{
            color: "var(--fg)", opacity: 0.25, textDecoration: "none",
            fontSize: 11, letterSpacing: "0.05em",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={e => e.target.style.opacity = 0.7}
          onMouseLeave={e => e.target.style.opacity = 0.25}
        >notes</a>
      </div>
      <div style={{ display: "flex", gap: 16, fontFamily: "ui-monospace, monospace", fontSize: 13 }}>
        <a href="https://unityroom.com/users/sukenosuke" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--fg)" }}>UnityRoom</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, ProjectsView, Footer });
