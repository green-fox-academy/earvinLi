package week_02.day_01.green_fox_organization;

public class Person {
  String name;
  int age;
  String gender;

  public Person() {
    this("Jane Doe", 30, "female");
  }

  public Person(String name, int age, String gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  void introduce() {
    System.out.printf("Hi, I'm %s, a age %s old %s.", name, age, gender);
  }

  void getGoal() {
    System.out.println("My goal is: Live for the moment!");
  }
}
