package com.jma.redditapimockup.repositories;

import com.jma.redditapimockup.models.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {}
