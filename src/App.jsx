import { useEffect, useState } from 'react'
import TopBar from './components/TopBar.jsx'
import Welcome from './components/pages/Welcome.jsx'
import Home from './components/pages/Home.jsx'
import Track from './components/pages/Track.jsx'
import Stats from './components/pages/Stats.jsx'
import Lesson from './components/Lesson.jsx'
import { hasLesson } from './data/lessons/index.js'
import { findTrack } from './data/tracks.js'
import { LangContext, defaultLang } from './i18n.jsx'
import { EMPTY_PROGRESS, loadProgress, recordLesson, saveProgress } from './store.js'

// Routage par le hash : #/ · #/t/<thème> · #/l/<leçon> · #/stats
const readRoute = () => window.location.hash.replace(/^#/, '') || '/'

export default function App() {
  const [route, setRoute] = useState(readRoute)
  const [progress, setProgress] = useState(() => {
    const p = loadProgress()
    return p.lang ? p : { ...p, lang: defaultLang() }
  })

  useEffect(() => saveProgress(progress), [progress])
  useEffect(() => { document.documentElement.lang = progress.lang }, [progress.lang])

  useEffect(() => {
    const onHash = () => {
      setRoute(readRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = path => (window.location.hash = path)
  const update = patch => setProgress(p => ({ ...p, ...patch }))
  const complete = result => setProgress(p => recordLesson(p, result))
  const reset = () => setProgress(p => ({ ...EMPTY_PROGRESS, onboarded: true, lang: p.lang }))
  const lang = { lang: progress.lang, setLang: l => update({ lang: l }) }

  const [, page, id] = route.split('/')
  const track = page === 't' && findTrack(id)

  let content
  if (!progress.onboarded) {
    content = <Welcome progress={progress} onDone={(goal, path) => { update({ onboarded: true, goal }); go(path) }} />
  } else if (page === 'l' && hasLesson(id)) {
    content = <Lesson key={id} lessonId={id} progress={progress} onComplete={complete} go={go} />
  } else {
    content = (
      <div className="app">
        <TopBar progress={progress} route={route} />
        <main className="page">
          {track ? (
            <Track track={track} progress={progress} go={go} />
          ) : page === 'stats' ? (
            <Stats progress={progress} onGoal={goal => update({ goal })} onReset={reset} />
          ) : (
            <Home progress={progress} go={go} />
          )}
        </main>
      </div>
    )
  }

  return <LangContext.Provider value={lang}>{content}</LangContext.Provider>
}
