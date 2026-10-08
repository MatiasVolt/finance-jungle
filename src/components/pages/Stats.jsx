import { useState } from 'react'
import { Avatar } from '../Guide.jsx'
import { Heatmap, WeekBars } from '../charts.jsx'
import { GoalPicker } from './Welcome.jsx'
import { ALL_TRACKS, START } from '../../data/tracks.js'
import { trackStats } from '../../data/catalog.js'
import { useLang } from '../../i18n.jsx'
import { currentStreak, levelInfo, todayXp, totalXp } from '../../store.js'

// Les succès se recalculent à partir de la progression : rien à stocker.
function achievements(p) {
  const xp = totalXp(p)
  const lessons = Object.keys(p.completed).length
  const tracks = ALL_TRACKS.filter(t => trackStats(t, p).done > 0).length
  const days = Object.values(p.log).filter(d => d.xp >= p.goal).length
  const start = trackStats(START, p)
  return [
    { key: 'first', icon: '🌱', ok: lessons >= 1 },
    { key: 's3', icon: '🔥', ok: p.bestStreak >= 3 },
    { key: 's7', icon: '📅', ok: p.bestStreak >= 7 },
    { key: 's30', icon: '🐢', ok: p.bestStreak >= 30 },
    { key: 'goal', icon: '🎯', ok: days >= 5 },
    { key: 'start', icon: '🦉', ok: start.done === start.total },
    { key: 'curious', icon: '🧭', ok: tracks >= 4 },
    { key: 'xp', icon: '⚡', ok: xp >= 1000 },
  ]
}

export default function Stats({ progress, onGoal, onReset }) {
  const { t, p } = useLang()
  const [confirm, setConfirm] = useState(false)
  const xp = totalXp(progress)
  const lvl = levelInfo(xp)
  const streak = currentStreak(progress)
  const byTrack = ALL_TRACKS.map(tr => ({ tr, xp: progress.xpByTrack[tr.id] ?? 0 })).sort((a, b) => b.xp - a.xp)
  const maxTrack = Math.max(1, ...byTrack.map(x => x.xp))
  const activeDays = Object.values(progress.log).filter(d => d.xp > 0).length

  return (
    <>
      <h1>{t('stats.title')}</h1>

      <section className="kpis">
        <div className="panel kpi">
          <small>{t('stats.level')}</small>
          <b>{lvl.level}</b>
          <div className="bar thin"><div style={{ width: `${(lvl.into / lvl.need) * 100}%` }} /></div>
          <small className="muted">{t('stats.toNext', { n: lvl.need - lvl.into, l: lvl.level + 1 })}</small>
        </div>
        <div className="panel kpi"><small>{t('stats.totalXp')}</small><b>⚡ {xp}</b><small className="muted">{t('stats.today', { n: todayXp(progress) })}</small></div>
        <div className="panel kpi"><small>{t('stats.streak')}</small><b className="streak">🔥 {streak}</b><small className="muted">{t('stats.record', { n: progress.bestStreak })}</small></div>
        <div className="panel kpi"><small>{t('stats.lessons')}</small><b>{Object.keys(progress.completed).length}</b><small className="muted">{t('stats.activeDays', { n: activeDays })}</small></div>
      </section>

      <section className="panel">
        <div className="section-head"><h2>{t('stats.perDay')}</h2><span className="muted small">{t('stats.last14')}</span></div>
        <WeekBars log={progress.log} goal={progress.goal} days={14} labels="date" />
      </section>

      <section className="panel">
        <div className="section-head"><h2>{t('stats.activity')}</h2><span className="muted small">{t('stats.last20w')}</span></div>
        <Heatmap log={progress.log} goal={progress.goal} />
      </section>

      <section className="panel">
        <div className="section-head"><h2>{t('stats.perTheme')}</h2></div>
        <div className="hbars">
          {byTrack.map(({ tr, xp }) => (
            <a key={tr.id} href={`#/t/${tr.id}`} className="hbar">
              <Avatar who={tr.guide} size="sm" />
              <span className="hbar-name">{p(tr.title)}</span>
              <span className="hbar-track"><span style={{ width: `${(xp / maxTrack) * 100}%` }} /></span>
              <b>{xp}</b>
            </a>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head"><h2>{t('stats.badges')}</h2></div>
        <div className="badges">
          {achievements(progress).map(a => (
            <div key={a.key} className={`badge ${a.ok ? 'ok' : ''}`}>
              <span>{a.icon}</span>
              <b>{t(`badge.${a.key}`)}</b>
              <small>{t(`badge.${a.key}.d`)}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head"><h2>{t('stats.goal')}</h2></div>
        <GoalPicker value={progress.goal} onChange={onGoal} />
      </section>

      <div className="danger-zone">
        {confirm ? (
          <>
            <span>{t('stats.resetQ')}</span>
            <button className="btn btn-inline btn-danger" onClick={() => { onReset(); setConfirm(false) }}>{t('stats.resetYes')}</button>
            <button className="btn btn-inline btn-ghost" onClick={() => setConfirm(false)}>{t('stats.cancel')}</button>
          </>
        ) : (
          <button className="link" onClick={() => setConfirm(true)}>{t('stats.reset')}</button>
        )}
      </div>
    </>
  )
}
