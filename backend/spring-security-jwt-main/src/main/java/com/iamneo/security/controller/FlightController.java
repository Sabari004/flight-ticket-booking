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

import com.iamneo.security.entity.Flights;
import com.iamneo.security.service.FlightService;

import lombok.RequiredArgsConstructor;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
public class FlightController {
	@Autowired
	FlightService service;
	@CrossOrigin
	@PostMapping("/flight")
	public String add(@RequestBody Flights s) {
		return service.addEvent(s);
	}
	@CrossOrigin
	@GetMapping("/flight/id/{id}")
	public Optional<Flights> getId(@PathVariable int id){
		return service.getIdEvent(id);
	}
	@CrossOrigin
	@GetMapping("/flight/from/{from}")
	public List<Flights> getId(@PathVariable String from){
		return service.getFromEvent(from);
	}
	@CrossOrigin
	@GetMapping("/flight/to/{to}")
	public List<Flights> getToId(@PathVariable String to){
		return service.getToEvent(to);
	}
	@CrossOrigin
	@GetMapping("/flight")
	public List<Flights> get(){
		return service.getEvent();
	}
	@CrossOrigin
	@DeleteMapping("/flight/{id}")
	public String delete( @PathVariable int d) {
		
		return service.deleteEvent(d);
	}
	
	
	
}
