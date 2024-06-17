package com.jsp.Gym.repository;

import java.time.LocalTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jsp.Gym.entity.Slot;


@Repository
public interface SlotRepository extends JpaRepository<Slot, Integer> {
	
	boolean existsByStartTimeAndEndTime(LocalTime startTime , LocalTime endTime);
	
	Optional<Slot> findByStartTimeAndEndTime(LocalTime startTime , LocalTime endTime);
	
	
}
