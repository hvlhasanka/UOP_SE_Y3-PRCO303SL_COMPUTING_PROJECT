/**
 * GHD Covid19 Stats Microservice
 * Model: ArticlesData
 */
package com.computingprojecthvlhasanka.ghdhealthnewsservice.model;

public class ArticlesData {
  
  /* Class Attributes */
  // Declaring private class attributes (variables)
  private SourceData source;
  private String author;
  private String title;
  private String description;
  private String url;
  private String urlToImage;
  private String publishedAt;
  private String content;

  /* Class Methods */
  // Default constructor
  public ArticlesData() { }

  // Parameterized constructor
  public ArticlesData(SourceData source, String author, String title, String description, String url, String urlToImage, String publishedAt, String content) {
    this.source = source;
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.content = content;
  }

  // Setters and Getters
  public SourceData getSource() {
    return this.source;
  }

  public void setSource(SourceData source) {
    this.source = source;
  }

  public String getAuthor() {
    return this.author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getUrl() {
    return this.url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getUrlToImage() {
    return this.urlToImage;
  }

  public void setUrlToImage(String urlToImage) {
    this.urlToImage = urlToImage;
  }

  public String getPublishedAt() {
    return this.publishedAt;
  }

  public void setPublishedAt(String publishedAt) {
    this.publishedAt = publishedAt;
  }

  public String getContent() {
    return this.content;
  }

  public void setContent(String content) {
    this.content = content;
  }


}
