import { useState } from "react";
import "./TelaLogin.css";
import Button from "react-bootstrap/Button";
import Navbar_1 from "../../components/Navbar_1";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase"; // IMPORT CORRETO ✔

import { Link, useNavigate } from "react-router-dom";

function TelaLogin() {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	async function handleLogin(e) {
		e.preventDefault();
		setErrorMessage("");

		if (!email || !senha) {
			setErrorMessage("Preencha email e senha.");
			return;
		}

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				senha
			);
			console.log("Usuário logado:", userCredential.user);

      navigate("/telaPerfil")
        
      
		} catch (error) {
			console.error(error);

			if (
				error.code === "auth/invalid-credential" ||
				error.code === "auth/wrong-password"
			) {
				setErrorMessage("Email ou senha incorretos.");
			} else if (error.code === "auth/user-not-found") {
				setErrorMessage("Usuário não encontrado.");
			} else {
				setErrorMessage("Erro ao efetuar login.");
			}
		}
	}

	return (
		<>
			<div className="fundoPrincipal2">
				<Navbar_1 />

				<h1 className="titulo2">Entrar</h1>
				<p className="subtitulo2">
					Ainda não tem uma conta? Crie e tenha acesso a todos os recursos
				</p>

				<div className="container2">
					<div className="detalhe2"></div>

					<div className="formulario2">
						<form onSubmit={handleLogin}>
							<div className="campos2">
								<div className="campo2">
									<p className="tituloInput2">Email</p>
									<input
										type="text"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="campo2">
									<p className="tituloInput2">Senha</p>
									<input
										type="password"
										value={senha}
										onChange={(e) => setSenha(e.target.value)}
									/>
								</div>
							</div>

							{errorMessage && (
								<p style={{ color: "red", marginTop: "10px" }}>
									{errorMessage}
								</p>
							)}

							<div className="botoes-container2">
								<Button type="submit" className="botaoCriar2">
									Entrar
								</Button>

								<Link to={"/criarconta"}>
									<Button className="botaoEntrar2">Não tem conta? Criar</Button>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default TelaLogin;
