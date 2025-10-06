import './telaAnalise.css';
import Button from 'react-bootstrap/Button';
import CabeçalhoFuncionário from './components/CabeçalhoFuncionário';
import CampoInfo from './components/CampoInfo'

function telaAnalise() {
    return(
        <>
         <div className="fundoPrincipal">
                <CabeçalhoFuncionário />

               <div className="container">
                    <div className="formulario">
                        <CampoInfo
                            titulo="Aluno"
                            conteudo="João Marcelo"
                        ></CampoInfo>

                        <CampoInfo
                            titulo="Email"
                            conteudo="joaomarcelo@gmail.com"
                        ></CampoInfo>

                        <CampoInfo
                            titulo="Tipo de documento"
                            conteudo="Declaração para aluno"
                        ></CampoInfo>


                    </div>

                    <div className="detalhe"></div>
                </div> 
            </div>
        </>
    );
}

export default telaAnalise;