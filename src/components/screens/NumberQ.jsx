import { useState } from 'react'
import { rich } from '../rich.jsx'
import { fmt, useLang } from '../../i18n.jsx'

// Réponse chiffrée. En français la virgule est décimale (« 1 210,5 »), en anglais c'est le point (« 1,210.5 »).
function parse(raw, lang) {
  let s = raw.replace(/[\s €%$]/g, '')
  s = lang === 'en' ? s.replace(/,/g, '') : s.replace(',', '.')
  const v = Number(s)
  return s === '' || Number.isNaN(v) ? null : v
}

export default function NumberQ({ question, answer, tolerance = 0, unit, hint, explain, challenge, onNext }) {
  const { lang, t } = useLang()
  const [raw, setRaw] = useState('')
  const [tries, setTries] = useState(0)
  const [state, setState] = useState('idle') // idle | bad | good | revealed
  const done = state === 'good' || state === 'revealed'
  const value = parse(raw, lang)

  function check(e) {
    e.preventDefault()
    if (value === null || done) return
    setTries(n => n + 1)
    setState(Math.abs(value - answer) <= tolerance + 1e-9 ? 'good' : 'bad')
  }

  return (
    <div className="screen">
      <small className={`kicker ${challenge ? 'challenge' : ''}`}>{t(challenge ? 'challenge.kicker' : 'num.kicker')}</small>
      <h2>{rich(question)}</h2>
      <form className="number-row" onSubmit={check}>
        <input
          inputMode="decimal"
          autoFocus
          value={raw}
          onChange={e => { setRaw(e.target.value); if (state === 'bad') setState('idle') }}
          readOnly={done}
          className={state}
          aria-label={t('num.placeholder')}
          placeholder={t('num.placeholder')}
        />
        {unit && <span className="unit">{unit}</span>}
        {!done && <button className="btn btn-inline" disabled={value === null}>{t('num.check')}</button>}
      </form>

      {state === 'bad' && (
        <div className="feedback bad" role="status">
          <b>{t('num.notYet')}</b> {hint && tries >= 1 ? <>{t('num.hint')} {rich(hint)}</> : t('num.redo')}
        </div>
      )}
      {done && (
        <div className={`feedback ${state === 'good' ? 'good' : 'neutral'}`} role="status">
          <b>{state === 'good' ? t('quiz.right') : t('num.answer', { v: `${fmt(answer, lang)}${unit ? ' ' + unit : ''}` })}</b> {rich(explain)}
        </div>
      )}

      <div className="footer">
        {challenge && !done && tries < 2 && (
          <button className="btn btn-ghost" onClick={() => onNext({ firstTry: false })}>{t('challenge.skip')}</button>
        )}
        {!done && tries >= 2 && (
          <button className="btn btn-ghost" onClick={() => setState('revealed')}>{t('num.solution')}</button>
        )}
        {done && (
          <button className="btn" onClick={() => onNext({ firstTry: state === 'good' && tries === 1 })}>{t('common.continue')}</button>
        )}
      </div>
    </div>
  )
}
