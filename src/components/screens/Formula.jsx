import { useState } from 'react'
import { rich } from '../rich.jsx'
import { useLang } from '../../i18n.jsx'

// Une formule se construit pièce par pièce, chaque terme avec sa raison d'exister.
export default function Formula({ kicker, title, intro, pieces, result, onNext }) {
  const { t } = useLang()
  const [shown, setShown] = useState(1)
  const complete = shown >= pieces.length

  return (
    <div className="screen">
      {kicker && <small className="kicker">{kicker}</small>}
      <h2>{title}</h2>
      {intro && <p className="lead">{rich(intro)}</p>}
      <div className="formula-line" aria-live="polite">
        {pieces.slice(0, shown).map((p, i) => (
          <span key={i} className={`piece ${p.cls || ''}`}>{p.text}</span>
        ))}
      </div>
      <ol className="formula-steps">
        {pieces.slice(0, shown).map((p, i) => (
          <li key={i} className={p.cls}>{rich(p.explain)}</li>
        ))}
      </ol>
      {complete && result && <p className="punchline">{rich(result)}</p>}
      <div className="footer">
        {complete ? (
          <button className="btn" onClick={() => onNext()}>{t('common.continue')}</button>
        ) : (
          <button className="btn btn-ghost" onClick={() => setShown(s => s + 1)}>{t('formula.next')}</button>
        )}
      </div>
    </div>
  )
}
