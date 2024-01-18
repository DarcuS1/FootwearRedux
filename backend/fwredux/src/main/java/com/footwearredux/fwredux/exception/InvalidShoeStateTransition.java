package com.footwearredux.fwredux.exception;

import com.footwearredux.fwredux.model.ShoeState;

public class InvalidShoeStateTransition extends RuntimeException {
    public InvalidShoeStateTransition(ShoeState from, ShoeState to) {
        super("Illegal state transition from state: " + from + " to: " + to );
    }
}
