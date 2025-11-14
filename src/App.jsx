import { Routes, Route } from "react-router-dom";
import RotaProtegida from "./components/RotaProtegida";

import Home from "./telas/auth/TelaInicial";
import Login from "./telas/auth/TelaLogin";
import CriarConta from "./telas/auth/telaCriarConta";
import Perfil from "./telas/usuario/telaPerfil";
import Analise from "./telas/funcionario/telaAnalise";
import "./App.css";

export default function AppRoutes() {
	return (
		<Routes>
			{/* Rotas públicas */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/criarconta" element={<CriarConta />} />

			{/* Rotas protegidas */}
			<Route
				path="/telaPerfil"
				element={
					<RotaProtegida>
						<Perfil />
					</RotaProtegida>
				}
			/>

			<Route
				path="/analise"
				element={
					<RotaProtegida>
						<Analise />
					</RotaProtegida>
				}
			/>
		</Routes>
	);
}
