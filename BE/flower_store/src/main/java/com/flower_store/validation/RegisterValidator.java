package com.flower_store.validation;

import org.springframework.validation.Errors;

import java.time.LocalDate;
import java.util.Date;

public class RegisterValidator {

    private static final String EMPTY = "Trường này không được để trống";
    private static final String INVALID_LENGTH = "Độ dài không hợp lệ";
    private static final String INVALID_SYNTAX = "Cú pháp không hợp lệ";
    private static final String INVALID_BIRTHDAY = "Chưa đủ tuổi đăng ký";
    private static final String NAME = "name";
    private static final String USER_NAME = "username";
    private static final String PASSWORD = "password";
    private static final String PHONE_NUMBER = "phoneNumber";
    private static final String BIRTHDAY = "birthday";
    private static final String EMAIL = "email";
    private static final String ADDRESS = "address";

    /**
     * method usernameValidator()
     * Creator ThienBB
     * Date 04-12-2023
     * param String username, Errors errors
     * return void
     */
    public static void usernameValidator(String username, Errors errors) {
        if (username == null || username.trim().length() == 0) {
            errors.rejectValue(USER_NAME, null, EMPTY);
        }
    }

    /**
     * method usernameValidator()
     * Creator ThienBB
     * Date 04-12-2023
     * param String username, Errors errors
     * return void
     */
    public static void usernameLengthValidator(String username, Errors errors) {
        if (username.trim().length() <= 6) {
            errors.rejectValue(USER_NAME, null, INVALID_LENGTH);
        }
    }

    /**
     * method usernameValidator()
     * Creator ThienBB
     * Date 04-12-2023
     * param String password, Errors errors
     * return void
     */
    public static void passwordValidator(String password, Errors errors) {
        if (password == null || password.trim().length() == 0) {
            errors.rejectValue(PASSWORD, null, EMPTY);
        }
    }

    /**
     * method usernameValidator()
     * Creator ThienBB
     * Date 04-12-2023
     * param String password, Errors errors
     * return void
     */
    public static void passwordLengthValidator(String password, Errors errors) {
        if (password.trim().length() <= 6) {
            errors.rejectValue(PASSWORD, null, INVALID_LENGTH);
        }
    }


    /**
     * method validation phone number
     * Creator ThienBB
     * Date 04-12-2023
     * param String phone number, Errors errors
     * return void
     */
    public static void phoneNumberValidator(String phoneNumber, Errors errors) {
        String phoneNumberRegex = "^[0]\\d{9,11}$";

        if (!phoneNumber.matches(phoneNumberRegex)) {
            errors.rejectValue(PHONE_NUMBER, null, INVALID_SYNTAX);
        }
    }

    /**
     * method validation birth day
     * Creator ThienBB
     * Date 04-12-2023
     * param String birth day, Errors errors
     * return void
     */
    public static void birthdayValidator(String birthday, Errors errors) {
        LocalDate localDate = LocalDate.parse(birthday);

        if (localDate.getYear() < 12) {
            errors.rejectValue(BIRTHDAY, null, INVALID_BIRTHDAY);
        }
    }
}
