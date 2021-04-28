package com.computingprojecthvlhasanka.ghdcovid19statsservice.model;

public class DailyPCRTestingData {
  
  private String date;
  private int count;

  public DailyPCRTestingData() { }

  public DailyPCRTestingData(String date, int count) {
    this.date = date;
    this.count = count;
  }

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
