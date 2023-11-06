package com.footwearredux.fwredux.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private ClientRole role;

    @Enumerated(EnumType.STRING)
    private SignupProvider provider;

    public Client(String username, String email, String password, ClientRole role, SignupProvider provider) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.provider = provider;
    }
}
