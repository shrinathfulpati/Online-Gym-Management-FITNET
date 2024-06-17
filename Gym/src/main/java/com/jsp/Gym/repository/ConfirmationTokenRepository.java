package com.jsp.Gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jsp.Gym.entity.ConfirmationToken;



@Repository
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Integer>{
	
	ConfirmationToken findByConfirmationToken(String confirmationToken);
	
	ConfirmationToken findByUserUserId(int rid);
	
}
