package com.inventar.backend.controller;

import com.inventar.backend.domain.*;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

//ToDo: Cors za testiranje
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/component")
public class KomponentaController {

    @Autowired
    private KomponentaServiceJPA komponentaServiceJPA;

    @PostMapping("/add")
    public ResponseEntity<String> addComponent(@RequestBody Komponenta komponenta) {
        Komponenta oldKomponenta = komponentaServiceJPA.findByZpf(komponenta.getZpf());
        if (oldKomponenta != null) {
            return new ResponseEntity<>("Komponenta već postoji", HttpStatus.BAD_REQUEST);
        }

        komponentaServiceJPA.save(komponenta);
        return new ResponseEntity<>("Komponenta dodata uspešno", HttpStatus.CREATED);
    }
}
