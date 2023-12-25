package com.flower_store.validation;

import org.springframework.validation.Errors;

public class LoginValidator {
    private static final String EMPTY = "Trường này không được để trống";
    private static final String USER_NAME = "username";
    private static final String PASSWORD = "password";

    /**
     * method check if username in login request from client is null or not
     *
     * @param password
     * @param errors
     * @author Bao Thien
     * @since 04-12-2023
     */
    public static void usernameValidator(String username, Errors errors) {
        if (username == null || username.trim().length() == 0) {
            errors.rejectValue(USER_NAME, null, EMPTY);
        }
    }

    /**
     * method check if password in login request from client is null or not
     *
     * @param password
     * @param errors
     * @author Bao Thien
     * @since 04-12-2023
     */
    public static void passwordValidator(String password, Errors errors) {
        if (password == null || password.trim().length() == 0) {
            errors.rejectValue(PASSWORD, null, EMPTY);
        }
    }

}
