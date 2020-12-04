package blog_post;

public class BlogPost {
  String authorName;
  String title;
  String text;
  String publicationDate;

  BlogPost(String authorName, String title, String text, String publicationDate) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}
