package com.footwearredux.fwredux;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.footwearredux.fwredux.model.ShoeFilterCriteria;
import com.footwearredux.fwredux.request.AddShoeProductRequest;
import com.footwearredux.fwredux.request.ShoeProductFetchRequest;
import com.footwearredux.fwredux.response.ShoeProductAddedResponse;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import com.footwearredux.fwredux.service.ShoeProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Optional;

@SpringBootTest
@AutoConfigureMockMvc
public class ShoeProductControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ShoeProductService shoeProductService;

    @Test
    @WithMockUser(username = "testUser", password = "testPassword")
    public void testFetchShoes() throws Exception {
        // Create and save some shoe products using shoeProductService (mocked or actual service)
        // ...

        ShoeProductFetchRequest request = new ShoeProductFetchRequest();
        request.setPageIndex(0);
        request.setCriteria(Optional.empty());

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/shoes/fetch")
                        .content(asJsonString(request))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    @WithMockUser(username = "testUser", password = "testPassword")
    public void testAddNewShoe() throws Exception {
        AddShoeProductRequest addShoeProductRequest = new AddShoeProductRequest();
        //addShoeProductRequest.setName("Shoe Name");

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/shoes/add")
                        .content(asJsonString(addShoeProductRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
    }

    // Add more integration test methods for other controller actions

    // Helper method to convert objects to JSON
    private String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
