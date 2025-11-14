import "bootstrap/dist/css/bootstrap.min.css";
import "./EmployeeDocuments.css";
import HeaderBar from "./components/HeaderBar";
import DocumentTable from "./components/DocumentTable";

function EmployeeDocuments() {
	return (
		<>
			<HeaderBar />
			<DocumentTable />
		</>
	);
}

export default EmployeeDocuments;
