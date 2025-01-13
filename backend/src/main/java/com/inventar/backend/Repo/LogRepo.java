package com.inventar.backend.Repo;

import com.inventar.backend.Domain.*;
import org.springframework.data.jpa.repository.*;

public interface LogRepo extends JpaRepository<Log, Long> {
}
