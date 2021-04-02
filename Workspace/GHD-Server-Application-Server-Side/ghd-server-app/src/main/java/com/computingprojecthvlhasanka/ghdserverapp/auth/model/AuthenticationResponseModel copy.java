/**
 * Model: AuthenticationResponse
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.model;

public class AuthenticationResponseModel {

  private String jwtToken;

  public AuthenticationResponseModel(String jwtToken) {
    this.jwtToken = jwtToken;
  }

  public AuthenticationResponseModel() {
  }

  public String getJwtToken() {
    return jwtToken;
  }

  public void setJwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
  }

}
