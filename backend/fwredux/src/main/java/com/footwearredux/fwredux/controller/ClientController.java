package com.footwearredux.fwredux.controller;

import com.footwearredux.fwredux.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/v1/client")
@AllArgsConstructor
public class ClientController {
    private final ClientRepository clientRepository;
}
