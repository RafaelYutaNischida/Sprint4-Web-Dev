import { useState } from 'react'
import ColorSwatch from '../components/ColorSwatch'
import SavedPalettes from '../components/SavedPalettes'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { useAuth } from '../hooks/useAuth'
import { useColorScheme } from '../hooks/useColorScheme'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { HEX_PATTERN, SCHEME_MODES } from '../services/colorApi'

const COLOR_COUNTS = [3, 4, 5, 6, 7, 8]

function Studio() {
  const { user } = useAuth()
  const { status, colors, error, generate } = useColorScheme()

  const [filtroSelecionado] = useLocalStorage('filtroSelecionado', 'Nenhum')
  const [savedPalettes, setSavedPalettes] = useLocalStorage(`optcam:paletas:${user.id}`, [])

  const [hex, setHex] = useState('#7b5cf0')
  const [mode, setMode] = useState('analogic')
  const [count, setCount] = useState(5)
  const [formError, setFormError] = useState('')
  // Guarda os parâmetros usados na última busca, para salvar a paleta corretamente.
  const [lastRequest, setLastRequest] = useState(null)

  const isLoading = status === 'loading'

  function handleSubmit(event) {
    event.preventDefault()

    if (!HEX_PATTERN.test(hex)) {
      setFormError('Informe a cor no formato #RRGGBB, por exemplo #7b5cf0.')
      return
    }

    setFormError('')
    setLastRequest({ hex, mode })
    generate({ hex, mode, count })
  }

  function savePalette() {
    const modeLabel = SCHEME_MODES.find((item) => item.value === lastRequest.mode)?.label ?? lastRequest.mode

    setSavedPalettes((current) => [
      {
        id: String(Date.now()),
        seed: lastRequest.hex.toUpperCase(),
        modeLabel,
        colors: colors.map((color) => color.hex),
      },
      ...current,
    ])
  }

  function removePalette(id) {
    setSavedPalettes((current) => current.filter((palette) => palette.id !== id))
  }

  return (
    <section className="pb-24 pt-32">
      <Container>
        <div className="mb-10 max-w-160">
          <h1 className="mb-3 font-display text-[clamp(28px,3.4vw,40px)] font-bold">
            Estúdio de cores
          </h1>
          <p className="text-[17px] text-fg-mid">
            Olá, {user.name}! Escolha uma cor base e o modo de harmonia: a paleta é gerada pela The
            Color API.
          </p>
          <p className="mt-3 text-sm text-fg-low">
            Filtro selecionado na câmera: <strong className="text-fg">{filtroSelecionado}</strong>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-[28px] border border-line bg-night-card p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[auto_1fr_1fr_auto] lg:items-end"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="hex" className="text-[13px] font-semibold text-fg-mid">
              Cor base
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                aria-label="Selecionar cor"
                value={HEX_PATTERN.test(hex) ? hex : '#7b5cf0'}
                onChange={(event) => setHex(event.target.value)}
                className="h-[46px] w-14 cursor-pointer rounded-xl border border-line-strong bg-night-800 p-1"
              />
              <input
                id="hex"
                type="text"
                value={hex}
                onChange={(event) => setHex(event.target.value)}
                maxLength={7}
                spellCheck={false}
                className="w-28 rounded-xl border border-line-strong bg-night-800 px-4 py-3 font-mono text-[14.5px] text-fg outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/20"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mode" className="text-[13px] font-semibold text-fg-mid">
              Modo de harmonia
            </label>
            <select
              id="mode"
              value={mode}
              onChange={(event) => setMode(event.target.value)}
              className="rounded-xl border border-line-strong bg-night-800 px-4 py-3 text-[14.5px] text-fg outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/20"
            >
              {SCHEME_MODES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="count" className="text-[13px] font-semibold text-fg-mid">
              Quantidade de cores
            </label>
            <select
              id="count"
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
              className="rounded-xl border border-line-strong bg-night-800 px-4 py-3 text-[14.5px] text-fg outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/20"
            >
              {COLOR_COUNTS.map((amount) => (
                <option key={amount} value={amount}>
                  {amount} cores
                </option>
              ))}
            </select>
          </div>

          <Button type="submit" disabled={isLoading} className="sm:col-span-2 lg:col-span-1">
            {isLoading ? 'Gerando...' : 'Gerar paleta'}
          </Button>

          {formError && (
            <p role="alert" className="text-[13.5px] font-semibold text-red-400 sm:col-span-2 lg:col-span-4">
              {formError}
            </p>
          )}
        </form>

        <div className="mt-10" aria-live="polite">
          {status === 'idle' && (
            <p className="rounded-2xl border border-dashed border-line-strong px-6 py-10 text-center text-[14.5px] text-fg-low">
              Nenhuma paleta gerada ainda. Escolha uma cor e clique em “Gerar paleta”.
            </p>
          )}

          {isLoading && (
            <div
              role="status"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            >
              <span className="sr-only">Carregando paleta...</span>
              {Array.from({ length: count }, (_, index) => (
                <div key={index} className="min-h-36 animate-pulse rounded-2xl bg-night-700" />
              ))}
            </div>
          )}

          {status === 'error' && (
            <div
              role="alert"
              className="rounded-2xl border border-red-400/30 bg-red-400/10 px-6 py-5"
            >
              <p className="mb-3 text-[14.5px] font-semibold text-red-300">{error}</p>
              <Button
                variant="ghost"
                onClick={() => generate({ hex: lastRequest.hex, mode: lastRequest.mode, count })}
                className="px-5 py-2.5 text-sm"
              >
                Tentar novamente
              </Button>
            </div>
          )}

          {status === 'success' && colors.length === 0 && (
            <p className="rounded-2xl border border-dashed border-line-strong px-6 py-10 text-center text-[14.5px] text-fg-low">
              A API não retornou cores para essa combinação. Tente outra cor ou outro modo.
            </p>
          )}

          {status === 'success' && colors.length > 0 && (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {colors.map((color) => (
                  <ColorSwatch key={color.hex} color={color} />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button onClick={savePalette}>Salvar paleta</Button>
                <span className="text-sm text-fg-low">Clique em uma cor para copiar o código.</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-16">
          <h2 className="mb-5 text-2xl font-bold">Minhas paletas</h2>
          <SavedPalettes palettes={savedPalettes} onRemove={removePalette} />
        </div>
      </Container>
    </section>
  )
}

export default Studio
