package com.inventar.backend.DTO;

public class EksperimentDTO {
    private Long id;

    private String name;

    public EksperimentDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public EksperimentDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
