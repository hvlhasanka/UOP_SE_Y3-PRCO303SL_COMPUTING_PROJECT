/**
 * Model: AuthenticationResponse
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.model;

public class AuthenticationResponseModel {

  /* Class Attributes */
  // Declaring private class attributes (variables)
  private String jwtToken;

  /* Class Methods */
  // Default constructor
  public AuthenticationResponseModel() { }

  // Parameterized constructor
  public AuthenticationResponseModel(String jwtToken) {
    this.jwtToken = jwtToken;
  }

  // Setters and Getters
  public String getJwtToken() {
    return jwtToken;
  }

  public void setJwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
  }

}
