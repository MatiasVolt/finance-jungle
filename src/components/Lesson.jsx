import { useState } from 'react'
import Story from './screens/Story.jsx'
import Dialogue from './screens/Dialogue.jsx'
import Concept from './screens/Concept.jsx'
import Cards from './screens/Cards.jsx'
import Quiz from './screens/Quiz.jsx'
import Reward from './screens/Reward.jsx'
import TrocQuest from './screens/TrocQuest.jsx'
import PricesFormula from './screens/PricesFormula.jsx'

const SCREENS = {
  story: Story,
  dialogue: Dialogue,
  concept: Concept,
  cards: Cards,
  quiz: Quiz,
  reward: Reward,
  'troc-quest': TrocQuest,
  'prices-formula': PricesFormula,
}

export default function Lesson({ lesson, progress, onExit, onFinish }) {
  const [index, setIndex] = useState(0)
  const screen = lesson.screens[index]
  const Screen = SCREENS[screen.type]
  const ratio = index / (lesson.screens.length - 1)

  return (
    <div className={`lesson scene-${screen.scene || 'day'}`}>
      <div className="lesson-bar">
        <button className="close" onClick={onExit} aria-label="Quitter la leçon">✕</button>
        <div className="vine-progress">
          <div className="vine-fill" style={{ width: `${ratio * 100}%` }} />
          <span className="vine-monkey" style={{ left: `${ratio * 100}%` }}>🐒</span>
        </div>
        <span className="lesson-bananas">🍌 {progress.bananas}</span>
      </div>
      <Screen
        key={index}
        {...screen}
        lesson={lesson}
        alreadyDone={progress.completed.includes(lesson.id)}
        onNext={() => setIndex(i => i + 1)}
        onFinish={() => onFinish(lesson)}
      />
    </div>
  )
}
