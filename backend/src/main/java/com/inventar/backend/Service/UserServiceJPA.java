package com.inventar.backend.Service;

import com.inventar.backend.Domain.*;
import com.inventar.backend.Repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class UserServiceJPA {

    @Autowired
    private UserRepo userRepo;

    public User save(User user) {
        return userRepo.save(user);
    }
}
