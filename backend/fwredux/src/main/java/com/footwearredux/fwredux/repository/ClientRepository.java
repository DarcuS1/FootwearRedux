package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findClientByEmailAndPassword(String email, String password);
}
