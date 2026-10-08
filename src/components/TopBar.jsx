import LangSwitch from './LangSwitch.jsx'
import { useLang } from '../i18n.jsx'
import { currentStreak, levelInfo, todayXp, totalXp } from '../store.js'

export default function TopBar({ progress, route }) {
  const { t } = useLang()
  const xp = totalXp(progress)
  const streak = currentStreak(progress)
  const today = todayXp(progress)
  const doneToday = today > 0

  return (
    <header className="topbar">
      <a href="#/" className="brand">
        <span className="brand-mark">FJ</span>
        <span className="brand-name">Finance Jungle</span>
      </a>
      <nav className="topnav">
        <a href="#/" className={route === '/' ? 'on' : ''}>{t('nav.learn')}</a>
        <a href="#/stats" className={route === '/stats' ? 'on' : ''}>{t('nav.progress')}</a>
      </nav>
      <a href="#/stats" className="chips" aria-label={t('top.aria')}>
        <span className={`chip streak ${doneToday ? '' : 'cold'}`} title={t(doneToday ? 'top.streakDone' : 'top.streakTodo')}>
          🔥 {streak}
        </span>
        <span className="chip xp" title={t('top.xpToday', { n: today })}>⚡ {xp}</span>
        <span className="chip lvl">{t('top.lvl', { n: levelInfo(xp).level })}</span>
      </a>
      <LangSwitch />
    </header>
  )
}
