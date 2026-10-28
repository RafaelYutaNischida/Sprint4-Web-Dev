import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchColorScheme } from '../services/colorApi'

// Hook que cuida do ciclo da requisição (carregando, sucesso, erro).
// A tela só precisa chamar generate() e ler { status, colors, error }.
export function useColorScheme() {
  const [state, setState] = useState({ status: 'idle', colors: [], error: null })
  const controllerRef = useRef(null)

  const generate = useCallback(async ({ hex, mode, count }) => {
    // Se o usuário gerar outra paleta antes da resposta chegar, cancelamos a anterior.
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    setState((previous) => ({ ...previous, status: 'loading', error: null }))

    try {
      const colors = await fetchColorScheme({
        hex,
        mode,
        count,
        signal: controller.signal,
      })
      setState({ status: 'success', colors, error: null })
    } catch (error) {
      if (error.name === 'AbortError') return
      setState({ status: 'error', colors: [], error: error.message })
    }
  }, [])

  // Cancela a requisição pendente ao sair da página.
  useEffect(() => () => controllerRef.current?.abort(), [])

  return { ...state, generate }
}
