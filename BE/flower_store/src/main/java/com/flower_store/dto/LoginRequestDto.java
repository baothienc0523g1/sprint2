package com.flower_store.dto;

import com.flower_store.validation.LoginValidator;
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
public class LoginRequestDto implements Validator {

    private static final long serialVersionUID = 5926469583028550707L;

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    /**
     * method validate()
     * Creator ThienBB
     * Date 04-12-2023
     * param Object target, Errors errors
     * return void
     */
    @Override
    public void validate(Object target, Errors errors) {
        LoginRequestDto loginRequestDto = (LoginRequestDto) target;

        LoginValidator.usernameValidator(loginRequestDto.getUsername(), errors);
        LoginValidator.passwordValidator(loginRequestDto.getPassword(), errors);
    }
}
