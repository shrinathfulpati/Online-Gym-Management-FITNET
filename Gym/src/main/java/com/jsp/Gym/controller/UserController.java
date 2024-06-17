package com.jsp.Gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.Gym.dto.UserDto;
import com.jsp.Gym.service.UserService;

@RestController
@RequestMapping("/gym/users")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public ResponseEntity<?> addUser(@RequestBody UserDto userDto){
		System.out.println(userDto);
		return ResponseEntity.ok(userService.adduser(userDto));
	}
	
	@RequestMapping(value = "/confirm-account",method = {RequestMethod.GET , RequestMethod.POST})
	public String confirmUserAccount(@RequestParam("token") String token){
		return userService.confirmEmail(token);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestParam("email") String email,@RequestParam("password") String password){
		return ResponseEntity.ok(userService.login(email, password));
	}
	
	@PostMapping("{userId}/slot/{slotId}/{trainerId}")
	public ResponseEntity<?> addSlot(@PathVariable("userId") int userId,
									@PathVariable("slotId") int slotId,
									@PathVariable("trainerId") int trainerId){
		return null;
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUser(@PathVariable("userId") int userId){
		return ResponseEntity.ok(userService.getuser(userId));
	}
	
	@PostMapping("/{userId}/trainers/{trainerId}")
	public ResponseEntity<?> bookTrainer(@PathVariable("userId") int userId, @PathVariable("trainerId") int trainerId){
		return ResponseEntity.ok(userService.bookTrainer(userId,trainerId));
	}
	
	
	@PostMapping("/{userId}/slots/{slotId}")
	public ResponseEntity<?> bookSlot(@PathVariable("userId") int userId, @PathVariable("slotId") int slotId){
		return ResponseEntity.ok(userService.bookSlot(userId, slotId));
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllUsers(){
		return ResponseEntity.ok(userService.getAllUsers());		
	}
	
	
}
