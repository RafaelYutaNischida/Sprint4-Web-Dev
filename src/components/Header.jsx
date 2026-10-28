import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/content'
import { useAuth } from '../hooks/useAuth'
import Brand from './ui/Brand'
import Button from './ui/Button'
import Container from './ui/Container'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const closeMenu = () => setMenuOpen(false)

  function handleLogout() {
    logout()
    closeMenu()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-line bg-night-900/55 py-[18px] backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex items-center justify-between gap-6">
        <Brand onClick={closeMenu} />

        <nav
          aria-label="Navegação principal"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } fixed inset-x-4 top-[72px] max-h-[calc(100vh-88px)] flex-col gap-4 overflow-y-auto rounded-[18px] border border-line-strong bg-night-800/98 p-3.5 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-8 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-1 text-[14.5px] font-medium text-fg-mid lg:flex-row lg:items-center lg:gap-[30px]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={{ pathname: '/', hash: `#${link.id}` }}
                  onClick={closeMenu}
                  className="block rounded-[10px] px-2.5 py-3 transition-colors hover:bg-white/5 hover:text-fg lg:rounded-none lg:px-0 lg:py-1.5 lg:hover:bg-transparent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 border-t border-line pt-3 sm:flex-row sm:items-center lg:border-0 lg:pt-0">
            {user ? (
              <>
                <Button to="/estudio" onClick={closeMenu} className="px-5 py-2.5 text-sm">
                  Estúdio de cores
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="px-5 py-2.5 text-sm"
                >
                  Sair
                </Button>
              </>
            ) : (
              <Button to="/login" onClick={closeMenu} className="px-5 py-2.5 text-sm">
                Entrar
              </Button>
            )}
          </div>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[10px] border border-line-strong bg-white/5 lg:hidden"
        >
          <span
            className={`h-0.5 w-[18px] rounded-sm bg-fg transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-[18px] rounded-sm bg-fg transition ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-[18px] rounded-sm bg-fg transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </Container>
    </header>
  )
}

export default Header
