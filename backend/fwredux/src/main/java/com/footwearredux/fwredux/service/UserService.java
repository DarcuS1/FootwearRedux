package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.model.ShoeImage;
import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.repository.ShoeImageRepository;
import com.footwearredux.fwredux.repository.UserRepository;
import com.footwearredux.fwredux.response.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final ShoeImageRepository shoeImageRepository;

    @Transactional
    public UserResponse fetchCurrentUser(String email) {
        User user = userRepository.findUserByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        return new UserResponse(user);
    }

    @Transactional
    public UserResponse setCurrentUserImage(String email, byte[] ImageBlob) {
        User user = userRepository.findUserByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        ShoeImage image = shoeImageRepository.save(ShoeImage.builder()
                .image(ImageBlob)
                .build());

        user.setImageUUID(image.getUuid());
        user = userRepository.save(user);

        return new UserResponse(user);
    }

    @Transactional
    public byte[] getUserImageByUserUuid(String uuid) {
        User user = userRepository.findUserByUuid(uuid)
                .orElseThrow(() -> new UsernameNotFoundException(uuid));

        ShoeImage image = shoeImageRepository.findByUuid(user.getImageUUID())
                .orElseThrow(() -> new UsernameNotFoundException(uuid));
        return image.getImage();
    }
}
