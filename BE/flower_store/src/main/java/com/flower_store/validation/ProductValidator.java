package com.flower_store.validation;

import org.springframework.validation.Errors;

public class ProductValidator {

    private static final String EMPTY = "Trường này không được để trống";
    private static final String WRONG_SYNTAX = "Định dạng không hợp lệ";
    private static final String WRONG_VALUE = "Giá trị không hợp lệ";
    private static final String CODE_REGEX = "^H\\d{4}$";

    public static void nameValidator(String name, Errors errors) {
        if (name == null || name.trim().length() == 0) {
            errors.rejectValue(name, null, EMPTY);
        }
    }

    public static void codeSyntaxValidator(String code, Errors errors) {
        if (!code.matches(CODE_REGEX)) {
            errors.rejectValue(code, null, "Product code " + WRONG_SYNTAX);
        }
    }

    public static void priceValidator(Long price, Errors errors) {
        if (price < 0) {
            errors.rejectValue(price + "", null, "Product price " + WRONG_VALUE);
        }
    }
}
