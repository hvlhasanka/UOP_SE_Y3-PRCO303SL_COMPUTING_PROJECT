/**
 * Model: AuthenticationResponse
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.model;

public class AuthenticationResponse {

  private String jwtToken;

  public AuthenticationResponse(String jwtToken) {
    this.jwtToken = jwtToken;
  }

  public AuthenticationResponse() {
  }

  public String getJwtToken() {
    return jwtToken;
  }

  public void setJwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
  }

}
