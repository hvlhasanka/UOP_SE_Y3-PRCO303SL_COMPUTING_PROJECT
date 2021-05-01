/**
 * GHD Server App
 * Model: ResponseData
 */
package com.computingprojecthvlhasanka.ghdserverapp.microservice.covid19stats.model;

import java.util.List;

public class ResponseData {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private String update_date_time;
  private int local_name_cases;
  private int local_total_cases;
  private int local_total_number_of_individuals_in_hospitals;
  private int local_deaths;
  private int local_new_deaths;
  private int local_recovered;
  private int local_active_cases;
  private int global_new_cases;
  private int global_total_cases;
  private int global_deaths;
  private int global_new_deaths;
  private int global_recovered;
  private int total_pcr_testing_count;
  private List<DailyPCRTestingData> daily_pcr_testing_data;
  private List<HospitalData> hospital_data;

  /* Class Methods */
  // Default constructor
  public ResponseData() { }

  // Parameterized constructor
  public ResponseData(String update_date_time, int local_name_cases, int local_total_cases, int local_total_number_of_individuals_in_hospitals, int local_deaths, int local_new_deaths, int local_recovered, int local_active_cases, int global_new_cases, int global_total_cases, int global_deaths, int global_new_deaths, int global_recovered, int total_pcr_testing_count, List<DailyPCRTestingData> daily_pcr_testing_data, List<HospitalData> hospital_data) {
    this.update_date_time = update_date_time;
    this.local_name_cases = local_name_cases;
    this.local_total_cases = local_total_cases;
    this.local_total_number_of_individuals_in_hospitals = local_total_number_of_individuals_in_hospitals;
    this.local_deaths = local_deaths;
    this.local_new_deaths = local_new_deaths;
    this.local_recovered = local_recovered;
    this.local_active_cases = local_active_cases;
    this.global_new_cases = global_new_cases;
    this.global_total_cases = global_total_cases;
    this.global_deaths = global_deaths;
    this.global_new_deaths = global_new_deaths;
    this.global_recovered = global_recovered;
    this.total_pcr_testing_count = total_pcr_testing_count;
    this.daily_pcr_testing_data = daily_pcr_testing_data;
    this.hospital_data = hospital_data;
  }

  // Setters and Getters
  public String getUpdate_date_time() {
    return this.update_date_time;
  }

  public void setUpdate_date_time(String update_date_time) {
    this.update_date_time = update_date_time;
  }

  public int getLocal_name_cases() {
    return this.local_name_cases;
  }

  public void setLocal_name_cases(int local_name_cases) {
    this.local_name_cases = local_name_cases;
  }

  public int getLocal_total_cases() {
    return this.local_total_cases;
  }

  public void setLocal_total_cases(int local_total_cases) {
    this.local_total_cases = local_total_cases;
  }

  public int getLocal_total_number_of_individuals_in_hospitals() {
    return this.local_total_number_of_individuals_in_hospitals;
  }

  public void setLocal_total_number_of_individuals_in_hospitals(int local_total_number_of_individuals_in_hospitals) {
    this.local_total_number_of_individuals_in_hospitals = local_total_number_of_individuals_in_hospitals;
  }

  public int getLocal_deaths() {
    return this.local_deaths;
  }

  public void setLocal_deaths(int local_deaths) {
    this.local_deaths = local_deaths;
  }

  public int getLocal_new_deaths() {
    return this.local_new_deaths;
  }

  public void setLocal_new_deaths(int local_new_deaths) {
    this.local_new_deaths = local_new_deaths;
  }

  public int getLocal_recovered() {
    return this.local_recovered;
  }

  public void setLocal_recovered(int local_recovered) {
    this.local_recovered = local_recovered;
  }

  public int getLocal_active_cases() {
    return this.local_active_cases;
  }

  public void setLocal_active_cases(int local_active_cases) {
    this.local_active_cases = local_active_cases;
  }

  public int getGlobal_new_cases() {
    return this.global_new_cases;
  }

  public void setGlobal_new_cases(int global_new_cases) {
    this.global_new_cases = global_new_cases;
  }

  public int getGlobal_total_cases() {
    return this.global_total_cases;
  }

  public void setGlobal_total_cases(int global_total_cases) {
    this.global_total_cases = global_total_cases;
  }

  public int getGlobal_deaths() {
    return this.global_deaths;
  }

  public void setGlobal_deaths(int global_deaths) {
    this.global_deaths = global_deaths;
  }

  public int getGlobal_new_deaths() {
    return this.global_new_deaths;
  }

  public void setGlobal_new_deaths(int global_new_deaths) {
    this.global_new_deaths = global_new_deaths;
  }

  public int getGlobal_recovered() {
    return this.global_recovered;
  }

  public void setGlobal_recovered(int global_recovered) {
    this.global_recovered = global_recovered;
  }

  public int getTotal_pcr_testing_count() {
    return this.total_pcr_testing_count;
  }

  public void setTotal_pcr_testing_count(int total_pcr_testing_count) {
    this.total_pcr_testing_count = total_pcr_testing_count;
  }

  public List<DailyPCRTestingData> getDaily_pcr_testing_data() {
    return this.daily_pcr_testing_data;
  }

  public void setDaily_pcr_testing_data(List<DailyPCRTestingData> daily_pcr_testing_data) {
    this.daily_pcr_testing_data = daily_pcr_testing_data;
  }

  public List<HospitalData> getHospital_data() {
    return this.hospital_data;
  }

  public void setHospital_data(List<HospitalData> hospital_data) {
    this.hospital_data = hospital_data;
  }


}
