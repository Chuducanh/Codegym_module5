package com.be.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class BusDTO {
    @NotNull
    private int id;

    @NotEmpty
    private String type;

    @NotEmpty
    private String house;

    @NotEmpty
    private String arrive;

    @NotEmpty
    private String destination;

    @NotEmpty
    @Pattern(regexp = "^0905[0-9]{6}$")
    private String phone;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    private String startTime;

    @NotEmpty
    private String endTime;

    public BusDTO() {
    }

    public BusDTO(int number, String type, String house, String arrive, String destination, String phone, String email, String startTime, String endTime) {
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
