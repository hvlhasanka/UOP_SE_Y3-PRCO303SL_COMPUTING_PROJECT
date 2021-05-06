package com.computingprojecthvlhasanka.ghdhealthnewsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class GhdHealthNewsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhdHealthNewsServiceApplication.class, args);
	}

	/**
	 * ADD BEAN ANNOTATION -
	 * Create a new bean to create an 'RestTemplate' instance
	 */
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
	
}
