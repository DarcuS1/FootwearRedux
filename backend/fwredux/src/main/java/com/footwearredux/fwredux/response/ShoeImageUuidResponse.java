package com.footwearredux.fwredux.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShoeImageUuidResponse {
    private String shoeImageUuid;
    private String error;
}
