package com.inventar.backend.repo;

import com.inventar.backend.domain.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface UserRepo extends JpaRepository<User, String>{
    Optional<User> findByEmail(String email);
}
