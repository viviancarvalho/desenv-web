import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import multer from "multer";
import path from "path";
import {fileURLToPath } from "url";
import { dirname } from "path";//extrair o diretorio
import { readFileSync, mkdirSync, existsSync } from "fs";// leitura do arquivo

//extrai o diretorio
const __dirname = dirname(fileURLToPath(import.meta.url))

var serviceAccount = JSON.parse(readFileSync(`${__dirname}/projeto-web-teste-17e30-firebase-adminsdk-fbsvc-6b539bead8.json`))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();// criando instanci
const app = express();//aplicacao express
app.use(cors());//habilita o cors
app.use(express.json())// requisicoes com corpo JSON

// Criar pasta uploads se não existir
const uploadsDir = path.join(__dirname, 'uploads');
if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir, { recursive: true });
}

// Configurar Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(7)}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não permitido. Use PDF, JPG ou PNG.'));
    }
  }
});

// Servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(uploadsDir));

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

// Rota para upload de documentos
app.post("/upload-documento", upload.single('arquivo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }

    const { tipoDocumento, descricao, alunoNome, alunoEmail } = req.body;

    if (!tipoDocumento) {
      return res.status(400).json({ error: 'Tipo de documento é obrigatório' });
    }

    // Salvar informações no Firestore
    const docRef = await db.collection('documentos').add({
      tipoDocumento,
      descricao: descricao || '',
      alunoNome: alunoNome || 'Não informado',
      alunoEmail: alunoEmail || 'Não informado',
      nomeArquivo: req.file.originalname,
      caminhoArquivo: `/uploads/${req.file.filename}`,
      tamanhoArquivo: req.file.size,
      tipoMime: req.file.mimetype,
      status: 'pendente',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).json({
      message: 'Documento enviado com sucesso!',
      documentoId: docRef.id,
      arquivo: {
        nome: req.file.originalname,
        url: `/uploads/${req.file.filename}`
      }
    });
  } catch (err) {
    console.error('Erro ao fazer upload:', err);
    res.status(500).json({ error: 'Erro ao fazer upload do documento' });
  }
});

// Rota para buscar documentos
app.get("/documentos", async(req, res) => {
  try {
    const result = await db.collection("documentos").orderBy("createdAt", "desc").get();

    if (result.empty) {
      return res.status(200).json({ message: "Nenhum documento encontrado" });
    }

    const documentos = result.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      };
    });

    res.status(200).json(documentos);
  } catch (err) {
    console.error('Erro ao buscar documentos:', err);
    res.status(500).json({ error: "Erro ao buscar documentos" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
