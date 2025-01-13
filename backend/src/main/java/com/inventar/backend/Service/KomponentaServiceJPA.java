package com.inventar.backend.Service;

import com.inventar.backend.Domain.*;
import com.inventar.backend.Repo.*;
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
