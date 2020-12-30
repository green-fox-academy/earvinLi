package com.jma.todo.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Todo extends BaseEntity {
  @Column private String title;
  @Column(columnDefinition = "BOOLEAN DEFAULT false") private boolean urgent;
  @Column(columnDefinition = "BOOLEAN DEFAULT false") private boolean done;

  public Todo() {}
  public Todo(String title) {
    this.title = title;
  }

  public String getTitle() {
    return title;
  }
}
