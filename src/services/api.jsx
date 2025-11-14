import axios from "axios";
const Api = axios.create({//cria uma instancia do axios chamada Api
    baseURL: "http://localhost:3000"
});
export default Api;