package com.inventar.backend.Service;

import com.inventar.backend.Domain.*;
import com.inventar.backend.Repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class FilesServiceJPA {

    @Autowired
    private FilesRepo filesRepo;

    public Files save(Files file) {
        return filesRepo.save(file);
    }
}
