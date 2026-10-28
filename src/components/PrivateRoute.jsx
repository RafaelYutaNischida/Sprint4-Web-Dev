import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// Protege as rotas filhas: visitantes sem login são enviados para /login
// e, depois de entrar, voltam para a página que tentaram acessar.
function PrivateRoute() {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}

export default PrivateRoute
