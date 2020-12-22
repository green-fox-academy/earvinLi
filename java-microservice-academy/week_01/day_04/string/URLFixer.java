package week_01.day_04.string;

public class URLFixer {
  public static void main(String... args) {
    String url = "https//www.reddit.com/r/nevertellmethebots";

    // Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
    // Also, the URL is missing a crucial component, find out what it is and insert it too!
    // Try to solve it more than once using different String functions!
    url = url.replace("bots", "odds");
    int insertPosition = url.indexOf("s") + 1;
    url = url.substring(0, insertPosition) + ':' + url.substring(insertPosition);
    System.out.println(url);
  }
}
