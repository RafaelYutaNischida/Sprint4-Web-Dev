import { useEffect, useState } from 'react'

function readStoredValue(key, initialValue) {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return initialValue

    try {
      return JSON.parse(raw)
    } catch {
      // Valores gravados como texto puro (formato usado na Sprint 3,
      // ex.: "Filtro divertido") continuam sendo aceitos.
      return typeof initialValue === 'string' ? raw : initialValue
    }
  } catch {
    // LocalStorage indisponível (modo privado, por exemplo)
    return initialValue
  }
}

// Estado do React que se mantém sincronizado com o LocalStorage.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue))

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Sem espaço ou sem acesso: o app segue funcionando sem persistência.
    }
  }, [key, value])

  return [value, setValue]
}
