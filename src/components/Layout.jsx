import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

// Ao trocar de rota: rola até a âncora (#secao) ou volta ao topo da página.
function useScrollOnNavigation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Espera a página renderizar para encontrar a seção de destino.
      const frame = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

function Layout() {
  useScrollOnNavigation()

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
