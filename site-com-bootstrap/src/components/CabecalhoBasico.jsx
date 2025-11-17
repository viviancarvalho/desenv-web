import { Navbar, Container } from 'react-bootstrap';

function CabecalhoBasico() {
  return (
    <>
      <Navbar>
        <Container className='justify-content-center' style={{margin:"0", height:"10vh"}} >
          <Navbar.Brand className='Titulo' href="/">Auto<span>matize</span></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default CabecalhoBasico;
