package com.footwearredux.fwredux;

import com.footwearredux.fwredux.controller.ReviewController;
import com.footwearredux.fwredux.model.Review;
import com.footwearredux.fwredux.request.AddReviewRequest;
import com.footwearredux.fwredux.request.ReviewDeleteRequest;
import com.footwearredux.fwredux.request.ReviewFetchRequest;
import com.footwearredux.fwredux.response.ReviewResponse;
import com.footwearredux.fwredux.service.ReviewService;
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
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class ReviewControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ReviewService reviewService;

    @BeforeEach
    public void setUp() {
        // Mock the behavior of the reviewService methods
        when(reviewService.fetchReviews(any(Integer.class), any(String.class)))
                .thenReturn(new ArrayList<>());
        //when(reviewService.addReview(any(String.class), any(AddReviewRequest.class)))
               // .thenReturn(new Review(UUID.randomUUID().toString(), "Sample review"));
    }

    @Test
    public void testFetchAllReviews() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/review/fetch")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{}")
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testAddReview() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/review/addreview")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"content\": \"Sample review\"}")
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testRemoveReview() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/v1/review/removereview")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"reviewUUID\": \"some-uuid\"}")
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
