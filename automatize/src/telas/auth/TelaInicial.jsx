import imagem1 from '../../assets/imagem7.png';
import img1 from '../../assets/imagem5.2.png';
import Button from 'react-bootstrap/Button';
import './TelaInicial.css';
import Navbar_1 from '../../components/Navbar_1.jsx';
import {Link} from 'react-router-dom'

function TelaInicial() {
  return (
    <>
      <Navbar_1></Navbar_1>
      <div className='grid'>
        <div className='grid-1'>
          <img src={img1} alt="Logo" className="img1" />
          <p>Facilite o envio e validação de documentos <br />acadêmicos com segurança e agilidade</p>
          <div>
            <Link to="/criarconta">
                <Button className='B1'>Crie sua conta</Button>
            </Link>
            <Link to="/login" >
                <Button className='B2'>Entre em sua conta</Button>
            </Link>
          </div>
        </div>
        <div className='grid-2'>
          <img className='img2' src={imagem1} />
        </div>
      </div>
    </>
  )
}

export default TelaInicial;