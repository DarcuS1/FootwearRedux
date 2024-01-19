package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    public List<Order> findOrdersByUserEmail(String email);
}
