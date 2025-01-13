package com.inventar.backend.Domain;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Komponenta {

    @Id
    @GeneratedValue
    private Integer id; //ID

    private String name;    //Naziv

    private String ZPF; //Interna oznaka ZPF; XXYYY

    private String FER; //Interna oznaka FER; Active;Inactive;Unknown

    private int quantity;   //Kolicina

    @Column(columnDefinition = "TEXT")
    private String description; //Kratak opis

    @OneToMany(mappedBy = "komponenta")
    private List<Log> logs;  //Jedna komponenta može imati više logova

    @OneToMany(mappedBy = "komponenta")
    private List<Files> files;   //Jedna komponenta može imati više fajlova

    @ManyToOne
    private Location location;

    @ManyToMany
    @JoinTable(
            name = "komponenta_eksperiment",
            joinColumns = @JoinColumn(name = "komponenta_id"),
            inverseJoinColumns = @JoinColumn(name = "eksperiment_id")
    )
    private List<Eksperiment> eksperimenti; //Jedna komponenta može biti u više eksperimenata


}