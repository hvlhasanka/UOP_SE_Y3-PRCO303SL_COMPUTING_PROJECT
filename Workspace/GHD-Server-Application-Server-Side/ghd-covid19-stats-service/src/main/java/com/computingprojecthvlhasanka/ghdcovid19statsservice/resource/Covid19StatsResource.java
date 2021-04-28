package com.computingprojecthvlhasanka.ghdcovid19statsservice.resource;

import com.computingprojecthvlhasanka.ghdcovid19statsservice.model.Covid19Stats;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/latest-covid19-stats")
public class Covid19StatsResource {

  @Autowired
  private RestTemplate restTemplate;

  @GetMapping(value = "")
  public Covid19Stats getCovid19Stats(){
    Covid19Stats latestCovid19Stats = restTemplate.getForObject("https://www.hpb.health.gov.lk/api/get-current-statistical", Covid19Stats.class);
    return latestCovid19Stats;
  }

}
