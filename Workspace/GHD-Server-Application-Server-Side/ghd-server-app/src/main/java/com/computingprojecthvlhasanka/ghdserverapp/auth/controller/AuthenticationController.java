package com.computingprojecthvlhasanka.ghdserverapp.auth.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.impl.DefaultClaims;

import com.computingprojecthvlhasanka.ghdserverapp.auth.model.AuthenticationRequest;
import com.computingprojecthvlhasanka.ghdserverapp.auth.model.AuthenticationResponse;
import com.computingprojecthvlhasanka.ghdserverapp.auth.model.UserDTO;
import com.computingprojecthvlhasanka.ghdserverapp.auth.service.CustomUserDetailsService;
import com.computingprojecthvlhasanka.ghdserverapp.auth.util.JwtAuthUtil;

@RestController
public class AuthenticationController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private CustomUserDetailsService userDetailsService;

  @Autowired
  private JwtAuthUtil jwtAuthTokenUtil;

  /**
   * Routing path for user authentication
   * Passing the user entered email address and the password to the authentication 
   * manager to validate the credentails
   * @param authenticationRequest
   * @return
   * @throws Exception
   */
  @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
  public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
      throws Exception {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        authenticationRequest.getEmailAddress(), 
        authenticationRequest.getPassword()
        )
      );
    } catch (DisabledException e) {
      throw new Exception("USER_DISABLED", e);
    } catch (BadCredentialsException e) {
      throw new Exception("INVALID_CREDENTIALS", e);
    }

    // Retrieving the email address and creating the user details
    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmailAddress());

    // Creating the jwt token by passing the user details
    final String token = jwtAuthTokenUtil.generateJwtToken(userDetails);

    // Retuning jwt token to the client-side with the response status code 200
    return ResponseEntity.ok(new AuthenticationResponse(token));
  }

  /**
   * Routing path for user registration
   * Passing retrieved user details from the request and storing it in the MySQL DB
   * @param user
   * @return
   * @throws Exception
   */
  @RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}

  /**
   * Routing path for jwt token refresh
   * Getting the claims from the current jwt token and create a new jwt token
   * Returning the newly created jwt token as a response to the client-side
   * @param request
   * @return
   * @throws Exception
   */
  @RequestMapping(value = "/refreshjwttoken", method = RequestMethod.GET)
	public ResponseEntity<?> refreshtoken(HttpServletRequest request) throws Exception {
    // Extracting the claims(payload) from the current jwt token in the HTTP request
		DefaultClaims currentClaims = (io.jsonwebtoken.impl.DefaultClaims) request.getAttribute("claims");

    // Retrieving a map of the current jwt token claims(payload)
		Map<String, Object> currentClaimsMap = convertJsonWebTokenClaimsToMap(currentClaims);

    // Generating the new jwt token by passing the map of current claims(payload)
		String jwtToken = jwtAuthTokenUtil.doGenerateRefreshToken(currentClaimsMap, currentClaimsMap.get("sub").toString());

    // Returning the newly generated jwt token to the client-side with the response and
    // with a response status of 200
		return ResponseEntity.ok(new AuthenticationResponse(jwtToken));
	}

  /**
   * Converting claims into a map of strings and objects
   * @param claims
   * @return
   */
	public Map<String, Object> convertJsonWebTokenClaimsToMap(DefaultClaims currentClaims) {

    // Declaring a new variable in map data type of string and objects
		Map<String, Object> currentClaimsMap = new HashMap<String, Object>();

    // For loop | Adding the current jwt token claims(payload) into the map 
		for (Entry<String, Object> entry : currentClaims.entrySet()) {
			currentClaimsMap.put(entry.getKey(), entry.getValue());
		}

    // Returning the initialized map variable with the current jwt token claims(payload)
		return currentClaimsMap;
	}

}
