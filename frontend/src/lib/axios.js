import axios from "axios";
const api = axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL:'https://mern-bookstore-lj51.onrender.com/'
})
export default api
