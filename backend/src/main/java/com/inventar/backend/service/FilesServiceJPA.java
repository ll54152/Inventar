package com.inventar.backend.service;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
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
