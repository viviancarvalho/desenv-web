import { Navbar, Container } from 'react-bootstrap';

function CabecalhoBasico() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='justify-content-center'>
          <Navbar.Brand className='Titulo' href="/">Auto<span>matize</span></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default CabecalhoBasico;
