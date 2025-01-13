package com.inventar.backend.Repo;

import com.inventar.backend.Domain.*;
import org.springframework.data.jpa.repository.*;

public interface FilesRepo extends JpaRepository<Files, Long> {
}
