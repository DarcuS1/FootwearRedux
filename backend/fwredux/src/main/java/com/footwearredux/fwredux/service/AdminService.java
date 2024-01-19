package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.repository.OrderRepository;
import com.footwearredux.fwredux.repository.ShoeProductRepository;
import com.footwearredux.fwredux.response.OrderResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AdminService {
    private final OrderRepository orderRepository;
    private final ShoeProductRepository shoeProductRepository;

    public List<OrderResponse> getAllOrders() {
        return orderRepository.findAll().stream().map((o) -> new OrderResponse(o)).collect(Collectors.toList());
    }

    public void deleteShoe(String uuid) {
        shoeProductRepository.deleteByUuid(uuid);
    }
}
