package com.jsp.Gym.dto;

import java.time.LocalTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TrainerDto {
	
	private int trainerId;

	private String firstname;
	
	private String lastname;
	
	private String email;
	
	private long mobileno;
	
	private List<Integer> slotIds;
	
	private List<Integer> userIds;
}
