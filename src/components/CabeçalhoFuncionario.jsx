import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import '../telaAnalise.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function CabeçalhoFuncionario() {
  return (
    <>
        <Navbar bg="transparent" expand={false} className="px-5 shadow-sm">
          <Container fluid className="d-flex justify-content-between align-items-center">

            <div className="logo">
              <span id="auto">Auto</span>
              <span id="matize">matize</span>
            </div>

            <div className="menu-direito d-flex align-items-center">
              <Nav.Link href="#inicio" className="nav-link-custom">Início</Nav.Link>
              <Nav.Link href="#estagios" className="nav-link-custom">Estágios</Nav.Link>
              <Nav.Link href="#perfil" className="nav-link-custom">
                <i className="bi bi-person-circle perfil-icone"></i>
              </Nav.Link>
            </div>

          </Container>
        </Navbar>
    </>
  );
}

export default CabeçalhoFuncionario;