import frDemarrer from './fr/demarrer.js'
import frThemes from './fr/themes.js'
import frNiveau1 from './fr/niveau1.js'
import frLot2 from './fr/lot2.js'
import frLot3 from './fr/lot3.js'
import frLot4 from './fr/lot4.js'
import frLot5 from './fr/lot5.js'
import frLot6 from './fr/lot6.js'
import frLot7 from './fr/lot7.js'
import frLot8 from './fr/lot8.js'
import frLot9 from './fr/lot9.js'
import frLot10 from './fr/lot10.js'
import frLot11 from './fr/lot11.js'
import frLot12 from './fr/lot12.js'
import frLot13 from './fr/lot13.js'
import frLot14 from './fr/lot14.js'
import frLot15 from './fr/lot15.js'
import frLot16 from './fr/lot16.js'
import frLot17 from './fr/lot17.js'
import enStart from './en/start.js'
import enTopics from './en/topics.js'
import enLevel1 from './en/level1.js'
import enBatch2 from './en/batch2.js'
import enBatch3 from './en/batch3.js'
import enBatch4 from './en/batch4.js'
import enBatch5 from './en/batch5.js'
import enBatch6 from './en/batch6.js'
import enBatch7 from './en/batch7.js'
import enBatch8 from './en/batch8.js'
import enBatch9 from './en/batch9.js'
import enBatch10 from './en/batch10.js'
import enBatch11 from './en/batch11.js'
import enBatch12 from './en/batch12.js'
import enBatch13 from './en/batch13.js'
import enBatch14 from './en/batch14.js'
import enBatch15 from './en/batch15.js'
import enBatch16 from './en/batch16.js'
import enBatch17 from './en/batch17.js'

// Les leçons écrites, par langue. Une leçon du catalogue sans contenu apparaît « en préparation ».
// Chaque leçon a le même id et la même suite d'écrans dans les deux langues.
const byId = list => Object.fromEntries(list.map(l => [l.id, l]))

export const LESSONS = {
  fr: byId([...frDemarrer, ...frThemes, ...frNiveau1, ...frLot2, ...frLot3, ...frLot4, ...frLot5, ...frLot6, ...frLot7, ...frLot8, ...frLot9, ...frLot10, ...frLot11, ...frLot12, ...frLot13, ...frLot14, ...frLot15, ...frLot16, ...frLot17]),
  en: byId([...enStart, ...enTopics, ...enLevel1, ...enBatch2, ...enBatch3, ...enBatch4, ...enBatch5, ...enBatch6, ...enBatch7, ...enBatch8, ...enBatch9, ...enBatch10, ...enBatch11, ...enBatch12, ...enBatch13, ...enBatch14, ...enBatch15, ...enBatch16, ...enBatch17]),
}

// Renvoie la leçon dans la langue demandée, sinon dans l'autre.
export function getLesson(id, lang) {
  if (LESSONS[lang][id]) return { lesson: LESSONS[lang][id], lang }
  const other = lang === 'fr' ? 'en' : 'fr'
  return LESSONS[other][id] ? { lesson: LESSONS[other][id], lang: other } : null
}

export const hasLesson = id => Boolean(LESSONS.fr[id] || LESSONS.en[id])
