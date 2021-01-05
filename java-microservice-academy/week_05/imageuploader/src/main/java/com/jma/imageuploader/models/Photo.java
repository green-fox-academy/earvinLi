package com.jma.imageuploader.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "photos")
public class Photo {
  @Id private String id;
  private String title;
  private Binary image;

  public Photo(String title) {
    this.title = title;
  }

  public String getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public Binary getImage() {
    return image;
  }

  public void setImage(Binary image) {
    this.image = image;
  }
}
