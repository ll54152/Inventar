package com.inventar.backend.DTO;

public class KomponentaDTO {

    private Integer id;
    private String name;

    public KomponentaDTO(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public KomponentaDTO() {
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
}
