package com.flower_store.controller;

import com.flower_store.model.User;
import com.flower_store.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/member")
public class UserRestController {

    @Autowired
    private IUserService userService;

    /**
     * method get user full name
     *
     * @param username
     * @return Optional<User>
     * @author Bao Thien
     * @since 05-12-2023
     */
    @GetMapping("/getUserName/{username}")
    public ResponseEntity<?> getNameByUsername(@PathVariable(name = "username") String username) {

        Optional<User> existedUser = this.userService.findUserByUsername(username);

        if (existedUser.isPresent()) {
            return ResponseEntity.ok(existedUser);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
