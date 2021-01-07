package com.jma.imageuploader.repositories;

import com.jma.imageuploader.models.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRepository extends MongoRepository<Photo, String> {}
