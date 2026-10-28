// Autenticação SIMULADA, apenas para fins acadêmicos.
// Não existe back-end: usuários e sessão ficam no LocalStorage do navegador.
// Isto NÃO oferece segurança real e não deve ser usado em produção.

const USERS_KEY = 'optcam:users'
const SESSION_KEY = 'optcam:session'

export const DEMO_USER = {
  name: 'Aluno Demo',
  email: 'demo@optcam.com',
  password: 'optcam123',
}

async function hashPassword(password) {
  if (globalThis.crypto?.subtle) {
    const bytes = new TextEncoder().encode(password)
    const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes)
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('')
  }
  // crypto.subtle só existe em HTTPS/localhost. Fora disso, usamos um fallback simples.
  return `b64:${btoa(unescape(encodeURIComponent(password)))}`
}

function readUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY))
    return Array.isArray(users) ? users : []
  } catch {
    return []
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function toSession(user) {
  return { id: user.id, name: user.name, email: user.email }
}

// Garante que a conta de teste exista para o professor conseguir entrar.
async function ensureDemoUser() {
  const users = readUsers()
  if (users.some((user) => user.email === DEMO_USER.email)) return

  users.push({
    id: 'demo',
    name: DEMO_USER.name,
    email: DEMO_USER.email,
    passwordHash: await hashPassword(DEMO_USER.password),
  })
  writeUsers(users)
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY))
  } catch {
    return null
  }
}

export async function login(email, password) {
  await ensureDemoUser()

  const normalizedEmail = email.trim().toLowerCase()
  const passwordHash = await hashPassword(password)
  const user = readUsers().find(
    (item) => item.email === normalizedEmail && item.passwordHash === passwordHash,
  )

  if (!user) {
    throw new Error('E-mail ou senha incorretos.')
  }

  const session = toSession(user)
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}

export async function register({ name, email, password }) {
  await ensureDemoUser()

  const normalizedEmail = email.trim().toLowerCase()
  const users = readUsers()

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Já existe uma conta com este e-mail.')
  }

  const user = {
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: await hashPassword(password),
  }

  writeUsers([...users, user])

  const session = toSession(user)
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}

export function logout() {
  localStorage.removeItem(SESSION_KEY)
}
