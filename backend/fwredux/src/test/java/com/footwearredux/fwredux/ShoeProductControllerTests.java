package com.footwearredux.fwredux;

import com.footwearredux.fwredux.controller.ShoeProductController;
import com.footwearredux.fwredux.model.ShoeFilterCriteria;
import com.footwearredux.fwredux.request.AddShoeProductRequest;
import com.footwearredux.fwredux.request.ShoeProductFetchRequest;
import com.footwearredux.fwredux.response.ShoeProductAddedResponse;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import com.footwearredux.fwredux.service.ShoeProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ShoeProductControllerTests {

    @Mock
    private ShoeProductService shoeProductService;

    private ShoeProductController shoeProductController;

    @BeforeEach
    public void setUp() {
        shoeProductController = new ShoeProductController(shoeProductService);

        // Mock the authentication context
        Authentication authentication = new UsernamePasswordAuthenticationToken("testUser", "testPassword");
        SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
        securityContext.setAuthentication(authentication);
        SecurityContextHolder.setContext(securityContext);
    }
/*
    @Test
    public void testFetchShoes() {
        ShoeProductFetchRequest request = new ShoeProductFetchRequest();
        request.setPageIndex(0);
        request.setCriteria(Optional.empty());

        List<ShoeProductResponse> expectedProducts = new ArrayList<>();
        when(shoeProductService.fetchShoes(eq(0), any(ShoeFilterCriteria.class))).thenReturn(expectedProducts);

        ResponseEntity<List<ShoeProductResponse>> response = shoeProductController.fetchShoes(request);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(expectedProducts, response.getBody());
    }

    @Test
    public void testAddNewShoe() {
        AddShoeProductRequest addShoeProductRequest = new AddShoeProductRequest();
        addShoeProductRequest.setName("Shoe Name");

        ShoeProductAddedResponse expectedResponse = new ShoeProductAddedResponse();
        expectedResponse.setShoeUUID("shoe-uuid");

        when(shoeProductService.addShoe(eq("testUser"), any(AddShoeProductRequest.class))).thenReturn(new ShoeProduct());

        ResponseEntity<ShoeProductAddedResponse> response = shoeProductController.addNewShoe(addShoeProductRequest);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(expectedResponse, response.getBody());
    }

    @Test
    public void testRemoveShoe() {
        ResponseEntity<Void> response = shoeProductController.removeShoe("shoe-uuid");

        assertEquals(200, response.getStatusCodeValue());
        verify(shoeProductService, times(1)).removeShoe(eq("testUser"), eq("shoe-uuid"));
    }

    @Test
    public void testFetchSingleProduct() {
        ShoeProductResponse expectedProduct = new ShoeProductResponse();
        when(shoeProductService.fetchSingleProduct("shoe-uuid")).thenReturn(expectedProduct);

        ResponseEntity<ShoeProductResponse> response = shoeProductController.fetchSingleProduct("shoe-uuid");

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(expectedProduct, response.getBody());
    }
*/
}

