// Feuillage dessiné en SVG pour encadrer les écrans.
function Leaf({ fill, style }) {
  return (
    <svg className="leaf" style={style} viewBox="0 0 120 60" aria-hidden="true">
      <path d="M2 30 C 30 -8, 90 -8, 118 30 C 90 68, 30 68, 2 30 Z" fill={fill} />
      <path d="M4 30 Q 60 26 116 30" stroke="rgba(0,0,0,.22)" strokeWidth="2" fill="none" />
      <path d="M30 29 L 44 14 M55 28 L 70 12 M80 28 L 94 16 M30 31 L 44 46 M55 32 L 70 48 M80 32 L 94 44" stroke="rgba(0,0,0,.14)" strokeWidth="1.5" />
    </svg>
  )
}

const LEAVES = [
  { fill: '#1f5c37', style: { top: -18, left: -34, width: 150, transform: 'rotate(28deg)' } },
  { fill: '#2f7d4a', style: { top: 10, left: -50, width: 130, transform: 'rotate(62deg)' } },
  { fill: '#3f9a58', style: { top: -26, left: 60, width: 110, transform: 'rotate(8deg)' } },
  { fill: '#1f5c37', style: { top: -14, right: -36, width: 150, transform: 'rotate(150deg)' } },
  { fill: '#2f7d4a', style: { top: 16, right: -48, width: 120, transform: 'rotate(118deg)' } },
  { fill: '#4fae66', style: { top: -30, right: 70, width: 100, transform: 'rotate(170deg)' } },
]

export function Canopy() {
  return (
    <div className="canopy" aria-hidden="true">
      {LEAVES.map((l, i) => (
        <Leaf key={i} {...l} />
      ))}
      <div className="vine" style={{ left: '22%', height: 70 }} />
      <div className="vine" style={{ right: '30%', height: 46 }} />
    </div>
  )
}

export function Fireflies({ count = 14 }) {
  return (
    <div className="fireflies" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i * 0.7) % 5}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Rain({ intensity = 1 }) {
  const drops = Math.round(20 + intensity * 70)
  return (
    <div className="rain" aria-hidden="true">
      {Array.from({ length: drops }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 71) % 100}%`,
            animationDelay: `${((i * 13) % 20) / 20}s`,
            animationDuration: `${0.5 + ((i * 7) % 5) / 10}s`,
          }}
        />
      ))}
    </div>
  )
}
