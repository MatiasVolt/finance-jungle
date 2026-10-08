import { useState } from 'react'
import { rich } from '../rich.jsx'
import { useLang } from '../../i18n.jsx'

// Une erreur n'est jamais punie : on la signale, puis on laisse réessayer.
export default function Quiz({ question, options, answer, explain, challenge, onNext }) {
  const { t } = useLang()
  const [picked, setPicked] = useState(null)
  const [wrong, setWrong] = useState([])
  const solved = picked === answer

  function pick(n) {
    if (solved || wrong.includes(n)) return
    setPicked(n)
    if (n !== answer) setWrong(w => [...w, n])
  }

  return (
    <div className="screen">
      <small className={`kicker ${challenge ? 'challenge' : ''}`}>{t(challenge ? 'challenge.kicker' : 'quiz.kicker')}</small>
      <h2>{rich(question)}</h2>
      <div className="options">
        {options.map((o, n) => (
          <button
            key={n}
            className={`option ${n === answer && solved ? 'good' : ''} ${wrong.includes(n) ? 'bad' : ''}`}
            onClick={() => pick(n)}
            disabled={wrong.includes(n)}
          >
            <span className="option-key">{String.fromCharCode(65 + n)}</span>
            {o}
          </button>
        ))}
      </div>
      {picked !== null && (
        <div className={`feedback ${solved ? 'good' : 'bad'}`} role="status">
          {solved ? <><b>{t('quiz.right')}</b> {rich(explain)}</> : <><b>{t('quiz.wrong')}</b> {t('quiz.retry')}</>}
        </div>
      )}
      <div className="footer">
        {challenge && !solved && (
          <button className="btn btn-ghost" onClick={() => onNext({ firstTry: false })}>{t('challenge.skip')}</button>
        )}
        <button className="btn" disabled={!solved} onClick={() => onNext({ firstTry: wrong.length === 0 })}>
          {t('common.continue')}
        </button>
      </div>
    </div>
  )
}
