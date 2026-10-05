import { useState } from 'react'
import { Speaker } from '../Speaker.jsx'

// Récompense : un ver de terre, que le Hibou échange contre des bananes.
// Le petit tableau de l'échange est une première graine de comptabilité en partie double.
export default function Reward({ lesson, alreadyDone, onFinish }) {
  const [traded, setTraded] = useState(false)
  const { xp, bananas, badge } = lesson.reward

  if (alreadyDone) {
    return (
      <div className="screen reward">
        <div className="reward-big">🌿</div>
        <h2>Leçon révisée</h2>
        <p className="muted">Tu avais déjà gagné le badge « {badge} ». Réviser, c'est ce qui fait pousser les racines.</p>
        <div className="footer">
          <button className="btn" onClick={onFinish}>Retour à la jungle</button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen reward">
      {!traded ? (
        <>
          <div className="reward-big bounce">🪱</div>
          <h2>Tu as gagné un ver de terre !</h2>
          <div className="reward-row">
            <span>✨ +{xp} XP de Sagesse</span>
            <span>🏅 Badge « {badge} »</span>
          </div>
          <Speaker who="hibou" text={`Un ver de terre ! Mon plat préféré. Je te l'échange contre **${bananas} bananes** 🍌 : c'est la monnaie de la jungle, et elle ouvre l'étape suivante.`} />
          <div className="footer">
            <button className="btn btn-gold" onClick={() => setTraded(true)}>Échanger le ver 🪱 → 🍌</button>
          </div>
        </>
      ) : (
        <>
          <div className="reward-big bounce">🍌</div>
          <h2>+{bananas} bananes</h2>
          <table className="ledger">
            <thead>
              <tr><th>Toi</th><th>Le Hibou</th></tr>
            </thead>
            <tbody>
              <tr><td className="minus">− 1 🪱</td><td className="plus">+ 1 🪱</td></tr>
              <tr><td className="plus">+ {bananas} 🍌</td><td className="minus">− {bananas} 🍌</td></tr>
            </tbody>
          </table>
          <p className="muted small">
            Chaque échange a deux côtés : ce que l'un gagne, l'autre le donne. Garde ce petit tableau en tête,
            les comptables l'appellent la <strong>partie double</strong>. On le retrouvera.
          </p>
          <div className="footer">
            <button className="btn" onClick={onFinish}>Retour à la jungle</button>
          </div>
        </>
      )}
    </div>
  )
}
