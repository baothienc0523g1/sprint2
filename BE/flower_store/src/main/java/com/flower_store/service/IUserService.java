package com.flower_store.service;


import com.flower_store.dto.UserInfoDto;
import com.flower_store.model.User;
import java.util.Optional;

public interface IUserService {

    Optional<User> findUserByUsername(String username);

    void createNewUser(User user);

    Optional<UserInfoDto> getInfoByUsername(String userName);
}
