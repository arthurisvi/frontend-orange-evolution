import api from "./api/index";

const getTrailsByUser = async() => await api.get("/user/getMyTrails");

const getTrailsNotSubscribe = async() => await api.get("/user/notSubscribeTrails");

export const userService = { getTrailsByUser, getTrailsNotSubscribe };