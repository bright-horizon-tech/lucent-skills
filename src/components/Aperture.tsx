import React from 'react';

interface ApertureProps {
  openValue: number;
  visible: boolean;
}

export default function Aperture({ openValue, visible }: ApertureProps) {
  return (
    <div
      className="shutter"
      id="shutter"
      aria-hidden="true"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div
        className="iris"
        id="iris"
        style={{ '--open': openValue.toFixed(4) } as React.CSSProperties}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="blade-wrap"
            style={{ '--i': i } as React.CSSProperties}
          >
            <div className="blade" />
          </div>
        ))}
      </div>
    </div>
  );
}
