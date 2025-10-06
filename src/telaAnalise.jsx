import './telaAnalise.css';
import Button from 'react-bootstrap/Button';
import CabeçalhoFuncionario from './components/CabeçalhoFuncionario';
import CampoInfo from './components/CampoInfo'

function telaAnalise() {
    return(
        <>
         <div className="fundoPrincipal">
                <CabeçalhoFuncionario />

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

                        <div className="botoesContainer">
                            <Button href="reprovado" classname="botaoRecusar">Recusar</Button>
                            <Button href="historico" className="botaoAprovar">Aprovar</Button>
                        </div>

                    </div>

                    <div className="detalhe"></div>
                </div> 
            </div>
        </>
    );
}

export default telaAnalise;