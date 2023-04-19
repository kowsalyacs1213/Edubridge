package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.User;
import com.example.demo.Repo.UserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepo repo;
	
	@PostMapping("/user")
	public ResponseEntity<User>registerUser(@RequestBody User user) {
		
	
	System.out.println("Controller is working!!");
	return ResponseEntity.ok(repo.save(user));
	
	}
	
	
}
