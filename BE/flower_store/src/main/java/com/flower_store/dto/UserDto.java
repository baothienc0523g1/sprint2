package com.flower_store.dto;


import com.flower_store.validation.RegisterValidator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Validator {

    @NotBlank
    private String name;

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    @NotBlank
    private String phoneNumber;

    @NotBlank
    private String birthday;

    @NotBlank
    private String email;

    @NotBlank
    private String address;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        UserDto userDto = (UserDto) target;

        RegisterValidator.usernameValidator(userDto.getUsername(), errors);
        RegisterValidator.passwordValidator(userDto.getPassword(), errors);
        RegisterValidator.usernameLengthValidator(userDto.getUsername(), errors);
        RegisterValidator.passwordLengthValidator(userDto.getPassword(), errors);
        RegisterValidator.phoneNumberValidator(userDto.getPhoneNumber(), errors);
    }
}
