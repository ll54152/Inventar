package com.inventar.backend.Repo;

import com.inventar.backend.Domain.*;
import org.springframework.data.jpa.repository.*;

public interface EksperimentRepo extends JpaRepository<Eksperiment, Long> {
}
