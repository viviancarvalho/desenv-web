# 🚀 Guia Rápido de Instalação

## ⚡ Instalação Rápida (5 minutos)

### 1. Backend

```bash
cd backend
npm install
```

**Importante:** Adicione o arquivo de credenciais do Firebase (veja `CONFIGURAR_FIREBASE.md`)

```bash
node index.js
```

✅ Backend rodando em: `http://localhost:3000`

### 2. Frontend

**Abra um NOVO terminal** (deixe o backend rodando)

```bash
cd site-com-bootstrap
npm install
npm run dev
```

✅ Frontend rodando em: `http://localhost:5173`

---

## 🔥 Configurar Firebase (Obrigatório)

1. Vá em: https://console.firebase.google.com/
2. Configurações do Projeto → Contas de Serviço
3. **Gerar nova chave privada**
4. Baixe o arquivo `.json`
5. Coloque na pasta `backend/`
6. Edite `backend/index.js` linha 11 com o nome do arquivo

Veja detalhes em: `backend/CONFIGURAR_FIREBASE.md`

---

## ✅ Checklist

- [ ] Node.js instalado
- [ ] `npm install` no backend
- [ ] Arquivo `.json` do Firebase no backend
- [ ] Nome do arquivo correto no `index.js`
- [ ] Backend rodando (`node index.js`)
- [ ] `npm install` no frontend
- [ ] Frontend rodando (`npm run dev`)

---

## 🆘 Problemas?

### Backend não inicia
- Verifique se o arquivo `.json` do Firebase está na pasta `backend/`
- Verifique se o nome do arquivo no `index.js` está correto

### Frontend não conecta no backend
- Verifique se o backend está rodando em `http://localhost:3000`
- Verifique se não há erros no console do navegador

### "Cannot find module"
- Rode `npm install` novamente
- Delete a pasta `node_modules` e rode `npm install` de novo

---

## 📱 Acessar o Sistema

1. Abra o navegador em: `http://localhost:5173`
2. Crie uma conta
3. Faça login
4. Pronto! 🎉
