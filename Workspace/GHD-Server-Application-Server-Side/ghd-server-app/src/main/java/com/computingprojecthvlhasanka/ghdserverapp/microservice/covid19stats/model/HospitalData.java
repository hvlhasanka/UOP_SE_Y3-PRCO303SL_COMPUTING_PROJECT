/**
 * GHD Server App
 * Model: HospitalData
 */
package com.computingprojecthvlhasanka.ghdserverapp.microservice.covid19stats.model;

public class HospitalData {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private int id;
  private int hospital_id;
  private int cumulative_local;
  private int cumulative_foriegn;
  private int treatment_local;
  private int treatment_foriegn;
  private String created_at;
  private String updated_at;
  private String deleted_at;
  private int cumulative_total;
  private int treatment_total;
  private HospitalDetails hospital;

  /* Class Methods */
  // Default constructor
  public HospitalData() { }

  // Parameterized constructor
  public HospitalData(int id, int hospital_id, int cumulative_local, int cumulative_foriegn, int treatment_local, int treatment_foriegn, String created_at, String updated_at, String deleted_at, int cumulative_total, int treatment_total, HospitalDetails hospital) {
    this.id = id;
    this.hospital_id = hospital_id;
    this.cumulative_local = cumulative_local;
    this.cumulative_foriegn = cumulative_foriegn;
    this.treatment_local = treatment_local;
    this.treatment_foriegn = treatment_foriegn;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
    this.cumulative_total = cumulative_total;
    this.treatment_total = treatment_total;
    this.hospital = hospital;
  }

  // Setters and Getters
  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getHospital_id() {
    return this.hospital_id;
  }

  public void setHospital_id(int hospital_id) {
    this.hospital_id = hospital_id;
  }

  public int getCumulative_local() {
    return this.cumulative_local;
  }

  public void setCumulative_local(int cumulative_local) {
    this.cumulative_local = cumulative_local;
  }

  public int getCumulative_foriegn() {
    return this.cumulative_foriegn;
  }

  public void setCumulative_foriegn(int cumulative_foriegn) {
    this.cumulative_foriegn = cumulative_foriegn;
  }

  public int getTreatment_local() {
    return this.treatment_local;
  }

  public void setTreatment_local(int treatment_local) {
    this.treatment_local = treatment_local;
  }

  public int getTreatment_foriegn() {
    return this.treatment_foriegn;
  }

  public void setTreatment_foriegn(int treatment_foriegn) {
    this.treatment_foriegn = treatment_foriegn;
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

  public int getCumulative_total() {
    return this.cumulative_total;
  }

  public void setCumulative_total(int cumulative_total) {
    this.cumulative_total = cumulative_total;
  }

  public int getTreatment_total() {
    return this.treatment_total;
  }

  public void setTreatment_total(int treatment_total) {
    this.treatment_total = treatment_total;
  }

  public HospitalDetails gethospital() {
    return this.hospital;
  }

  public void sethospital(HospitalDetails hospital) {
    this.hospital = hospital;
  }


}
