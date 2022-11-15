import api from "./api/index"
const token = localStorage.getItem("token");

const getAll = async() => {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    return await api.get(`/trail/getAll`)
}


const getById = async(id) => await api.get(`/trail/getContents/${id}`)

const getMyProgress = async(id) => await api.get(`/trail/getMyProgress/?idTrail=${id}`)

export const trailService = {
    getById,
    getMyProgress,
    getAll
};