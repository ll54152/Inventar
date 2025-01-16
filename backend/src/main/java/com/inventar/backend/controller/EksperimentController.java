package com.inventar.backend.controller;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.EksperimentRepo;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

//ToDo: Cors za testiranje
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/experiment")
public class EksperimentController {
    @Autowired
    private EksperimentRepo eksperimentRepo;

    @PostMapping("/add")
    public ResponseEntity<String> addEksperiment(@RequestBody Eksperiment eksperiment) {
        eksperimentRepo.save(eksperiment);
        return new ResponseEntity<>("Eksperiment added successfully", HttpStatus.CREATED);
    }
}
