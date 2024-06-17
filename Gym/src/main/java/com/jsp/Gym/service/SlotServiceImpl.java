package com.jsp.Gym.service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.jsp.Gym.dto.SlotDto;
import com.jsp.Gym.entity.Slot;
import com.jsp.Gym.repository.SlotRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SlotServiceImpl  implements SlotService{
	
	private final SlotRepository slotRepository;

	@Override
	public Slot addSlot(SlotDto slot) {
		
		if(slotRepository.existsByStartTimeAndEndTime(slot.getStartTime(), slot.getEndTime())) {
			
		}
		return slotRepository.save(Slot.builder()
										.startTime(slot.getStartTime())
										.endTime(slot.getEndTime())
										.build()
										);
	}

	@Override
	public Optional<Slot> getSlotById(int id) {
		return slotRepository.findById(id);
	}

	@Override
	public Optional<Slot> getSlotByStartTimeandEndtime(LocalTime startTime, LocalTime endtime) {
		// TODO Auto-generated method stub
		return slotRepository.findByStartTimeAndEndTime(startTime, endtime);
	}

	@Override
	public List<SlotDto> getAllSlots() {
		
		List<Slot> slots =slotRepository.findAll();
		
		
		List<SlotDto> dtos=slots.stream()
									.map(
										slot ->{
											return SlotDto.builder()
														.slotId(slot.getSlotId())
														.startTime(slot.getStartTime())
														.endTime(slot.getEndTime())
														.build();
											}
										)
									.toList();		
		
		return dtos;
	}

}
