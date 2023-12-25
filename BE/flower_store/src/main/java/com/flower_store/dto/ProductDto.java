package com.flower_store.dto;

import com.flower_store.model.ProductType;
import com.flower_store.validation.ProductValidator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ProductDto implements Validator {

    @NotBlank
    private Integer id;
    @NotBlank
    private String name;
    @NotBlank
    private String code;
    @NotBlank
    private String description;
    @NotBlank
    private Long price;

    private ProductType productType;



    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        ProductDto productDto = (ProductDto) target;
        ProductValidator.nameValidator(productDto.getName(), errors);
        ProductValidator.priceValidator(productDto.getPrice(), errors);
        ProductValidator.codeSyntaxValidator(productDto.getCode(), errors);
    }
}
