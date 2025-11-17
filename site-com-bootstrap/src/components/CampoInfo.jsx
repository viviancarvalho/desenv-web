import "../telaAnalise.css"

function CampoInfo({titulo, conteudo}) {
    return (
        <div>
          <p className="tituloCampo">{titulo}</p>
          <p className="conteudoCampo">{conteudo}</p>
        </div>
    );
}

export default CampoInfo;