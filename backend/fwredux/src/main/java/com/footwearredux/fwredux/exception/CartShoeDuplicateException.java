package com.footwearredux.fwredux.exception;

public class CartShoeDuplicateException extends RuntimeException{
    public CartShoeDuplicateException(String uuid) {
        super("A shoe with uuid: " + uuid + " already exists in the cart");
    }
}
