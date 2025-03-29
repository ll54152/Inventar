package com.inventar.backend.controller;

import com.inventar.backend.domain.*;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

//ToDo: Cors za testiranje
@RestController
@CrossOrigin(origins = {"http://localhost:5173", "http://192.168.18.27:5173", "http://localhost:8080", "192.168.18.5", "http://192.168.18.5"})
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceJPA userServiceJPA;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            return new ResponseEntity<>("Korisnik već postoji", HttpStatus.BAD_REQUEST);
        }
        userServiceJPA.save(user);
        return new ResponseEntity<>("Korisnik registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            if (userServiceJPA.checkPassword(user.getPassword(), oldUser)) {
                return new ResponseEntity<>("Login successful", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }
}
