create database if not exists flower_store ;
use flower_store;

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE product_type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `code` VARCHAR(20),
    `description` LONGTEXT,
    price BIGINT,
    product_type_id INT,
    FOREIGN KEY (product_type_id)
        REFERENCES product_type (id),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE product_picture (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    picture_url LONGTEXT,
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    `username` VARCHAR(50),
    `password` VARCHAR(255),
    `phone_number` VARCHAR(50),
    `birthday` DATE,
    `email` VARCHAR(100),
    `address` LONGTEXT,
    `online_status` BIT(1) DEFAULT 0,
    `role_id` INT,
    FOREIGN KEY (`role_id`)
        REFERENCES roles (id),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE delivery_status (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE purchase_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    `time` DATETIME,
    FOREIGN KEY (user_id)
        REFERENCES users (id),
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    delivered_id INT,
    FOREIGN KEY (delivered_id)
        REFERENCES delivery_status (id),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE carts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    FOREIGN KEY (user_id)
        REFERENCES users (id),
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    is_deleted BIT(1) DEFAULT 0
);







