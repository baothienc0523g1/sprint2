package com.flower_store.service.impl;

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

    @Override
    public Optional<User> findUserByUsername(String username) {
        return this.userRepository.findUserByUsername(username);
    }
}
