import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './auth-context'
import * as authService from '../services/authService'

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getSession())

  const login = useCallback(async (email, password) => {
    setUser(await authService.login(email, password))
  }, [])

  const register = useCallback(async (data) => {
    setUser(await authService.register(data))
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, login, register, logout }),
    [user, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
