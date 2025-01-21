package com.inventar.backend.controller;

import com.inventar.backend.DTO.*;
import com.inventar.backend.domain.*;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//ToDo: Cors za testiranje
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/experiment")
public class EksperimentController {

    @Autowired
    private EksperimentServiceJPA eksperimentServiceJPA;

    @PostMapping("/add")
    public ResponseEntity<String> addEksperiment(@RequestBody Eksperiment eksperiment) {
        eksperimentServiceJPA.save(eksperiment);
        return new ResponseEntity<>("Eksperiment added successfully", HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<EksperimentDTO>> getAllExperiments() {
        List<EksperimentDTO> eksperimentDTOs = eksperimentServiceJPA.findAll().stream()
                .map(eksperiment -> new EksperimentDTO(eksperiment.getId(), eksperiment.getName()))
                .toList();
        return new ResponseEntity<>(eksperimentDTOs, HttpStatus.OK);
    }
}
