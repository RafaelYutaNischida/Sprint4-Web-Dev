import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import Button from '../components/ui/Button'
import Field from '../components/ui/Field'
import { useAuth } from '../hooks/useAuth'

const MIN_PASSWORD_LENGTH = 6

function Register() {
  const { user, register } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (user) {
    return <Navigate to="/estudio" replace />
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (form.password.length < MIN_PASSWORD_LENGTH) {
      setError(`A senha precisa ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`)
      return
    }

    if (form.password !== form.confirm) {
      setError('As senhas não conferem.')
      return
    }

    setLoading(true)

    try {
      await register({ name: form.name, email: form.email, password: form.password })
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <AuthCard
      title="Criar conta"
      subtitle="Cadastre-se para usar o Estúdio de cores."
      footerText="Já tem conta?"
      footerLink="/login"
      footerLabel="Entrar"
    >
      <form onSubmit={handleSubmit} className="grid gap-[18px]">
        <Field
          id="name"
          label="Nome"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={updateField}
          placeholder="Como podemos te chamar?"
          required
        />
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
          autoComplete="new-password"
          value={form.password}
          onChange={updateField}
          placeholder={`Mínimo de ${MIN_PASSWORD_LENGTH} caracteres`}
          required
        />
        <Field
          id="confirm"
          label="Confirmar senha"
          type="password"
          autoComplete="new-password"
          value={form.confirm}
          onChange={updateField}
          placeholder="Repita a senha"
          required
        />

        {error && (
          <p role="alert" className="text-[13.5px] font-semibold text-red-400">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </form>
    </AuthCard>
  )
}

export default Register
