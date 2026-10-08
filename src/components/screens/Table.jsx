import { rich } from '../rich.jsx'
import { useLang } from '../../i18n.jsx'

export default function Table({ kicker, title, columns, rows, caption, onNext }) {
  const { t } = useLang()
  return (
    <div className="screen">
      {kicker && <small className="kicker">{kicker}</small>}
      <h2>{title}</h2>
      <div className="table-wrap">
        <table className="data">
          <thead>
            <tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>{r.map((cell, j) => <td key={j}>{rich(cell)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <p className="muted">{rich(caption)}</p>}
      <div className="footer">
        <button className="btn" onClick={() => onNext()}>{t('common.continue')}</button>
      </div>
    </div>
  )
}
