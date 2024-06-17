package com.jsp.Gym.service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import com.jsp.Gym.dto.SlotDto;
import com.jsp.Gym.entity.Slot;
import com.jsp.Gym.entity.Trainer;
import com.jsp.Gym.entity.User;

public interface SlotService {
	
	Slot addSlot(SlotDto slot);
	
	Optional<Slot> getSlotById(int id);
	
	Optional<Slot> getSlotByStartTimeandEndtime(LocalTime startTime, LocalTime endtime);
	
	List<SlotDto> getAllSlots();
	
	
	
}
