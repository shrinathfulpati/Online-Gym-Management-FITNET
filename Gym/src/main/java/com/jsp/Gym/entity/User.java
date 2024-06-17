package com.jsp.Gym.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	private String firstname;
	
	private String lastname;
	
	private String email;
	
	private String password;
	
	private boolean isEnabled;
	
	private long mobileno;
	
	@ManyToOne
	@JoinColumn(name = "slotId")
	private Slot slot;
	
	@ManyToOne
	@JoinColumn(name = "trainerId")
	private Trainer trainer;
	
	@OneToOne
	@JoinColumn(name = "bookSlotId")
	private BookSlot bookSlot;

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + ", mobileno=" + mobileno + ", slot=" + slot + ", trainer=" + trainer
				+ ", bookSlot=" + bookSlot + "]";
	}
	
	
	
}
