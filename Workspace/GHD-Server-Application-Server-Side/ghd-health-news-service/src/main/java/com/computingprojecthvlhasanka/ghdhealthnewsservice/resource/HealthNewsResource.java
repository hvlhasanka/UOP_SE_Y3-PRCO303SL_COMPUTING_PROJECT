/**
 * GHD Health News Microservice
 * Controller: HealthNewsResource
 */
package com.computingprojecthvlhasanka.ghdhealthnewsservice.resource;

import com.computingprojecthvlhasanka.ghdhealthnewsservice.model.HealthNews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/health-news")
public class HealthNewsResource {
  
  /**
   * Retrieving the 'RestTemplate' instance from the main class 
   * using the 'Autowired' injection
   */
  @Autowired
  private RestTemplate restTemplate;

  @Autowired
  ObjectMapper objectMapper = null;

  /**
   * Retrieving the value from the 'application.properties' file, 
   * (environment variable)
   */
  @Value("${news-api-key}")
  private String newsAPIKey;
  
  /**
   * Retrieving the external API data (Health News) through the GET response
   */
  @GetMapping(value = "")
  public HealthNews getHealthNews(){
    try {
      /**
       * NEWS API Params -
       * News Type - top-headlines
       * Country - us
       * Category - health
       * Keyword (q) - covid
       * Results Page Size - 5
       */
      String newsAPIURL = String.format("https://newsapi.org/v2/top-headlines?country=us&category=health&q=covid&pageSize=5&apiKey=%s", newsAPIKey);
      String responseDataString = restTemplate.getForObject(newsAPIURL, String.class);
      HealthNews healthNewsDetails;
      healthNewsDetails = objectMapper.readValue(responseDataString, HealthNews.class);
      return healthNewsDetails;
		} catch (Exception responseException) {
		  System.out.println("News API Response Error: " + responseException);
		}
    return null;
  }

}
