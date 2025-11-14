import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/telaPerfil.css";
import Navbar_2 from "../../components/Navbar_2";
import Profile from "../../components/Profile";


function TelaPerfil() {
	return (
		<>
			<Navbar_2></Navbar_2>
			<div className="containerLimit">

			<Profile></Profile>
			</div>
			
		</>
	);
}

export default TelaPerfil;