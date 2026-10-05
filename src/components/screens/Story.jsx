import { useEffect, useRef } from 'react'
import { rich } from '../rich.jsx'
import { Fireflies } from '../Decor.jsx'

// Écran de récit : on glisse vers la gauche (ou flèche →) pour avancer.
export default function Story({ scene, visual, title, text, cta, onNext }) {
  const startX = useRef(null)

  useEffect(() => {
    if (cta) return
    const onKey = e => e.key === 'ArrowRight' && onNext()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cta, onNext])

  return (
    <div
      className="screen story"
      onPointerDown={e => (startX.current = e.clientX)}
      onPointerUp={e => {
        if (!cta && startX.current !== null && startX.current - e.clientX > 50) onNext()
        startX.current = null
      }}
    >
      {(scene === 'fire' || scene === 'night') && <Fireflies count={10} />}
      <div className="story-visual">{title ? <span className="stone-word">{title}</span> : visual}</div>
      <p className="story-text">{rich(text)}</p>
      <div className="footer">
        {cta ? (
          <button className="btn btn-gold" onClick={onNext}>{cta} ✅</button>
        ) : (
          <button className="swipe-hint" onClick={onNext}>
            <span className="swipe-arrow">⟵</span> Glisse vers la gauche
          </button>
        )}
      </div>
    </div>
  )
}
