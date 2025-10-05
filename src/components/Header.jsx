import { Navbar, Nav, Container } from "react-bootstrap";
import "../TelaPerfil.css";

function Header() {
	return (
		<div className="header">
			<Navbar>
				<Container>
					<Navbar.Brand>
						<h3 className="logo-text">
							<span className="brand-color">Auto</span>
							matize
						</h3>
					</Navbar.Brand>
					<Nav>
						<div className="text-strong">
							<Nav.Link href="#">
								<span> Inicio</span>
							</Nav.Link>
							<Nav.Link href="#">
								<span className="brand-color">Enviar documentos</span>
							</Nav.Link>
							<Nav.Link href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="#2c3e50"
									stroke-width="1"
								>
									<circle cx="12" cy="12" r="11" />
									<circle cx="12" cy="9" r="3" />
									<path d="M6 21c0-3 3-6 6-6s6 3 6 6" />
								</svg>
							</Nav.Link>
						</div>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}
export default Header;
