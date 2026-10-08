import { useState } from 'react'
import { GuideNote } from '../Guide.jsx'
import { fmt, useLang } from '../../i18n.jsx'

// Le simulateur de la Tortue : intérêt simple contre intérêt composé, année par année.
export default function Compound({ onNext }) {
  const { lang, t } = useLang()
  const [capital, setCapital] = useState(1000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(30)
  const [touched, setTouched] = useState(false)

  const eur = v => (lang === 'fr' ? `${fmt(Math.round(v), lang)} €` : `€${fmt(Math.round(v), lang)}`)
  const r = rate / 100
  const simple = n => capital * (1 + n * r)
  const compound = n => capital * Math.pow(1 + r, n)
  const max = compound(years)

  const W = 320, H = 180, P = 8
  const x = n => P + (n / years) * (W - 2 * P)
  const y = v => H - P - (v / max) * (H - 2 * P)
  const path = f => Array.from({ length: years + 1 }, (_, n) => `${n ? 'L' : 'M'}${x(n).toFixed(1)},${y(f(n)).toFixed(1)}`).join(' ')

  const set = fn => e => { fn(+e.target.value); setTouched(true) }
  const multiple = fmt(compound(years) / capital, lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <div className="screen">
      <small className="kicker">{t('compound.kicker')}</small>
      <h2>{t('compound.title')}</h2>

      <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t('compound.aria')}>
        <line x1={P} y1={y(capital)} x2={W - P} y2={y(capital)} className="chart-base" />
        <path d={`${path(compound)} L${x(years)},${H - P} L${x(0)},${H - P} Z`} className="chart-area" />
        <path d={path(simple)} className="chart-line simple" />
        <path d={path(compound)} className="chart-line compound" />
      </svg>

      <div className="compare">
        <div><small>{t('compound.simple')}</small><b className="c-simple">{eur(simple(years))}</b></div>
        <div><small>{t('compound.compound')}</small><b className="c-compound">{eur(compound(years))}</b></div>
      </div>

      <div className="sliders">
        <label>
          <span>{t('compound.capital')} <b>{eur(capital)}</b></span>
          <input type="range" min="100" max="10000" step="100" value={capital} onChange={set(setCapital)} />
        </label>
        <label>
          <span>{t('compound.rate')} <b>{fmt(rate, lang)} %</b></span>
          <input type="range" min="1" max="12" step="0.5" value={rate} onChange={set(setRate)} />
        </label>
        <label>
          <span>{t('compound.years')} <b>{t('compound.yearsUnit', { n: years })}</b></span>
          <input type="range" min="1" max="50" value={years} onChange={set(setYears)} />
        </label>
      </div>

      <GuideNote who="tortue" text={t('compound.note', { years, x: multiple })} />

      <div className="footer">
        <button className="btn" disabled={!touched} onClick={() => onNext()}>
          {touched ? t('common.continue') : t('compound.move')}
        </button>
      </div>
    </div>
  )
}
