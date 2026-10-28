import { solutions } from '../data/content'
import Button from './ui/Button'
import Card from './ui/Card'
import IconBadge from './ui/IconBadge'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

// Recebe o filtro atual e a função de seleção por props (estado fica na página Home).
function Solutions({ filtroSelecionado, selecionarFiltro }) {
  return (
    <Section id="solucao">
      <SectionHead
        eyebrow="A solução"
        title="Conheça o OPT Cam"
        text="O OPT Cam reúne inteligência, praticidade e diversão em uma única experiência de câmera."
      />

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <Card
            as="article"
            key={solution.title}
            className={`viewfinder animate-reveal px-7 py-8 motion-reduce:animate-none hover:shadow-glow ${
              index === 0 ? 'bg-night-700 sm:col-span-2' : ''
            }`}
          >
            <span className="mb-4 block font-display text-[13px] font-bold tracking-[0.08em] text-fg-low">
              {String(index + 1).padStart(2, '0')}
            </span>

            <IconBadge>{index + 1}</IconBadge>

            <h3 className="mb-2.5 text-[18.5px] font-bold">{solution.title}</h3>
            <p className="text-[14.5px] text-fg-low">{solution.text}</p>

            {solution.filter && (
              <Button
                variant="ghost"
                className="mt-[18px]"
                onClick={() => selecionarFiltro(solution.filter)}
              >
                Selecionar filtro
              </Button>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-[18px] border border-brand/25 bg-brand/12 px-[22px] py-5 sm:px-8">
        <h3 className="mb-2 text-lg">Interação do OPT Cam</h3>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-fg-mid">
          <span>
            Filtro selecionado: <strong className="text-fg">{filtroSelecionado}</strong>
          </span>
          {filtroSelecionado !== 'Nenhum' && (
            <button
              type="button"
              onClick={() => selecionarFiltro('Nenhum')}
              className="cursor-pointer text-sm text-brand underline underline-offset-4 hover:text-fg"
            >
              Remover filtro
            </button>
          )}
        </p>
      </div>
    </Section>
  )
}

export default Solutions
