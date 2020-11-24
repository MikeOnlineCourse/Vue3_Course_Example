import axios from "axios";

const photoRequest = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/",
});

export const getPhotoRequest = () => photoRequest.get("/photo/list");
