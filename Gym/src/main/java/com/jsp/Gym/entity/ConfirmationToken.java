package com.jsp.Gym.entity;

import java.time.LocalDate;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ConfirmationToken {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int confirmationTokenId;
	
	private String confirmationToken;
	
	@CreationTimestamp
	private LocalDate createdDate;
	
	@OneToOne
	@JoinColumn(name = "userId")
	private User user;
	
	public ConfirmationToken(User user) {
		this.user=user;
		this.confirmationToken=UUID.randomUUID().toString();
	}
	
	
	public ConfirmationToken() {
		
	}
}
