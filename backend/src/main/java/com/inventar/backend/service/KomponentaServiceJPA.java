package com.inventar.backend.service;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class KomponentaServiceJPA {

    @Autowired
    private KomponentaRepo komponentaRepo;

    public Komponenta save(Komponenta komponenta) {
        return komponentaRepo.save(komponenta);
    }
}
