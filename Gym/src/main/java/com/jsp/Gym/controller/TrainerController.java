package com.jsp.Gym.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.Gym.dto.TrainerDto;
import com.jsp.Gym.service.TrainerService;
import com.jsp.Gym.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/trainers")
@CrossOrigin("*")
@RequiredArgsConstructor
public class TrainerController {
	
	private final TrainerService trainerService;
	private final UserService userService;
	
	@PostMapping("/")
	public ResponseEntity<?> addTrainer(@RequestBody TrainerDto trainerDto){
		return ResponseEntity.ok(trainerService.addTrainer(trainerDto));
	}

	@GetMapping("/")
	public ResponseEntity<?> getTrainers(){
		return ResponseEntity.ok(trainerService.getTrainers());
	}
	
	@PostMapping("/{trainerId}/delete")
	public void removeTrainer(@PathVariable int trainerId){
		userService.removetrainer(trainerId);
	}
	
	
	
	
}
