package com.jsp.Gym.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import jakarta.persistence.Entity;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {
	
	private final JavaMailSender javaMailSender;
	
	public void sendEmail(SimpleMailMessage email) {
		javaMailSender.send(email);
	}
}
