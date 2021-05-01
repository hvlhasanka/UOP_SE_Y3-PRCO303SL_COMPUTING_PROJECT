/**
 * GHD Server App
 * Model: HealthNews
 */
package com.computingprojecthvlhasanka.ghdserverapp.microservice.healthnewsdetails.model;

import java.util.List;

public class HealthNews {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private String status;
  private int totalResults;
  private List<ArticlesData> articles;

   /* Class Methods */
  // Default constructor
  public HealthNews() { }

  // Parameterized constructor
  public HealthNews(String status, int totalResults, List<ArticlesData> articles) {
    this.status = status;
    this.totalResults = totalResults;
    this.articles = articles;
  }
  
  // Setters and Getters
  public String getStatus() {
    return this.status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public int getTotalResults() {
    return this.totalResults;
  }

  public void setTotalResults(int totalResults) {
    this.totalResults = totalResults;
  }

  public List<ArticlesData> getArticles() {
    return this.articles;
  }

  public void setArticles(List<ArticlesData> articles) {
    this.articles = articles;
  }
  

}
