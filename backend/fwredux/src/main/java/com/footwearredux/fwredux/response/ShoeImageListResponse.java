package com.footwearredux.fwredux.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShoeImageListResponse {
    private String coverUuid;
    private List<String> imagesUuid;
}
