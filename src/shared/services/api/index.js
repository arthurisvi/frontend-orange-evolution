import Axios from "axios"

const baseURL = "http://127.0.0.1:3333/api";

// const getToken = () => localStorage.getItem("token");

// const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const api = Axios.create({
    baseURL,
    // headers: { Authorization: getAuthorizationHeader() },
});

export default api;