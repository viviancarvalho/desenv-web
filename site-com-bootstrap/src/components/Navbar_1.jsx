import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import profile from '../assets/Profile.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom'
function Navbar_1({profile = 'flex', text = 'flex'}){
    return(
        <Navbar style={{width:'100vw', alignItems:"center", justifyContent:"center"}} >
        <Container className='justify-content-between' style={{margin: "0.5rem", marginTop:"0"}}>
          <Navbar.Brand style={{marginTop:'0.87vh'}} className='Titulo' href="#home">Auto<span>matize</span></Navbar.Brand>
          <Nav>
              <Link to={'/'} className='link' style={{ display:text, fontSize:'1.1rem', marginRight:'3vw', marginTop:'1.3vh', color:'#011c2a', padding:'0.5rem', borderRadius:'0.5rem'}}>Início</Link>         
              <Link to={'/perfil'} className='link' style={{display:profile, alignItems:"center", marginTop:'1.1vh', padding:"0.5rem", borderRadius:'0.5rem'}}><img src={profile} className='profile'/></Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbar_1;