/**
 * GHD COVID19 - React Native Mobile App
 * AXIOS SERVICE INSTANCE - Public Axios Instance
 */
import axios from "axios";

const publicAxiosInstance = axios.create({
  // DEVELOPMENT USE
  //baseURL: "http://0.0.0.0:8082/ghd/api-v1",
  // PRODUCTION USE
  baseURL: "https://ghd-server-application.herokuapp.com/ghd/api-v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default publicAxiosInstance;
