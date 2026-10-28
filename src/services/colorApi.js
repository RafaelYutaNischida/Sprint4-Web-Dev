// Integração com The Color API (https://www.thecolorapi.com)
// API pública, gratuita e sem chave de acesso.
// Por padrão a chamada vai para /api/colorapi, encaminhada para a API real pelo
// proxy do Vite (dev/preview) ou pelo rewrite do vercel.json (produção).
// VITE_COLOR_API_URL permite apontar direto para outra base, se necessário.
const BASE_URL = import.meta.env.VITE_COLOR_API_URL ?? '/api/colorapi'

export const SCHEME_MODES = [
  { value: 'analogic', label: 'Análoga' },
  { value: 'complement', label: 'Complementar' },
  { value: 'analogic-complement', label: 'Análoga + complementar' },
  { value: 'triad', label: 'Tríade' },
  { value: 'quad', label: 'Quadrante' },
  { value: 'monochrome', label: 'Monocromática' },
  { value: 'monochrome-dark', label: 'Monocromática escura' },
  { value: 'monochrome-light', label: 'Monocromática clara' },
]

export const HEX_PATTERN = /^#[0-9a-f]{6}$/i

function normalizeColor(color) {
  return {
    hex: color.hex.value,
    name: color.name.value,
    rgb: color.rgb.value,
    // A própria API informa se o texto sobre a cor deve ser preto ou branco.
    textColor: color.contrast?.value ?? '#000000',
  }
}

export async function fetchColorScheme({ hex, mode, count = 5, signal }) {
  const params = new URLSearchParams({
    hex: hex.replace('#', ''),
    mode,
    count: String(count),
    format: 'json',
  })

  let response
  try {
    response = await fetch(`${BASE_URL}/scheme?${params}`, { signal })
  } catch (error) {
    if (error.name === 'AbortError') throw error
    throw new Error(
      'Não foi possível conectar à The Color API. Verifique sua internet e tente novamente.',
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new Error(
      `A The Color API respondeu com erro (${response.status}). Tente outra cor ou aguarde alguns instantes.`,
    )
  }

  const data = await response.json()
  return (data.colors ?? []).map(normalizeColor)
}
