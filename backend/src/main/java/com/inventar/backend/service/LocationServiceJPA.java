package com.inventar.backend.service;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class LocationServiceJPA {

    @Autowired
    private LocationRepo locationRepo;

    public Location save(Location location) {
        return locationRepo.save(location);
    }
}
