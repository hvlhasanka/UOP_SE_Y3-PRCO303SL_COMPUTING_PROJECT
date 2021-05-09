/**
 * GHD COVID19 - React Native Mobile App
 * SERVICE - Health News Service Service
 */
import publicAxiosInstance from "./public-axios";

class HealthNewsService {

  // Retrieving health news details from the server-side
  getHealthNewsDetails(){
    return publicAxiosInstance.get("/health-news-details");
  }

}

export default new HealthNewsService();
