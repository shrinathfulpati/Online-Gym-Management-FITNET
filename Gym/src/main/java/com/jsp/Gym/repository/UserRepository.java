package com.jsp.Gym.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jsp.Gym.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	boolean existsByEmail(String email);
	
	Optional<User> findByEmail(String email);
	
	List<User> findBySlotSlotId(int slotId);

	List<User> findByTrainerTrainerId(int trainerId);

	
}
