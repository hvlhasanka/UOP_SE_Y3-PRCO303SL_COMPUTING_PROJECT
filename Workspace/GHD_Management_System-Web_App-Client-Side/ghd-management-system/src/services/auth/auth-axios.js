/**
 * GHD Management System - React Web App
 * AXIOS SERVICE INSTANCE | END USERS - ADMINISTRATOR & OPERATOR | Auth Axios Instance
 */
import axios from "axios";

const authAxiosInstance = axios.create({
  // DEVELOPMENT USE
  //baseURL: "http://localhost:8082/ghd/api-v1",
  // PRODUCTION USE
  baseURL: "https://ghd-server-application.herokuapp.com/ghd/api-v1",
  headers: {
    "Content-type": "application/json"
  }
});

export default authAxiosInstance;
