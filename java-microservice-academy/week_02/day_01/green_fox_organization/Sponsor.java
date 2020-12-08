package week_02.day_01.green_fox_organization;

public class Sponsor extends Person{
  String company;
  int hiredStudents;

  public Sponsor() {
    this("Jane Doe", 30, "female", "Google");
  }

  public Sponsor(String name, int age, String gender, String company) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }

  void getGoal() {
    System.out.println("My goal is: Hire brilliant junior software developers.");
  }

  void introduce() {
    System.out.printf(
        "Hi, I'm %s, a %s year old %s who represents %s and hired %s students so far.",
        name, age, gender, company, hiredStudents
    );
  }

  void hire() {
    this.hiredStudents++;
  }
}
