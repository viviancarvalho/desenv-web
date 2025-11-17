import { useState } from 'react';
import './EnviarDocumento.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar_2 from '../components/Navbar_2';

function EnviarDocumento() {
  const [arquivo, setArquivo] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleArquivoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
      
      // Criar URL de prévia
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleEnviar = async () => {
    if (!arquivo || !tipoDocumento) {
      alert('Por favor, selecione um documento e o tipo');
      return;
    }

    try {
      // Criar FormData para enviar arquivo
      const formData = new FormData();
      formData.append('arquivo', arquivo);
      formData.append('tipoDocumento', tipoDocumento);
      formData.append('descricao', descricao);
      formData.append('alunoNome', 'João Marcelo'); // Pegar do contexto/login futuramente
      formData.append('alunoEmail', 'joao.marcelo@edu.unifor.br'); // Pegar do contexto/login futuramente

      // Enviar para o backend
      const response = await fetch('http://localhost:3000/upload-documento', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert('Documento enviado com sucesso!');
        // Limpar formulário
        setArquivo(null);
        setPreviewUrl(null);
        setTipoDocumento('');
        setDescricao('');
      } else {
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar documento:', error);
      alert('Erro ao enviar documento. Verifique se o backend está rodando.');
    }
  };

  const renderPreview = () => {
    if (!arquivo) {
      return (
        <div className="preview-placeholder">
          <p>Nenhum documento selecionado</p>
          <p className="preview-hint">A prévia aparecerá aqui</p>
        </div>
      );
    }

    const fileType = arquivo.type;

    if (fileType.startsWith('image/')) {
      return <img src={previewUrl} alt="Prévia" className="preview-image" />;
    } else if (fileType === 'application/pdf') {
      return (
        <iframe 
          src={previewUrl} 
          className="preview-pdf"
          title="Prévia do PDF"
        />
      );
    } else {
      return (
        <div className="preview-file">
          <p>📄 {arquivo.name}</p>
          <p className="file-size">{(arquivo.size / 1024).toFixed(2)} KB</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="fundoPrincipal">
        <Navbar_2 cor2='#f6af03' />
        
        <h1 className="titulo-envio">Enviar Documento</h1>
        <p className="subtitulo">Selecione o documento e preencha as informações pedidas abaixo</p>

        <div className="container-envio">
          <div className="formulario-envio">
            
            <div className="campo-completo">
              <p className="tituloInput3">Tipo de Documento</p>
              <select 
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                className="select-tipo"
              >
                <option value="">Selecione o tipo</option>
                <option value="rg">RG</option>
                <option value="cpf">CPF</option>
                <option value="comprovante_residencia">Comprovante de Residência</option>
                <option value="historico">Histórico Escolar</option>
                <option value="certidao">Certidão</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="campo-completo">
              <p className="tituloInput">Descrição (opcional)</p>
              <textarea 
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Adicione informações adicionais sobre o documento"
                className="textarea-descricao"
                rows="3"
              />
            </div>

            <div className="campo-completo">
              <p className="tituloInput">Selecionar Arquivo</p>
              <input 
                type="file" 
                onChange={handleArquivoChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="input-file"
              />
              <p className="file-hint">Formatos aceitos: PDF, JPG, PNG (máx. 5MB)</p>
            </div>

           

            <div className="botoes-container-envio">
              <Link to={'/perfil'}>
                <Button className="B2">Voltar</Button>
              </Link>
              <Button 
                className="B1" 
                onClick={handleEnviar}
                disabled={!arquivo || !tipoDocumento}
              >
                Enviar Documento
              </Button>
            </div>

          </div>

          <div className="detalhe-envio">
            <h1 className="tituloInput2">Prévia do Documento</h1>
             <div className="campo-completo-preview-container">
              <div className="preview-box">
                {renderPreview()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnviarDocumento;
