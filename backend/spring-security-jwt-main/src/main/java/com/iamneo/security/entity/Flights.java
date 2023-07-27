package com.iamneo.security.entity;

import java.sql.Date;
import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Flights {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int flightId;
	private String flightName;
	private String imgUrl;
	private String fromDest;
	private Timestamp stTime;
	private Timestamp endTime;
	private String toDest;
	private int price;
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Timestamp getStTime() {
		return stTime;
	}
	public void setStTime(Timestamp stTime) {
		this.stTime = stTime;
	}
	public Timestamp getEndTime() {
		return endTime;
	}
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}
	public int getFlightId() {
		return flightId;
	}
	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getFromDest() {
		return fromDest;
	}
	public void setFromDest(String fromDest) {
		this.fromDest = fromDest;
	}
	public String getToDest() {
		return toDest;
	}
	public void setToDest(String toDest) {
		this.toDest = toDest;
	}



	
	
	

}
