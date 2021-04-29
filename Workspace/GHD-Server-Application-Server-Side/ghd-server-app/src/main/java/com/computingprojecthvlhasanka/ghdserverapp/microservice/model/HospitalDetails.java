/**
 * GHD Server App
 * Model: HospitalDetails
 */
package com.computingprojecthvlhasanka.ghdserverapp.microservice.model;

public class HospitalDetails {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private int id;
  private String name;
  private String name_si;
  private String name_ta;
  private String created_at;
  private String updated_at;
  private String deleted_at;

  /* Class Methods */
  // Default constructor
  public HospitalDetails() { }

  // Parameterized constructor
  public HospitalDetails(int id, String name, String name_si, String name_ta, String created_at, String updated_at, String deleted_at) {
    this.id = id;
    this.name = name;
    this.name_si = name_si;
    this.name_ta = name_ta;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }

  // Setters and Getters
  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getName_si() {
    return this.name_si;
  }

  public void setName_si(String name_si) {
    this.name_si = name_si;
  }

  public String getName_ta() {
    return this.name_ta;
  }

  public void setName_ta(String name_ta) {
    this.name_ta = name_ta;
  }

  public String getCreated_at() {
    return this.created_at;
  }

  public void setCreated_at(String created_at) {
    this.created_at = created_at;
  }

  public String getUpdated_at() {
    return this.updated_at;
  }

  public void setUpdated_at(String updated_at) {
    this.updated_at = updated_at;
  }

  public String getDeleted_at() {
    return this.deleted_at;
  }

  public void setDeleted_at(String deleted_at) {
    this.deleted_at = deleted_at;
  }


}
