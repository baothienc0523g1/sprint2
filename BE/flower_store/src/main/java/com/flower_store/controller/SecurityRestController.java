package com.flower_store.controller;

import com.flower_store.commons.PasswordGenerator;
import com.flower_store.dto.FacebookLoginDto;

import com.flower_store.service.IUserService;

import org.slf4j.Logger;
import com.flower_store.dto.UserDto;
import com.flower_store.config.JwtUtilities;
import com.flower_store.dto.LoginRequestDto;
import com.flower_store.jwt.JwtResponse;
import com.flower_store.jwt.LoginRequest;
import com.flower_store.model.User;
import com.flower_store.service.IJwtUserDetailService;
import com.flower_store.service.ISecurityService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Optional;

import static com.flower_store.commons.Enum.LOGIN_FAIL;

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

    @Autowired
    private IUserService userService;

    private static final Logger logger = LoggerFactory.getLogger(SecurityRestController.class);

    /**
     * method do login
     *
     * @param loginRequestDto
     * @param bindingResult
     * @return ResponseEntity<?>
     * @author Bao Thien
     * @since 04-12-2023
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
     * method login with facebook
     *
     * @param facebookLoginDto
     * @return ResponseEntity<?>
     * @author Bao Thien
     * @since 15-12-2023
     */
    @PostMapping("/login-fb")
    public ResponseEntity<?> doLoginWithFb(@RequestBody FacebookLoginDto facebookLoginDto) {
        if (facebookLoginDto == null ||
                facebookLoginDto.getFacebookAddress() == null ||
                facebookLoginDto.getFacebookAddress().trim().equals("")) {
            return ResponseEntity.badRequest().body(LOGIN_FAIL);
        }

        String fbAddress = facebookLoginDto.getFacebookAddress();
        String fullName = facebookLoginDto.getFullName();

        Optional<User> existedUser = this.userService.findUserByUsername(fbAddress);

        if (!existedUser.isPresent()) {
            User newUser = new User();
            newUser.setUsername(fbAddress);
            newUser.setName(fullName);
            newUser.setEmail(fbAddress);
            String passwordGenerator = PasswordGenerator.generateRandomString();
            newUser.setPassword(this.passwordEncoder.encode(passwordGenerator));
            this.userService.createNewUser(newUser);
        }
        UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(fbAddress);
        String jwt = this.jwtUtilities.generateToken(userDetails);

        return ResponseEntity.ok().body(new JwtResponse(jwt));
    }


    /**
     * method register new User
     *
     * @param userDto
     * @param bindingResult
     * @return ResponseEntity<?>
     * @author Bao Thien
     * @since 04-12-2023
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

    /**
     * method do log out
     * NOT COMPLETE YET
     * @param request
     * @param token
     * @return ResponseEntity<?>
     * @author Bao Thien
     * @since 15-12-2023
     */
    @PostMapping("/logout/")
    public ResponseEntity<?> doLogout(HttpServletRequest request, String token) {

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
