package com.footwearredux.fwredux;

import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.request.CartCheckoutRequest;
import com.footwearredux.fwredux.request.CartShoeAnyRequest;
import com.footwearredux.fwredux.response.CartCheckoutResponse;
import com.footwearredux.fwredux.response.OrderResponse;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import com.footwearredux.fwredux.service.CartService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class CartControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CartService cartService;

    @BeforeEach
    public void setUp() {
        // Mock the behavior of the cartService methods
        when(cartService.getAllShoesInCart(any(String.class)))
                .thenReturn(new ArrayList<>());

       // when(cartService.addShoeToCart(any(String.class), any(String.class)))
            //    .thenReturn(null);

       // when(cartService.deleteProductFromCart(any(String.class), any(String.class)))
            //    .thenReturn(null);

        when(cartService.checkoutCart(any(String.class), any(CartCheckoutRequest.class)))
                .thenReturn(new OrderResponse());
    }

    @Test
    public void testFetchUserCart() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/cart/fetch")
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testAddShoeToCart() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/cart/addshoe")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"shoeUUID\": \"sampleUUID\"}")
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testRemoveShoeFromCart() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/v1/cart/removeshoe")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"shoeUUID\": \"sampleUUID\"}")
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testCheckoutCartItems() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/cart/checkout")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"items\": []}")
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
