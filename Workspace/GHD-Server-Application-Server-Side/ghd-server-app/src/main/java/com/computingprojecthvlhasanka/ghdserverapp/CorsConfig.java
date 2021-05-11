package com.computingprojecthvlhasanka.ghdserverapp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    /**
     * PURPOSE: DEVELOPMENT USE
     */
    // @Bean
    // public WebMvcConfigurer corsConfigurer() {
    //     return new WebMvcConfigurer() {
    //         @Override
    //         public void addCorsMappings(CorsRegistry registry) {
    //             registry.addMapping("/**")
    //               .allowedMethods("GET", "POST", "PUT", "DELETE")
    //               .allowedHeaders("*")
    //               .allowedOrigins("http://localhost:3000")
    //               .allowedOrigins("http://0.0.0.0:8081");
    //         }
    //     };
    // }

    /**
     * PURPOSE: PRODUCTION USE
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                  .allowedMethods("GET", "POST", "PUT", "DELETE")
                  .allowedHeaders("*")
                  .allowedOrigins("https://ghd-management-system.web.app");
            }
        };
    }

}
