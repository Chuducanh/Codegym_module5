package com.be.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bus {
    @Id
    private int id;

    private String type;

    private String house;

    private String arrive;

    private String destination;

    private String phone;

    private String email;

    private String startTime;

    private String endTime;

    public Bus() {
    }

    public Bus(int number, String type, String house, String arrive, String destination, String phone, String email, String startTime, String endTime) {
        this.id = id;
        this.type = type;
        this.house = house;
        this.arrive = arrive;
        this.destination = destination;
        this.phone = phone;
        this.email = email;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getArrive() {
        return arrive;
    }

    public void setArrive(String arrive) {
        this.arrive = arrive;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
