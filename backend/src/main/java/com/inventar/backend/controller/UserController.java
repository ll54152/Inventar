package com.inventar.backend.controller;

import com.fasterxml.jackson.core.*;
import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.security.crypto.password.*;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserServiceJPA userServiceJPA;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        System.out.println(user);
        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            return new ResponseEntity<>("Korisnik već postoji", HttpStatus.BAD_REQUEST);
        }
        userServiceJPA.save(user);
        return new ResponseEntity<>("Korisnik registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) throws JsonProcessingException {
        System.out.println("Pokusaj login-a " + user.getEmail());

        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            if(userServiceJPA.checkPassword(user.getPassword(), oldUser)){
                return new ResponseEntity<>("Login successful", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }
}
