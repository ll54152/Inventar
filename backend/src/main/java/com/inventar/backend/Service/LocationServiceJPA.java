package com.inventar.backend.Service;

import com.inventar.backend.Domain.*;
import com.inventar.backend.Repo.*;
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
