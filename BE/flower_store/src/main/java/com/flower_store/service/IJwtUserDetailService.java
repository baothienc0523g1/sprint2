package com.flower_store.service;

import com.flower_store.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IJwtUserDetailService extends UserDetailsService {

    Optional<User> findUserByUsername(String username);

}
