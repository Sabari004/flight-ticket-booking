package com.iamneo.security.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Flights;
import com.iamneo.security.repository.FlightRepo;
@Service
public class FlightService {
	@Autowired
	FlightRepo service;
	
	public String addEvent(Flights s) {
		service.save(s);
		return "Flight is added";
	}
	public Optional<Flights> getIdEvent(int d){
		return service.findByFlightId(d);
	}
	public List<Flights> getEvent(){
		return service.findAll();
	}
	public List<Flights> getFromEvent(String from){
		return service.findByFromDestStartsWith(from);
	}
	public List<Flights> getToEvent(String to){
		return service.findByToDestStartsWith(to);
	}
  
	public String deleteEvent(int d) {
		service.deleteById(d);
		return "Flight is Deleted";
	}

}
