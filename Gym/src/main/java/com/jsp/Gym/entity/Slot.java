package com.jsp.Gym.entity;

import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Slot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int slotId;
	
	private LocalTime startTime;
	
	private LocalTime endTime ;
	
	@ManyToMany(mappedBy = "slots")
	private List<Trainer> trainers ;
	
	@OneToMany(mappedBy = "slot")
	private List<User> users;

	
}
