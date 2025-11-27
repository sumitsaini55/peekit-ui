import TrendRow from "./TrendRow";

const data = [
  { source: "Instagram", hot: "Student Exhaustion Meme", rising: "HYROX Fitness Championship", cold: "Winter Reply Humor Trend" },
  { source: "Tiktok", hot: "Daily Mail Viral Video", rising: "Steezy London Event", cold: "Ellie Lifestyle Trend" },
  { source: "Instagram", hot: "Student Exhaustion Meme", rising: "HYROX Fitness Championship", cold: "Winter Reply Humor Trend" },
  { source: "Tiktok", hot: "Daily Mail Viral Video", rising: "Steezy London Event", cold: "Ellie Lifestyle Trend" }
];

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h4>Peekit.ai</h4>
        <nav>
          <button className="active">Trends</button>
          <button>Alerts & Bookmarks</button>
          <button>My Dashboard</button>
        </nav>
      </header>

      <section className="hero">
        <div className="search-box">
          <button className="primary">Browse All Trends</button>
          <span className="or">Or</span>
          <button>Keyword Search</button>
        </div>

        <h1>TOP TRENDS TODAY</h1>
        <p>See which conversations are heating up, cooling down, or about to take off</p>
      </section>

      <section className="table-box">
        <div className="table-head">
          <span>SOURCE</span>
          <span>🔥 HOT</span>
          <span>📈 RISING SOON</span>
          <span>❄️ COLD</span>
        </div>

        {data.map((item, i) => <TrendRow key={i} {...item} />)}
      </section>
    </div>
  );
}
