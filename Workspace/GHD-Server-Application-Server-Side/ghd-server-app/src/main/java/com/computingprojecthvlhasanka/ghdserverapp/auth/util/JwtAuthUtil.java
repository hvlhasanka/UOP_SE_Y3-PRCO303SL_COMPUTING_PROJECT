package com.computingprojecthvlhasanka.ghdserverapp.auth.util;

import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Service
public class JwtAuthUtil {
  
  private String secretKey;
  private int jwtExpirationMilliseconds;
  private int jwtRefreshExpirationMilliseconds;

  @Value("${jwt.secretKey}")
  public void setSecretKey(String secretKey) {
    this.secretKey = secretKey;
  }

  @Value("${jwt.jwtExpirationMilliseconds}")
  public void setJwtExpirationMilliseconds(int jwtExpirationMilliseconds) {
    this.jwtExpirationMilliseconds = jwtExpirationMilliseconds;
  }

  @Value("${jwt.jwtRefreshExpirationMilliseconds}")
	public void setJwtRefreshExpirationMilliseconds(int jwtRefreshExpirationMilliseconds) {
		this.jwtRefreshExpirationMilliseconds = jwtRefreshExpirationMilliseconds;
	}

  /**
   * Generate jwt token
   * @param userDetails
   * @return
   */
  public String generateJwtToken(UserDetails userDetails) {
    // Claims are the contents within the payload in the data packet
    Map<String, Object> claims = new HashMap<>();

    Collection<? extends GrantedAuthority> roles = userDetails.getAuthorities();

		if (roles.contains(new SimpleGrantedAuthority("ROLE_ADMINISTRATOR"))) {
			claims.put("isAdministrator", true);
		}
		if (roles.contains(new SimpleGrantedAuthority("ROLE_OPERATOR"))) {
			claims.put("isOperator", true);
		}
    if (roles.contains(new SimpleGrantedAuthority("ROLE_REGISTERED_PUBLIC_USER"))) {
			claims.put("isRegisteredPublicUser", true);
		}

		return doGenerateJwtToken(claims, userDetails.getUsername());
  }

  /**
   * Creating the structure of the jwt token -
   * Assigning the claims - payload contents
   * Assigning the subject - user's email address or key variable
   * Assigning jwt token created datatime in milliseconds
   * Assigning jwt token expiration datatime by incrementing the current datatime with the declared expiration milliseconds
   * Encrypting the newly created token using the HS512 algorithm and the declared secret key
   * Compressing the newly created token.
   * @param claims
   * @param subject
   * @return
   */
  private String doGenerateJwtToken(Map<String, Object> claims, String subject) {
		return Jwts.builder()
      .setClaims(claims)
      .setSubject(subject)
      .setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMilliseconds))
        .signWith(SignatureAlgorithm.HS512, secretKey)
        .compact();
	}
  
  /**
   * Creating a new jwt token if the current jwt token has expired
   * @param claims
   * @param subject
   * @return
   */
  public String doGenerateRefreshToken(Map<String, Object> claims, String subject) {

		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + jwtRefreshExpirationMilliseconds))
				.signWith(SignatureAlgorithm.HS512, secretKey).compact();

	}

  /**
   * Validating retrieved jwt token to check the jwt token has been tampered
   * @param authJwtToken
   * @return
   */
  public boolean validateJwtToken(String authJwtToken) {
		try {

			// Validating jwt token
			Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(authJwtToken);
			return true;

		} catch (SignatureException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException jwtTokenTamperingException) {
     
      // Checking for the particular exceptions
      throw new BadCredentialsException("INVALID_CREDENTIALS-JWT_TOKEN_INVALID", jwtTokenTamperingException);

		} catch (ExpiredJwtException jwtTokenExpiredException) {

      // Checking whether the retrieved jwt token has expired according the assigned expiration timestamp
			throw jwtTokenExpiredException;

		}
	}
	
  /**
   * Extracting the email address from the retrieved jwt token
   * @param jwtToken
   * @return
   */
	public String getEmailAddressFromJwtToken(String jwtToken) {
    // Extracting the claims(payload) from the jwt token
		Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken).getBody();

    // Extracting the email address or the key variable
		return claims.getSubject();
	}

  /**
   * Extracting the user roles retrieved from the jwt token
   * @param authJwtToken
   * @return
   */
	public List<SimpleGrantedAuthority> getRolesFromJwtToken(String authJwtToken) {

    // Variable declaration | Initialization - to store user roles
		List<SimpleGrantedAuthority> userRoles = null;

    // Extracting the claims(payload) from the jwt token
		Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(authJwtToken).getBody();

    // Extracting the boolean values of the assigned user role claims
		Boolean isAdministrator = claims.get("isAdministrator", Boolean.class);
		Boolean isOperator = claims.get("isOperator", Boolean.class);
		Boolean isRegisteredPublicUser = claims.get("isRegisteredPublicUser", Boolean.class);

    // Checking the instance of the user roles and assigning the 'userRoles' variable
		if (isAdministrator != null && isAdministrator == true) {
			userRoles = Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMINISTRATOR"));
		}
		if (isOperator != null && isOperator == true) {
			userRoles = Arrays.asList(new SimpleGrantedAuthority("ROLE_OPERATOR"));
		}
    if (isRegisteredPublicUser != null && isRegisteredPublicUser == true) {
			userRoles = Arrays.asList(new SimpleGrantedAuthority("ROLE_REGISTERED_PUBLIC_USER"));
		}

		return userRoles;

	}

}
