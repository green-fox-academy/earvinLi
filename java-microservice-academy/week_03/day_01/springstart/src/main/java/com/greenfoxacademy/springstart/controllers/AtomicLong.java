package com.greenfoxacademy.springstart.controllers;

public class AtomicLong {
  long greetCount;
  String content;

  public AtomicLong(long greetCount, String content) {
    this.greetCount = greetCount;
    this.content = content;
  }

  public long getGreetCount() {
    return greetCount;
  }

  public String getContent() {
    return content;
  }

  public void setGreetCount(long greetCount) {
    this.greetCount = greetCount;
  }

  public void setContent(String content) {
    this.content = content;
  }
}
