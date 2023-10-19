import axios from "axios";
import store from "../store";
const axiosInstance = axios.create({});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    let params = new URLSearchParams();
    let token = store.getters.getToken;
    params.append("auth", token);
    config.params = params;
    return config;
  }
  //   function (error) {
  //     // Do something with request error
  //     return Promise.reject(error);
  //   }
);
