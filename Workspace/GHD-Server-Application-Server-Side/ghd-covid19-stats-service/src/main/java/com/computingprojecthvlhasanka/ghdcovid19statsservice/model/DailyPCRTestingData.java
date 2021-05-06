/**
 * GHD Covid19 Stats Microservice
 * Model: DailyPCRTestingData
 */
package com.computingprojecthvlhasanka.ghdcovid19statsservice.model;

public class DailyPCRTestingData {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private String date;
  private int count;

  /* Class Methods */
  // Default constructor
  public DailyPCRTestingData() { }

  // Parameterized constructor
  public DailyPCRTestingData(String date, int count) {
    this.date = date;
    this.count = count;
  }

  // Setters and Getters
  public String getDate() {
    return this.date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public int getCount() {
    return this.count;
  }

  public void setCount(int count) {
    this.count = count;
  }

  
}
