package com.flower_store.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;


import java.time.LocalDateTime;


import static com.flower_store.commons.Enum.INVALID_DATE;
import static com.flower_store.commons.Enum.INVALID_VALUE;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartPayDto implements Validator {
    @NotBlank
    private int productId;
    @NotBlank
    private int productQuantity;
    @NotBlank
    private Long totalCost;
    @NotBlank
    private String payday;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        CartPayDto cartPayDto = (CartPayDto) errors;
        LocalDateTime payDate = LocalDateTime.parse(cartPayDto.getPayday());
        LocalDateTime now = LocalDateTime.now();

        if (cartPayDto.totalCost < 0) {
            errors.rejectValue("totalCost", null, INVALID_VALUE);
        }

        if (payDate.isBefore(now)) {
            errors.rejectValue("payday", null, INVALID_DATE);
        }

        if (cartPayDto.productQuantity < 0) {
            errors.rejectValue("productQuantity", null, INVALID_VALUE);
        }
    }
}
