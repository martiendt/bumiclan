import axios from "axios";
import cookie from "@point-hub/vue-cookie";
import router from "./router";
import { useAppState } from "@/store/appStateStore.js";

const instance = axios.create({
  timeout: 600 * 2 * 1000, // 2 minutes
});

instance.interceptors.request.use(
  (config) => {
    if (import.meta.env.NODE_ENV !== "production") {
      // Log axios request on development
      console.log("Request: ", config.url);
      console.log("Request: ", config);
    }

    // Add auth token
    const token = cookie.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    console.log("Response Error: ", error.response);
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Log axios response on development
    if (import.meta.env.NODE_ENV !== "production") {
      console.log("Response: ", response.config.url);
      console.log("Response: ", response.data);
    }
    return response;
  },
  function (error) {
    if (!error.response) {
      // Network error
      return Promise.reject(error);
    } else {
      // If reponse is unauthorized (401) then redirect user to login page
      if (error.response.status == 401) {
        cookie.remove("userId");
        cookie.remove("username");
        cookie.remove("firstName");
        cookie.remove("lastName");
        cookie.remove("accessToken");
        cookie.remove("refreshToken");
        const appState = useAppState();
        appState.isSignedIn = false;
        router.push("/signin");
      }
      console.log("Response Error: ", error.response.data.error);
      return Promise.reject(error.response.data.error);
    }
  }
);

export default instance;
