package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Bookingpage;
import com.example.demo.Repo.UserRepobook;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserControllerbook {

	@Autowired
	private UserRepobook repo;
	
	@PostMapping("/bookingpage")
	public ResponseEntity<Bookingpage>registerUser(@RequestBody Bookingpage user) {
		
	
	System.out.println("Controller is working!!");
	return ResponseEntity.ok(repo.save(user));
	
	}
	
	
}
