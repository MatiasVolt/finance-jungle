import { useId } from 'react'
import { useLang } from '../i18n.jsx'

// Drapeaux en SVG : les emojis drapeaux ne s'affichent pas sous Windows.
function FlagFR() {
  return (
    <svg viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  )
}

function FlagGB() {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <clipPath id={`s${id}`}><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <clipPath id={`t${id}`}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
      <g clipPath={`url(#s${id})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#t${id})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}

const OPTIONS = [
  { lang: 'fr', label: 'Français', Flag: FlagFR },
  { lang: 'en', label: 'English', Flag: FlagGB },
]

export default function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang-switch" role="group" aria-label={t('lang.switch')}>
      {OPTIONS.map(({ lang: l, label, Flag }) => (
        <button key={l} className={`flag ${lang === l ? 'on' : ''}`} onClick={() => setLang(l)} aria-pressed={lang === l} title={label}>
          <Flag />
        </button>
      ))}
    </div>
  )
}
