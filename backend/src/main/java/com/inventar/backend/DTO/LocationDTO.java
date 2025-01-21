package com.inventar.backend.DTO;

public class LocationDTO {
    private Long id;

    private String adress;

    private String room;

    public LocationDTO(Long id, String adress, String room) {
        this.id = id;
        this.adress = adress;
        this.room = room;
    }

    public LocationDTO() {
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
}
