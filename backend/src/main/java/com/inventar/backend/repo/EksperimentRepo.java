package com.inventar.backend.repo;

import com.inventar.backend.domain.*;
import org.springframework.data.jpa.repository.*;

public interface EksperimentRepo extends JpaRepository<Eksperiment, Long> {
    //ToDo: Ovdje ne znam jel mi treba neki "findBy" ili nešto slično pošto ne znam kako eksperiment može imati duplić
}
