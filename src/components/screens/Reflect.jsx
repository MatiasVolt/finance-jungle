import { useState } from 'react'
import { rich } from '../rich.jsx'
import { useLang } from '../../i18n.jsx'

// Pas de bonne réponse : chaque position reçoit une réponse qui la nourrit ou la bouscule.
export default function Reflect({ question, options, onNext }) {
  const { t } = useLang()
  const [picked, setPicked] = useState(null)

  return (
    <div className="screen">
      <small className="kicker">{t('reflect.kicker')}</small>
      <h2>{question}</h2>
      <div className="options">
        {options.map((o, n) => (
          <button key={n} className={`option ${picked === n ? 'picked' : ''}`} onClick={() => setPicked(n)}>
            {o.label}
          </button>
        ))}
      </div>
      {picked !== null && <div className="feedback neutral" key={picked}>{rich(options[picked].response)}</div>}
      <p className="muted small">{t('reflect.note')}</p>
      <div className="footer">
        <button className="btn" disabled={picked === null} onClick={() => onNext()}>{t('common.continue')}</button>
      </div>
    </div>
  )
}
