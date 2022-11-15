import api from "./api/index";

const verifyContentFavorited = async(idContent) =>
    await api.get(`/content/isFavorited?id=${idContent}`);

const createContent = async(content, idTrail) => {
    if (content.category !== "initial") {
        content = {
            ...content,
            idTrail: idTrail
        }
    }
    return await api.post("/content/create", content);
};

const showContent = async(id) => await api.get(`/content/show/${id}`);

const updateContent = async(id, data) =>
    await api.put(`content/update/${id}`, data);

const deleteContent = async(idContent) =>
    await api.delete(`content/delete/${idContent}`);

export const contentService = {
    verifyContentFavorited,
    createContent,
    showContent,
    updateContent,
    deleteContent,
};