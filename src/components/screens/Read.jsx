import { Prose } from '../rich.jsx'
import { GuideNote } from '../Guide.jsx'
import { useLang } from '../../i18n.jsx'

export default function Read({ kicker, title, body, guide, note, onNext }) {
  const { t } = useLang()
  return (
    <div className="screen">
      {kicker && <small className="kicker">{kicker}</small>}
      {title && <h2>{title}</h2>}
      <div className="prose"><Prose text={body} /></div>
      {guide && note && <GuideNote who={guide} text={note} />}
      <div className="footer">
        <button className="btn" onClick={() => onNext()}>{t('common.continue')}</button>
      </div>
    </div>
  )
}
