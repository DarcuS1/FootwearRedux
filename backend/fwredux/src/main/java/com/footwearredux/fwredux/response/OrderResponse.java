package com.footwearredux.fwredux.response;

import com.footwearredux.fwredux.model.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private String fullName;
    private String phoneNumber;
    private String email;
    private String address;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private List<ShoeProductResponse> shoeList;
    public OrderResponse(Order order) {
        this.fullName = order.getFullName();
        this.phoneNumber = order.getPhoneNumber();
        this.email = order.getEmail();
        this.address = order.getAddress();
        this.city = order.getCity();
        this.state = order.getState();
        this.country = order.getCountry();
        this.postalCode = order.getPostalCode();
        this.shoeList = order.getProducts()
                .stream()
                .map((p) -> new ShoeProductResponse(p))
                .collect(Collectors.toList());
    }
}
