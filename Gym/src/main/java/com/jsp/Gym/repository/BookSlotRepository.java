package com.jsp.Gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jsp.Gym.entity.BookSlot;

@Repository
public interface BookSlotRepository extends JpaRepository<BookSlot, Integer> {
//	boolean existsByUserIdAndSlotIdAndTrainerId(int userId,);
}
