/**
 * GHD Management System - React Web App
 * AXIOS SERVICE INSTANCE | END USERS - ADMINISTRATOR & OPERATOR | Auth Axios Instance
 */
import axios from "axios";

const authAxiosInstance = axios.create({
  baseURL: "http://localhost:8080/ghd/api-v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default authAxiosInstance;
