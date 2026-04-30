// data.jsx - ゲームプロジェクトデータ

const PROJECTS = [
  {
    id: 1,
    title: "演出愛は止まらない！",
    image: "textures/001.png",
    subtitle: "2Dアクション / サイドビュー",
    year: "2025",
    role: "個人開発",
    tools: ["Unity", "C#"],
    description: "シンプルな横スクロールジャンプアクションゲーム。過剰な演出というメタな方法でプレイヤーを妨害してきます。",
    palette: ["#ff6b9d", "#ffc16b", "#3b3b58"],
    status: "リリース済み",
  },
  {
    id: 2,
    title: "止めどきポーション工房",
    image: "textures/002.png",
    subtitle: "2Dパズル",
    year: "2025",
    role: "個人開発",
    tools: ["Unity", "C#"],
    description: "ボタン一つで遊べる物理パズル。運要素強めですが、連打するだけではスコアは伸びない、加減が大事なゲームです。",
    palette: ["#7ad3a8", "#5eb0e0", "#1f3a3d"],
    status: "リリース済み",
  },
  {
    id: 3,
    title: "Sigil Weaver",
    subtitle: "ジェスチャーで魔法を編むローグライク",
    year: "2024",
    role: "プログラマー (チーム3名)",
    tools: ["Unity", "C#", "Shader Graph"],
    description: "マウスで描いた図形が魔法陣として認識され、その形状や速度に応じて効果が変化するローグライクアクション。ジェスチャー認識アルゴリズムを自作。",
    palette: ["#a47bff", "#ffd166", "#2a1f4d"],
    status: "開発中",
  },
  {
    id: 4,
    title: "Tiny Diner",
    subtitle: "縦持ちカジュアル経営シム",
    year: "2023",
    role: "個人開発",
    tools: ["Phaser", "TypeScript"],
    description: "ブラウザで動く小さな食堂経営ゲーム。注文と調理のリズム感を重視し、5分で1ループ完結するように設計。Web公開済み。",
    palette: ["#ff8a5b", "#ffe066", "#3d2a1f"],
    status: "公開中",
  },
];

Object.assign(window, { PROJECTS });
