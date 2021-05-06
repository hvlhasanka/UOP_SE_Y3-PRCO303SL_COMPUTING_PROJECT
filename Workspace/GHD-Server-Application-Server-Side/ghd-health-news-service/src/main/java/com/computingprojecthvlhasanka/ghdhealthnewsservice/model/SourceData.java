/**
 * GHD Health News Microservice
 * Model: SourceData
 */
package com.computingprojecthvlhasanka.ghdhealthnewsservice.model;

public class SourceData {

  /* Class Attributes */
  // Declaring private class attributes (variables)
  private String id;
  private String name;

  /* Class Methods */
  // Default constructor
  public SourceData() { }

  // Parameterized constructor
  public SourceData(String id, String name) {
    this.id = id;
    this.name = name;
  }
  
  // Setters and Getters
  public String getId() {
    return this.id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }
  

}
