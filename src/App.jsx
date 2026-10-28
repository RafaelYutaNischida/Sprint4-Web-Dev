import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Studio from './pages/Studio'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        {/* Rotas privadas: exigem login */}
        <Route element={<PrivateRoute />}>
          <Route path="/estudio" element={<Studio />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
