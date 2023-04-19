package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Payment;
import com.example.demo.Repo.UserRepopay;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserControllerpay {

	@Autowired
	private UserRepopay repo;
	
	@PostMapping("/payment")
	public ResponseEntity<Payment>registerUser(@RequestBody Payment user) {
		
	
	System.out.println("Controller is working!!");
	return ResponseEntity.ok(repo.save(user));
	
	}
	
	
}
