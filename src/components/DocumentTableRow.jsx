import { Row, Col } from "react-bootstrap";
import "../EmployeeDocuments.css";


function DocumentTableRow({
	empresa,
	tipoDocumento,
	cpfAluno,
	funcionario,
	cpfFuncionario,
	situacao,
	status,
}) {
	return (
		<div className="document-table-row">
			<Row>
				<Col>
					<p>{empresa}</p>
				</Col>
				<Col>
					<p>{tipoDocumento}</p>
				</Col>
				<Col>
					<p>{cpfAluno}</p>
				</Col>
				<Col md={2}>
					<p>{funcionario}</p>
				</Col>
				<Col>
					<p>{cpfFuncionario}</p>
				</Col>
				<Col>
					<p>{situacao}</p>
				</Col>
				<Col>
					<button className={`status-button-${status}`}>{status}</button>
				</Col>
			</Row>
		</div>
	);
}

export default DocumentTableRow;
