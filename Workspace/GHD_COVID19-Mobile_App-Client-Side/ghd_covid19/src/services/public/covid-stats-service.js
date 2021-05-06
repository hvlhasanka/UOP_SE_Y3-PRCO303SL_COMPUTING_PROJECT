import publicAxiosInstance from "./public-axios";

class CovidStatsService {

  // Retrieving latest covid19 stats from the server-side
  getLatestCovid19Stats(){
    return publicAxiosInstance.get("/latest-covid19-stats");
  }

}

export default new CovidStatsService();
