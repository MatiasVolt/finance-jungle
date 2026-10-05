import { useState } from 'react'

export default function Cards({ title, intro, cards, onNext }) {
  const [i, setI] = useState(0)
  const [seen, setSeen] = useState(1)
  const card = cards[i]

  function go(n) {
    setI(n)
    setSeen(s => Math.max(s, n + 1))
  }

  return (
    <div className="screen cards">
      <h2>{title}</h2>
      <p className="muted">{intro}</p>
      <article className="card" key={i}>
        <div className="card-icon">{card.icon}</div>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </article>
      <div className="dots">
        {cards.map((_, n) => (
          <button key={n} className={n === i ? 'on' : ''} onClick={() => go(n)} aria-label={`Carte ${n + 1}`} />
        ))}
      </div>
      <div className="footer">
        {seen < cards.length ? (
          <button className="btn btn-earth" onClick={() => go(i + 1)}>Carte suivante</button>
        ) : (
          <button className="btn" onClick={onNext}>Continuer</button>
        )}
      </div>
    </div>
  )
}
