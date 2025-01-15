package com.inventar.backend.security;

import org.springframework.context.annotation.*;
import org.springframework.security.crypto.bcrypt.*;


@Configuration
public class Security {
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
