import { useState } from 'react'
import { PATHS, TRUNK } from '../data/curriculum.js'
import { CHARACTERS } from '../data/characters.js'
import { LESSONS } from '../data/lessons/index.js'
import { Canopy } from './Decor.jsx'

// Toutes les étapes du tronc commun, dans l'ordre.
const ALL_STEPS = TRUNK.flatMap(ch => ch.steps)

function stepState(step, progress) {
  if (progress.completed.includes(step.id)) return 'done'
  const i = ALL_STEPS.indexOf(step)
  const previousDone = i === 0 || progress.completed.includes(ALL_STEPS[i - 1].id)
  if (!previousDone) return 'locked'
  return LESSONS[step.id] ? 'open' : 'soon'
}

export default function JungleMap({ progress, onOpen, onReset }) {
  const [toast, setToast] = useState(null)

  function say(text) {
    setToast(text)
    clearTimeout(say.t)
    say.t = setTimeout(() => setToast(null), 2600)
  }

  function click(step, state) {
    if (state === 'open' || state === 'done') return onOpen(step.id)
    if (state === 'soon') return say(`🌱 « ${step.title} » pousse encore. Prochaine étape du chantier !`)
    say('🔒 Termine l’étape précédente pour ouvrir ce passage.')
  }

  const trunkDone = ALL_STEPS.every(s => progress.completed.includes(s.id))

  return (
    <div className="map">
      <header className="map-top">
        <Canopy />
        <div className="map-brand">
          <span className="brand-mark">🍌</span>
          <div>
            <h1>Finance Jungle</h1>
            <p>De la première banane à Black-Scholes</p>
          </div>
        </div>
        <div className="stats">
          <span title="Bananes">🍌 {progress.bananas}</span>
          <span title="Sagesse">✨ {progress.xp} XP</span>
          <span title="Badges">🏅 {progress.badges.length}</span>
        </div>
      </header>

      <main className="trail">
        <div className="region-label">🌿 La Clairière · tronc commun</div>
        {TRUNK.map(ch => {
          const guide = CHARACTERS[ch.guide]
          return (
            <section key={ch.id} className="chapter">
              <div className="chapter-head" style={{ '--c': guide.color }}>
                <span className="chapter-guide">{guide.emoji}</span>
                <div>
                  <small>Chapitre {ch.number} · avec {guide.name}</small>
                  <h2>{ch.title}</h2>
                  <p>{ch.blurb}</p>
                </div>
              </div>
              <ol className="nodes">
                {ch.steps.map((step, i) => {
                  const state = stepState(step, progress)
                  const offset = Math.sin(i * 1.1) * 70
                  return (
                    <li key={step.id} style={{ transform: `translateX(${offset}px)` }}>
                      <button className={`node ${state}`} onClick={() => click(step, state)} aria-label={step.title}>
                        <span className="node-icon">{state === 'locked' ? '🔒' : step.icon}</span>
                        {state === 'open' && <span className="node-ring" />}
                      </button>
                      <span className="node-title">
                        {step.title}
                        {step.cost && state !== 'done' && <em> · {step.cost} 🍌</em>}
                        {state === 'soon' && <em> · bientôt</em>}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </section>
          )
        })}

        <section className="fork">
          <div className="region-label">🪧 La Grande Fourche · choisis ton chemin</div>
          <p className="fork-intro">
            {trunkDone
              ? 'La jungle s’ouvre. Chaque chemin grimpe jusqu’à son sommet.'
              : 'Termine la Clairière et cinq chemins s’ouvriront. Chacun mène à un sommet : une formule que tu comprendras, pièce par pièce.'}
          </p>
          <div className="paths">
            {PATHS.map(p => {
              const guide = CHARACTERS[p.guide]
              return (
                <article key={p.id} className="path-card" style={{ '--c': guide.color }}>
                  <div className="path-guide">{guide.emoji}</div>
                  <h3>{p.name}</h3>
                  <small>{p.theme}</small>
                  <p className="path-stops">{p.stops.join(' → ')}</p>
                  <div className="path-summit">⛰️ Sommet : {p.summit}</div>
                </article>
              )
            })}
          </div>
        </section>

        <button
          className="reset"
          onClick={() => window.confirm('Effacer toute ta progression ?') && onReset()}
        >
          Recommencer l’aventure à zéro
        </button>
      </main>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
