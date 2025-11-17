# Como Configurar o Firebase no Backend

## 📥 Passo 1: Obter as Credenciais

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto ou crie um novo
3. Clique no ícone de **engrenagem** (⚙️) → **Configurações do projeto**
4. Vá na aba **"Contas de serviço"**
5. Clique em **"Gerar nova chave privada"**
6. Confirme e baixe o arquivo `.json`

## 📁 Passo 2: Adicionar o Arquivo ao Projeto

1. O arquivo baixado terá um nome como:
   ```
   projeto-web-xxxxx-firebase-adminsdk-xxxxx-xxxxxxxxxx.json
   ```

2. Coloque esse arquivo na pasta `backend/`

3. Abra o arquivo `backend/index.js` e verifique a linha 11:
   ```javascript
   var serviceAccount = JSON.parse(readFileSync(`${__dirname}/projeto-web-24623-firebase-adminsdk-fbsvc-be96c15c43.json`))
   ```

4. Substitua o nome do arquivo pelo nome do arquivo que você baixou:
   ```javascript
   var serviceAccount = JSON.parse(readFileSync(`${__dirname}/SEU-ARQUIVO-AQUI.json`))
   ```

## ✅ Passo 3: Testar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor:
   ```bash
   node index.js
   ```

3. Se aparecer:
   ```
   API rodando em http://localhost:3000
   ```
   
   Está funcionando! 🎉

## 🔒 Segurança

⚠️ **IMPORTANTE:**
- **NUNCA** commite o arquivo `.json` no Git
- **NUNCA** compartilhe esse arquivo publicamente
- Esse arquivo dá acesso total ao seu Firebase!

O arquivo `.gitignore` já está configurado para ignorar arquivos `.json` (exceto `package.json`).

## 🆘 Problemas Comuns

### Erro: "Cannot find module"
- Verifique se o nome do arquivo no `index.js` está correto
- Verifique se o arquivo está na pasta `backend/`

### Erro: "Invalid credentials"
- Baixe um novo arquivo de credenciais do Firebase
- Verifique se o projeto do Firebase está correto

### Erro: "Permission denied"
- Verifique as permissões do Firestore no Firebase Console
- Vá em **Firestore Database** → **Regras** e configure as permissões
