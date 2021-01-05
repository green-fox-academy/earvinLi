package com.jma.imageuploader.controllers;

import com.jma.imageuploader.models.Photo;
import com.jma.imageuploader.services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Controller
@RequestMapping("/photos")
public class PhotoController {
  private PhotoService photoService;

  @Autowired
  public PhotoController(PhotoService photoService) {
    this.photoService = photoService;
  }

  @GetMapping
  public String showUploadPhotoPage() {
    return "uploadPhoto";
  }

  @PostMapping("/add")
  public String addPhoto(@RequestParam("title") String title, @RequestParam("image") MultipartFile image, Model model)
    throws IOException {
    String id = photoService.addPhoto(title, image);
    return "redirect:/photos/" + id;
  }

  @GetMapping("/{id}")
  public String getPhoto(@PathVariable String id, Model model) {
    Photo photo = photoService.getPhoto(id);
    model.addAttribute("title", photo.getTitle());
    model.addAttribute("image", Base64.getEncoder().encodeToString(photo.getImage().getData()));
    return "/photos";
  }
}
