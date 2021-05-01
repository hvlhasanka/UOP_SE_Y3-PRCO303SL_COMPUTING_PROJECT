package com.computingprojecthvlhasanka.ghdserverapp.auth.config;

import com.computingprojecthvlhasanka.ghdserverapp.auth.service.CustomUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration extends WebSecurityConfigurerAdapter {
  
	@Autowired
	private CustomJwtAuthenticationFilter customJwtTokenAuthenticationFilter;
	
	@Autowired
  private JwtAuthenticationEntryPoint unauthorizedUserHandler;

  @Autowired
	private CustomUserDetailsService userDetailsService;

	// Password encorder type to encrypt the password
	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
	
	/**
	 * Creating the authentication manager builder
	 * Passed the password encorder to secure the password by encrypting it
	 */
	@Override
	public void configure (AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	/**
	 * Assigning the initial configurations when a request is sent
	 */
	@Override
	public void configure (HttpSecurity http) throws Exception {
		http.csrf().disable()
		.authorizeRequests().antMatchers("/").hasAnyRole("REGISTERED_PUBLIC_USER", "OPERATOR","ADMINISTRATOR")
		.antMatchers(/* these routes will not be authenticated and check the validity of the bearer jwt token */
			"/authenticate", 
			"/register", 
			"/latest-covid19-stats",
			"/health-news-details"
		).permitAll().anyRequest().authenticated()
		// If any exception occur
		.and().exceptionHandling()
		// Handling unauthorized users
		.authenticationEntryPoint(unauthorizedUserHandler)
		// Disabling the create of sessions within spring security to store the state of the user's authentication
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		// Assigning the filter to allow every authentication to be verifified with every request
		.and().addFilterBefore(customJwtTokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	}

}
