/**
 * GHD Covid19 Stats Microservice
 * Controller: Covid19StatsResource
 */
package com.computingprojecthvlhasanka.ghdcovid19statsservice.resource;

import com.computingprojecthvlhasanka.ghdcovid19statsservice.model.Covid19Stats;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/latest-covid19-stats")
public class Covid19StatsResource {

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
  @Value("${hpb-health-covid19-stats-api-url}")
  private String hpbHealthApiUrl;

  /**
   * Retrieving the external API data (Covid19 Stats) through the GET response
   */
  @GetMapping(value = "")
  public Covid19Stats getCovid19Stats(){
    Covid19Stats latestCovid19Stats = restTemplate.getForObject(hpbHealthApiUrl, Covid19Stats.class);
    return latestCovid19Stats;
  }

}
