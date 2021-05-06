/**
 * Model: AuthenticationRequest
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.model;

public class AuthenticationRequestModel {

  /* Class Attributes */
  // Declaring private class attributes (variables)
  private String emailAddress;
  private String password;

  /* Class Methods */
  // Default constructor
  public AuthenticationRequestModel() { }

  // Parameterized constructor
  public AuthenticationRequestModel(String emailAddress, String password) {
    this.emailAddress = emailAddress;
    this.password = password;
  }

  // Setters and Getters
  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}
