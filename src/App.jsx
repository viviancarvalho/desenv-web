import { Routes, Route, Link } from 'react-router-dom'
import Home from './TelaInicial'
import Login from './TelaLogin'
import CriarConta from './TelaCriarConta'
import Perfil from './telaPerfil'
import Analise from './TelaAnalise'
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