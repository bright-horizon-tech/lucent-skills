export default function Marquee() {
  const items = (
    <div className="marquee-group">
      <span>No Studio</span>
      <i>◆</i>
      <span>No Shoot</span>
      <i>◆</i>
      <span>No Crew</span>
      <i>◆</i>
      <span>Just Images</span>
      <i>◆</i>
      <span>White Label</span>
      <i>◆</i>
      <span>48H First Look</span>
      <i>◆</i>
      <span>Every Ratio</span>
      <i>◆</i>
      <span>Yours. Only Yours.</span>
      <i>◆</i>
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee-track"
        style={{
          animation: 'marqueeScroll 34s linear infinite',
        }}
      >
        {items}
        {items}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
