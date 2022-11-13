import api from "./api/index";

const verifyContentFavorited = async(idContent) => await api.get(`/content/isFavorited?id=${idContent}`);

export const contentService = {
    verifyContentFavorited,
};