package com.footwearredux.fwredux.request;

import com.footwearredux.fwredux.model.ShoeFilterCriteria;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShoeProductFetchRequest {
    @NotNull
    private Integer pageIndex;

    private Optional<ShoeFilterCriteria> criteria;
}
