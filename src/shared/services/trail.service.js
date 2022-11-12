import api from "./api/index"

const getById = async(id) => await api.get(`/trail/getContents/${id}`)

export const trailService = {
    getById,
};