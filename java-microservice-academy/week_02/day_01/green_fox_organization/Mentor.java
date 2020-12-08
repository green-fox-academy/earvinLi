package week_02.day_01.green_fox_organization;

public class Mentor extends Person{
  String level;

  public Mentor() {
    this("Jane Doe", 30, "female", "intermediate");
  }

  public Mentor(String name, int age, String gender, String level) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  void introduce() {
    System.out.printf(
        "Hi, I'm %s, a %s year old %s %s mentor.",
        name, age, gender, level
    );
  }

  void getGoal() {
    System.out.println("My goal is: Educate brilliant junior software developers.");
  }
}
