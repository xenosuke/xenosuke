// components.jsx - 共通コンポーネント

// プレースホルダ画像
function GamePlaceholder({ palette = ["#ff6b9d", "#ffc16b", "#3b3b58"], label = "screenshot", seed = 1 }) {
  const rand = (n) => { const x = Math.sin(seed * 9999 + n * 137) * 10000; return x - Math.floor(x); };
  const [c1, c2, c3] = palette;
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: c3, overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
        <defs>
          <pattern id={`grid-${seed}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke={c1} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
      </svg>
      <div style={{
        position: "absolute", left: `${10 + rand(1) * 30}%`, top: `${15 + rand(2) * 25}%`,
        width: `${20 + rand(3) * 25}%`, aspectRatio: "1", background: c1,
        borderRadius: rand(4) > 0.5 ? "50%" : "8px", opacity: 0.85,
      }} />
      <div style={{
        position: "absolute", right: `${10 + rand(5) * 20}%`, bottom: `${15 + rand(6) * 25}%`,
        width: `${15 + rand(7) * 20}%`, aspectRatio: "1", background: c2,
        borderRadius: rand(8) > 0.5 ? "50%" : "8px", opacity: 0.85,
      }} />
      <div style={{
        position: "absolute", left: `${30 + rand(9) * 30}%`, top: `${40 + rand(10) * 20}%`,
        width: `${10 + rand(11) * 12}%`, aspectRatio: "1", background: c2,
        borderRadius: "50%", opacity: 0.6,
      }} />
      <div style={{
        position: "absolute", bottom: 10, left: 12,
        fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: 10, color: c1, background: "rgba(0,0,0,0.4)",
        padding: "2px 8px", borderRadius: 3, letterSpacing: "0.05em",
      }}>{label}</div>
    </div>
  );
}

// タグチップ
function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", fontSize: 11,
      fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
      letterSpacing: "0.04em", border: "1px solid var(--border)",
      borderRadius: 999, color: "var(--fg)", background: "transparent",
    }}>{children}</span>
  );
}

// セクションヘッダ
function SectionLabel({ num, children }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32,
      fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
      fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase",
      color: "var(--fg)", opacity: 0.7,
    }}>
      <span>[ {num} ]</span>
      <span>{children}</span>
      <div style={{ flex: 1, height: 1, background: "var(--fg)", opacity: 0.2 }} />
    </div>
  );
}

Object.assign(window, { GamePlaceholder, Tag, SectionLabel });
