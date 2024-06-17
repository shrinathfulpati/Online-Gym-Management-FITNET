package com.jsp.Gym.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.jsp.Gym.dto.SlotDto;
import com.jsp.Gym.dto.TrainerDto;
import com.jsp.Gym.dto.UserDto;
import com.jsp.Gym.entity.ConfirmationToken;
import com.jsp.Gym.entity.Slot;
import com.jsp.Gym.entity.Trainer;
import com.jsp.Gym.entity.User;
import com.jsp.Gym.repository.ConfirmationTokenRepository;
import com.jsp.Gym.repository.SlotRepository;
import com.jsp.Gym.repository.TrainerRepository;
import com.jsp.Gym.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	
	private final UserRepository userRepository;
	private final SlotRepository slotRepository;
	private final TrainerRepository trainerRepository;
	private final EmailService emailService;
	private final ConfirmationTokenRepository confirmationTokenRepository;
	
	public Map<String , Integer> login(String email , String password) {
		User user = userRepository.findByEmail(email).get();
		if(user != null) {
			if(user.getPassword().equals(password)) {
				Map<String , Integer> mp = new HashMap<String, Integer>();
				mp.put("userId",user.getUserId());
				return mp;
			}
		}else {
			throw new UsernameNotFoundException("Invalid Credentials");
		}
		return null;
	}
	

	public UserDto adduser(UserDto userDto) {
		System.out.println(userDto);
		User user = User.builder()
							.firstname(userDto.getFirstname())
							.lastname(userDto.getLastname())
							.email(userDto.getEmail())
							.password(userDto.getPassword())
							.mobileno(userDto.getMobileno())
							.build();
		System.out.println(user);
		User saveduser=userRepository.save(user);
		
		ConfirmationToken confirmationToken = new ConfirmationToken(user);
		confirmationTokenRepository.save(confirmationToken);
		
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(user.getEmail());
		mail.setSubject("Complete Registeration ! ");
		mail.setText("TO confirm your account , please click here :"
				+ " http://localhost:8080/gym/users/confirm-account?token="+confirmationToken.getConfirmationToken());
		emailService.sendEmail(mail);
		
		
		System.out.println(saveduser);
		
		return UserDto.builder().userId(saveduser.getUserId()).build();
	}
	
	public String confirmEmail(String confirmationToken){
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
		if(token != null ) {
			User user = userRepository.findByEmail(token.getUser().getEmail()).get();
			user.setEnabled(true);
			userRepository.save(user);
			return "Email Verfication Successful! ,You can continue with form";
		}
		
		return "";
	}
	
	public void addSlot( int userId, int slotId,int trainerId){
		User user = userRepository.findById(userId).orElse(null);
		if(user != null) {
			Slot slot = slotRepository.findById(slotId).orElse(null);
			Trainer trainer = trainerRepository.findById(trainerId).orElse(null);
			if(slot !=null && trainer!=null) {
				user.setSlot(slot);
				user.setTrainer(trainer);
				userRepository.save(user);
			}
			
		}
	}
	
	public UserDto getuser(int userId) {
		User user= userRepository.findById(userId).orElse(null);
		if(user != null) {
			 UserDto userDto= UserDto.builder()
										.userId(user.getUserId())
										.firstname(user.getFirstname())
										.lastname(user.getLastname())
										.email(user.getEmail())
										.mobileno(user.getMobileno())
										.build();
			if(user.getSlot() != null) {
				userDto.setSlotId(user.getSlot().getSlotId());
				userDto.setStartTime(user.getSlot().getStartTime());
				userDto.setEndTime(user.getSlot().getEndTime());
				
			}
			
			if(user.getTrainer() != null) {
				userDto.setTrainerId(user.getTrainer().getTrainerId());
				userDto.setTFirstname(user.getTrainer().getFirstname());
				userDto.setTLastname(user.getTrainer().getLastname());
				userDto.setTMobileno(user.getTrainer().getMobileno());
				userDto.setTEmail(user.getTrainer().getEmail());
			}
			return userDto;
		}
		
		return null;
	}


	public TrainerDto bookTrainer(int userId, int trainerId) {
		User user= userRepository.findById(userId).get();
		if(user!=null) {
			Trainer trainer = trainerRepository.findById(trainerId).orElse(null);
			if(trainer != null) {
				user.setTrainer(trainer);
				userRepository.save(user);
				SimpleMailMessage mail = new SimpleMailMessage();
				mail.setTo(user.getEmail());
				mail.setSubject("FITNET - NOTIFICATION");
				String text="Hello "+user.getFirstname()+",\n\n"
						+ "You have successfully booked the trainer.\n"
						+ "Trainer details -"
						+ "Name : "+trainer.getFirstname()+"  "+trainer.getLastname()+"\n"
						+ "Email : "+trainer.getEmail()+"\n"
						+ "Mobile : "+trainer.getMobileno()+"\n"
						+ "\nBest Regards\nFitnet Team" ;
						
				mail.setText(text);
				emailService.sendEmail(mail);
			}
		}
		
		return TrainerDto.builder().trainerId(trainerId).build();
	}
	
	public SlotDto bookSlot(int userId, int slotId) {
		User user= userRepository.findById(userId).get();
		if(user!=null) {
			Slot slot = slotRepository.findById(slotId).orElse(null);
			if(slot != null) {
				user.setSlot(slot);
				userRepository.save(user);
			}
			SimpleMailMessage mail = new SimpleMailMessage();
			mail.setTo(user.getEmail());
			mail.setSubject("FITNET - NOTIFICATION");
			String text="Hello "+user.getFirstname()+",\n\n"
					+ "You have successfully booked the slot.\n"
					+ "Slot details -"
					+ "Start-Time : "+slot.getStartTime()+"\n"
					+ "End-Time : "+slot.getEndTime()+"\n"
					+ "\nBest Regards\nFitnet Team" ;
					
			mail.setText(text);
			emailService.sendEmail(mail);
		}
		
		return SlotDto.builder().slotId(slotId).build();
	}
	
	public List<UserDto> getAllUsers(){
		return userRepository.findAll()
				.stream()
				.map(user ->{
					return UserDto.builder()
									.userId(user.getUserId())
									.firstname(user.getFirstname())
									.lastname(user.getLastname())
									.build();
				})
				.toList();
	}
	
	public void removeSlot(int slotId) {
		Slot slot = slotRepository.findById(slotId).orElse(null);
		if(slot != null) {
			List<User> users=userRepository.findBySlotSlotId(slotId);
			if(!users.isEmpty()) {
				users.forEach(user ->{
					user.setSlot(null);
					userRepository.save(user);
				});
			}
		}
		slotRepository.delete(slot);
	}
	
	public void removetrainer(int trainerId) {
		Trainer trainer  = trainerRepository.findById(trainerId).orElse(null);
		if(trainer != null) {
			List<User> users=userRepository.findByTrainerTrainerId(trainerId);
			if(!users.isEmpty()) {
				users.forEach(user ->{
					user.setTrainer(null);
					userRepository.save(user);
				});
			}
		}
		trainerRepository.delete(trainer);
	}
}
