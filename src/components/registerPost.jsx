import api from "../services/api";
import React, {useState} from "react";

function RegisterPost(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [editingID, seteditingID] = useState(null);
    const [message, setMessage] = useState("");
    const [posts, setPosts] = useState([]);
//guardar o ID, variavel de estado
}
const handleSubmit = async (e) =>{
    e.preventDefault(); //evitar comportamento de recarregar pagina
    try{
       if (editingID){
        await api.put(`/put/${editingID}`,{title, content, author})
        setMessage("Post atualizado com sucesso!")
       }else{
        await api.post("/posts", {title, content, author})
        setMessage("Post cadastrado com sucesso")
       } 
       setTitle("");
       setContent("");
       setAuthor("");
       fetchPosts("");
    }catch (error){
        setMessage("Erro ao salvar o post")
    }
    //formulario de informacoes do front
    return(
        <div className="container mt-5">
            
        </div>
    )
}