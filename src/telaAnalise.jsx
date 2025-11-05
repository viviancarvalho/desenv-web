import './TelaAnalise.css';
import Button from 'react-bootstrap/Button';
import CabecalhoFuncionario from './components/CabecalhoFuncionario';
import CampoInfo from './components/CampoInfo'
import { useState } from 'react';

function TelaAnalise() {
    const [motivo, setMotivo] = useState('');
    const [mostrarMotivo, setMostrarMotivo] = useState(false);

    const handleRecusar = () => {
        setMostrarMotivo(true);
    }

    const handleConfirmarRecusa = () => {
        console.log("Motivo da recusa: "+ motivo);
        setMostrarMotivo(false);
        setMotivo('');
    }

    const handleCancelar = () => {
        setMostrarMotivo(false);
        setMotivo('');
    }

    return(
        <>
         <div className="fundoPrincipal3">
                <CabecalhoFuncionario />

               <div className="container3">
                    <div className="formulario3">
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

                        <div className="botoesContainer3">
                            <Button onClick={handleRecusar} className="botaoRecusar3">Recusar</Button>
                            <Button href="historico" className="botaoAprovar3">Aprovar</Button>
                        </div>

                    </div>

                    <div className="detalhe"></div>
                </div>

                {mostrarMotivo &&(
                    <div className="overlay">
                        <div className="popUpMotivo">
                            <h4>Motivo</h4>
                            <input
                                type="text"
                                placeholder="Digite o motivo..."
                                value={motivo}
                                onChange={(e) => setMotivo(e.target.value)}
                                className="inputMotivo"
                            />

                            <div className="botoesPopUp">
                                <Button className="botaoVoltarMotivo" onClick={handleCancelar}>Voltar</Button>
                                <Button className="botaoEnviarMotivo" onClick={handleConfirmarRecusa}>Recusar</Button>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </>
    );
}

export default TelaAnalise;
