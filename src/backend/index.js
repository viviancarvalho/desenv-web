import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import {fileURLToPath } from "url";
import { dirname } from "path";//extrair o diretorio
import { readFileSync } from "fs";// leitura do arquivo

//extrai o diretorio
const __dirname = dirname(fileURLToPath(import.meta.url))

var serviceAccount = JSON.parse(readFileSync(`${__dirname}/projeto-web-24623-firebase-adminsdk-fbsvc-be96c15c43.json`))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();// criando instanci
const app = express();//aplicacao express
app.use(cors());//habilita o cors
app.use(express.json())// requisicoes com corpo JSON

app.get("/", (req, res) =>{
  res.send("Sejam bem vindo!")
})

app.post("/posts", async(req, res) => {
  try{
    //extrair as informacoes do corpor da requisicao
    const {title, content, author} = req.body;
    if (!title || !content){
      return res.status(400).json({error: "Campos obrigatorios: title, content"});
    }
    const docRef = await db.collection("posts").add({
      title,
      content,
      author: author || "Anonimo",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).json({message: "Post criado com sucesso!"})
  } catch (err){
    res.status(500).json({error: "Erro interno do servidor!"})
  }
})

app.put("/put/:id", async(req, res) =>{
  try {
    const { id } = req.params; //capturar o id da rota
    const { title, content, author } = req.body;
    //extrair do corpo da requisicao

    if (!id){
      return res.status(400).json({ error: 'Id do put é obrigatorio'})
    }
    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (author) updateData.author = author;
    updateData.updatedAt = admin.firestore.FieldValue.serverTimestamp(); // o erro era aqui no nome da varivel
    const postRef = db.collection("posts").doc(id)
    
    await postRef.update(updateData)
    res.status(200).json({message:  'Post atualizado com sucesso'})
  }
  catch (err){
    res.status(500).json({error:  'Erro no servidor'})
  }
})
app.delete("/delete/:id", async (req, res) => {
  //assincrono wait, leva algum tempo ate que o firestore elte o documento
  try{
    const {id} = req.params;
    if (!id){
      return res.status(400).json({error:'Id é obrigatorio'})
    }
    const postRef = db.collection("posts").doc(id)
    //cria uma referencia ao documento com id da colecao
    await postRef.delete() //deleta o documento
    res.status(200).json({message: "Deletado com sucesso"})
  }
  catch{
    res.status(500).json({error:'Erro servidor'})
  }
})
app.get("/buscar", async(req,res) => {
  try{
    const resul = await db.collection("posts").orderBy("createdAt", "desc").get();

    if (resul.empty){ //caso nao haja documentos na colecao
      return res.status(200).json({message: "Nenhum post encontrado"})
    }
    const posts = resul.docs.map((doc) =>{
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      author: data.author,
      createdAt: data.createdAt
    };
    });
    res.status(200).json(posts)
  } catch (err){
    res.status(500).json({error: "Erro ao buscar"})
  }
})





const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));

/* const app = express();
const PORT = 3000;
app.get("/", (req, resp) =>{
    resp.send("Hello World!")
});
//inicia o servidor funcao listen()
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
})*/