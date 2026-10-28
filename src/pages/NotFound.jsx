import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center py-28">
      <Container className="text-center">
        <p className="mb-3 font-display text-6xl font-extrabold text-brand">404</p>
        <h1 className="mb-3 font-display text-3xl font-bold">Página não encontrada</h1>
        <p className="mb-8 text-fg-mid">O endereço que você acessou não existe no OPT Cam.</p>
        <Button to="/">Voltar ao início</Button>
      </Container>
    </section>
  )
}

export default NotFound
