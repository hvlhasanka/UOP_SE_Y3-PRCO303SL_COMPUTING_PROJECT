package com.computingprojecthvlhasanka.ghdcovid19statsservice.model;

public class Covid19Stats {
  
  private Boolean success;
  private String message;
  private ResponseData data;

  public Covid19Stats() { }

  public Covid19Stats(Boolean success, String message, ResponseData data) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

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
