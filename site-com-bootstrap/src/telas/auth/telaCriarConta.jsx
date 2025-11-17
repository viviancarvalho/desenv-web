import { useState } from 'react';
import './CriarConta.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar_1 from '../../components/Navbar_1';

function telaCriarConta() {

  return (
    <>
      <div className="fundoPrincipal">

        <Navbar_1 profile='none' />
        
        <h1 className="titulo3">Criar conta</h1>
        <p className="subtitulo">Ainda não tem uma conta? Crie e tenha acesso a todos os recursos</p>

        <div className="container3">
          <div className="formulario3">

            <div className="campo">
              <p className="tituloInput">Nome</p>
              <input type="text"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">Sobrenome</p>
              <input type="text"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">Email</p>
              <input type="text"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">Matrícula</p>
              <input type="text"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">Telefone</p>
              <input type="text"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">CPF</p>
              <input type="text"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">Senha</p>
              <input type="password"></input>
            </div>

            <div className="campo">
              <p className="tituloInput">Confirme sua senha</p>
              <input type="password"></input>
            </div>

            <div className="botoes-container">
              <Link to={'/login'}><Button href="login" className="botaoEntrar">Já tem uma conta? Clique aqui</Button></Link>
              <Link to={''}><Button className="botaoCriar">Criar conta</Button></Link>
            </div>

          </div>

        <div className="detalhe3">
        </div>

      </div>

    </div>
        
    </>
  )
}



export default telaCriarConta;