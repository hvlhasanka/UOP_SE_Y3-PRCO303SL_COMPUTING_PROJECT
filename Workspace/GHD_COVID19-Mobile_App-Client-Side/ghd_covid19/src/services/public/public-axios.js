import axios from "axios";

const publicAxiosInstance = axios.create({
  baseURL: "http://0.0.0.0:8082/ghd/api-v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default publicAxiosInstance;
