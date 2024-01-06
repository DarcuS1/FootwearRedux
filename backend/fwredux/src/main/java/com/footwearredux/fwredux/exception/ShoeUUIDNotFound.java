package com.footwearredux.fwredux.exception;

public class ShoeUUIDNotFound extends RuntimeException {
    public ShoeUUIDNotFound(String uuid) {
        super("Shoe uuid: " + uuid + " not found");
    }
}
