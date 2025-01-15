package com.inventar.backend.service;

import com.inventar.backend.domain.*;
import com.inventar.backend.repo.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Service
public class LogServiceJPA {

    @Autowired
    private LogRepo logRepo;

    public Log save(Log log) {
        return logRepo.save(log);
    }
}
