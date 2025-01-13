package com.inventar.backend.Domain;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Eksperiment {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String field;
    private String subject;

    @Column(columnDefinition = "TEXT")
    private String description;


    @OneToMany(mappedBy = "eksperiment")
    private List<Files> files;

    @ManyToMany(mappedBy = "eksperimenti")
    private List<Komponenta> komponente;

    @Column(columnDefinition = "TEXT")
    private String materials;

    @OneToMany(mappedBy = "eksperiment")
    private List<Log> logs;
}