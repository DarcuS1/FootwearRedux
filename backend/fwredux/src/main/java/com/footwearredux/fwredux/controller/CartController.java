package com.footwearredux.fwredux.controller;


import com.footwearredux.fwredux.exception.NotAvailableShoeList;
import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.request.CartCheckoutRequest;
import com.footwearredux.fwredux.request.CartShoeAnyRequest;
import com.footwearredux.fwredux.response.CartCheckoutResponse;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import com.footwearredux.fwredux.service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    private final CartService cartService;

    @GetMapping("/fetch")
    ResponseEntity<List<ShoeProductResponse>> fetchUserCard() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        return ResponseEntity.ok(cartService.getAllShoesInCart(authentication.getName() ));
    }

    @PostMapping("/addshoe")
    ResponseEntity<Void> addShoeToCart(@Valid @RequestBody CartShoeAnyRequest Request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        cartService.addShoeToCart(authentication.getName(), Request.getShoeUUID());

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/removeshoe")
    ResponseEntity<Void> removeShoeFromCart(@Valid @RequestBody CartShoeAnyRequest Request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        cartService.deleteProductFromCart(authentication.getName(), Request.getShoeUUID());

        return ResponseEntity.ok().build();
    }

    @GetMapping("/checkout")
    ResponseEntity<CartCheckoutResponse> checkoutCartItems(
            @Valid @RequestBody CartCheckoutRequest Request
    ) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        try {
            cartService.checkoutCart(authentication.getName());
        } catch (NotAvailableShoeList Ex) {
            List<String> uuids = Ex.getNotAvaliableShoes().stream().map(ShoeProduct::getUuid).toList();

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(
                            CartCheckoutResponse.builder()
                                    .error(uuids.isEmpty() ? ("Cart is empty") : ("Some items became unavailable"))
                                    .soldItems(uuids)
                                    .build()
                    );
        }

        return ResponseEntity.ok().build();
    }
}
