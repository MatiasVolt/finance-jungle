// Progression de l'utilisateur, gardée dans le navigateur.
// Tout le reste (XP totale, streak, niveau) se recalcule à partir de ces données.
const KEY = 'finance-jungle:progress:v2'

export const EMPTY_PROGRESS = {
  onboarded: false,
  goal: 50, // objectif d'XP quotidien
  completed: {}, // lessonId -> { firstAt, count }
  xpByTrack: {}, // trackId -> XP
  log: {}, // 'AAAA-MM-JJ' -> { xp, lessons }
  bestStreak: 0,
  lastLesson: null,
}

export function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    return saved ? { ...EMPTY_PROGRESS, ...saved } : { ...EMPTY_PROGRESS }
  } catch {
    return { ...EMPTY_PROGRESS }
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress))
  } catch {
    // stockage indisponible (navigation privée) : on apprend sans sauvegarde
  }
}

// ───────────── Dates (en heure locale, pas UTC) ─────────────

export function dayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function addDays(date, n) {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

// ───────────── XP, streak, niveau ─────────────

// XP d'une leçon selon sa difficulté (0 = Démarrer, 1 à 5 = niveaux des thèmes).
const BASE_XP = [20, 20, 30, 45, 65, 90]
export const FIRST_TRY_BONUS = 3

export function lessonXp(level, firstTryCount, alreadyDone) {
  const base = BASE_XP[level] ?? 20
  const xp = base + firstTryCount * FIRST_TRY_BONUS
  // Réviser rapporte encore un peu : de quoi garder sa série en relisant.
  return alreadyDone ? Math.max(5, Math.round(xp / 4)) : xp
}

export function totalXp(p) {
  return Object.values(p.xpByTrack).reduce((a, b) => a + b, 0)
}

export function todayXp(p) {
  return p.log[dayKey()]?.xp ?? 0
}

// Jours consécutifs avec au moins une leçon terminée.
// La série reste vivante tant que la journée d'aujourd'hui n'est pas finie.
export function currentStreak(p) {
  let day = new Date()
  if (!p.log[dayKey(day)]?.lessons) day = addDays(day, -1)
  let n = 0
  while (p.log[dayKey(day)]?.lessons) {
    n++
    day = addDays(day, -1)
  }
  return n
}

// Niveau global : chaque niveau demande un peu plus d'XP que le précédent.
export function levelInfo(xp) {
  let level = 1
  let floor = 0
  let need = 100
  while (xp >= floor + need) {
    floor += need
    level++
    need = Math.round(need * 1.25)
  }
  return { level, into: xp - floor, need }
}

export function recordLesson(p, { lessonId, trackId, xp }) {
  const today = dayKey()
  const day = p.log[today] ?? { xp: 0, lessons: 0 }
  const prev = p.completed[lessonId]
  const next = {
    ...p,
    completed: { ...p.completed, [lessonId]: { firstAt: prev?.firstAt ?? today, count: (prev?.count ?? 0) + 1 } },
    xpByTrack: { ...p.xpByTrack, [trackId]: (p.xpByTrack[trackId] ?? 0) + xp },
    log: { ...p.log, [today]: { xp: day.xp + xp, lessons: day.lessons + 1 } },
    lastLesson: lessonId,
  }
  next.bestStreak = Math.max(p.bestStreak, currentStreak(next))
  return next
}
