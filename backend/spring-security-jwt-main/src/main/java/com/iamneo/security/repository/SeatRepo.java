package com.iamneo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.iamneo.security.entity.Seats;

public interface SeatRepo extends JpaRepository<Seats,Integer>{


	List<Seats> findByFlightid(int d);

	List<Seats> findByEmail(String d);



	String deleteByFlightid(int id);


}
