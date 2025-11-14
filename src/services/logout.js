import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export async function logout() {
	try {
		await signOut(auth);
		console.log("Usuário deslogado!");
	} catch (error) {
		console.error("Erro ao deslogar:", error);
	}
}
