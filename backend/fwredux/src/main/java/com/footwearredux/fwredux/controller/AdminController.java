package com.footwearredux.fwredux.controller;

import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.model.UserRole;
import com.footwearredux.fwredux.repository.UserRepository;
import com.footwearredux.fwredux.response.OrderResponse;
import com.footwearredux.fwredux.service.AdminService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("api/v1/admin/")
@RestController
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("allorders")
    ResponseEntity<List<OrderResponse>> getAllOrders() {
        return ResponseEntity.ok(adminService.getAllOrders());
    }

    @DeleteMapping("/deleteshoe/{uuid}")
    ResponseEntity<Void> deleteShoe(
            @PathVariable String uuid
    ) {
        adminService.deleteShoe(uuid);
        return ResponseEntity.ok().build();
    }
}
