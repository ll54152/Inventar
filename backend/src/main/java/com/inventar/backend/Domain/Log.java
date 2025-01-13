package com.inventar.backend.Domain;

import jakarta.persistence.*;

import java.time.*;

@Entity
public class Log {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "komponenta_id")
    private Komponenta komponenta;

    @ManyToOne
    @JoinColumn(name = "eksperiment_id")
    private Eksperiment eksperiment;

    @Column(columnDefinition = "TEXT")
    private String note;

    private LocalDateTime timestamp;

    //private User user;
}
