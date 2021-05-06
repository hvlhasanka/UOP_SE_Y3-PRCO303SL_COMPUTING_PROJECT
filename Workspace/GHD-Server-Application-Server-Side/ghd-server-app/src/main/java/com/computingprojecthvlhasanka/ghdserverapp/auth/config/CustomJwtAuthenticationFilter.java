package com.computingprojecthvlhasanka.ghdserverapp.auth.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.computingprojecthvlhasanka.ghdserverapp.auth.util.JwtAuthUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class CustomJwtAuthenticationFilter extends OncePerRequestFilter {

  @Autowired
	private JwtAuthUtil jwtTokenUtil;

  /**
   * 
   * @param request
   * @param response
   * @param filterChain
   * @throws ServletException
   * @throws IOException
   */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

      try{
        // Extracting the jwt token from the authorization bearer token 
        String jwtToken = extractJwtTokenFromRequest(request);

        // Checking whether the 'jwtToken' has text and the jwt token is valid
        if (StringUtils.hasText(jwtToken) && jwtTokenUtil.validateJwtToken(jwtToken)) {

          // Creating a new user details object by passing
          // the email address, password and user role
          UserDetails userDetails = new User(jwtTokenUtil.getEmailAddressFromJwtToken(jwtToken), "",
              jwtTokenUtil.getRolesFromJwtToken(jwtToken));

          // Creating a UsernamePasswordAuthenticationToken object by passing the newly created 'userDetails'
          UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
              userDetails, null, userDetails.getAuthorities());
          // After setting the Authentication in the context, we specify
          // that the current user is authenticated. So it passes the
          // Spring Security Configurations successfully.

          // Assigning the authentication in the context to declare the request used is authenticated 
          // and spring security configurations are successfully passed
          SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        } 
        else {
          System.out.println("Unable to set the Security Context - New Login Authentication - Generate JWT Token");
        }
      }
      catch (ExpiredJwtException expiredJwtTokenException) {

        // Extracting 'isRefreshToken' from the request header
        String isRefreshToken = request.getHeader("isRefreshToken");
        // Extracting request URL
        String requestURL = request.getRequestURL().toString();
        // Checking whether the request is valid to generate a new jwt token
        if (isRefreshToken != null && isRefreshToken.equals("true") && requestURL.contains("refreshjwttoken")) {
          onRefreshJwtToken(expiredJwtTokenException, request);
        }
        else{
          request.setAttribute("exception", expiredJwtTokenException);
        }
      
      } 
      catch (BadCredentialsException invalidCredentialsException) {
        request.setAttribute("exception", invalidCredentialsException);
        throw invalidCredentialsException;
      }
      
      // Retrieving the remaining filters in the filter chain
		  filterChain.doFilter(request, response);
	}

  /**
   * Extracting current payload details from the current jwt token claims and forwarding to the new jwt token
   * @param expiredJwtTokenException
   * @param request
   */
  private void onRefreshJwtToken(ExpiredJwtException expiredJwtTokenException, HttpServletRequest request) {

    // Creating new 'UsernamePasswordAuthenticationToken' using null values
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
				null, null, null);
    // After setting the Authentication in the context, we specify
    // that the current user is authenticated. So it passes the
    // Spring Security Configurations successfully.

    // Assigning the authentication in the context to declare the request used is authenticated 
    // and spring security configurations are successfully passed
		SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

    // Assigning the current claims(payload) into the new Jwt token
		request.setAttribute("claims", expiredJwtTokenException.getClaims());

	}


  /**
   * Extracting the jwt token from the authorization request
   * Authorization request has two parts, bearer text and jwt token
   * "Bearer <jwt token>"
   * @param request
   * @return
   */
	private String extractJwtTokenFromRequest(HttpServletRequest request) {
    // Extracting the 'Authrization' section from the header in the request
		String bearerToken = request.getHeader("Authorization");
    // Checking the availability of the bearer token and the starting text
    // Seperating the bearer token apart from the 'Bearer' text and the jwt token
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7, bearerToken.length());
		}
		return null;
	}

}
