import axios from "axios";
const api = axios.create({//cria uma instancia do axios chamada api
    baseURL: "http://localhost:3000"
});
export default api;