import { useEffect, useState } from 'react'
import { CHARACTERS } from '../data/characters.js'
import { plain, rich } from './rich.jsx'

// Un animal qui parle : avatar + bulle avec texte qui s'écrit.
export function Speaker({ who, text, tone }) {
  const c = CHARACTERS[who]
  const [shown, setShown] = useState(0)
  const flat = plain(text)
  const done = shown >= flat.length

  useEffect(() => {
    setShown(0)
    const id = setInterval(() => setShown(n => (n >= flat.length ? n : n + 2)), 22)
    return () => clearInterval(id)
  }, [flat])

  return (
    <div className="speaker">
      <div className="avatar" style={{ '--c': c.color }}>
        <span>{c.emoji}</span>
      </div>
      <div className={`bubble ${tone || ''}`} onClick={() => setShown(flat.length)}>
        <div className="bubble-name" style={{ color: c.color }}>{c.name}</div>
        <p>{done ? rich(text) : flat.slice(0, shown)}</p>
      </div>
    </div>
  )
}
