package com.inventar.backend.repo;

import com.inventar.backend.domain.*;
import org.springframework.data.jpa.repository.*;

public interface LogRepo extends JpaRepository<Log, Long> {
}
