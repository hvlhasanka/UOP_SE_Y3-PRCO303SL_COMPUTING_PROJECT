package com.computingprojecthvlhasanka.ghdserverapp.auth.config;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
  
  /**
   * Ensuring unauthorized users are not allowed to access the springboot routing controller paths
   */
  @Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authenticationException) throws IOException, ServletException {

    // Response status is assigned as 401 - unauthorized
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    // Response content type is assigned as a json value
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);

    // Preparing the response message
		String responseMessage;

    // Extracting any exceptions included in the request
		final Exception requestException = (Exception) request.getAttribute("exception");

    // If there is an exception in the request, it will be used to generate the response message
    // Otherwise, if now exceptions were found in the request, 'authenticationException' will be used
		if (requestException != null) {
			
      // Creating a mapper with the 'cause' keyword and the 'requestException'
			byte[] body = new ObjectMapper().writeValueAsBytes(Collections.singletonMap("cause", requestException.toString()));

      // Generate response configurations are the sent to the client-side through the output stream
			response.getOutputStream().write(body);

		}
    else{
      // Checking whether the cause is available and it will be assigned into the 'responseMessage' if it's available
      if (authenticationException.getCause() != null) {
        responseMessage = authenticationException.getCause().toString() + " " + authenticationException.getMessage();
      } 
      else {
        responseMessage = authenticationException.getMessage();
      }

      // Creating a mapper with the 'error' keyword and the initialized 'responseMessage'
      byte[] body = new ObjectMapper().writeValueAsBytes(Collections.singletonMap("error", responseMessage));

      // Generate response configurations are the sent to the client-side through the output stream
      response.getOutputStream().write(body);
    }

	}

}
