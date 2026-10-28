import Button from './ui/Button'

function SavedPalettes({ palettes, onRemove }) {
  if (palettes.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-line-strong px-6 py-8 text-center text-[14.5px] text-fg-low">
        Você ainda não salvou nenhuma paleta. Gere uma paleta e clique em “Salvar paleta”.
      </p>
    )
  }

  return (
    <ul className="grid gap-4">
      {palettes.map((palette) => (
        <li
          key={palette.id}
          className="flex flex-col gap-4 rounded-2xl border border-line bg-night-card p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <p className="mb-2.5 text-sm font-semibold text-fg">
              {palette.modeLabel} · base {palette.seed}
            </p>
            <div className="flex overflow-hidden rounded-lg border border-line-strong">
              {palette.colors.map((hex) => (
                <span
                  key={hex}
                  title={hex}
                  style={{ backgroundColor: hex }}
                  className="h-10 w-12 sm:w-14"
                />
              ))}
            </div>
          </div>

          <Button variant="ghost" onClick={() => onRemove(palette.id)} className="px-5 py-2.5 text-sm">
            Remover
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default SavedPalettes
