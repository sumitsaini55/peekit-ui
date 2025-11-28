import TreandRow from './TreandRow';
import './App.css';
import ig from "./assets/instagram.svg";
import tt from "./assets/tiktok.svg";
import yt from "./assets/youtube.png";
import gg from "./assets/google.png";

function App() {


const data = [
  { source: "Instagram", logo: ig, hot: "Arjun Kapoor Memes & ESL Conversational Tips", rising: "Donald Trump Speech Controversy & Military Strategy", cold: "Churros & Comfort Food Experience at Charly's" },
  { source: "TikTok", logo: tt, hot: "LALIGA UK Football Highlights & Drama", rising: "ilovemymutualssomuch: Trending comedic skits", cold: "nxetj: Viral UKX topics" },
  { source: "Youtube", logo: yt, hot: "Ranking the Funniest News Report Bloopers Part 2", rising: "SIDEMEN AMONG US BUT HALF THE LOBBY ARE JESTERS", cold: "Parking Wardens Hate This Trick" },
  { source: "Google", logo: gg, hot: "Millions of savers and investors to face higher tax bills after Reeves’s budget", rising: "Rachel Reeves targets UK’s wealthiest in £26bn tax-raising budget | Budget 2025", cold:"Struggling parents rely on food banks despite having jobs"},
  { source: "TikTok", logo: tt, hot: "LALIGA UK Football Highlights & Drama", rising: "ilovemymutualssomuch: Trending comedic skits", cold: "nxetj: Viral UKX topics" },
];


  return (
    <div className="app">
   <header className="topbar">
  
  <div className="brand">
    <div className="brand-logo">
      <div className="brand-logo-inner" />
    </div>
    <span className="brand-name">Peekit.ai</span>
  </div>


  <div className="nav-pill-group">
    <button className="nav-pill nav-pill-active">
      <span className="nav-pill-icon">📈</span>
      <span>Trends</span>
    </button>

    <button className="nav-pill">
      <span className="nav-pill-icon">🔖</span>
      <span>Alerts &amp; Bookmarks</span>
    </button>

    <button className="nav-pill">
      <span>My Dashboard</span>
    </button>
  </div>

  
  <div className="topbar-icons">
    <button className="top-icon">⬇</button>
    <button className="top-icon">🔔</button>
    <button className="top-icon">👤</button>
  </div>
</header>


    

      <section className="hero">
        <div className="hero-search">
          <nav className="hero-nav">
            <button className="hero-btn hero-primary">Browse all trends</button>
            <span className="hero-or">or</span>
            <button className="hero-btn hero-outline">Keyword search</button>
          </nav>
        </div>
      
        <h1>TOP TRENDS TODAY</h1>
        <p>
          See which conversations are heating up, cooling down, or about to take off
          <br />- with Hot, Cold and Rising Soon topic insights.
        </p>

        <div className="hero-divider" />
      </section>

      <section className="trends-section">
        <div className="table-header-row">
          <span className="col-title">SOURCE</span>
          <span className="col-title hot-title">HOT</span>
          <span className="col-title rising-title">RISING</span>
          <span className="col-title cold-title">COLD</span>
        </div>

        {data.map((item, i) => <TreandRow key={i} {...item} />)}
      </section>

      <button className="help-fab">?</button>
      <h1>All the Trends in one place</h1>
      <h5>Discover trends faster with smart filters</h5>
    </div>
  );
}

export default App;
