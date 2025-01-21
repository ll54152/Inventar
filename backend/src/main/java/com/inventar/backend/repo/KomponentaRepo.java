package com.inventar.backend.repo;

import com.inventar.backend.domain.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface KomponentaRepo extends JpaRepository<Komponenta, Long> {
    Optional<Komponenta> findByZpf(String zpf);
    Optional<Komponenta> findById(Long id);
}