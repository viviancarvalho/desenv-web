
import "../telaPerfil.css";

function DadosPerfil({titulo, conteudo}){
    return (
        <div className="infosSet">
            <p>{titulo}</p>
            <div className="infosCard">
                <p>{conteudo}</p>
            </div>
        </div>
    );
}

export default DadosPerfil;