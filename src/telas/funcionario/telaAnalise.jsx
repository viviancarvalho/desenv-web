import "../../styles/telaAnalise.css";
import Button from "react-bootstrap/Button";
import CabecalhoFuncionario from "../../components/CabecalhoFuncionario";
import CampoInfo from "../../components/CampoInfo";

function TelaAnalise() {
	return (
		<>
			<div className="fundoPrincipal">
				<CabecalhoFuncionario />

				<div className="container">
					<div className="formulario">
						<CampoInfo titulo="Aluno" conteudo="João Marcelo"></CampoInfo>

						<CampoInfo
							titulo="Email"
							conteudo="joaomarcelo@gmail.com"
						></CampoInfo>

						<CampoInfo
							titulo="Tipo de documento"
							conteudo="Declaração para aluno"
						></CampoInfo>

						<div className="botoesContainer">
							<Button href="reprovado" className="botaoRecusar">
								Recusar
							</Button>
							<Button href="historico" className="botaoAprovar">
								Aprovar
							</Button>
						</div>
					</div>

					<div className="detalhe"></div>
				</div>
			</div>
		</>
	);
}

export default TelaAnalise;
