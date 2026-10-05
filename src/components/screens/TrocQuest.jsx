import { useEffect, useRef, useState } from 'react'
import { CHARACTERS } from '../../data/characters.js'
import { Rain } from '../Decor.jsx'
import { Speaker } from '../Speaker.jsx'

const RAIN_SECONDS = 90

const ITEMS = {
  plantes: { emoji: '🌿', name: 'des plantes médicinales' },
  obsidienne: { emoji: '🔺', name: "une pointe d'obsidienne" },
  cuir: { emoji: '🟫', name: 'du cuir' },
  bois: { emoji: '🪵', name: 'du bois' },
}

// Qui veut quoi, et ce qu'il donne en échange.
const TRADERS = {
  bucheron: {
    place: 'La clairière',
    wants: 'cuir',
    gives: 'bois',
    refuse: "Des plantes ? Je pète la forme, l'ami ! Mais regarde mes pieds… mes sandales tombent en lambeaux. Apporte-moi du **cuir**, et tu auras ton bois.",
    again: "Joli, mais c'est du **cuir** qu'il me faut pour mes sandales.",
    accept: "Enfin des sandales dignes de ce nom ! Prends ce bois, et file avant l'orage.",
  },
  chasseur: {
    place: 'Le sentier des bêtes',
    wants: 'obsidienne',
    gives: 'cuir',
    refuse: "Mes flèches sont émoussées. Sans **obsidienne**, je ne chasse rien. Sans chasse, pas de cuir. Trouve-moi de la pierre tranchante.",
    again: "Ça ne coupe pas. Il me faut de l'**obsidienne**.",
    accept: "De l'obsidienne ! Parfait. Voilà du cuir, tout frais.",
  },
  akno: {
    place: 'La grotte du tailleur',
    wants: 'plantes',
    gives: 'obsidienne',
    again: "Je n'ai besoin de rien d'autre. Tes plantes m'ont sauvé.",
    accept: "Je… je vois ! Tiens, prends cette pointe d'obsidienne. Tu l'as bien méritée.",
  },
}

const ORDER = ['bucheron', 'chasseur', 'akno']

const START = { item: 'plantes', met: [], healed: false, bubble: null, done: false }

export default function TrocQuest({ onNext }) {
  const [state, setState] = useState(START)
  const [left, setLeft] = useState(RAIN_SECONDS)
  const [healing, setHealing] = useState(false)
  const [soaked, setSoaked] = useState(false)

  const paused = state.done || soaked || healing

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setLeft(s => s - 1), 1000)
    return () => clearInterval(id)
  }, [paused])

  useEffect(() => {
    if (left <= 0 && !state.done) setSoaked(true)
  }, [left, state.done])

  // Un personnage est visible si on a rencontré celui d'avant.
  const visible = ORDER.filter((who, i) => i === 0 || state.met.includes(ORDER[i - 1]))

  function offer(who) {
    if (state.done) return
    const t = TRADERS[who]
    const met = state.met.includes(who) ? state.met : [...state.met, who]

    if (who === 'akno' && !state.healed) {
      setState(s => ({ ...s, met }))
      setHealing(true)
      return
    }
    if (state.item === t.wants) {
      const item = t.gives
      setState(s => ({ ...s, met, item, done: item === 'bois', bubble: { who, text: t.accept, tone: 'yes' } }))
      return
    }
    const text = state.met.includes(who) || !t.refuse ? t.again : t.refuse
    setState(s => ({ ...s, met, bubble: { who, text, tone: 'no' } }))
  }

  function healed() {
    setHealing(false)
    setState(s => ({
      ...s,
      healed: true,
      item: 'obsidienne',
      bubble: { who: 'akno', text: TRADERS.akno.accept, tone: 'yes' },
    }))
  }

  function retry() {
    setState(START)
    setLeft(RAIN_SECONDS)
    setSoaked(false)
  }

  const item = ITEMS[state.item]

  return (
    <div className={`screen quest ${state.done ? 'sunny' : ''}`}>
      {!state.done && <Rain intensity={1 - left / RAIN_SECONDS} />}

      <div className="quest-head">
        <div className="timer">
          <span>🌧️ La mousson arrive</span>
          <div className="timer-bar"><div style={{ width: `${(left / RAIN_SECONDS) * 100}%` }} /></div>
        </div>
        <div className="inventory" title="Ton sac">
          <small>Ton sac</small>
          <span className="inv-item" key={state.item}>{item.emoji}</span>
          <span className="inv-name">{item.name}</span>
        </div>
      </div>

      {!state.done ? (
        <>
          <p className="quest-goal">
            Objectif : obtenir <strong>du bois 🪵</strong> pour ton abri. Touche un habitant pour lui proposer ce que tu as.
          </p>
          <div className="traders">
            {visible.map(who => {
              const c = CHARACTERS[who]
              const t = TRADERS[who]
              return (
                <button key={who} className="trader" onClick={() => offer(who)}>
                  <span className="trader-emoji">{c.emoji}</span>
                  <span className="trader-name">{c.name}</span>
                  <small>{t.place}</small>
                  <span className="trader-has">possède {ITEMS[t.gives].emoji}</span>
                </button>
              )
            })}
            {visible.length < ORDER.length && <div className="trader fog">🌿<small>Plus loin dans la jungle…</small></div>}
          </div>
        </>
      ) : (
        <div className="shelter">
          <div className="shelter-icon">🛖</div>
          <h2>Abri construit !</h2>
          <p className="muted">🌿 → 🔺 → 🟫 → 🪵 · trois échanges pour un toit.</p>
        </div>
      )}

      {state.bubble && <Speaker key={state.bubble.text} who={state.bubble.who} text={state.bubble.text} tone={state.bubble.tone} />}

      {state.done && (
        <div className="footer">
          <button className="btn" onClick={onNext}>Continuer</button>
        </div>
      )}

      {healing && <DustyEyes onHealed={healed} />}

      {soaked && (
        <div className="overlay">
          <div className="overlay-card">
            <div className="reward-big">💧</div>
            <h2>Trempé jusqu'aux os</h2>
            <p>La pluie a eu raison de tes réserves. Le Hibou t'abrite sous son aile. Tu connais le chemin maintenant : on recommence ?</p>
            <button className="btn" onClick={retry}>Recommencer la quête</button>
          </div>
        </div>
      )}
    </div>
  )
}

// Le moment Akno : l'écran est flou, il faut tracer des cercles pour appliquer le baume.
function DustyEyes({ onHealed }) {
  const [amount, setAmount] = useState(0)
  const zone = useRef(null)
  const last = useRef(null)
  const finished = amount >= 1

  useEffect(() => {
    if (finished) {
      const id = setTimeout(onHealed, 900)
      return () => clearTimeout(id)
    }
  }, [finished, onHealed])

  function move(e) {
    if (finished || (e.pointerType === 'mouse' && e.buttons === 0)) return
    const r = zone.current.getBoundingClientRect()
    const angle = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2))
    if (last.current !== null) {
      let d = angle - last.current
      if (d > Math.PI) d -= 2 * Math.PI
      if (d < -Math.PI) d += 2 * Math.PI
      // Deux tours complets suffisent.
      setAmount(a => Math.min(1, a + Math.abs(d) / (4 * Math.PI)))
    }
    last.current = angle
  }

  return (
    <div className="overlay dusty">
      <div className="grain" style={{ opacity: 1 - amount }} />
      <div className="dusty-inner" style={{ filter: `blur(${(1 - amount) * 6}px)` }}>
        <Speaker who="akno" text="Arg ! Cette maudite poussière… Je ne vois plus rien, je ne peux plus tailler ! Mes pointes d'obsidienne sont là, mais je donnerais tout pour que ce feu dans mes yeux s'arrête !" tone="no" />
      </div>
      <div
        ref={zone}
        className="rub-zone"
        onPointerDown={e => { last.current = null; e.currentTarget.setPointerCapture(e.pointerId) }}
        onPointerMove={move}
        onPointerUp={() => (last.current = null)}
      >
        <span className="rub-eyes">{finished ? '👁️ 👁️' : '😣'}</span>
        <svg viewBox="0 0 100 100" className="rub-ring">
          <circle cx="50" cy="50" r="44" pathLength="1" strokeDasharray={`${amount} 1`} />
        </svg>
      </div>
      <p className="rub-help">
        {finished ? 'Le baume agit…' : 'Trace des cercles avec ton doigt (ou ta souris) pour appliquer le baume 🌿'}
      </p>
      {!finished && (
        <button className="link" onClick={() => setAmount(a => Math.min(1, a + 0.25))}>
          Pas de geste possible ? Appuie ici pour appliquer le baume
        </button>
      )}
    </div>
  )
}
