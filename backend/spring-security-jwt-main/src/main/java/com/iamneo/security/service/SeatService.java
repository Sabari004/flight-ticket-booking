package com.iamneo.security.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Seats;
import com.iamneo.security.repository.SeatRepo;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class SeatService {
	@Autowired
	SeatRepo service;
	
	public String addEvent(int fId) {
		for(int i=1;i<=80;i++) {
			Seats s=new Seats();
			s.setFlightid(fId);
			s.setSeatNo(i);
			s.setSeatStatus(false);
			service.save(s);
		}
		return "Seats is added";
	}
	public String deleteSeats(int id) {
		service.deleteByFlightid(id);
		return "Seats Deleted";
	}
	public String addSeat(Seats s) {
		service.save(s);
		return "Seat Updated";
	}
	public List<Seats> getAll() {
		return service.findAll();
	}
	public Optional<Seats> getIdEvent(int d){
		return service.findById(d);
	}
	public List<Seats> getByFlightEvent(int d){
		return service.findByFlightid(d);
	}
	public List<Seats> getByPassEvent(String d){
		return service.findByEmail(d);
	}

  
	

}
