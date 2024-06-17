package com.jsp.Gym.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.Gym.dto.SlotDto;
import com.jsp.Gym.dto.TrainerDto;
import com.jsp.Gym.entity.Slot;
import com.jsp.Gym.service.SlotService;
import com.jsp.Gym.service.TrainerService;
import com.jsp.Gym.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/slots")
@CrossOrigin("*")
@RequiredArgsConstructor

public class SlotController {
	
	private final SlotService slotService;
	
	private final TrainerService trainerService;	
	
	private final UserService userService;
	
	@PostMapping("/")
	public ResponseEntity<?> addSlot(@RequestBody SlotDto slot){
		return ResponseEntity.ok(slotService.addSlot(slot));
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getSlots(){
		return ResponseEntity.ok(slotService.getAllSlots());
	}
	
	@PostMapping("/{slotId}/delete")
	public void removeTrainer(@PathVariable int slotId){
		userService.removeSlot(slotId);
	}
	
	
}
