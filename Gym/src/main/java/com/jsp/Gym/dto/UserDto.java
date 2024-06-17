package com.jsp.Gym.dto;

import java.time.LocalTime;

import com.jsp.Gym.entity.BookSlot;
import com.jsp.Gym.entity.Slot;
import com.jsp.Gym.entity.Trainer;
import com.jsp.Gym.entity.User;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
	
	private int userId;
	
	private String firstname;
	
	private String lastname;
	
	private String email;
	
	private String password;
	
	private long mobileno;
	
	private int slotId;
	
	private LocalTime startTime;
	
	private LocalTime endTime;
	
	private int trainerId;
	
	private String tFirstname;
	
	private String tLastname; 
	
	private String tEmail;
	
	private long tMobileno;

	@Override
	public String toString() {
		return "UserDto [userId=" + userId + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + ", mobileno=" + mobileno + ", slotId=" + slotId + ", startTime="
				+ startTime + ", endTime=" + endTime + ", trainerId=" + trainerId + ", tFirstname=" + tFirstname
				+ ", tLastname=" + tLastname + ", tEmail=" + tEmail + ", tMobileno=" + tMobileno + "]";
	}
	
	
	
}
