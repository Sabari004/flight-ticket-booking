package com.iamneo.security.repository;






import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.iamneo.security.entity.Flights;

public interface FlightRepo extends JpaRepository<Flights,Integer>{

	Optional<Flights> findByFlightId(int d);
	List<Flights> findByFromDestStartsWith(String from);
	List<Flights> findByToDestStartsWith(String to);


}
