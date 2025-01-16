package com.inventar.backend.repo;

import com.inventar.backend.domain.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface LocationRepo extends JpaRepository<Location, Long> {
    Optional<Location> findByAdress(String adress);

    Optional<Location> findByRoom(String room);

    List<Location> findAll();
}