package com.inventar.backend.Domain;

import jakarta.persistence.*;

@Entity
public class Files {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Column(columnDefinition = "bytea")
    private byte[] fileByte;

    private String fileType;

    @ManyToOne
    @JoinColumn(name = "komponenta_id")
    private Komponenta komponenta;

    @ManyToOne
    @JoinColumn(name = "eksperiment_id")
    private Eksperiment eksperiment;
}