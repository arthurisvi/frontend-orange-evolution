import api from "./api/index";
const token = localStorage.getItem("token");

const getUser = async() => await api.get("/user/myProfile")

const getTrailsByUser = async() => {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    return await api.get("/user/getMyTrails")
};

const getTrailsNotSubscribe = async() => {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    return await api.get("/user/notSubscribeTrails");
}


const getMyFavorites = async() => await api.get("user/favoritedContents");

const signTrail = async(id) =>
    await api.post("/user/signTrail", { idTrail: id });

const setStatusContent = async(id, idTrail, status) =>
    await api.post("/user/contentStatus", { idContent: id, status: status, idTrail: idTrail });

const setFavorite = async(id, idTrail, favorite) =>
    await api.post("/user/favoriteContent", {
        idContent: id,
        favorite: favorite,
        idTrail: idTrail,
    });

const login = async(data) => (await api.post("/login", data))

export const userService = {
    getTrailsByUser,
    getTrailsNotSubscribe,
    signTrail,
    setStatusContent,
    setFavorite,
    getMyFavorites,
    getUser,
    login
};