package com.inventar.backend.Domain;

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

}
