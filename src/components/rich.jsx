// Transforme « du **texte** » en texte avec <strong>.
export function rich(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

export function plain(text) {
  return text.replace(/\*\*/g, '')
}
