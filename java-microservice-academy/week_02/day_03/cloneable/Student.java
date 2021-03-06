package week_02.day_03.cloneable;

public class Student extends Person implements Cloneable {
  String previousOrganization;
  int skippedDays;

  public Student() {
    this("Jane Doe", 30, "female", "The School of Life");
  }

  public Student(String name, int age, String gender, String previousOrganization) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  void introduce() {
    System.out.printf(
        "Hi, I'm %s, a %s year old %s from %s who skipped %s days from the course already.",
        name, age, gender, previousOrganization, skippedDays
    );
  }

  void getGoal() {
    System.out.println("My goal is: Be a junior software developer.");
  }

  void skipDays(int numberOfDays) {
    this.skippedDays += numberOfDays;
  }

  @Override
  protected Object clone() throws CloneNotSupportedException {
    return super.clone();
  }
}
