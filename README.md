# OPT Cam — JOVI Smartphone

Projeto da **Sprint 4 — Web Development** (FIAP 2026), entregue em conjunto com Front-End Design.
É a evolução direta do projeto da Sprint 3: a mesma proposta, o mesmo conteúdo e a mesma identidade visual, agora com React Router, Tailwind CSS, autenticação, rota privada e integração com uma API pública.

## Objetivo do OPT Cam

O OPT Cam é uma proposta de câmera inteligente para smartphones JOVI. Ela usa inteligência artificial para melhorar, organizar e personalizar fotografias, com foco em jovens e estudantes. O site apresenta o problema, a solução, o público-alvo, os mockups e a equipe, e inclui o **Estúdio de cores**, uma área logada que gera paletas de cores por meio de uma API.

## Tecnologias utilizadas

| Tecnologia | Versão |
| --- | --- |
| React | 19.2.8 |
| React Router (`react-router-dom`) | 7.18.5 |
| Tailwind CSS (com `@tailwindcss/vite`) | 4.3.3 |
| Vite | 8.2.2 |
| ESLint | 10.9 |
| JavaScript (ES Modules) | — |
| LocalStorage | — |
| The Color API (API pública de terceiros) | — |
| Git, GitHub e Vercel | — |

## Pré-requisitos

- Node.js **20.19 ou superior** (exigência do Vite 8). O projeto foi testado com Node 22 e npm 10.
- npm (instalado junto com o Node.js).
- Conexão com a internet (fontes do Google e The Color API).

## Como instalar as dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

**Back-end:** não existe back-end. A autenticação é simulada no navegador (veja abaixo) e as chamadas à API passam por um proxy configurado no próprio Vite, então não há servidor extra para iniciar.

## Integração com a API

- **API:** [The Color API](https://www.thecolorapi.com), pública e gratuita, **sem chave de acesso**.
- **Endpoint usado:** `GET /scheme?hex=...&mode=...&count=...&format=json`.
- **Onde usar:** rota privada `/estudio`. O usuário escolhe uma cor base, o modo de harmonia (análoga, complementar, tríade etc.) e a quantidade de cores. A interface exibe cada cor retornada com nome, código HEX e RGB. Clicar na cor copia o código.
- **Estados tratados:** carregamento (botão desabilitado e placeholders), erro de rede, erro HTTP (com botão "Tentar novamente"), resultado vazio, cor digitada inválida e cancelamento de requisição anterior.
- **Código:** a requisição fica em `src/services/colorApi.js`, o ciclo de carregamento/erro em `src/hooks/useColorScheme.js` e a tela em `src/pages/Studio.jsx`.
- **Proxy:** o navegador chama `/api/colorapi/...`, e esse caminho é encaminhado para `https://www.thecolorapi.com`. Em desenvolvimento e no `npm run preview` isso é feito pelo proxy do `vite.config.js`. Na Vercel, pelo `rewrite` do `vercel.json`. Isso evita depender das regras de CORS da API.
- **Configuração:** nenhuma é necessária. Opcionalmente, `VITE_COLOR_API_URL` (veja `.env.example`) permite trocar a base da URL. Nenhuma credencial é usada nem está incluída no projeto.
- Além disso, as paletas salvas pelo usuário ficam no LocalStorage, separadas por conta.

## Autenticação

A autenticação é **simulada e apenas acadêmica**: não há servidor. As contas e a sessão ficam no LocalStorage do navegador, e as senhas são guardadas como hash SHA-256. Isso **não oferece segurança real** e não deve ser usado em produção.

- **Criar conta:** `/cadastro`.
- **Entrar:** `/login`.
- **Sair:** botão "Sair" no cabeçalho.
- Quem tenta abrir uma rota privada sem estar logado é enviado para `/login` e, depois de entrar, volta para a página que tentou acessar.

## Credenciais de teste

| Campo | Valor |
| --- | --- |
| E-mail | `demo@optcam.com` |
| Senha | `optcam123` |

A conta de teste é criada automaticamente no LocalStorage na primeira tentativa de login ou cadastro. Também é possível criar uma conta nova em `/cadastro`.

## Rotas

| Rota | Tipo | Descrição |
| --- | --- | --- |
| `/` | Pública | Página principal: apresentação, problema, solução (com seleção de filtro), público-alvo, galeria, Estúdio de cores, equipe e contato. |
| `/login` | Pública | Entrada de usuários. |
| `/cadastro` | Pública | Criação de conta. |
| `/estudio` | **Privada** | Estúdio de cores (integração com a API) e paletas salvas do usuário. |
| `*` | Pública | Página 404. |

## Principais funcionalidades

- Apresentação do OPT Cam, dos problemas e das seis soluções.
- Seleção de filtro ("Filtros Divertidos") com persistência no LocalStorage. Valores salvos na Sprint 3 continuam sendo lidos.
- Público-alvo, galeria de mockups e informações da equipe.
- Formulário de contato com validação. **Não há back-end:** a mensagem é confirmada na tela, mas não é enviada a lugar nenhum.
- Cadastro, login, logout e rota privada.
- Estúdio de cores com consumo de API, estados de carregamento e erro, cópia de código e paletas salvas.
- Interface responsiva (desktop, tablet e celular) com menu em formato de hambúrguer.

## Estrutura do projeto

```
src/
  components/   Seções da página inicial, Header, Footer, Layout, PrivateRoute
    ui/         Componentes reutilizáveis (Button, Card, Field, Section...)
  context/      Contexto de autenticação
  data/         Conteúdo textual e imagens das seções
  hooks/        useAuth, useLocalStorage, useColorScheme
  pages/        Home, Login, Register, Studio, NotFound
  services/     colorApi (requisição) e authService (login simulado)
  assets/       Imagens, mockups, fotos da equipe e logotipos
```

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build localmente (inclui o proxy da API)
npm run lint       # verificação de código
```

## Publicar na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Na Vercel, clique em **Add New… → Project** e importe o repositório.
3. A Vercel detecta o Vite sozinha (Build Command `npm run build`, Output Directory `dist`). Não é preciso configurar variáveis de ambiente.
4. Clique em **Deploy**.

O arquivo `vercel.json` já faz duas coisas: encaminha `/api/colorapi/*` para a The Color API e redireciona qualquer rota para o `index.html`, o que evita erro 404 ao atualizar `/login` ou `/estudio`.

## Links

- **Repositório Git:** https://github.com/Gustavo-Nascimentoo/Sprint3-Web-Dev *(link do repositório da Sprint 3, de onde este projeto evoluiu; confirme se é o mesmo usado na entrega)*
- **Deploy na Vercel:** [INSERIR LINK DA VERCEL]

## Uso de IA no desenvolvimento

Na Sprint 3, a IA foi usada apenas como apoio para organizar o projeto, já que a equipe estava começando a aprender React. Na Sprint 4, usamos o assistente de IA Claude (Anthropic) para analisar o código da Sprint 3 e propor e implementar a evolução: migração do CSS para Tailwind, divisão das seções em componentes reutilizáveis, configuração do React Router, rotas pública e privada, autenticação simulada, integração com a The Color API, configuração para a Vercel e escrita deste README. A IA também executou o build, o lint e testes automatizados no navegador (rotas, login, estados da API, filtros e responsividade). A equipe é responsável por revisar, entender e apresentar o resultado.

## Equipe

Nomes conforme a seção "Nossa Equipe" do site. Nomes completos e RMs estão no arquivo `INTEGRANTES.TXT`.

- Gustavo Almeida — Desenvolvimento Back-end
- Leonardo Teodoro — Design e Experiência do Usuário
- João Gabriel — Documentação e Revisão
- Rafael Nischida — Desenvolvimento Front-end

---

OPT Cam — JOVI Smartphone · Sprint 4 — Web Development · FIAP 2026
