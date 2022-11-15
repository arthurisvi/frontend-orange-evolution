import Axios from "axios"

const baseURL = "https://api-orange-juice-evolution.herokuapp.com/api";

const getToken = () => localStorage.getItem("token");

const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const api = Axios.create({
    baseURL,
    headers: { Authorization: getAuthorizationHeader() },
});

export default api;
