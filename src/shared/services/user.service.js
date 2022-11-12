import api from "./api/index";

const getTrailsByUser = async() => await api.get("/user/getMyTrails");

const getTrailsNotSubscribe = async() =>
    await api.get("/user/notSubscribeTrails");

const getMyFavorites = async() => await api.get("user/favoritedContents");

const signTrail = async(id) =>
    await api.post("/user/signTrail", { idTrail: id });

const setStatusContent = async(id, status) =>
    await api.post("/user/contentStatus", { idContent: id, status: status });

const setFavorite = async(id, favorite) =>
    await api.post("/user/favoriteContent", {
        idContent: id,
        favorite: favorite,
    });

export const userService = {
    getTrailsByUser,
    getTrailsNotSubscribe,
    signTrail,
    setStatusContent,
    setFavorite,
    getMyFavorites,
};