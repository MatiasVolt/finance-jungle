import { useState } from 'react'

const GOODS = ['🍎', '🪵', '🐟', '🏹', '🥥', '🪨', '🧺', '🍯', '🪓', '🐚', '🐐', '🌾']

const pairs = n => (n * (n - 1)) / 2

function points(n, r = 100) {
  return Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n
    return { x: 130 + r * Math.cos(a), y: 130 + r * Math.sin(a) }
  })
}

// Chaque objet relié à chaque autre : un trait = un prix à retenir.
function Web({ n, focus = false, star = false }) {
  const pts = points(n)
  const lines = []
  if (star) {
    pts.forEach((p, i) => lines.push(<line key={i} x1={130} y1={130} x2={p.x} y2={p.y} className="edge banana" />))
  } else {
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++)
        lines.push(
          <line key={`${i}-${j}`} x1={pts[i].x} y1={pts[i].y} x2={pts[j].x} y2={pts[j].y}
            className={`edge ${focus && i === 0 ? 'hot' : ''} ${focus && i !== 0 ? 'dim' : ''}`} />,
        )
  }
  return (
    <svg className="web" viewBox="0 0 260 260" role="img" aria-label={`${n} objets reliés`}>
      {lines}
      {pts.map((p, i) => (
        <text key={i} x={p.x} y={p.y} className={`good ${focus && i === 0 ? 'hot' : ''}`}>{GOODS[i]}</text>
      ))}
      {star && <text x={130} y={130} className="good big">🍌</text>}
    </svg>
  )
}

export default function PricesFormula({ onNext }) {
  const [step, setStep] = useState(0)
  const [guess, setGuess] = useState(null)
  const [n, setN] = useState(4)
  const [seen, setSeen] = useState({ 2: true, 3: true, 4: true })
  const [build, setBuild] = useState(0)
  const [big, setBig] = useState(null)

  const next = () => setStep(s => s + 1)

  if (step === 0) {
    return (
      <div className="screen formula">
        <small className="kicker">Comptons ensemble</small>
        <h2>Avec 3 objets, combien de prix faut-il connaître ?</h2>
        <Web n={3} />
        <div className="options row">
          {[2, 3, 6].map(v => (
            <button key={v} className={`option ${guess === v ? (v === 3 ? 'good' : 'bad') : ''}`} onClick={() => setGuess(v)}>{v}</button>
          ))}
        </div>
        {guess !== null && (
          <div className={`feedback ${guess === 3 ? 'good' : 'bad'}`}>
            {guess === 3 ? 'Exact. ' : 'Regarde les traits : '}
            🍎↔🪵, 🍎↔🐟, 🪵↔🐟. Chaque trait est un prix. <strong>3 prix.</strong>
          </div>
        )}
        <div className="footer">
          <button className="btn" disabled={guess === null} onClick={next}>Continuer</button>
        </div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="screen formula">
        <small className="kicker">À toi de jouer</small>
        <h2>Ajoute des objets dans la jungle</h2>
        <Web n={n} />
        <div className="count"><b>{n}</b> objets → <b className="hl">{pairs(n)}</b> prix à retenir</div>
        <input
          type="range" min="2" max="12" value={n}
          onChange={e => { const v = +e.target.value; setN(v); setSeen(s => ({ ...s, [v]: true })) }}
          aria-label="Nombre d'objets"
        />
        <div className="table">
          {Object.keys(seen).map(Number).sort((a, b) => a - b).map(k => (
            <span key={k}><small>{k} obj.</small>{pairs(k)}</span>
          ))}
        </div>
        <p className="muted small">Les objets augmentent un par un… mais les prix, eux, s'emballent.</p>
        <div className="footer">
          <button className="btn" onClick={next}>Trouver la règle</button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    const lines = [
      { text: <>Prends un seul objet, la pomme 🍎. Elle doit avoir un prix face à chacun des <b className="t2">autres</b> : s'il y a <b className="t1">n</b> objets, ça fait <b className="t2">n − 1</b> prix.</> },
      { text: <>Chaque objet fait pareil. <b className="t1">n</b> objets fois <b className="t2">n − 1</b> prix chacun : <b className="t1">n</b> × <b className="t2">(n − 1)</b>.</> },
      { text: <>Mais « 🍎 contre 🪵 » et « 🪵 contre 🍎 », c'est <i>le même</i> prix. On a compté chaque trait deux fois. Il faut donc <b className="t3">diviser par 2</b>.</> },
    ]
    return (
      <div className="screen formula">
        <small className="kicker">La règle, pièce par pièce</small>
        <Web n={5} focus={build === 0} />
        <div className="formula-line" aria-live="polite">
          <span className="lhs">Prix =</span>
          <span className="t1 piece">n</span>
          {build >= 1 && <span className="piece">×</span>}
          <span className={`t2 piece ${build >= 1 ? '' : 'alone'}`}>{build >= 1 ? '(n − 1)' : '(n − 1) ?'}</span>
          {build >= 2 && <span className="t3 piece">÷ 2</span>}
        </div>
        <p className="build-text" key={build}>{lines[build].text}</p>
        {build === 2 && <p className="check">Vérifions avec 5 objets : 5 × 4 ÷ 2 = <b>10</b>. Compte les traits : il y en a bien 10.</p>}
        <div className="footer">
          {build < 2 ? (
            <button className="btn btn-earth" onClick={() => setBuild(b => b + 1)}>Pièce suivante</button>
          ) : (
            <button className="btn" onClick={next}>Je tiens la règle</button>
          )}
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div className="screen formula">
        <small className="kicker">Passons à l'échelle</small>
        <h2>Une vraie jungle compte au moins 100 objets. Combien de prix ?</h2>
        <div className="formula-line small">
          <span className="lhs">Prix =</span>
          <span className="t1 piece">100</span><span className="piece">×</span>
          <span className="t2 piece">99</span><span className="t3 piece">÷ 2</span>
        </div>
        <div className="options grid2">
          {[100, 4950, 9900, 10000].map(v => (
            <button key={v} className={`option ${big === v ? (v === 4950 ? 'good' : 'bad') : ''}`} onClick={() => setBig(v)}>
              {v.toLocaleString('fr-FR')}
            </button>
          ))}
        </div>
        {big !== null && (
          <div className={`feedback ${big === 4950 ? 'good' : 'bad'}`}>
            {big === 4950 ? 'Exact : ' : 'Presque. '}100 × 99 = 9 900, divisé par 2 = <strong>4 950 prix</strong>. Aucun cerveau humain ne peut retenir ça.
          </div>
        )}
        <div className="footer">
          <button className="btn" disabled={big !== 4950} onClick={next}>Et maintenant ?</button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen formula">
      <small className="kicker">Le coup de génie</small>
      <h2>Et si tout se comptait en bananes ?</h2>
      <Web n={8} star />
      <div className="compare">
        <div><small>Troc · 8 objets</small><b>28 prix</b></div>
        <div className="vs">→</div>
        <div className="win"><small>En bananes</small><b>8 prix</b></div>
      </div>
      <p>
        Chaque objet n'a plus qu'<strong>un seul prix</strong> : son prix en 🍌. Pour 100 objets, on passe de 4 950 prix à <strong>100</strong>.
      </p>
      <p className="punchline">
        Ce rôle de « règle commune » est l'une des trois fonctions de la monnaie : l'<strong>unité de compte</strong>. Garde ce nom, il reviendra.
      </p>
      <div className="footer">
        <button className="btn" onClick={onNext}>Continuer</button>
      </div>
    </div>
  )
}
