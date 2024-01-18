package com.footwearredux.fwredux.exception;

import com.footwearredux.fwredux.model.ShoeProduct;
import lombok.Getter;

import java.util.List;

@Getter
public class NotAvailableShoeList extends RuntimeException {
    private List<ShoeProduct> notAvaliableShoes;

    public NotAvailableShoeList(List<ShoeProduct> notAvaliableShoes) {
        super("Not an error");
        this.notAvaliableShoes = notAvaliableShoes;
    }

}
