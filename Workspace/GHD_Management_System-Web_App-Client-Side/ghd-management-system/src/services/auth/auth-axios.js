import axios from "axios";

const authAxiosInstance = axios.create({
  baseURL: "http://localhost:8080/ghd/api-v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default authAxiosInstance;
