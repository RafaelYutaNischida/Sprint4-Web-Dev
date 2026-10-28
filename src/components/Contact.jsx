import { useState } from 'react'
import logoEmail from '../assets/logo_email.png'
import logoInstagram from '../assets/logo_instagram.png'
import Button from './ui/Button'
import Card from './ui/Card'
import Field from './ui/Field'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

const contactItems = [
  { label: 'E-mail', value: 'Optcamfiap@gmail.com', icon: logoEmail },
  { label: 'Instagram', value: '@Optcam', icon: logoInstagram },
]

const emptyForm = { nome: '', email: '', mensagem: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [nomeEnviado, setNomeEnviado] = useState('')

  function atualizarCampo(event) {
    const { name, value } = event.target
    setForm((atual) => ({ ...atual, [name]: value }))
  }

  // Não há back-end: a mensagem é validada e confirmada na tela, mas não é enviada a lugar nenhum.
  function enviarMensagem(event) {
    event.preventDefault()

    if (form.nome.trim() === '') return

    setNomeEnviado(form.nome.trim())
    setForm(emptyForm)
  }

  return (
    <Section id="contato">
      <SectionHead
        eyebrow="Contato"
        title="Fale com a gente"
        text="Quer conhecer mais sobre o OPT Cam? Entre em contato com nossa equipe."
      />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div className="grid content-start gap-4">
          {contactItems.map((item) => (
            <Card key={item.label} className="flex items-center gap-4 px-[22px] py-5 hover:-translate-y-0.5">
              <div className="grid size-[50px] shrink-0 place-items-center rounded-xl bg-slate-100">
                <img src={item.icon} alt={item.label} className="size-[35px] object-contain" />
              </div>
              <div className="min-w-0">
                <h4 className="mb-0.5 text-[13px] font-medium text-fg-low">{item.label}</h4>
                <p className="break-words text-[15.5px] font-semibold text-fg">{item.value}</p>
              </div>
            </Card>
          ))}

          <p className="mt-1.5 rounded-[18px] border border-brand/25 bg-brand/12 px-[22px] py-[18px] text-[13.5px] text-fg-mid">
            Este projeto foi desenvolvido para o Challenge FIAP em parceria com a JOVI Smartphone.
          </p>
        </div>

        <form
          onSubmit={enviarMensagem}
          className="rounded-[28px] border border-line bg-night-card p-6 sm:p-[38px]"
        >
          <div className="grid gap-[18px]">
            <Field
              id="nome"
              label="Nome"
              type="text"
              value={form.nome}
              onChange={atualizarCampo}
              placeholder="Como podemos te chamar?"
              required
            />
            <Field
              id="email"
              label="E-mail"
              type="email"
              value={form.email}
              onChange={atualizarCampo}
              placeholder="seuemail@exemplo.com"
              required
            />
            <Field
              id="mensagem"
              as="textarea"
              label="Mensagem"
              value={form.mensagem}
              onChange={atualizarCampo}
              placeholder="Conte um pouco sobre o que você gostaria de saber."
              required
            />
          </div>

          <Button type="submit" className="mt-[22px] w-full">
            Enviar
          </Button>

          {nomeEnviado && (
            <p role="status" className="mt-4 text-center text-[13.5px] font-semibold text-brand">
              Obrigado, {nomeEnviado}! Mensagem registrada com sucesso.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}

export default Contact
