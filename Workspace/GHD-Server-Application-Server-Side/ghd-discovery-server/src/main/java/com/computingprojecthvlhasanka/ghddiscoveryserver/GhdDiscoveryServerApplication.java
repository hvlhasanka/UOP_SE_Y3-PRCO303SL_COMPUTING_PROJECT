package com.computingprojecthvlhasanka.ghddiscoveryserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class GhdDiscoveryServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhdDiscoveryServerApplication.class, args);
	}

}
