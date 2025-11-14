import { Routes, Route, Link } from 'react-router-dom'
import Home from './telas/auth/TelaInicial'
import Login from './telas/auth/TelaLogin'
import CriarConta from './telas/auth/telaCriarConta'
import Perfil from './telaPerfil'
import Analise from './telaAnalise'
import './App.css'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarconta" element={<CriarConta />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/analise" element={<Analise />} />
      </Routes>
  )
}