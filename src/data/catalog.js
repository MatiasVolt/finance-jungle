// Croise le catalogue (tracks.js) avec les leçons écrites et la progression.
import { hasLesson } from './lessons/index.js'
import { ALL_TRACKS, LESSON_INDEX, trackLessons } from './tracks.js'

export const isWritten = hasLesson

export function trackStats(track, progress) {
  const all = trackLessons(track)
  return {
    total: all.length,
    written: all.filter(l => isWritten(l.id)).length,
    done: all.filter(l => progress.completed[l.id]).length,
    xp: progress.xpByTrack[track.id] ?? 0,
  }
}

// Prochaine leçon écrite après `lessonId` dans son thème : la première pas encore faite, sinon la suivante.
export function nextLessonId(lessonId, progress) {
  const { track } = LESSON_INDEX[lessonId]
  const list = trackLessons(track).filter(l => isWritten(l.id))
  const after = list.slice(list.findIndex(l => l.id === lessonId) + 1)
  return (after.find(l => !progress.completed[l.id]) ?? after[0])?.id
}

// Ce que l'accueil propose de reprendre : la suite de la dernière leçon, sinon la première leçon écrite pas encore faite.
export function resumeLessonId(progress) {
  if (progress.lastLesson && LESSON_INDEX[progress.lastLesson]) {
    const next = nextLessonId(progress.lastLesson, progress)
    if (next && !progress.completed[next]) return next
  }
  for (const track of ALL_TRACKS) {
    const l = trackLessons(track).find(l => isWritten(l.id) && !progress.completed[l.id])
    if (l) return l.id
  }
  return null
}
