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
    description: "シンプルな横スクロールジャンプアクションゲーム。敵にぶつからずにどこまで進めるかを競うゲームだが、演出というメタ的な手法でプレイヤーを妨害してくる。",
    palette: ["#ff6b9d", "#ffc16b", "#3b3b58"],
    status: "公開中",
  },
  {
    id: 2,
    title: "止めどきポーション工房",
    image: "textures/002.png",
    subtitle: "2Dパズル",
    year: "2025",
    role: "個人開発",
    tools: ["Unity", "C#"],
    description: "ボタン一つで遊べる物理パズル。運要素強めですが、連打するだけではスコアは伸びない、加減が大事なゲーム。",
    palette: ["#7ad3a8", "#5eb0e0", "#1f3a3d"],
    status: "公開中",
  },
  {
    id: 3,
    title: "稼いで！！ポーション工房",
    image: "textures/003.png",
    subtitle: "2Dカードゲーム",
    year: "2025",
    role: "個人開発",
    tools: ["Unity", "C#"],
    description: "マウス操作で遊べる完全運任せのカードゲーム。この後に制作した作品へとつながる過程で生まれたもの。完成には至らず、個人的には課題の多い作品",
    palette: ["#a47bff", "#ffd166", "#2a1f4d"],
    status: "公開中",
  },
  {
    id: 4,
    title: "仕込んで！！ポーション工房",
    image: "textures/004.png",
    subtitle: "2Dクラフトゲーム",
    year: "2026",
    role: "個人開発",
    tools: ["Unity", "C#"],
    description: "前作のリベンジとして制作。UI関連は細部まで作り込むことができた一方で、素材の組み合わせに関する指針が不足しており、結果として感覚に頼った合成となってしまった。",
    palette: ["#ff8a5b", "#ffe066", "#3d2a1f"],
    status: "公開中",
  },
];

Object.assign(window, { PROJECTS });
