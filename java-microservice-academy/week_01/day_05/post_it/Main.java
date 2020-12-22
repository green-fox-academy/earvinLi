package week_01.day_05.post_it;

public class Main {
  public static void main(String... args){
    PostIt firstPost = new PostIt("orange", "Idea 1", "blue");
    PostIt secondPost = new PostIt("pink", "Awesome", "black");
    PostIt thirdPost = new PostIt("yellow", "Superb!", "green");

    System.out.println(firstPost.backgroundColor);
    System.out.println(secondPost.text);
    System.out.println(thirdPost.textColor);
  }
}
