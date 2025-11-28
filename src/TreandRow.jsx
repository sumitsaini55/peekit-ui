export default function TreandRow({ source, logo, hot, rising, cold }) {
  return (
    <div className="table-row">

      <div className="source-cell">
        <img src={logo} alt={source} className="source-logo" />
        <span className="source-text">{source}</span>
      </div>

      <button className="trend-chip">{hot} →</button>
      <button className="trend-chip">{rising} →</button>
      <button className="trend-chip">{cold} →</button>

    </div>
  );
}
