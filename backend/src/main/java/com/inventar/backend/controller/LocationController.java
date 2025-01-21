package com.inventar.backend.controller;

import com.inventar.backend.DTO.LocationDTO;
import com.inventar.backend.domain.*;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//ToDo: Cors za testiranje
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/location")
public class LocationController {
    @Autowired
    private LocationServiceJPA locationServiceJPA;

    @PostMapping("/add")
    public ResponseEntity<String> addLocation(@RequestBody Location location) {
        List<Location> locations = locationServiceJPA.findAll();

        for (Location loc : locations) {
            if (loc.getAdress().equals(location.getAdress()) && loc.getRoom().equals(location.getRoom())) {
                return new ResponseEntity<>("Lokacija već postoji", HttpStatus.BAD_REQUEST);
            }
        }

        locationServiceJPA.save(location);
        return new ResponseEntity<>("Lokacija dodata uspešno", HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<LocationDTO>> getAllLocations() {
        List<LocationDTO> locationDTOs = locationServiceJPA.findAll().stream()
                .map(location -> new LocationDTO(location.getId(), location.getAdress(), location.getRoom()))
                .toList();
        return new ResponseEntity<>(locationDTOs, HttpStatus.OK);
    }
}
