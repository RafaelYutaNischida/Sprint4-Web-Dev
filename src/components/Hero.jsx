import imagemHero from '../assets/imagem1.jpg'
import Button from './ui/Button'
import Container from './ui/Container'

const titulo = 'OPT Cam — uma câmera mais inteligente para o seu dia a dia'
const subtitulo =
  'Uma experiência de câmera que usa inteligência artificial para melhorar, organizar e personalizar suas fotos.'
const texto =
  'Desenvolvido para jovens e estudantes que vivem pelo smartphone e precisam de mais praticidade em cada clique.'

const stats = [
  { value: '6', label: 'Funcionalidades inteligentes' },
  { value: '1', label: 'Câmera, diversas soluções' },
  { value: '100%', label: 'Pensado para estudantes' },
]

function Hero() {
  return (
    <section id="abertura" className="relative overflow-hidden">
      <Container className="grid items-center gap-11 pb-16 pt-32 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:gap-[60px] lg:py-28">
        <div className="text-center sm:text-left">
          <h1 className="mb-[22px] font-display text-[clamp(38px,5.4vw,62px)] font-extrabold text-fg">
            {titulo}
          </h1>

          <p className="mb-4 max-w-[480px] text-[19px] text-fg-mid max-sm:mx-auto">{subtitulo}</p>

          <p className="mb-[38px] max-w-[460px] text-base text-fg-low max-sm:mx-auto">{texto}</p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <Button href="#solucao">Conheça o OPT Cam</Button>
            <Button href="#problema" variant="ghost">
              Entenda o problema
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-9">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong className="block font-display text-[26px] text-fg">{stat.value}</strong>
                <span className="text-[13px] text-fg-low">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid place-items-center">
          <img
            src={imagemHero}
            alt="Demonstração do OPT Cam"
            className="w-full max-w-[300px] rounded-[28px] sm:max-w-[420px]"
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
