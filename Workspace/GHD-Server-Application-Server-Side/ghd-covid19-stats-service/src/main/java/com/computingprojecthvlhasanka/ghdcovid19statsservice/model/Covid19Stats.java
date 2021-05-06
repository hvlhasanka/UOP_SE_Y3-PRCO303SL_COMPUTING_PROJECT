/**
 * GHD Covid19 Stats Microservice
 * Model: Covid19Stats
 */
package com.computingprojecthvlhasanka.ghdcovid19statsservice.model;

public class Covid19Stats {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private Boolean success;
  private String message;
  private ResponseData data;

  /* Class Methods */
  // Default constructor
  public Covid19Stats() { }

  // Parameterized constructor
  public Covid19Stats(Boolean success, String message, ResponseData data) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  // Setters and Getters
  public Boolean isSuccess() {
    return this.success;
  }

  public Boolean getSuccess() {
    return this.success;
  }

  public void setSuccess(Boolean success) {
    this.success = success;
  }

  public String getMessage() {
    return this.message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public ResponseData getData() {
    return this.data;
  }

  public void setData(ResponseData data) {
    this.data = data;
  }


}
