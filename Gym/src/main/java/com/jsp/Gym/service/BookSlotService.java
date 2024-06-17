package com.jsp.Gym.service;

import java.util.List;

import com.jsp.Gym.dto.BookSlotDto;
import com.jsp.Gym.entity.BookSlot;

public interface BookSlotService {
	BookSlotDto booktheSlot(BookSlotDto bookSlotDto);
	
	List<BookSlotDto> getAllBookings();
	
	
}
