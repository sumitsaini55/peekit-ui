export default function TrendRow({ source, hot, rising, cold }) {
  return (
    <div className="table-row">
      <span>{source}</span>
      <button>{hot} →</button>
      <button>{rising} →</button>
      <button>{cold} →</button>
    </div>
  );
}
