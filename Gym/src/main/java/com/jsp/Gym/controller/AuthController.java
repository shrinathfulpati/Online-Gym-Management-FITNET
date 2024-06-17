package com.jsp.Gym.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.Gym.dto.LoginDto;
import com.jsp.Gym.entity.User;

@RestController
@RequestMapping("/auth")

public class AuthController {

	public ResponseEntity<?> registerUser(User user){
		return null;
	}
	
	public ResponseEntity<?> login(LoginDto loginDto){
		
		return null;
	}
}
