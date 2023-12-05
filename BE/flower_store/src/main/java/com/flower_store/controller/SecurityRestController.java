package com.flower_store.controller;

import com.flower_store.config.JwtUtilities;
import com.flower_store.dto.LoginRequestDto;
import com.flower_store.dto.UserDto;
import com.flower_store.jwt.JwtResponse;
import com.flower_store.jwt.LoginRequest;
import com.flower_store.model.User;
import com.flower_store.service.IJwtUserDetailService;
import com.flower_store.service.ISecurityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public")
public class SecurityRestController {

    @Autowired
    private JwtUtilities jwtUtilities;

    @Autowired
    private IJwtUserDetailService jwtUserDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ISecurityService securityService;

    private static final Logger logger = LoggerFactory.getLogger(SecurityRestController.class);

    /**
     * method authenticationUser
     * Creator ThienBB
     * Date 04-12-2023
     * param LoginRequestDto
     * return Jwt string
     */
    @PostMapping("/login")
    public ResponseEntity<?> authenticationUser(@Valid @RequestBody LoginRequestDto loginRequestDto,
                                                BindingResult bindingResult) throws Exception {
        new LoginRequestDto().validate(loginRequestDto, bindingResult);

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        LoginRequest loginRequest = new LoginRequest();
        BeanUtils.copyProperties(loginRequestDto, loginRequest);

        try {
            Optional<User> user = this.jwtUserDetailsService.findUserByUsername(loginRequest.getUsername().toLowerCase());

            if (user.isPresent()) {
                if (passwordEncoder.matches(loginRequest.getPassword(), user.get().getPassword())) {
                    UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(loginRequest.getUsername());
                    String jwt = this.jwtUtilities.generateToken(userDetails);
                    return ResponseEntity.ok().body(new JwtResponse(jwt));
                } else {
                    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
                }
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            logger.warn("Error while getting account by username!");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * method register new User
     * Creator ThienBB
     * Date 04-12-2023
     * param UserDto
     * return Http status
     */
    @PostMapping("/register")
    public ResponseEntity<?> createNewUser(@Valid @RequestBody UserDto userDto,
                                           BindingResult bindingResult) throws Exception {
        new UserDto().validate(userDto, bindingResult);

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        this.securityService.addUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
