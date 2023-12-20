package com.flower_store.dto;

public interface OrderDetailDto {
    int getId();

    int getOrderId();

    int getProductId();

    String getProductName();

    String getProductTypeName();

    int getQuantity();

    int getTotalCost();
}
