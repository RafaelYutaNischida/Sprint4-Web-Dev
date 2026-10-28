import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// As chamadas à The Color API passam por /api/colorapi (mesmo domínio do site).
// Assim o navegador não depende das regras de CORS da API.
// Em produção, quem faz esse encaminhamento é o rewrite do vercel.json.
const colorApiProxy = {
  '/api/colorapi': {
    target: 'https://www.thecolorapi.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\/colorapi/, ''),
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { proxy: colorApiProxy },
  preview: { proxy: colorApiProxy },
})
