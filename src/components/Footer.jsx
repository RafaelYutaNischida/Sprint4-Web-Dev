import { Link } from 'react-router-dom'
import Brand from './ui/Brand'
import Container from './ui/Container'

const columns = [
  {
    title: 'Navegação',
    links: [
      { to: '/#abertura', label: 'Início' },
      { to: '/#problema', label: 'Problema' },
      { to: '/#solucao', label: 'Solução' },
      { to: '/#publico-alvo', label: 'Público-Alvo' },
    ],
  },
  {
    title: 'Projeto',
    links: [
      { to: '/#galeria', label: 'Galeria' },
      { to: '/#equipe', label: 'Nossa Equipe' },
      { to: '/#contato', label: 'Contato' },
      { to: '/estudio', label: 'Estúdio de cores' },
    ],
  },
]

const bottomLinks = [
  { to: '/#abertura', label: 'Início' },
  { to: '/#problema', label: 'Problema' },
  { to: '/#solucao', label: 'Solução' },
  { to: '/#contato', label: 'Contato' },
]

function Footer() {
  return (
    <footer className="border-t border-line bg-night-800 pt-20">
      <Container className="grid gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex justify-center sm:justify-start">
            <Brand>OPT Cam — JOVI Smartphone</Brand>
          </div>
          <p className="mx-auto mt-3.5 max-w-[300px] text-sm text-fg-low sm:mx-0">
            Uma câmera mais inteligente, prática e divertida.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-[18px] text-sm text-fg">{column.title}</h4>
            <ul className="grid gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-fg-low transition-colors hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container>
        <hr className="mt-[60px] border-0 border-t border-line" />

        <div className="flex flex-col items-center justify-between gap-4 pb-8 pt-6 text-[13px] text-fg-low sm:flex-row">
          <span>© 2026 OPT Cam — FIAP</span>

          <div className="flex flex-wrap justify-center gap-[22px]">
            {bottomLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-fg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
