import { useState } from 'react'
import { Avatar } from '../Guide.jsx'
import LangSwitch from '../LangSwitch.jsx'
import { TRACKS } from '../../data/tracks.js'
import { useLang } from '../../i18n.jsx'

export const GOALS = [
  { xp: 20, minutes: 5 },
  { xp: 50, minutes: 10 },
  { xp: 100, minutes: 20 },
  { xp: 150, minutes: 30 },
]

export function GoalPicker({ value, onChange }) {
  const { t } = useLang()
  return (
    <div className="goal-grid">
      {GOALS.map(g => (
        <button key={g.xp} className={`goal ${value === g.xp ? 'on' : ''}`} onClick={() => onChange(g.xp)}>
          <b>{t(`goal.${g.xp}`)}</b>
          <span>{g.xp} XP</span>
          <small>{t('goal.hint', { n: g.minutes })}</small>
        </button>
      ))}
    </div>
  )
}

export default function Welcome({ progress, onDone }) {
  const { t } = useLang()
  const [goal, setGoal] = useState(progress.goal)

  return (
    <div className="welcome">
      <div className="welcome-inner">
        <div className="welcome-top">
          <span className="brand-mark big">FJ</span>
          <LangSwitch />
        </div>
        <h1>Finance Jungle</h1>
        <p className="lead">{t('welcome.lead')}</p>
        <div className="guides-row" aria-hidden="true">
          {TRACKS.map(tr => <Avatar key={tr.id} who={tr.guide} size="sm" />)}
        </div>

        <h3>{t('welcome.goal')}</h3>
        <GoalPicker value={goal} onChange={setGoal} />

        <h3>{t('welcome.where')}</h3>
        <div className="stack">
          <button className="btn" onClick={() => onDone(goal, '/t/demarrer')}>{t('welcome.zero')}</button>
          <button className="btn btn-ghost" onClick={() => onDone(goal, '/')}>{t('welcome.bases')}</button>
        </div>
        <p className="muted small center">{t('welcome.free')}</p>
      </div>
    </div>
  )
}
