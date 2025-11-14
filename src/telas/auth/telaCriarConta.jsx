import { useState } from 'react';
import './CriarConta.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar_1 from '../../components/Navbar_1';
import Api from '../../services/api';
import { useNavigate } from "react-router-dom";


function telaCriarConta() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navegar = useNavigate();

  async function handleCriarConta(e) {
		e.preventDefault();
		try {
			const response = await Api.post("/cadastrarUsuario", {
				nome,
				sobrenome,
				email,
				matricula,
				telefone,
				cpf,
				senha,
				confirmar_senha: confirmarSenha,
        tipo: "usuario",
			});
      
      navegar("/telaPerfil")
			alert(response.data.message);
		} catch (error) {
			alert(error.response?.data?.message || "Erro ao cadastrar!");
      console.log("erro: "+  error.response?.data?.message)
		}
	}

  return (
    <>
  <div className="fundoPrincipal">
    <Navbar_1 />

    <h1 className="titulo3">Criar conta</h1>
    <p className="subtitulo">Ainda não tem uma conta? Crie e tenha acesso a todos os recursos</p>

    <div className="container3">
      <div className="formulario3">

        <div className="campo">
          <p className="tituloInput">Nome</p>
          <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">Sobrenome</p>
          <input 
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">Email</p>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">Matrícula</p>
          <input 
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">Telefone</p>
          <input 
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">CPF</p>
          <input 
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">Senha</p>
          <input 
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="campo">
          <p className="tituloInput">Confirme sua senha</p>
          <input 
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>

        <div className="botoes-container">
          <Link to={'/login'}>
            <Button className="botaoEntrar">Já tem uma conta? Clique aqui</Button>
          </Link>

          <Button 
            className="botaoCriar" 
            onClick={handleCriarConta}
          >
            Criar conta
          </Button>
        </div>

      </div>

      <div className="detalhe3"></div>
    </div>
  </div>
</>

  )
}



export default telaCriarConta;