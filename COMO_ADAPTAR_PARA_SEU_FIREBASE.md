# 🚀 Guia Completo: Adaptando para o SEU Firebase

Este guia vai te ensinar, passo a passo, como configurar o projeto para usar a **sua própria conta do Firebase**.

## 🎯 Objetivo

- **Backend:** Conectar a API Node.js ao seu Firebase para gerenciar dados.
- **Frontend:** Conectar o site React ao seu Firebase para autenticação e outras funcionalidades.

---

## 🔑 Parte 1: Configurando o Backend (O Mais Importante)

O backend precisa de uma **chave secreta** para ter permissões de administrador no seu Firebase. É isso que o arquivo `.json` faz.

### Passo 1: Obter a Chave Secreta (Arquivo JSON)

1.  Acesse o **[Firebase Console](https://console.firebase.google.com/)**.
2.  Selecione o seu projeto.
3.  No menu à esquerda, clique na **engrenagem (⚙️)** ao lado de "Visão geral do projeto" e selecione **"Configurações do projeto"**.
    ![Passo 3](https://i.imgur.com/sB1G3fC.png)

4.  Vá para a aba **"Contas de serviço"**.
    ![Passo 4](https://i.imgur.com/8i1gY2j.png)

5.  Clique no botão **"Gerar nova chave privada"**.
    ![Passo 5](https://i.imgur.com/gG7a1rR.png)

6.  Um aviso aparecerá. Clique em **"Gerar chave"**.
7.  O download de um arquivo `.json` começará automaticamente. **Guarde este arquivo, ele é sua senha!**

### Passo 2: Adicionar a Chave ao Projeto

1.  Pegue o arquivo `.json` que você baixou (ex: `meu-projeto-123-firebase-adminsdk-xyz.json`).
2.  Coloque este arquivo dentro da pasta `backend/` do projeto.

    ```
    projeto-final/
    └── backend/
        ├── index.js
        ├── package.json
        └── seu-arquivo-firebase.json  <-- COLOQUE AQUI
    ```

### Passo 3: Atualizar o Código para Usar Sua Chave

1.  Abra o arquivo `backend/index.js`.
2.  Encontre a **linha 11**:

    ```javascript
    var serviceAccount = JSON.parse(readFileSync(`${__dirname}/projeto-web-24623-firebase-adminsdk-fbsvc-be96c15c43.json`))
    ```

3.  **Substitua** o nome do arquivo `.json` pelo nome **exato** do arquivo que você baixou:

    ```javascript
    // Exemplo de como deve ficar
    var serviceAccount = JSON.parse(readFileSync(`${__dirname}/meu-projeto-123-firebase-adminsdk-xyz.json`))
    ```

### Passo 4: Rodar o Backend

Agora sim, você pode rodar o backend!

1.  Abra o terminal na pasta `backend/`.
2.  Instale as dependências (só na primeira vez):
    ```bash
    npm install
    ```
3.  Inicie o servidor:
    ```bash
    node index.js
    ```

Se tudo deu certo, você verá a mensagem: `API rodando em http://localhost:3000`.

**Pronto! Seu backend está conectado ao SEU Firebase!**

---

## 🖥️ Parte 2: Configurando o Frontend

O frontend usa uma chave **pública**, que não é secreta. Ela serve para identificar seu projeto.

### Passo 1: Obter a Configuração do Frontend

1.  Volte para as **"Configurações do projeto"** no Firebase Console (engrenagem ⚙️).
2.  Na aba **"Geral"**, role para baixo até a seção **"Seus apps"**.
3.  Selecione seu aplicativo da web (ou crie um novo se não tiver).
4.  Clique no ícone de **engrenagem (⚙️)** do seu app da web.
5.  Na janela que abrir, selecione a opção **"Configuração"** (ou `Config`).
    ![Passo 5 Frontend](https://i.imgur.com/2s3fX8s.png)

6.  Você verá um objeto chamado `firebaseConfig`. Copie ele inteiro.

    ```javascript
    const firebaseConfig = {
      apiKey: "AIza...",
      authDomain: "seu-projeto.firebaseapp.com",
      // ... e o resto
    };
    ```

### Passo 2: Adicionar a Configuração ao Projeto

1.  No frontend, abra o arquivo `site-com-bootstrap/src/telas/auth/TelaLogin.jsx` (e outros arquivos que usam o Firebase, como `telaCriarConta.jsx`).
2.  Procure pela variável `firebaseConfig` no início do arquivo.
3.  **Substitua** a configuração antiga pela **sua** configuração que você copiou.

**Pronto! Seu frontend também está conectado ao SEU Firebase!**

## ✅ Checklist Final

- [ ] Baixei o arquivo `.json` da conta de serviço.
- [ ] Coloquei o `.json` na pasta `backend/`.
- [ ] Atualizei o nome do arquivo no `backend/index.js`.
- [ ] Backend está rodando sem erros.
- [ ] Copiei o `firebaseConfig` do meu app da web.
- [ ] Colei o `firebaseConfig` nos arquivos do frontend.
- [ ] Frontend está rodando e conectando.

