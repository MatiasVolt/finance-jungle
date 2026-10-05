import { useState } from 'react'
import { rich } from '../rich.jsx'

// Une idée par écran. Si `action` existe, le joueur doit agir pour voir la conséquence.
export default function Concept({ kicker, title, icon, text, action, onNext }) {
  const [acted, setActed] = useState(false)

  return (
    <div className="screen concept">
      <small className="kicker">{kicker}</small>
      <h2>{title}</h2>
      <div className={`concept-icon ${acted ? 'changed' : ''}`} key={acted}>
        {acted ? action.icon : icon}
      </div>
      <p>{rich(text)}</p>
      {acted && <p className="punchline">{rich(action.result)}</p>}
      <div className="footer">
        {action && !acted ? (
          <button className="btn btn-earth" onClick={() => setActed(true)}>{action.label}</button>
        ) : (
          <button className="btn" onClick={onNext}>Continuer</button>
        )}
      </div>
    </div>
  )
}
