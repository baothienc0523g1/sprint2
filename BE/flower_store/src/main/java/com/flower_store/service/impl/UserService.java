package com.flower_store.service.impl;

import com.flower_store.model.Role;
import com.flower_store.model.User;
import com.flower_store.repository.IUserRepository;
import com.flower_store.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    /**
     * method find user by username
     * @author Bao Thien
     * @since 06-12-2023
     * @param username
     * @return Optional<User>
     */
    @Override
    public Optional<User> findUserByUsername(String username) {
        return this.userRepository.findUserByUsername(username);
    }

    @Override
    public void createNewUser(User user, String role) {
        Role newRole = new Role(role);
        user.setRole(newRole);
        this.userRepository.save(user);
    }
}
