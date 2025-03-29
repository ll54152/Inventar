package com.inventar.backend.controller;

import com.inventar.backend.domain.*;
import com.inventar.backend.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

//ToDo: Cors za testiranje
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceJPA userServiceJPA;


    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User oldUser = userServiceJPA.findByEmail(user.getEmail());

        if (oldUser != null) {
            String token = userServiceJPA.verifyLogin(user);
            if (token != null && !token.equals("Failed to authenticate")) {
                return new ResponseEntity<>("Login successful. Token: " + token, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            return new ResponseEntity<>("Korisnik već postoji", HttpStatus.BAD_REQUEST);
        }
        userServiceJPA.register(user);
        return new ResponseEntity<>("Korisnik registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/registerDeprecated")
    public ResponseEntity<String> registerUserDeprecated(@RequestBody User user) {
        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            return new ResponseEntity<>("Korisnik već postoji", HttpStatus.BAD_REQUEST);
        }
        userServiceJPA.registerDeprecated(user);
        return new ResponseEntity<>("Korisnik registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/loginDeprecated")
    public ResponseEntity<String> loginUserDeprecated(@RequestBody User user) {
        User oldUser = userServiceJPA.findByEmail(user.getEmail());
        if (oldUser != null) {
            if (userServiceJPA.loginDeprecated(user.getPassword(), oldUser)) {
                return new ResponseEntity<>("Login successful", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }

}
