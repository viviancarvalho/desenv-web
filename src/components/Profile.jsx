import { Button, Row, Col } from "react-bootstrap";
import "../TelaPerfil.css";
import avatar from "../assets/avatar.png";
import DadosPerfil from "./DadosPerfil";

function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-header">
				<img src={avatar} alt="imagemPerfil" className="profile-avatar" />
				<div className="profile-dados">
					<h5>João Marcelo</h5>
					<p>joao.marcelo@edu.unifor.br</p>
				</div>
			</div>
			<div className="info-container">
				<Row>
					<Col>
						<DadosPerfil
							titulo={"Nome: "}
							conteudo={"João Marcelo "}
						></DadosPerfil>
						<DadosPerfil
							titulo={"CPF: "}
							conteudo={"987.654.323-03"}
						></DadosPerfil>
						<DadosPerfil titulo={"Cargo: "} conteudo={"Aluno"}></DadosPerfil>
					</Col>
					<Col>
						<DadosPerfil
							titulo={"Sobrenome: "}
							conteudo={"Parente Jucá"}
						></DadosPerfil>
						<DadosPerfil
							titulo={"Celular: "}
							conteudo={"(85)98765-4321"}
						></DadosPerfil>
						<DadosPerfil
							titulo={"Senha: "}
							conteudo={"@Teste123#"}
						></DadosPerfil>
					</Col>
				</Row>
			</div>
			<div className="estagio-container">
				<h5>Meus estágios</h5>
				<div className="estagio">
					<img src={avatar} alt="imagemPerfil" className="fotoEstagio" />
					<div className="dados-estagio">
						<p className="text-strong">Facebook Meta</p>
						<p className="text-faded">agora</p>
					</div>
				</div>
				<Button className="profile-button">Ver processos ativos</Button>
			</div>
		</div>
	);
}
export default Profile;
