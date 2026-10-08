import { Avatar } from '../Guide.jsx'
import { WeekBars } from '../charts.jsx'
import { LESSON_INDEX, START, TRACKS } from '../../data/tracks.js'
import { resumeLessonId, trackStats } from '../../data/catalog.js'
import { useLang } from '../../i18n.jsx'
import { currentStreak, todayXp } from '../../store.js'

export default function Home({ progress, go }) {
  const { t, p } = useLang()
  const today = todayXp(progress)
  const streak = currentStreak(progress)
  const goalRatio = Math.min(1, today / progress.goal)
  const resume = resumeLessonId(progress)
  const resumeInfo = resume && LESSON_INDEX[resume]
  const start = trackStats(START, progress)
  const startDone = start.done >= start.written

  return (
    <>
      <section className="hero-grid">
        {resumeInfo && (
          <button className="panel resume" onClick={() => go(`/l/${resume}`)}>
            <small className="kicker">{t(progress.lastLesson ? 'home.resume' : 'home.start')}</small>
            <div className="resume-row">
              <Avatar who={resumeInfo.track.guide} />
              <div>
                <b>{p(resumeInfo.meta.title)}</b>
                <span className="muted">
                  {p(resumeInfo.track.title)}
                  {resumeInfo.level ? ` · ${t('common.level', { n: resumeInfo.level })}` : ''} · {t('common.min', { n: resumeInfo.meta.minutes })}
                </span>
              </div>
            </div>
            <span className="btn btn-inline">{t('home.continue')}</span>
          </button>
        )}

        <div className="panel today">
          <small className="kicker">{t('home.today')}</small>
          <div className="today-row">
            <Ring ratio={goalRatio} label={`${today}`} sub={`/ ${progress.goal} XP`} />
            <div>
              <b className="streak big">🔥 {streak}</b>
              <span className="muted">{t('home.days', { n: streak }).replace(/^\d+ /, '')}</span>
              {today === 0 && <span className="muted small">{t('home.oneLesson')}</span>}
            </div>
          </div>
          <WeekBars log={progress.log} goal={progress.goal} />
        </div>
      </section>

      {!startDone && (
        <section className="panel start-card">
          <Avatar who={START.guide} size="lg" />
          <div>
            <small className="kicker">{t('home.optional')}</small>
            <h3>{p(START.title)}</h3>
            <p className="muted">{p(START.tagline)}</p>
            <div className="bar thin"><div style={{ width: `${(start.done / start.total) * 100}%` }} /></div>
            <small className="muted">{t('common.lessons', { d: start.done, t: start.total })}</small>
          </div>
          <button className="btn btn-inline" onClick={() => go('/t/demarrer')}>{t(start.done ? 'common.continue' : 'common.start')}</button>
        </section>
      )}

      <section>
        <div className="section-head">
          <h2>{t('home.themes')}</h2>
          <span className="muted small">{t('home.themesSub')}</span>
        </div>
        <div className="track-grid">
          {(startDone ? [...TRACKS, START] : TRACKS).map(tr => {
            const s = trackStats(tr, progress)
            return (
              <a key={tr.id} href={`#/t/${tr.id}`} className="panel track-card">
                <div className="track-card-head">
                  <Avatar who={tr.guide} />
                  <span className="track-xp">{s.xp ? `⚡ ${s.xp}` : ''}</span>
                </div>
                <h3>{p(tr.title)}</h3>
                <p className="muted small">{p(tr.tagline)}</p>
                <div className="bar thin"><div style={{ width: `${(s.done / s.total) * 100}%` }} /></div>
                <small className="muted">
                  {t('common.lessons', { d: s.done, t: s.total })}
                  {s.written < s.total ? ` · ${t('common.available', { n: s.written })}` : ''}
                </small>
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}

function Ring({ ratio, label, sub }) {
  const r = 34
  const c = 2 * Math.PI * r
  return (
    <div className={`ring ${ratio >= 1 ? 'full' : ''}`}>
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r={r} className="ring-bg" />
        <circle cx="40" cy="40" r={r} className="ring-fg" strokeDasharray={`${ratio * c} ${c}`} transform="rotate(-90 40 40)" />
      </svg>
      <div className="ring-label"><b>{label}</b><small>{sub}</small></div>
    </div>
  )
}
