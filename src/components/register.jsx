import  { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../backend/firebase";
function Register() {
    //inicializa o estado com string vazia
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    //impede o carregamento, sem ela, a pagina recarregaria
    const handleRegister = async (e) => {
        e.preventDefault();
        //await -> faz a funcao esperar ate o firebase confirmar a criacao do usuario
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        } catch (error){
            setErro(error.message);
        }
        };

    return (
        <div style={{maxWidth: 300, margin:"50px auto", textAlign: "center"}}>
        <h2>Cadastro</h2> 
        <form onSubmit={handleRegister}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{display:"block", width: "100%", marginBottom:10}}
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                style={{display:"block", width: "100%", marginBottom:10}}
            />
            <button type="submit">Cadastrar</button>
        </form>
        </div>
    )
    }
export default Register;