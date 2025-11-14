import "../EmployeeDocuments.css";

import avatar from "../assets/avatar.png";
import DocumentTableHeader from "./DocumentTableHeader";
import DocumentTableRow from "./DocumentTableRow";

function DocumentTable() {
	return (
		<div className="profile-section">
			<div className="profile-header">
				<img src={avatar} alt="Foto de perfil" className="profile-avatar" />
				<div className="profile-info">
					<h5>João Marcelo</h5>
					<p>joao.marcelo@edu.unifor.br</p>
				</div>
			</div>

			<div className="document-table">
				<DocumentTableHeader />

				<div className="document-table-scroll">
					<DocumentTableRow
						empresa="Unifor"
						tipoDocumento="Estágio"
						cpfAluno="000.000.000-00"
						funcionario="Adriana"
						cpfFuncionario="000.000.000-00"
						situacao="Ativo"
						status="Aprovado"
					/>
					<DocumentTableRow
						empresa="UNIFANOR Centro"
						tipoDocumento="CLT"
						cpfAluno="000.000.000-00"
						funcionario="Adriana Lima"
						cpfFuncionario="000.000.000-00"
						situacao="Aguardando análise"
						status="Aguardando"
					/>
					<DocumentTableRow
						empresa="UNIFANOR Centro"
						tipoDocumento="CLT"
						cpfAluno="000.000.000-00"
						funcionario="Adriana Lima"
						cpfFuncionario="000.000.000-00"
						situacao="Aguardando análise"
						status="Aguardando"
					/>
					<DocumentTableRow
						empresa="UNIFANOR Centro"
						tipoDocumento="CLT"
						cpfAluno="000.000.000-00"
						funcionario="Adriana Lima"
						cpfFuncionario="000.000.000-00"
						situacao="Aguardando análise"
						status="Aguardando"
					/>
					<DocumentTableRow
						empresa="UNIFANOR Centro"
						tipoDocumento="CLT"
						cpfAluno="000.000.000-00"
						funcionario="Adriana Lima"
						cpfFuncionario="000.000.000-00"
						situacao="Recusado"
						status="Recusado"
					/>
					<DocumentTableRow
						empresa="UNIFANOR Centro"
						tipoDocumento="CLT"
						cpfAluno="000.000.000-00"
						funcionario="Adriana Lima"
						cpfFuncionario="000.000.000-00"
						situacao="Recusado"
						status="Recusado"
					/>
				</div>
			</div>
		</div>
	);
}

export default DocumentTable;
