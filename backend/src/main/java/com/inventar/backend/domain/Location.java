package com.inventar.backend.domain;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Location {

    @Id
    @GeneratedValue
    private Long id;

    private String adress;

    private String room;
    @OneToMany(mappedBy = "location")
    private List<Komponenta> komponenta;

    public Location() {
    }

    public Location(String adress, String room, List<Komponenta> komponenta) {
        // Konstruktor s komponentom
        this.adress = adress;
        this.room = room;
        this.komponenta = komponenta;
    }

    public Location(String adress, String room) {
        // Konstruktor be komponente
        this.adress = adress;
        this.room = room;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public List<Komponenta> getKomponenta() {
        return komponenta;
    }

    public void setKomponenta(List<Komponenta> komponenta) {
        this.komponenta = komponenta;
    }
}
