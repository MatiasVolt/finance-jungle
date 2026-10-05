import { useEffect, useState } from 'react'
import Splash from './components/Splash.jsx'
import JungleMap from './components/JungleMap.jsx'
import Lesson from './components/Lesson.jsx'
import { LESSONS } from './data/lessons/index.js'
import { EMPTY_PROGRESS, loadProgress, saveProgress } from './store.js'

export default function App() {
  const [view, setView] = useState('splash')
  const [lessonId, setLessonId] = useState(null)
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => saveProgress(progress), [progress])

  function openLesson(id) {
    setLessonId(id)
    setView('lesson')
  }

  function finishLesson(lesson) {
    setProgress(p => {
      if (p.completed.includes(lesson.id)) return p
      const { xp, bananas, badge } = lesson.reward
      return {
        ...p,
        completed: [...p.completed, lesson.id],
        xp: p.xp + xp,
        bananas: p.bananas + bananas,
        badges: badge ? [...p.badges, badge] : p.badges,
      }
    })
    setView('map')
  }

  return (
    <div className="app">
      {view === 'splash' && <Splash onStart={() => setView('map')} returning={progress.completed.length > 0} />}
      {view === 'map' && (
        <JungleMap progress={progress} onOpen={openLesson} onReset={() => setProgress({ ...EMPTY_PROGRESS })} />
      )}
      {view === 'lesson' && (
        <Lesson
          lesson={LESSONS[lessonId]}
          progress={progress}
          onExit={() => setView('map')}
          onFinish={finishLesson}
        />
      )}
    </div>
  )
}
