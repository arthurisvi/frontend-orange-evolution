import api from "./api/index";

const verifyContentFavorited = async(idContent) => await api.get(`/content/isFavorited?id=${idContent}`);

const createContent = async(content) => await api.post("/content/create", content);

const deleteContent = async(idContent) => await api.delete(`content/delete/${idContent}`);

export const contentService = {
    verifyContentFavorited,
    createContent,
    deleteContent
};