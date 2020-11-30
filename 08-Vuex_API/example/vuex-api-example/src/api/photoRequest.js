import axios from "axios";

const photoRequest = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/",
});

photoRequest.interceptors.request.use(
  (config) => {
    console.log("請求發起前");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
photoRequest.interceptors.response.use(
  (response) => {
    console.log("請求發起後");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getPhotoRequest = () => photoRequest.get("/photo/list");
