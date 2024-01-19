package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.model.UserRole;
import com.footwearredux.fwredux.repository.UserRepository;
import com.footwearredux.fwredux.request.AuthenticationRequest;
import com.footwearredux.fwredux.request.RegisterRequest;
import com.footwearredux.fwredux.response.AuthenticationResponse;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostConstruct
    private void generateAdmin() {
        if(repository.findUserByEmail("admin@admin.com").isPresent()) {
            return;
        }
        AuthenticationResponse res = registerAdmin();
    }

    public AuthenticationResponse registerAdmin() {
        try {
            var user = User.builder()
                    .firstName("admin")
                    .lastname("admin")
                    .email("admin@admin.com")
                    .password(passwordEncoder.encode("admin"))
                    .role(UserRole.ADMIN)
                    .build();
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        } catch (DataIntegrityViolationException ex) {
            return AuthenticationResponse.builder()
                    .error("Failed to create admin account")
                    .build();
        }
    }

    public AuthenticationResponse register(RegisterRequest request) {

        try {
            var user = User.builder()
                    .firstName(request.getFirstName())
                    .lastname(request.getLastName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(UserRole.USER)
                    .build();
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        } catch (DataIntegrityViolationException ex) {
            return AuthenticationResponse.builder()
                    .error("A user with the same email: '" + request.getEmail() + "' already exists")
                    .build();
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findUserByEmail(request.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
