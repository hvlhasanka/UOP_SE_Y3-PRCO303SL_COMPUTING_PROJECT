/**
 * GHD Server App
 * Controller: HealthNewsDetailsController
 */
package com.computingprojecthvlhasanka.ghdserverapp.microservice.healthnewsdetails.controller;

import java.net.InetAddress;

import com.computingprojecthvlhasanka.ghdserverapp.microservice.healthnewsdetails.model.HealthNews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/health-news-details")
public class HealthNewsDetailsController {
  
  /**
   * Retrieving the 'RestTemplate' instance from the main class 
   * using the 'Autowired' injection
   */
  @Autowired
  private RestTemplate restTemplate;

  /**
   * Retrieving the value from the 'application.properties' file,
   * (environment variable)
   */
  @Value("${health-news-details-microservice-url}")
  private String healthNewsDetailsMicroServiceURL;

  @Autowired
  Environment environment;
  /**
   * Retrieving the microservice data through the GET response
   */
  @GetMapping(value = "")
  public HealthNews getCovid19Stats(){
    HealthNews latestHealthNewsDetails = restTemplate.getForObject(healthNewsDetailsMicroServiceURL, HealthNews.class);
    return latestHealthNewsDetails;
  }

}
