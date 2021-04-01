/**
 * Model: Login
 */

package com.computingprojecthvlhasanka.ghdserverapp.auth.model;

public class LoginModel {

    /* Class Attributes */
    // Declaring private class attributes (variables)
    private String emailAddress;
    private String password;
    private String role;

    /* Class Methods */
    // Default constructor
    public LoginModel() { }

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

    public String getRole() {
      return this.role;
    }
  
    public void setRole(String role) {
      this.role = role;
    }

}
