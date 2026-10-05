// Progression du joueur, gardée dans le navigateur.
const KEY = 'finance-jungle:progress:v1'

export const EMPTY_PROGRESS = { bananas: 0, xp: 0, badges: [], completed: [] }

export function loadProgress() {
  try {
    return { ...EMPTY_PROGRESS, ...JSON.parse(localStorage.getItem(KEY)) }
  } catch {
    return { ...EMPTY_PROGRESS }
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress))
  } catch {
    // stockage indisponible (navigation privée) : on joue sans sauvegarde
  }
}
