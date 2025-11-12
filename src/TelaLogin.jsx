import { useState } from 'react';
import './TelaLogin.css';
import Button from 'react-bootstrap/Button';
import Navbar_1 from '../src/components/Navbar_1';

function TelaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

    //impede o carregamento, sem ela, a pagina recarregaria
  const handleRegister = async (e) => {
      e.preventDefault();
        //await -> faz a funcao esperar ate o firebase confirmar a criacao do usuario
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      } catch (error){
          setErro(error.message);
        }      
    };

  return (
    <>
      <div className="fundoPrincipal2">

        <Navbar_1/>
        
        <h1 className="titulo2">Entrar</h1>
        <p className="subtitulo2">Ainda não tem uma conta? Crie e tenha acesso a todos os recursos</p>

        <div className="container2">
            <div className="detalhe2">
        </div>
          <div className="formulario2">
            <div className='campos2'>
            <div className="campo2">
              <p className="tituloInput2" value={email} onChange={(e) => setEmail(e.target.value)} required>Email</p>
              <input type="text2" ></input>
            </div>

            <div className="campo2">
              <p className="tituloInput2">Senha</p>
              <input type="password2" value={senha} onChange={(e) => setSenha(e.target.value)} required></input>
            </div>
            </div>
            <div className="botoes-container2">
              <Button className="botaoCriar2">Entrar</Button>
              <Button href="login" className="botaoEntrar2">Já tem uma conta? Clique aqui</Button>
            </div>

          </div>

      </div>

    </div>
        
    </>
  )
}



export default TelaLogin;
