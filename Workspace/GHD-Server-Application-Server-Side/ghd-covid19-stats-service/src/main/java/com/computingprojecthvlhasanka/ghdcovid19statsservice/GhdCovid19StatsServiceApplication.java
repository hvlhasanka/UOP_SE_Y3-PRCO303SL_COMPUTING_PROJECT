package com.computingprojecthvlhasanka.ghdcovid19statsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class GhdCovid19StatsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhdCovid19StatsServiceApplication.class, args);
	}

	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

}
