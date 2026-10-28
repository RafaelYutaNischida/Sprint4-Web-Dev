import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import Button from '../components/ui/Button'
import Field from '../components/ui/Field'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const { user, login } = useAuth()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const destination = location.state?.from?.pathname ?? '/estudio'

  if (user) {
    return <Navigate to={destination} replace />
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(form.email, form.password)
      // Ao definir o usuário, o componente redireciona para o destino.
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <AuthCard
      title="Entrar"
      subtitle="Acesse o Estúdio de cores do OPT Cam."
      footerText="Ainda não tem conta?"
      footerLink="/cadastro"
      footerLabel="Criar conta"
    >
      {location.state?.from && (
        <p className="mb-5 rounded-xl border border-brand/25 bg-brand/12 px-4 py-3 text-[13.5px] text-fg-mid">
          Essa página é privada. Entre para continuar.
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-[18px]">
        <Field
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={updateField}
          placeholder="seuemail@exemplo.com"
          required
        />
        <Field
          id="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          value={form.password}
          onChange={updateField}
          placeholder="Sua senha"
          required
        />

        {error && (
          <p role="alert" className="text-[13.5px] font-semibold text-red-400">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>
    </AuthCard>
  )
}

export default Login
