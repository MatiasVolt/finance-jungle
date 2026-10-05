import { useEffect, useMemo, useState } from 'react'
import { Fireflies } from './Decor.jsx'

const QUOTES = [
  { text: 'Un investissement dans la connaissance rapporte toujours les meilleurs intérêts.', author: 'Benjamin Franklin' },
  { text: 'Le prix est ce que vous payez. La valeur est ce que vous obtenez.', author: 'Warren Buffett' },
  { text: 'La fortune sourit aux audacieux.', author: 'Virgile' },
  { text: 'Je ne perds jamais. Soit je gagne, soit j’apprends.', author: 'Nelson Mandela' },
  { text: 'L’argent est un bon serviteur, mais un mauvais maître.', author: 'Francis Bacon' },
  { text: 'La patience est un arbre dont la racine est amère, mais le fruit est doux.', author: 'Proverbe' },
  { text: 'Semez aujourd’hui, récoltez demain.', author: 'Devise de la Jungle' },
]

export default function Splash({ onStart, returning }) {
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="splash">
      <Fireflies count={18} />
      <blockquote className="quote">
        <p>« {quote.text} »</p>
        <footer>— {quote.author}</footer>
      </blockquote>
      <button className={`btn btn-gold splash-btn ${ready ? 'show' : ''}`} onClick={onStart} disabled={!ready}>
        {returning ? 'Reprendre l’expédition' : 'Commencer l’expédition'}
      </button>
    </div>
  )
}
