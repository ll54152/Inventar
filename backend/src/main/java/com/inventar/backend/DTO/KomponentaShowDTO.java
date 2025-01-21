package com.inventar.backend.DTO;

import com.fasterxml.jackson.annotation.*;
import com.inventar.backend.domain.*;

import java.util.*;

public class KomponentaShowDTO {
    private Integer id;

    private String name;

    private String zpf;

    private String fer;

    private int quantity;

    private String address;

    private String room;

    private String description;

    private List<Log> logs;

    private List<Eksperiment> eksperiments;

    public KomponentaShowDTO() {
    }

    public KomponentaShowDTO(Integer id, String name, String zpf, String fer, int quantity, String address, String room, String description, List<Log> logs, List<Eksperiment> eksperiments) {
        this.id = id;
        this.name = name;
        this.zpf = zpf;
        this.fer = fer;
        this.quantity = quantity;
        this.address = address;
        this.room = room;
        this.description = description;
        this.logs = logs;
        this.eksperiments = eksperiments;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getZpf() {
        return zpf;
    }

    public void setZpf(String zpf) {
        this.zpf = zpf;
    }

    public String getFer() {
        return fer;
    }

    public void setFer(String fer) {
        this.fer = fer;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Log> getLogs() {
        return logs;
    }

    public void setLogs(List<Log> logs) {
        this.logs = logs;
    }

    public List<Eksperiment> getEksperiments() {
        return eksperiments;
    }

    public void setEksperiments(List<Eksperiment> eksperiments) {
        this.eksperiments = eksperiments;
    }
}
