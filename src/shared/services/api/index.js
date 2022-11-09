import Axios from "axios"

export const api = Axios.create({
    baseUrl: 'http://localhost:3333/api',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})