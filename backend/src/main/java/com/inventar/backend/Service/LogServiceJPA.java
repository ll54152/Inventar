package com.inventar.backend.Service;

import com.inventar.backend.Domain.*;
import com.inventar.backend.Repo.*;
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
