package com.iamneo.security.entity;

import java.sql.Date;
import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Seats {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int seatId;
	public boolean seatStatus;
	private int flightid;
	private int seatNo;
	private String email;
	private String passName;
	private String gender;
	private String request;
	public int getSeatId() {
		return seatId;
	}
	public void setSeatId(int seatId) {
		this.seatId = seatId;
	}
	public boolean isSeatStatus() {
		return seatStatus;
	}
	public void setSeatStatus(boolean seatStatus) {
		this.seatStatus = seatStatus;
	}
	public int getFlightid() {
		return flightid;
	}
	public void setFlightid(int flightid) {
		this.flightid = flightid;
	}
	public int getSeatNo() {
		return seatNo;
	}
	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

	public String getPassName() {
		return passName;
	}
	public void setPassName(String passName) {
		this.passName = passName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getRequest() {
		return request;
	}
	public void setRequest(String request) {
		this.request = request;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
	
	

}
