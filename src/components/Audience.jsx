import { audience } from '../data/content'
import Card from './ui/Card'
import IconBadge from './ui/IconBadge'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

function Audience() {
  return (
    <Section id="publico-alvo">
      <SectionHead eyebrow="Para quem é" title="Feito para quem vive pelo smartphone." center />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {audience.map((item, index) => (
          <Card
            as="article"
            key={item.title}
            className="animate-reveal px-7 py-[42px] text-center motion-reduce:animate-none sm:max-lg:last:col-span-2"
          >
            <IconBadge className="mx-auto mb-5">{index + 1}</IconBadge>
            <h3 className="mb-2.5 text-[17px]">{item.title}</h3>
            <p className="text-[14.5px] text-fg-low">{item.text}</p>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center font-display text-xl font-semibold text-fg">
        "Uma câmera que acompanha diferentes momentos da rotina."
      </p>
    </Section>
  )
}

export default Audience
