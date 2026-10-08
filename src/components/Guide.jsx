import { CHARACTERS } from '../data/characters.js'
import { useLang } from '../i18n.jsx'
import { rich } from './rich.jsx'

export function Avatar({ who, size = 'md' }) {
  const { p } = useLang()
  const c = CHARACTERS[who]
  return (
    <span className={`avatar avatar-${size}`} style={{ '--c': c.color }} title={p(c.name)} aria-hidden="true">
      {c.emoji}
    </span>
  )
}

// La remarque d'un guide, en marge du cours.
export function GuideNote({ who, text }) {
  const { p } = useLang()
  const c = CHARACTERS[who]
  return (
    <aside className="guide-note" style={{ '--c': c.color }}>
      <Avatar who={who} size="sm" />
      <div>
        <b>{p(c.name)}</b>
        <p>{rich(text)}</p>
      </div>
    </aside>
  )
}
