import { Speaker } from '../Speaker.jsx'
import { Rain } from '../Decor.jsx'

export default function Dialogue({ who, text, scene, onNext }) {
  return (
    <div className="screen dialogue">
      {scene === 'storm' && <Rain intensity={0.5} />}
      <div className="grow" />
      <Speaker who={who} text={text} />
      <div className="footer">
        <button className="btn" onClick={onNext}>Continuer</button>
      </div>
    </div>
  )
}
