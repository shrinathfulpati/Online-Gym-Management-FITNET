package com.jsp.Gym.entity;

import java.util.List;

import jakarta.persistence.Column;
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
public class Trainer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int trainerId;
	
	private String firstname;
	
	private String lastname;
	
	@Column(unique = true)
	private String email;
	
	@Column(unique = true)
	private long mobileno;

	@ManyToMany
	@JoinTable(name = "SlotTrainerMapping" ,joinColumns = @JoinColumn(name = "trainerId"),
		inverseJoinColumns = @JoinColumn(name = "slodId") )
	private List<Slot> slots;
	
	@OneToMany(mappedBy = "trainer")
	private List<User> users;
	
 	
	
}
