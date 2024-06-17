package com.jsp.Gym.dto;

import java.time.LocalTime;
import java.util.List;

import org.springframework.stereotype.Service;

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
public class SlotDto {
	
	private int slotId;
	
	private LocalTime startTime;
	
	private LocalTime endTime;
	
	private List<Integer> trainerIds;
	
	private List<Integer> userIds;
}
