package week_01.day_04.string;

public class TodoPrint {
  public static void main(String... args){
    String todoText = " - Buy milk\n";
    // Add "My todo:" to the beginning of the todoText
    // Add " - Download games" to the end of the todoText
    // Add " - Diablo" to the end of the todoText but with indention

    // Expected output:

    // My todo:
    //  - Buy milk
    //  - Download games
    //      - Diablo
    todoText = "My todo:\n" + todoText + " - Download games\n" + " - Diablo".indent(2);
    System.out.println(todoText);
  }
}
