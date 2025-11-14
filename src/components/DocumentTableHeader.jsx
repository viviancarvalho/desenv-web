import { Row, Col } from "react-bootstrap";
import "../EmployeeDocuments.css";


function DocumentTableHeader() {
	return (
		<div className="document-table-header">
			<Row>
				<Col>
					<p>Empresa</p>
				</Col>
				<Col>
					<p>Tipo de Documento</p>
				</Col>
				<Col>
					<p>CPF do Aluno</p>
				</Col>
				<Col md={2}>
					<p>Funcionário</p>
				</Col>
				<Col>
					<p>CPF do Funcionário</p>
				</Col>
				<Col>
					<p>Situação</p>
				</Col>
				<Col>
					<p>Status</p>
				</Col>
			</Row>
		</div>
	);
}

export default DocumentTableHeader;
