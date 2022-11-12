import api from "./api/index";

const getTrailsByUser = async() => await api.get("/user/getMyTrails");

const getTrailsNotSubscribe = async() => await api.get("/user/notSubscribeTrails");

const signTrail = async(id) => await api.post("/user/signTrail", { idTrail: id });

export const userService = { getTrailsByUser, getTrailsNotSubscribe, signTrail };