import { useState } from 'react';
import './TelaLogin.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar_1 from '../../components/Navbar_1';

function TelaLogin() {

  return (
    <>
      <div className="fundoPrincipal2">

        <Navbar_1 profile='none' />
        
        <h1 className="titulo2">Entrar</h1>
        <p className="subtitulo2">Ainda não tem uma conta? Crie e tenha acesso a todos os recursos</p>

        <div className="container2">
            <div className="detalhe2">
        </div>
          <div className="formulario2">
            <div className='campos2'>
            <div className="campo2">
              <p className="tituloInput3">Email</p>
              <input type="text2"></input>
            </div>

            <div className="campo2">
              <p className="tituloInput3">Senha</p>
              <input type="password2"></input>
            </div>
            </div>
            <div className="botoes-container2">
              <Link to={''}><Button className="botaoCriar2">Entrar</Button></Link>
              <Link to={'/criarconta'}><Button href="login" className="botaoEntrar2">Não tem conta? Criar</Button></Link>
            </div>

          </div>

        

      </div>

    </div>
        
    </>
  )
}



export default TelaLogin;
