// Mini-markdown des leçons : **gras**, *italique*, `formule`.
export function rich(text) {
  return text.split(/(\*\*.+?\*\*|\*.+?\*|`.+?`)/g).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>
    if (part.startsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}

// Blocs : paragraphes séparés par une ligne vide, lignes « - » regroupées en liste.
export function Prose({ text }) {
  return text.split(/\n\n+/).map((block, i) => {
    const lines = block.split('\n')
    if (lines.every(l => l.startsWith('- '))) {
      return (
        <ul key={i}>
          {lines.map((l, j) => <li key={j}>{rich(l.slice(2))}</li>)}
        </ul>
      )
    }
    if (lines.length === 1 && /^`[^`]+`$/.test(block)) {
      return <p key={i} className="math">{block.slice(1, -1)}</p>
    }
    return <p key={i}>{lines.map((l, j) => <span key={j}>{j > 0 && <br />}{rich(l)}</span>)}</p>
  })
}
