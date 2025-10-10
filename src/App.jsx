import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./TelaPerfil.css";
import TelaPerfil from "./TelaPerfil";
import './telaAnalise.css';
import TelaAnalise from "./telaAnalise";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<TelaAnalise />} />
				<Route path="/perfil" element={<TelaPerfil></TelaPerfil>} />
			</Routes>

		</>
	);
}

export default App;
