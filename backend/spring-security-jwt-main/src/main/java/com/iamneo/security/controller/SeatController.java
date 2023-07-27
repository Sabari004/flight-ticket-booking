package com.iamneo.security.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Seats;
import com.iamneo.security.service.SeatService;
@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class SeatController {
	@Autowired
	SeatService service;
	
	@PostMapping("/seat/addflight/{fid}")
	public String add(@PathVariable int fid) {
		return service.addEvent(fid);
	}
	@PostMapping("/seat")
	public String addSeats(@RequestBody Seats s) {
		return service.addSeat(s);
	}
	@GetMapping("/seat")
	public List<Seats> get() {
		return service.getAll();
	}
	@GetMapping("/seat/{id}")
	public Optional<Seats> getId(@PathVariable int d){
		return service.getIdEvent(d);
	}
	@GetMapping("/seat/flight/{fid}")
	public List<Seats> getFid(@PathVariable int fid){
		return service.getByFlightEvent(fid);
	}
	@GetMapping("/seat/passenger/{pid}")
	public List<Seats> getPid(@PathVariable String pid){
		return service.getByPassEvent(pid);
	}
	@DeleteMapping("/seat/{fid}")
	public String delete(@PathVariable int fid){
		return service.deleteSeats(fid);
	}
	
	
	
	
	
}
