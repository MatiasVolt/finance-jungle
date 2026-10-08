import { useState } from 'react'
import { rich } from '../rich.jsx'
import { fmt, useLang } from '../../i18n.jsx'

const GOODS = ['🍎', '🪵', '🐟', '🏹', '🥥', '🪨', '🧺', '🍯', '🪓', '🐚', '🐐', '🌾']

const pairs = n => (n * (n - 1)) / 2

function points(n, r = 100) {
  return Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n
    return { x: 130 + r * Math.cos(a), y: 130 + r * Math.sin(a) }
  })
}

// Chaque bien relié à chaque autre : un trait = un prix à retenir.
function Web({ n, star = false }) {
  const { t } = useLang()
  const pts = points(n)
  const lines = []
  if (star) {
    pts.forEach((p, i) => lines.push(<line key={i} x1={130} y1={130} x2={p.x} y2={p.y} className="edge money" />))
  } else {
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++)
        lines.push(<line key={`${i}-${j}`} x1={pts[i].x} y1={pts[i].y} x2={pts[j].x} y2={pts[j].y} className="edge" />)
  }
  return (
    <svg className="web" viewBox="0 0 260 260" role="img" aria-label={t('prices.webAria', { n })}>
      {lines}
      {pts.map((p, i) => <text key={i} x={p.x} y={p.y} className="good">{GOODS[i]}</text>)}
      {star && <text x={130} y={130} className="good big">🪙</text>}
    </svg>
  )
}

// Combien de prix faut-il retenir dans une économie de troc ? On compte, puis on trouve la règle.
export default function Prices({ onNext }) {
  const { lang, t } = useLang()
  const [step, setStep] = useState(0)
  const [n, setN] = useState(4)
  const [guess, setGuess] = useState(null)

  if (step === 0) {
    return (
      <div className="screen">
        <small className="kicker">{t('prices.k1')}</small>
        <h2>{t('prices.t1')}</h2>
        <Web n={n} />
        <div className="count">{rich(t('prices.count', { n: `**${n}**`, p: `**${pairs(n)}**` }))}</div>
        <input type="range" min="2" max="12" value={n} onChange={e => setN(+e.target.value)} aria-label={t('prices.aria')} />
        <p className="muted small">{t('prices.more')}</p>
        <div className="footer">
          <button className="btn" onClick={() => setStep(1)}>{t('prices.rule')}</button>
        </div>
      </div>
    )
  }

  if (step === 1) {
    const right = guess === 4950
    return (
      <div className="screen">
        <small className="kicker">{t('prices.k2')}</small>
        <h2>{t('prices.t2a')} <code>n</code> {t('prices.t2b')} <code>n − 1</code> {t('prices.t2c')}</h2>
        <div className="formula-line">
          <span className="piece">{t('prices.lhs')}</span>
          <span className="piece t1">n</span>
          <span className="piece">×</span>
          <span className="piece t2">(n − 1)</span>
          <span className="piece t3">÷ 2</span>
        </div>
        <p className="lead">{t('prices.q')}</p>
        <div className="options grid2">
          {[100, 4950, 9900, 10000].map(v => (
            <button key={v} className={`option ${guess === v ? (right ? 'good' : 'bad') : ''}`} onClick={() => setGuess(v)}>
              {fmt(v, lang)}
            </button>
          ))}
        </div>
        {guess !== null && (
          <div className={`feedback ${right ? 'good' : 'bad'}`}>
            <b>{t(right ? 'quiz.right' : 'quiz.wrong')}</b> {t(right ? 'prices.right' : 'prices.wrong')}
          </div>
        )}
        <div className="footer">
          <button className="btn" disabled={!right} onClick={() => setStep(2)}>{t('prices.withMoney')}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      <small className="kicker">{t('prices.k3')}</small>
      <h2>{t('prices.t3')}</h2>
      <Web n={8} star />
      <div className="compare">
        <div><small>{t('prices.barter')}</small><b>{t('prices.nPrices', { n: 28 })}</b></div>
        <div><small>{t('prices.money')}</small><b className="c-compound">{t('prices.nPrices', { n: 8 })}</b></div>
      </div>
      <p className="lead">{rich(t('prices.end'))}</p>
      <div className="footer">
        <button className="btn" onClick={() => onNext()}>{t('common.continue')}</button>
      </div>
    </div>
  )
}
