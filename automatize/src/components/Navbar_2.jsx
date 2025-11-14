import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import profile from '../assets/Profile.png'
import {Link} from 'react-router-dom'
function Navbar_2(){
    return(
        <Navbar style={{width:'100vw', alignItems:"center", justifyContent:"center"}} >
        <Container className='justify-content-between' style={{margin: "0.5rem", marginTop:"0"}}>
          <Navbar.Brand style={{marginTop:'0.87vh'}} className='Titulo' href="#home">Auto<span>matize</span></Navbar.Brand>
          <Nav>
              <Link to={'/'} className='link' style={{fontSize: '1.1rem', marginRight:'3vw', marginTop:'1.3vh', color:'#011c2a', padding:'0.5rem', borderRadius:'0.5rem'}}>Início</Link>
              <Link to={'/'} className='link' style={{fontSize: '1.1rem', marginRight:'3vw', marginTop:'1.3vh', color:'#011c2a', padding:'0.5rem', borderRadius:'0.5rem'}}>Enviar Documentos</Link>          
              <Link to={'/perfil'} className='link' style={{display:'flex', alignItems:"center", marginTop:'1.1vh', padding:"0.5rem", borderRadius:'0.5rem'}}><img src={profile} className='profile'/></Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbar_2;