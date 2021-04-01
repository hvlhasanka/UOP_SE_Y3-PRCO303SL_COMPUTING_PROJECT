/**
 * Model: AuthenticationRequest
 */
package com.computingprojecthvlhasanka.ghdserverapp.auth.model;

public class AuthenticationRequestModel {

  private String emailAddress;
  private String password;

  public AuthenticationRequestModel(String emailAddress, String password) {
    this.emailAddress = emailAddress;
    this.password = password;
  }

  public AuthenticationRequestModel() { }

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
