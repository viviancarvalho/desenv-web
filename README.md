# Projeto Automatize - Sistema de Documentos

Sistema completo de gerenciamento de documentos com backend Node.js + Express e frontend React + Bootstrap.

## 📁 Estrutura do Projeto

```
projeto-final/
├── backend/              # API Node.js + Express + Firebase
│   ├── index.js         # Servidor principal
│   ├── package.json     # Dependências do backend
│   └── projeto-web-*.json  # Credenciais do Firebase (NÃO INCLUÍDO)
│
└── site-com-bootstrap/  # Frontend React + Bootstrap
    ├── src/             # Código fonte
    │   ├── telas/      # Telas do sistema
    │   ├── components/ # Componentes reutilizáveis
    │   └── services/   # Comunicação com API
    ├── public/          # Arquivos públicos
    └── package.json     # Dependências do frontend
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado (v18 ou superior)
- npm ou yarn
- Conta no Firebase

### 1. Configurar o Backend

```bash
cd backend

# Instalar dependências
npm install

# Adicionar credenciais do Firebase
# Baixe o arquivo JSON de credenciais do Firebase Console
# e coloque na pasta backend/

# Rodar o servidor
node index.js
```

O backend estará rodando em: `http://localhost:3000`

### 2. Configurar o Frontend

```bash
cd site-com-bootstrap

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em: `http://localhost:5173`

## 🔥 Configuração do Firebase

### Backend

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Vá em **Configurações do Projeto** → **Contas de Serviço**
3. Clique em **Gerar nova chave privada**
4. Baixe o arquivo JSON
5. Coloque o arquivo na pasta `backend/`
6. Renomeie no `index.js` se necessário

Veja detalhes em: `backend/CONFIGURAR_FIREBASE.md`

### Frontend

O frontend se comunica com o backend através da API configurada em `src/services/api.js`.

## 📋 Funcionalidades

### Alunos
- ✅ Cadastro de usuários
- ✅ Login/Logout
- ✅ **Envio de documentos com prévia**
- ✅ Visualização de status dos documentos
- ✅ Perfil do usuário

### Funcionários
- ✅ Visualização de documentos enviados
- ✅ Aprovação/Recusa de documentos
- ✅ Análise de solicitações

## 🆕 Nova Funcionalidade: Enviar Documento

A tela de envio de documento permite que os alunos:

- Selecionem o tipo de documento (RG, CPF, Comprovante, etc.)
- Adicionem uma descrição opcional
- Façam upload de arquivos (PDF, JPG, PNG)
- **Visualizem uma prévia do documento antes de enviar**

### Tipos de Prévia:
- **Imagens (JPG, PNG):** Exibe a imagem completa
- **PDF:** Exibe o PDF em um visualizador integrado
- **Outros arquivos:** Mostra informações do arquivo (nome e tamanho)

### Como Acessar:
1. Faça login no sistema
2. Vá para o **Perfil**
3. Clique em **"Enviar Documento"**
4. Preencha as informações e selecione o arquivo
5. Visualize a prévia e clique em **"Enviar Documento"**

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Firebase Admin SDK
- CORS

### Frontend
- React
- React Router
- Bootstrap
- Vite

## 📝 Endpoints da API

### GET `/`
Mensagem de boas-vindas

### POST `/posts`
Criar um novo post
```json
{
  "title": "Título",
  "content": "Conteúdo",
  "author": "Autor"
}
```

### GET `/buscar`
Buscar todos os posts

### PUT `/put/:id`
Atualizar um post

### DELETE `/delete/:id`
Deletar um post

## 🔗 Comunicação Frontend-Backend

O frontend se comunica com o backend através do arquivo `src/services/api.js`:

```javascript
import api from './services/api';

// Criar post
await api.createPost({ title, content, author });

// Buscar posts
const posts = await api.getPosts();
```

## 🔒 Segurança

- As credenciais do Firebase devem estar no arquivo `.json` no backend
- Nunca commitar o arquivo de credenciais no Git
- O backend valida todas as requisições
- Arquivos enviados são validados por tipo e tamanho

## 📱 Rotas do Sistema

- `/` - Tela inicial
- `/login` - Login
- `/criarconta` - Criar conta
- `/perfil` - Perfil do usuário
- `/analise` - Análise de documentos (funcionários)
- `/enviar-documento` - **Enviar documento (alunos)**

## 👥 Autores

Projeto desenvolvido para a disciplina de Desenvolvimento Web.

## 📄 Licença

Este projeto é apenas para fins educacionais.
