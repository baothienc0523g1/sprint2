package com.flower_store.service.impl;

import com.flower_store.dto.JwtUserDetailResponse;
import com.flower_store.model.User;
import com.flower_store.repository.ISecurityRepository;
import com.flower_store.service.IJwtUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class JwtUserDetailsService implements IJwtUserDetailService {

    @Autowired
    private ISecurityRepository securityRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> existedUser = this.securityRepository.findByUserName(username);

        if (!existedUser.isPresent()) {
            throw new UsernameNotFoundException("User with username: " + username + " was not found in database");
        }

        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(existedUser.get().getRole().getName()));

        UserDetails userDetails = new JwtUserDetailResponse(
                existedUser.get().getUsername(),
                existedUser.get().getPassword(),
                existedUser.get().isOnlineStatus(),
                grantedAuthorities
        );

        return userDetails;
    }

    /**
     * method find user by username
     *
     * @param username
     * @return Optional<User>
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    public Optional<User> findUserByUsername(String username) {
        return this.securityRepository.findByUserName(username);
    }
}
