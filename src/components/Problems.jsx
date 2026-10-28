import { problems } from '../data/content'
import Card from './ui/Card'
import IconBadge from './ui/IconBadge'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

function Problems() {
  return (
    <Section id="problema">
      <SectionHead
        eyebrow="O desafio"
        title="A câmera pode fazer mais."
        text="Jovens usam a câmera todos os dias, mas ainda enfrentam dificuldades para conseguir boas fotos, organizar conteúdos e realizar tarefas que acabam exigindo outros aplicativos."
      />

      <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <Card
            as="article"
            key={problem.title}
            className="animate-reveal px-[26px] py-[30px] motion-reduce:animate-none hover:bg-night-700"
          >
            <IconBadge>{index + 1}</IconBadge>
            <h3 className="mb-2.5 text-[17px] font-semibold">{problem.title}</h3>
            <p className="text-[14.5px] text-fg-low">{problem.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Problems
