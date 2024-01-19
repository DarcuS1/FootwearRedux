package com.footwearredux.fwredux;

import com.footwearredux.fwredux.controller.ShoeImageController;
import com.footwearredux.fwredux.response.ShoeImageUuidResponse;
import com.footwearredux.fwredux.service.ShoeImageService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.UUID;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class ShoeImageControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ShoeImageService shoeImageService;

    @BeforeEach
    public void setUp() {
        // Mock the behavior of the shoeImageService methods
        //when(shoeImageService.fetchImage(anyString())).thenReturn new byte[] { 0x01, 0x02, 0x03 };
        when(shoeImageService.addImageToProductCover(anyString(), anyString(), any(byte[].class)))
                .thenReturn(UUID.randomUUID().toString());
        when(shoeImageService.addImageToProductList(anyString(), anyString(), any(byte[].class)))
                .thenReturn(UUID.randomUUID().toString());
    }

    @Test
    public void testFetchImage() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/v1/shoe_images/fetch/some-uuid")
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.IMAGE_JPEG));
    }

    @Test
    public void testSetCoverForShoe() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
                "file", "sample.jpg", MediaType.IMAGE_JPEG_VALUE, "sample image".getBytes()
        );

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/shoe_images/set_cover/some-uuid")
                        .contentType(MediaType.MULTIPART_FORM_DATA)
                        .content(file.getBytes())
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.shoeImageUuid").exists());
    }

    @Test
    public void testAddImageToShoe() throws Exception {
        MockMultipartFile file = new MockMultipartFile(
                "file", "sample.jpg", MediaType.IMAGE_JPEG_VALUE, "sample image".getBytes()
        );

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/shoe_images/add_image/some-uuid")
                        .contentType(MediaType.MULTIPART_FORM_DATA)
                        .content(file.getBytes())
                )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
