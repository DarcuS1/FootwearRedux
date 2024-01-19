package com.footwearredux.fwredux;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.footwearredux.fwredux.request.AuthenticationRequest;
import com.footwearredux.fwredux.request.RegisterRequest;
import com.footwearredux.fwredux.response.AuthenticationResponse;
import com.footwearredux.fwredux.service.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthenticationControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AuthenticationService authenticationService;

    @BeforeEach
    public void setUp() {
        // Mock the behavior of the authenticationService methods
      //  when(authenticationService.register(any(RegisterRequest.class)))
          //      .thenReturn(new AuthenticationResponse("registration_token"));

       // when(authenticationService.authenticate(any(AuthenticationRequest.class)))
            //    .thenReturn(new AuthenticationResponse("authentication_token"));
    }

    @Test
    public void testRegister() throws Exception {
        //RegisterRequest request = new RegisterRequest("username", "password");

       // mockMvc.perform(MockMvcRequestBuilders
     //                   .post("/api/v1/auth/register")
      //                  .contentType(MediaType.APPLICATION_JSON)
      //                  .content(objectMapper.writeValueAsString(request))
      //          )
      //          .andExpect(MockMvcResultMatchers.status().isOk())
      //          .andExpect(MockMvcResultMatchers.jsonPath("$.token").value("registration_token"));
    }

    @Test
    public void testAuthenticate() throws Exception {
        AuthenticationRequest request = new AuthenticationRequest("username", "password");

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/v1/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.token").value("authentication_token"));
    }
}
