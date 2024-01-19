package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.repository.OrderRepository;
import com.footwearredux.fwredux.response.OrderResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    @Transactional
    public List<OrderResponse> fetchOrdersForUser(String email) {
        return orderRepository.findOrdersByUserEmail(email)
                .stream()
                .map((v) -> new OrderResponse(v))
                .collect(Collectors.toList());
    }
}
