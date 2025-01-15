package com.inventar.backend.service;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class EksperimentServiceJPA {

    @Autowired
    private EksperimentRepo eksperimentRepo;

    public Eksperiment save(Eksperiment eksperiment) {
        return eksperimentRepo.save(eksperiment);
    }
}
