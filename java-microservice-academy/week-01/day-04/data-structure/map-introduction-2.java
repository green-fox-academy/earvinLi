import java.util.HashMap;
import java.util.Map;

public class MapIntroduction2 {
  public static void main(String... args) {
    HashMap<String, String> books = new HashMap<>();
    System.out.println(books.isEmpty());

    books.put("978-1-60309-452-8", "A Letter to Jo");
    books.put("978-1-60309-459-7", "Lupus");
    books.put("978-1-60309-444-3", "Red Panda and Moon Bear");
    books.put("978-1-60309-461-0", "The Lab");

    for(Map.Entry<String, String> entry : books.entrySet()) {
      String bookISBN = entry.getKey();
      String bookName = entry.getValue();
      System.out.printf("%s (ISBN: %s)%n", bookName, bookISBN);
    }

    books.remove("978-1-60309-444-3");
    books.remove("The Lab");

    books.put("978-1-60309-450-4", "They Called Us Enemy");
    books.put("978-1-60309-453-5", "Why Did We Trust Him?");

    System.out.println(books.containsKey("478-0-61159-424-8"));
    System.out.println(books.get("978-1-60309-453-5"));
  }
}
