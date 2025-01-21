package com.inventar.backend.DTO;


import java.util.List;

public class KomponentaAddDTO {
    private String name;

    private String zpf;

    private String fer;

    private int quantity;

    private int locationID;

    private String description;

    private String log;

    private int eksperimentID;

    public KomponentaAddDTO() {
    }

    public KomponentaAddDTO(String name, String zpf, String fer, int quantity, int locationID, String description, String log, int eksperimentID) {
        this.name = name;
        this.zpf = zpf;
        this.fer = fer;
        this.quantity = quantity;
        this.locationID = locationID;
        this.description = description;
        this.log = log;
        this.eksperimentID = eksperimentID;
    }

    public int getEksperimentID() {
        return eksperimentID;
    }

    public void setEksperimentID(int eksperimentID) {
        this.eksperimentID = eksperimentID;
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

    public int getLocationID() {
        return locationID;
    }

    public void setLocationID(int locationID) {
        this.locationID = locationID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLog() {
        return log;
    }

    public void setLog(String log) {
        this.log = log;
    }
}
