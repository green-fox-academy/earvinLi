package week_02.day_01.green_fox_organization;

import java.util.ArrayList;

public class Cohort {
  String name;
  ArrayList<Student> students;
  ArrayList<Mentor> mentors;

  public Cohort(String name) {
    this.name = name;
    this.students = new ArrayList<>();
    this.mentors = new ArrayList<>();
  }

  void info() {
    System.out.printf(
        "The %s cohort has %s students and %s mentors.",
        name, students.size(), mentors.size()
    );
  }

  void addStudent(Student student) {
    students.add(student);
  }

  void addMentor(Mentor mentor) {
    mentors.add(mentor);
  }
}
