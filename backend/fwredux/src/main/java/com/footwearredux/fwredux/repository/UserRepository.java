package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByEmail(String email);
    Optional<User> findUserByUuid(String uuid);
}
