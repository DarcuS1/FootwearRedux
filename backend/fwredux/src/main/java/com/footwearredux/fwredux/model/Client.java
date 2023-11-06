package com.footwearredux.fwredux.model;

import jakarta.persistence.*;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private ClientRole role;

    @Enumerated(EnumType.STRING)
    private SignupProvider provider;

    public Client(String email, String password, ClientRole role, SignupProvider provider) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.provider = provider;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public ClientRole getRole() {
        return role;
    }

    public SignupProvider getProvider() {
        return provider;
    }
}
