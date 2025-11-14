import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function RotaProtegida({ children }) {
	const [usuario, setUsuario] = useState(undefined);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setUsuario(user);
		});

		return () => unsub();
	}, []);

	if (usuario === undefined) {
		return <p>Carregando...</p>;
	}

	return usuario ? children : <Navigate to="/login" replace />;
}
