import api from "./api/index"

const getAll = async() => await api.get(`/trail/getAll`)

const getById = async(id) => await api.get(`/trail/getContents/${id}`)

export const trailService = {
    getById,
    getAll
};