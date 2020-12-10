package week_02.day_03.cloneable;

public class Main {
  public static void main(String[] args) throws CloneNotSupportedException {
    Student student = new Student("John", 20, "male", "BME");
    Student johnTheClone = (Student)student.clone();
    System.out.println(johnTheClone.name);
  }
}
