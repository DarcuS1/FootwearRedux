package com.footwearredux.fwredux.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartCheckoutResponse {
    private String error;
    private List<String> soldItems; //returns the uuids of the sold items
}
