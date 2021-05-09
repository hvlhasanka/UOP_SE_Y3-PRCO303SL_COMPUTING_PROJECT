/**
 * GHD COVID19 - React Native Mobile App
 * AXIOS SERVICE INSTANCE - Public Axios Instance
 */
import axios from "axios";

const publicAxiosInstance = axios.create({
  baseURL: "http://0.0.0.0:8082/ghd/api-v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default publicAxiosInstance;
