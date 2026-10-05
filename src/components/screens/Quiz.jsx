import { useState } from 'react'

// Une erreur n'est jamais punie : on explique, puis on laisse réessayer.
export default function Quiz({ question, options, answer, explain, onNext }) {
  const [picked, setPicked] = useState(null)
  const [checked, setChecked] = useState(false)
  const right = picked === answer

  return (
    <div className="screen quiz">
      <small className="kicker">🪱 Épreuve du ver de terre</small>
      <h2>{question}</h2>
      <div className="options">
        {options.map((o, n) => (
          <button
            key={n}
            className={`option ${picked === n ? 'picked' : ''} ${checked && n === picked ? (right ? 'good' : 'bad') : ''}`}
            onClick={() => !checked && setPicked(n)}
          >
            {o}
          </button>
        ))}
      </div>
      {checked && (
        <div className={`feedback ${right ? 'good' : 'bad'}`}>
          <strong>{right ? '🦉 Exactement.' : '🦉 Pas tout à fait.'}</strong> {right ? explain : 'Relis la question, et pense à ce que tu viens de vivre dans la quête.'}
        </div>
      )}
      <div className="footer">
        {!checked && (
          <button className="btn" disabled={picked === null} onClick={() => setChecked(true)}>Vérifier</button>
        )}
        {checked && right && <button className="btn" onClick={onNext}>Continuer</button>}
        {checked && !right && (
          <button className="btn btn-earth" onClick={() => { setChecked(false); setPicked(null) }}>Réessayer</button>
        )}
      </div>
    </div>
  )
}
