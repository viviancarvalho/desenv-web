import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom'
function Navbar_2(){
    return(
        <Navbar style={{width:'100vw', alignItems:"center", justifyContent:"center"}} >
        <Container className='justify-content-between' style={{marginTop: "1rem"}}>
          <Navbar.Brand style={{marginTop:'0.87vh'}} className='Titulo' href="#home">Auto<span>matize</span></Navbar.Brand>
          <Nav>
              <Link to={'/'} style={{fontSize: '1.1rem', marginRight:'3vw', marginTop:'1.3vh', color:'#011c2a'}}>Início</Link>
              <Link to={''} style={{fontSize: '1.1rem', marginRight:'3vw', marginTop:'1.3vh', color: '#f6af03'}}>Enviar Documento</Link>      
              <Link to={'perfil'} style={{paddingTop:"0.1rem"}}><i className="bi bi-person-circle" style={{ fontSize: '2rem', color: '#011c2a' }}></i></Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbar_2;