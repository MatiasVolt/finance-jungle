import { useState } from 'react'
import Read from './screens/Read.jsx'
import Quiz from './screens/Quiz.jsx'
import NumberQ from './screens/NumberQ.jsx'
import Formula from './screens/Formula.jsx'
import Table from './screens/Table.jsx'
import Reflect from './screens/Reflect.jsx'
import Compound from './screens/Compound.jsx'
import Prices from './screens/Prices.jsx'
import { Avatar } from './Guide.jsx'
import LangSwitch from './LangSwitch.jsx'
import { getLesson } from '../data/lessons/index.js'
import { LESSON_INDEX, LEVELS } from '../data/tracks.js'
import { nextLessonId } from '../data/catalog.js'
import { useLang } from '../i18n.jsx'
import { currentStreak, lessonXp, todayXp, FIRST_TRY_BONUS } from '../store.js'

const SCREENS = {
  read: Read,
  quiz: Quiz,
  number: NumberQ,
  formula: Formula,
  table: Table,
  reflect: Reflect,
  compound: Compound,
  prices: Prices,
}

export default function Lesson({ lessonId, progress, onComplete, go }) {
  const { lang, t, p } = useLang()
  const { lesson, lang: shownLang } = getLesson(lessonId, lang)
  const { track, level, meta } = LESSON_INDEX[lessonId]
  const [alreadyDone] = useState(() => Boolean(progress.completed[lessonId]))
  const [index, setIndex] = useState(0)
  const [firstTries, setFirstTries] = useState(0)
  const [earned, setEarned] = useState(null)

  const exit = () => go(`/t/${track.id}`)

  function next(result) {
    const ft = firstTries + (result?.firstTry ? 1 : 0)
    setFirstTries(ft)
    if (index + 1 < lesson.screens.length) {
      setIndex(index + 1)
      return
    }
    const xp = lessonXp(level, ft, alreadyDone)
    setEarned({ xp, firstTries: ft })
    onComplete({ lessonId, trackId: track.id, xp })
  }

  if (earned) {
    return <LessonDone {...{ lessonId, track, level, meta, earned, alreadyDone, progress, go }} />
  }

  const screen = lesson.screens[index]
  const Screen = SCREENS[screen.type]
  const ratio = index / lesson.screens.length

  return (
    <div className="lesson">
      <header className="lesson-bar">
        <button className="icon-btn" onClick={exit} aria-label={t('lesson.quit')}>✕</button>
        <div className="lesson-progress" role="progressbar" aria-valuenow={Math.round(ratio * 100)} aria-valuemin="0" aria-valuemax="100">
          <div style={{ width: `${ratio * 100}%` }} />
        </div>
        <span className="lesson-count">{index + 1}/{lesson.screens.length}</span>
        <LangSwitch />
      </header>
      <div className="lesson-meta">
        <Avatar who={track.guide} size="sm" />
        <span>{p(track.title)}{level ? ` · ${t('lesson.lvl', { n: level })}` : ''} · {p(meta.title)}</span>
      </div>
      {shownLang !== lang && <p className="soft-hint">{t('lesson.notTranslated')}</p>}
      {/* La clé inclut la langue : changer de langue réaffiche l'écran courant traduit. */}
      <Screen key={`${index}-${shownLang}`} {...screen} onNext={next} />
    </div>
  )
}

function LessonDone({ lessonId, track, level, meta, earned, alreadyDone, progress, go }) {
  const { t, p } = useLang()
  const today = todayXp(progress)
  const goalRatio = Math.min(1, today / progress.goal)
  const streak = currentStreak(progress)
  const nextId = nextLessonId(lessonId, progress)

  return (
    <div className="lesson done">
      <div className="screen">
        <small className="kicker">{level ? `${p(track.title)} · ${p(LEVELS[level - 1].name)}` : p(track.title)}</small>
        <h2>{t(alreadyDone ? 'done.reviewed' : 'done.finished')}</h2>
        <p className="lead">{p(meta.title)}</p>

        <div className="done-xp">
          <span className="xp-big">+{earned.xp}</span>
          <span>XP</span>
        </div>
        {earned.firstTries > 0 && !alreadyDone && (
          <p className="muted small center">{t('done.firstTry', { xp: earned.firstTries * FIRST_TRY_BONUS, n: earned.firstTries })}</p>
        )}
        {alreadyDone && <p className="muted small center">{t('done.reviewNote')}</p>}

        <div className="done-stats">
          <div>
            <small>{t('done.goal')}</small>
            <div className="bar"><div style={{ width: `${goalRatio * 100}%` }} /></div>
            <b>{today} / {progress.goal} XP {goalRatio >= 1 && '✓'}</b>
          </div>
          <div>
            <small>{t('done.streak')}</small>
            <b className="streak">🔥 {t('done.days', { n: streak })}</b>
          </div>
          <div>
            <small>{t('done.xpTheme', { name: p(track.title) })}</small>
            <b>{progress.xpByTrack[track.id] ?? 0}</b>
          </div>
        </div>

        <div className="footer stack">
          {nextId && <button className="btn" onClick={() => go(`/l/${nextId}`)}>{t('done.next')}</button>}
          <button className={`btn ${nextId ? 'btn-ghost' : ''}`} onClick={() => go(`/t/${track.id}`)}>{t('done.back')}</button>
        </div>
      </div>
    </div>
  )
}
