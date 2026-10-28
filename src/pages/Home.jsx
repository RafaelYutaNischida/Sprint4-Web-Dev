import Audience from '../components/Audience'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import StudioCta from '../components/StudioCta'
import Team from '../components/Team'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Home() {
  // O filtro escolhido continua salvo no LocalStorage, como na Sprint 3.
  const [filtroSelecionado, setFiltroSelecionado] = useLocalStorage('filtroSelecionado', 'Nenhum')

  return (
    <>
      <Hero />
      <Problems />
      <Solutions filtroSelecionado={filtroSelecionado} selecionarFiltro={setFiltroSelecionado} />
      <Audience />
      <Gallery />
      <StudioCta />
      <Team />
      <Contact />
    </>
  )
}

export default Home
