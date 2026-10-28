import { teamMembers } from '../data/content'
import Card from './ui/Card'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

function Team() {
  return (
    <Section id="equipe">
      <SectionHead title="Quem está por trás do OPT Cam" center />

      <div className="grid gap-[26px] md:grid-cols-2">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="flex animate-reveal flex-col items-center gap-5 p-[26px] text-center motion-reduce:animate-none sm:flex-row sm:text-left"
          >
            <div className="size-[92px] shrink-0 overflow-hidden rounded-full border-[1.5px] border-dashed border-line-strong bg-brand/12 p-1.5">
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                className="size-full rounded-full object-cover"
              />
            </div>

            <div>
              <h3 className="mb-[3px] text-[16.5px] font-bold">{member.name}</h3>
              <span className="mb-2 inline-block text-xs font-semibold text-brand">
                {member.role}
              </span>
              <p className="text-[13.5px] text-fg-low">{member.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Team
