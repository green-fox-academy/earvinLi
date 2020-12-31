package com.jma.redditapimockup.controllers;

import com.jma.redditapimockup.models.Post;
import com.jma.redditapimockup.repositories.PostRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
public class PostController {
  private PostRepository postRepository;

  @Autowired
  public PostController(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  @GetMapping
  public List<Post> getPosts() {
    return (List<Post>) postRepository.findAll();
  }

  @PostMapping
  public ResponseEntity<Post> addPost(@RequestBody Post post) {
    Post addedPost = postRepository.save(post);
    return ResponseEntity.status(HttpStatus.CREATED).body(addedPost);
  }

  @PutMapping("{id}/upvote")
  public ResponseEntity<Post> upvotePost(@PathVariable("id") long id) {
    Optional<Post> postToUpvote = postRepository.findById(id);
    if (!postToUpvote.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    postToUpvote.get().setScore(postToUpvote.get().getScore() + 1);
    Post upVotedPost = postRepository.save(postToUpvote.get());
    return ResponseEntity.ok(upVotedPost);
  }

  @PutMapping("{id}/downvote")
  public ResponseEntity<Post> downvotePost(@PathVariable("id") long id) {
    Optional<Post> postToUpvote = postRepository.findById(id);
    if (!postToUpvote.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    postToUpvote.get().setScore(postToUpvote.get().getScore() - 1);
    Post upVotedPost = postRepository.save(postToUpvote.get());
    return ResponseEntity.ok(upVotedPost);
  }
}
