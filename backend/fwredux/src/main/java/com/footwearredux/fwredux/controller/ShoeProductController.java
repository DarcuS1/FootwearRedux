package com.footwearredux.fwredux.controller;

import com.footwearredux.fwredux.model.ShoeFilterCriteria;
import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.request.AddShoeProductRequest;
import com.footwearredux.fwredux.request.ShoeProductFetchRequest;
import com.footwearredux.fwredux.response.AuthenticationResponse;
import com.footwearredux.fwredux.response.ShoeProductAddedResponse;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import com.footwearredux.fwredux.service.ShoeProductService;
import com.nimbusds.jose.proc.SecurityContext;
import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import jdk.jfr.Frequency;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/shoes")
@RequiredArgsConstructor
public class ShoeProductController {
    private final ShoeProductService shoeProductService;

    @PostMapping("fetch")
    private ResponseEntity<List<ShoeProductResponse>> fetchShoes(
            @Valid @RequestBody ShoeProductFetchRequest Request
    ) {
        if (Request.getPageIndex() < 0) {
            throw new ArrayIndexOutOfBoundsException("PageIndex was negative" );
        }

        ShoeFilterCriteria criteria = null;

        if(Request.getCriteria() == null || !Request.getCriteria().isPresent()) {
            criteria = ShoeFilterCriteria.builder().build();
        } else {
            criteria = Request.getCriteria().get();
        }

        List<ShoeProductResponse> products = shoeProductService.fetchShoes(Request.getPageIndex(), criteria);

        return ResponseEntity.ok(products);
    }

    @PostMapping("add")
    private ResponseEntity<ShoeProductAddedResponse> addNewShoe(@Valid @RequestBody AddShoeProductRequest addShoeProductRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        ShoeProduct product = shoeProductService.addShoe(authentication.getName(), addShoeProductRequest);

        return ResponseEntity.ok(ShoeProductAddedResponse.builder()
                .shoeUUID(product.getUuid())
                .build());
    }

    @GetMapping("/get_product/{uuid}")
    private ResponseEntity<ShoeProductResponse> getSingelShoe(
            @Valid @PathVariable  String uuid) {
        return ResponseEntity.ok(shoeProductService.getSingelShoe(uuid));
    }

    @DeleteMapping("remove/{uuid}")
    private ResponseEntity<Void> removeShoe(@PathVariable String uuid) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        shoeProductService.removeShoe(authentication.getName(), uuid);

        return ResponseEntity.ok().build();
    }

    @GetMapping("fetchSingleProduct/{uuid}")
    private ResponseEntity<ShoeProductResponse> fetchSingleProduct(@PathVariable String uuid) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ResponseEntity.ok(shoeProductService.fetchSingleProduct(uuid));
    }
}