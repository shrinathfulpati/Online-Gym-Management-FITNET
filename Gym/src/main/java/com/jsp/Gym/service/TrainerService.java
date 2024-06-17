package com.jsp.Gym.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.Gym.dto.TrainerDto;
import com.jsp.Gym.entity.Trainer;
import com.jsp.Gym.repository.TrainerRepository;

@Service
public class TrainerService {
	
	@Autowired
	private TrainerRepository trainerRepository;
	
	public TrainerDto addTrainer(TrainerDto trainerDto) {
		Trainer savedTrainer = trainerRepository.save(Trainer.builder()
													.firstname(trainerDto.getFirstname())
													.lastname(trainerDto.getLastname())
													.email(trainerDto.getEmail())
													.mobileno(trainerDto.getMobileno())
													.build()
													);
		
		return TrainerDto.builder().trainerId(savedTrainer.getTrainerId()).build();
	}
	
	public List<TrainerDto> getTrainers(){
		List<Trainer> trainers = trainerRepository.findAll();
		
		List<TrainerDto> dtos = trainers.stream()
											.map(trainer -> {
												return TrainerDto.builder()
																	.trainerId(trainer.getTrainerId())
																	.firstname(trainer.getFirstname())
																	.lastname(trainer.getLastname())
																	.email(trainer.getEmail())
																	.build();
											})
											.toList();
		
		return dtos;
											
	}

}
