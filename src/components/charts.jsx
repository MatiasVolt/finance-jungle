import { locale, useLang } from '../i18n.jsx'
import { addDays, dayKey } from '../store.js'

const DAY_LETTERS = { fr: ['D', 'L', 'M', 'M', 'J', 'V', 'S'], en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'] }

function lastDays(n) {
  const today = new Date()
  return Array.from({ length: n }, (_, i) => addDays(today, i - n + 1))
}

// XP des derniers jours, en barres. Le trait doré marque l'objectif quotidien.
export function WeekBars({ log, goal, days = 7, labels = 'letter' }) {
  const { lang, t } = useLang()
  const list = lastDays(days).map(d => ({ d, xp: log[dayKey(d)]?.xp ?? 0 }))
  const max = Math.max(goal, ...list.map(x => x.xp))
  const today = dayKey()

  return (
    <div className="bars" style={{ '--goal': `${(goal / max) * 100}%` }} title={t('bars.goal', { n: goal })}>
      {list.map(({ d, xp }) => (
        <div key={dayKey(d)} className={`bars-col ${dayKey(d) === today ? 'today' : ''}`} title={`${d.toLocaleDateString(locale(lang), { weekday: 'long', day: 'numeric', month: 'long' })} : ${xp} XP`}>
          <span className="bars-val">{xp || ''}</span>
          <div className="bars-track">
            <div className={`bars-fill ${xp >= goal ? 'met' : ''}`} style={{ height: `${(xp / max) * 100}%` }} />
          </div>
          <small>{labels === 'letter' ? DAY_LETTERS[lang][d.getDay()] : d.getDate()}</small>
        </div>
      ))}
    </div>
  )
}

// Calendrier d'activité façon GitHub : une case par jour, colonnes = semaines (lundi en haut).
export function Heatmap({ log, goal, weeks = 20 }) {
  const { lang, t } = useLang()
  const today = new Date()
  const mondayOffset = (today.getDay() + 6) % 7
  const start = addDays(today, -mondayOffset - (weeks - 1) * 7)
  const cols = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => addDays(start, w * 7 + d)),
  )
  const shade = xp => (xp <= 0 ? 0 : xp < goal / 2 ? 1 : xp < goal ? 2 : xp < goal * 2 ? 3 : 4)

  return (
    <div className="heatmap-wrap">
      <div className="heatmap" role="img" aria-label={t('heat.aria')}>
        {cols.map((col, w) => (
          <div key={w} className="heatmap-col">
            {col.map(d => {
              const future = d > today
              const xp = log[dayKey(d)]?.xp ?? 0
              return (
                <span
                  key={dayKey(d)}
                  className={`cell s${future ? 'x' : shade(xp)}`}
                  title={future ? '' : `${d.toLocaleDateString(locale(lang), { day: 'numeric', month: 'short' })} : ${xp} XP`}
                />
              )
            })}
          </div>
        ))}
      </div>
      <div className="heatmap-legend">
        <small>{t('heat.less')}</small>
        {[0, 1, 2, 3, 4].map(s => <span key={s} className={`cell s${s}`} />)}
        <small>{t('heat.more')}</small>
      </div>
    </div>
  )
}
