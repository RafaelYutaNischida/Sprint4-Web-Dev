import { useAuth } from '../hooks/useAuth'
import Button from './ui/Button'
import Section from './ui/Section'
import SectionHead from './ui/SectionHead'

// Chamada na página inicial para o Estúdio de cores (área privada).
function StudioCta() {
  const { user } = useAuth()

  return (
    <Section id="estudio-cores">
      <SectionHead
        eyebrow="Área do usuário"
        title="Estúdio de cores"
        text="Escolha uma cor base e receba paletas harmoniosas para combinar com suas fotos e filtros. O Estúdio usa a The Color API e fica disponível para quem tem conta."
      />

      <div className="flex flex-wrap gap-4">
        {user ? (
          <Button to="/estudio">Abrir o Estúdio</Button>
        ) : (
          <>
            <Button to="/login">Entrar para usar</Button>
            <Button to="/cadastro" variant="ghost">
              Criar conta
            </Button>
          </>
        )}
      </div>
    </Section>
  )
}

export default StudioCta
