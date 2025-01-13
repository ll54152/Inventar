package com.inventar.backend.Service;

import com.inventar.backend.Domain.*;
import com.inventar.backend.Repo.*;
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
