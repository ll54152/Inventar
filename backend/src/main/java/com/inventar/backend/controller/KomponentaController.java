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
@RequestMapping("/component")
public class KomponentaController {

    @Autowired
    private KomponentaServiceJPA komponentaServiceJPA;

    @PostMapping("/add")
    public ResponseEntity<String> addComponent(@RequestBody KomponentaAddDTO komponentaDTO) {
        Komponenta oldKomponenta = komponentaServiceJPA.findByZpf(komponentaDTO.getZpf());
        if (oldKomponenta != null) {
            return new ResponseEntity<>("Komponenta već postoji", HttpStatus.BAD_REQUEST);
        }

        komponentaServiceJPA.save(komponentaDTO);
        return new ResponseEntity<>("Komponenta dodata uspešno", HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<KomponentaDTO>> getAllComponents() {
        List<KomponentaDTO> komponentaDTOs = komponentaServiceJPA.findAll().stream()
                .map(komponenta -> new KomponentaDTO(komponenta.getId(), komponenta.getName()))
                .toList();
        return new ResponseEntity<>(komponentaDTOs, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Komponenta> getComponent(@PathVariable Long id) {
        Komponenta komponenta = komponentaServiceJPA.findById(id);
        if (komponenta == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(komponenta, HttpStatus.OK);
    }
}
