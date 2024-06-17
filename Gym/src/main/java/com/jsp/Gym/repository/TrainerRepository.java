package com.jsp.Gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jsp.Gym.entity.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{

}
