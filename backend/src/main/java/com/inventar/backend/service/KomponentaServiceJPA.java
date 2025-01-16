package com.inventar.backend.service;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class KomponentaServiceJPA {

    @Autowired
    private KomponentaRepo komponentaRepo;

    @Autowired
    private LocationRepo locationRepo;

    public Komponenta save(Komponenta komponenta) {
        List<Location> locations = locationRepo.findAll();
        for (Location location : locations) {
            if (location.getAdress().equals(komponenta.getLocation().getAdress()) &&
                    location.getRoom().equals(komponenta.getLocation().getRoom())) {
                komponenta.setLocation(location);
                break;
            }
        }

        return komponentaRepo.save(komponenta);
    }

    public Komponenta findByZpf(String zpf) {
        return komponentaRepo.findByZpf(zpf).orElse(null);
    }
}
