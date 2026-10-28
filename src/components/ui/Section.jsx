import Container from './Container'

// Bloco padrão de seção da página inicial: espaçamento, divisória e container.
function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative border-t border-line py-20 md:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export default Section
