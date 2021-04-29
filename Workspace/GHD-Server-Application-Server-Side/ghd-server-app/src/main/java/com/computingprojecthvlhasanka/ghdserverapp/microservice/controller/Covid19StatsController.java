package com.computingprojecthvlhasanka.ghdserverapp.microservice.controller;

import com.computingprojecthvlhasanka.ghdserverapp.microservice.model.Covid19Stats;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/latest-covid19-stats")
public class Covid19StatsController {
  
  /**
   * Retrieving the 'RestTemplate' instance from the main class 
   * using the 'Autowired' injection
   */
  @Autowired
  private RestTemplate restTemplate;

  /**
   * Retrieving the value from the 'application.properties' file 
   */
  @Value("${covid-19-stats-microservice-url}")
  private String covid19StatsMicroServiceURL;

  /**
   * Retrieving the microservice data through the GET response
   */
  @GetMapping(value = "")
  public Covid19Stats getCovid19Stats(){
    Covid19Stats latestCovid19Stats = restTemplate.getForObject(covid19StatsMicroServiceURL, Covid19Stats.class);
    return latestCovid19Stats;
  }

}
