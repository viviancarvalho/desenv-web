import { useState } from 'react';
import './CriarConta.css';
import Button from 'react-bootstrap/Button';
import CabeçalhoBásico from '../src/components/CabeçalhoBásico';

function telaCriarConta() {

  return (
    <>
      <div className="fundoPrincipal">

        <CabeçalhoBásico />
        
        <h1 className="titulo">Criar conta</h1>
        <p className="subtitulo">Ainda não tem uma conta? Crie e tenha acesso a todos os recursos</p>

        <div className="container">
          <div className="formulario">

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
              <Button href="login" className="botaoEntrar">Já tem uma conta? Clique aqui</Button>
              <Button className="botaoCriar">Criar conta</Button>
            </div>

          </div>

        <div className="detalhe">
        </div>

      </div>

    </div>
        
    </>
  )
}



export default telaCriarConta;
