import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbar_1(){
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container className='justify-content-between'>
          <Navbar.Brand id="auto" href="#home">Auto<span id="matize">matize</span></Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbar_1;