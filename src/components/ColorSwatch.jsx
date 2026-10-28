import { useState } from 'react'

// Cartão de uma cor da paleta. Clicar copia o código hexadecimal.
function ColorSwatch({ color }) {
  const [copied, setCopied] = useState(false)

  async function copyHex() {
    try {
      await navigator.clipboard.writeText(color.hex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard indisponível (ex.: página sem HTTPS): o código continua visível na tela.
    }
  }

  return (
    <button
      type="button"
      onClick={copyHex}
      style={{ backgroundColor: color.hex, color: color.textColor }}
      title="Copiar código da cor"
      className="flex min-h-36 cursor-pointer flex-col justify-end gap-0.5 rounded-2xl border border-line-strong p-4 text-left transition hover:-translate-y-1"
    >
      <span className="font-display text-base font-bold">{copied ? 'Copiado!' : color.hex}</span>
      <span className="text-[13px] font-medium opacity-90">{color.name}</span>
      <span className="text-xs opacity-75">{color.rgb}</span>
    </button>
  )
}

export default ColorSwatch
