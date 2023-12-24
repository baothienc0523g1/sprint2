package com.flower_store.service.impl;

import com.flower_store.dto.UserInfoDto;
import com.flower_store.model.Role;
import com.flower_store.model.User;
import com.flower_store.repository.IRoleRepository;
import com.flower_store.repository.IUserRepository;
import com.flower_store.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoleRepository roleRepository;

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

    /**
     * method create new user with facebook login
     * @author Bao Thien
     * @since 18-12-2023
     * @param user
     * @return void
     */
    @Override
    public void createNewUser(User user) {
        Role newRole = this.roleRepository.findByName("MEMBER");
        user.setRole(newRole);
        this.userRepository.save(user);
    }

    /**
     * method get user information by username
     * @param userName
     * @since 22-12-2023
     * @author Bao Thien*/
    @Override
    public Optional<UserInfoDto> getInfoByUsername(String userName) {
        return this.userRepository.getInfoByUsername(userName);
    }
}
