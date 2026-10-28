import gustavo from '../assets/gustavo.jpeg'
import leo from '../assets/leo.jpeg'
import joao from '../assets/joao.jpeg'
import rafael from '../assets/rafael.png'
import mockup1 from '../assets/mockup1.png'
import mockup2 from '../assets/mockup2.png'
import mockup3 from '../assets/mockup3.png'
import mockup4 from '../assets/mockup4.png'
import mockup5 from '../assets/mockup5.png'

export const navLinks = [
  { id: 'abertura', label: 'Início' },
  { id: 'problema', label: 'Problema' },
  { id: 'solucao', label: 'Solução' },
  { id: 'publico-alvo', label: 'Público-Alvo' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'equipe', label: 'Nossa Equipe' },
  { id: 'contato', label: 'Contato' },
]

export const problems = [
  {
    title: 'Iluminação e nitidez',
    text: 'Fotos com pouca nitidez ou iluminação ruim, difíceis de corrigir manualmente.',
  },
  {
    title: 'Textos presos na imagem',
    text: 'Textos fotografados difíceis de reutilizar, exigindo digitação manual.',
  },
  {
    title: 'Estudos desorganizados',
    text: 'Fotos de estudos desorganizadas, misturadas com o restante da galeria.',
  },
  {
    title: 'Sombras e imperfeições',
    text: 'Sombras, sujeiras e imperfeições que prejudicam a qualidade das imagens.',
  },
  {
    title: 'Falta de personalização',
    text: 'Poucas opções de personalização para deixar as fotos com a cara do usuário.',
  },
  {
    title: 'Depender de outros apps',
    text: 'Necessidade de baixar outros aplicativos para usar filtros e efeitos.',
  },
]

export const solutions = [
  {
    title: 'Captura Inteligente',
    text: 'IA melhora automaticamente a iluminação, nitidez e legibilidade das imagens.',
  },
  {
    title: 'Foto para Texto',
    text: 'Transforma textos presentes nas imagens em texto editável.',
  },
  {
    title: 'Organização Inteligente',
    text: 'Organiza automaticamente as fotos por matéria e data.',
  },
  {
    title: 'Filtros e Personalização',
    text: 'Permite ajustar e personalizar as fotos de acordo com o estilo do usuário.',
  },
  {
    title: 'Limpeza Automática',
    text: 'Remove sombras, sujeiras e outras imperfeições das imagens.',
  },
  {
    title: 'Filtros Divertidos',
    text: 'Oferece filtros diretamente na câmera para tornar a experiência mais divertida.',
    filter: 'Filtro divertido',
  },
]

export const audience = [
  {
    title: 'Estudantes',
    text: 'Para fotografar conteúdos, transformar textos e organizar materiais.',
  },
  {
    title: 'Jovens',
    text: 'Para registrar momentos, editar fotos e se divertir com filtros.',
  },
  {
    title: 'Criadores de Conteúdo',
    text: 'Para personalizar imagens de forma rápida e prática.',
  },
]

export const galleryItems = [
  { image: mockup5, title: 'Captura Inteligente', caption: 'IA detecta rosto, luz e texto em tempo real' },
  { image: mockup4, title: 'Foto para Texto', caption: 'Extração de texto direto da imagem via OCR' },
  { image: mockup2, title: 'Organização Inteligente', caption: 'Fotos separadas por álbum e assunto' },
  { image: mockup1, title: 'Aba Inicial', caption: 'Acesso rápido a câmera, filtros e favoritos' },
  { image: mockup3, title: 'Galeria', caption: 'Galeria de favoritos com efeitos e cores' },
]

export const teamMembers = [
  {
    name: 'Gustavo Almeida',
    role: 'Desenvolvimento Back-end',
    text: 'Responsável pela estrutura e funcionamento dos recursos do sistema no lado do servidor.',
    photo: gustavo,
  },
  {
    name: 'Leonardo Teodoro',
    role: 'Design e Experiência do Usuário',
    text: 'Responsável pela identidade visual e pela experiência de uso da solução.',
    photo: leo,
  },
  {
    name: 'João Gabriel',
    role: 'Documentação e Revisão',
    text: 'Responsável pela organização, revisão e documentação do projeto.',
    photo: joao,
  },
  {
    name: 'Rafael Nischida',
    role: 'Desenvolvimento Front-end',
    text: 'Responsável pela construção da interface e implementação visual da solução.',
    photo: rafael,
  },
]
