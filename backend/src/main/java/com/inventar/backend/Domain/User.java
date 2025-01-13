package com.inventar.backend.Domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class User {

    @Id
    @Column(unique = true)
    @NotNull
    @Email
    private String email;

    @Size(min=8)
    @NotNull
    private String password;
}
