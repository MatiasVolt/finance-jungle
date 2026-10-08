import { Avatar } from '../Guide.jsx'
import { CHARACTERS } from '../../data/characters.js'
import { LEVELS } from '../../data/tracks.js'
import { isWritten, trackStats } from '../../data/catalog.js'
import { useLang } from '../../i18n.jsx'
import { lessonXp } from '../../store.js'

export default function Track({ track, progress, go }) {
  const { t, p } = useLang()
  const s = trackStats(track, progress)
  const guide = CHARACTERS[track.guide]
  const levels = track.levels
    ? track.levels.map((lessons, i) => ({ ...LEVELS[i], lessons }))
    : [{ n: 0, name: t('track.basics'), hint: t('track.basicsHint'), lessons: track.lessons }]

  return (
    <>
      <a href="#/" className="back">{t('track.all')}</a>
      <section className="track-head" style={{ '--c': guide.color }}>
        <Avatar who={track.guide} size="lg" />
        <div>
          <small className="kicker">{t('track.guide', { name: p(guide.name), role: p(guide.role) })}</small>
          <h1>{p(track.title)}</h1>
          <p className="muted">{p(track.tagline)}</p>
          <div className="track-head-stats">
            <span>⚡ <b>{s.xp}</b> XP</span>
            <span>{t('common.lessons', { d: s.done, t: s.total })}</span>
          </div>
          {track.levels && <p className="soft-hint">{t('track.order')}</p>}
        </div>
      </section>

      {levels.map(level => {
        const done = level.lessons.filter(l => progress.completed[l.id]).length
        return (
          <section key={level.n} className="level">
            <div className="level-head">
              <div>
                <h2>{level.n ? `${t('common.level', { n: level.n })} · ${p(level.name)}` : level.name}</h2>
                <span className="muted small">{p(level.hint)}</span>
              </div>
              <div className="level-side">
                {level.n > 0 && <Difficulty n={level.n} label={t('track.difficulty', { n: level.n })} />}
                <small className="muted">{done} / {level.lessons.length}</small>
              </div>
            </div>
            <ol className="lessons">
              {level.lessons.map((l, i) => {
                const ready = isWritten(l.id)
                const completed = progress.completed[l.id]
                return (
                  <li key={l.id}>
                    <button className={`lesson-row ${completed ? 'is-done' : ''}`} disabled={!ready} onClick={() => go(`/l/${l.id}`)}>
                      <span className="lesson-dot">{completed ? '✓' : i + 1}</span>
                      <span className="lesson-title">
                        {p(l.title)}
                        <small className="muted">
                          {ready
                            ? `${t('common.min', { n: l.minutes })} · ${completed ? t('track.review') : `+${lessonXp(level.n, 0, false)} XP`}`
                            : t('track.soon')}
                        </small>
                      </span>
                      {ready && <span className="lesson-go">{completed ? '↻' : '→'}</span>}
                    </button>
                  </li>
                )
              })}
            </ol>
          </section>
        )
      })}
    </>
  )
}

function Difficulty({ n, label }) {
  return (
    <span className="difficulty" aria-label={label}>
      {[1, 2, 3, 4, 5].map(i => <i key={i} className={i <= n ? 'on' : ''} />)}
    </span>
  )
}
