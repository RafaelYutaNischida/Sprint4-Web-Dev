import { Link } from 'react-router-dom'
import Container from './ui/Container'

// Moldura compartilhada pelas telas de login e cadastro.
function AuthCard({ title, subtitle, footerText, footerLink, footerLabel, children }) {
  return (
    <section className="grid min-h-screen place-items-center py-28">
      <Container className="max-w-[520px]">
        <div className="rounded-[28px] border border-line bg-night-card p-6 shadow-glow sm:p-10">
          <h1 className="mb-2 font-display text-[28px] font-bold">{title}</h1>
          <p className="mb-7 text-[15px] text-fg-mid">{subtitle}</p>

          {children}

          <p className="mt-6 text-center text-sm text-fg-low">
            {footerText}{' '}
            <Link to={footerLink} className="font-semibold text-brand hover:text-fg">
              {footerLabel}
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default AuthCard
