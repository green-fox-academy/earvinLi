package com.jma.redditapimockup.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Post {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
  @Column(nullable = false) private String title;
  @Column(nullable = false, columnDefinition = "text") private String url;
  @CreationTimestamp @Temporal(TemporalType.TIMESTAMP) @Column private Date timestamp;
  @Column private int score = 0;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public Date getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }
}
