import { galleryItems } from '../data/content'
import Card from './ui/Card'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

function Gallery() {
  return (
    <Section id="galeria">
      <SectionHead
        eyebrow="Galeria"
        title="Veja o OPT Cam em ação"
        text="Conheça as principais telas e experiências desenvolvidas para a solução."
      />

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <Card key={item.title} className="flex flex-col overflow-hidden">
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl border border-line-strong bg-night-800">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="size-full rounded-xl object-cover object-top"
              />
            </div>

            <div className="px-5 pb-[22px] pt-[18px]">
              <strong className="mb-1 block font-display text-[14.5px] font-semibold text-fg">
                {item.title}
              </strong>
              <span className="text-[12.5px] text-fg-low">{item.caption}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Gallery
