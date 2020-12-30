package com.jma.todo.controllers;

import com.jma.todo.models.Todo;
import com.jma.todo.repositories.TodoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/todo")
public class TodoController {
  private TodoRepository todoRepository;

  @Autowired
  public TodoController(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  @RequestMapping(method = RequestMethod.GET, value = {"", "/list"})
  public String showListPage(Model model) {
    model.addAttribute("todos", (List<Todo>) todoRepository.findAll());
    return "todolist";
  }

  @RequestMapping(method = RequestMethod.GET, value = "/add")
  public String showAddPage() {
    return "todoadd";
  }

  @RequestMapping(method = RequestMethod.POST, value = "/add")
  public String addTodo(String todoTitle) {
    todoRepository.save(new Todo(todoTitle));
    return "redirect:/todo/list";
  }
}
