import { useState } from 'react';
import './TelaLogin.css';
import Button from 'react-bootstrap/Button';
import Navbar_1 from '../src/components/Navbar_1';

function TelaLogin() {

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
              <p className="tituloInput2">Email</p>
              <input type="text2"></input>
            </div>

            <div className="campo2">
              <p className="tituloInput2">Senha</p>
              <input type="password2"></input>
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
