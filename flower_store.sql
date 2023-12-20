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

CREATE TABLE `orders` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    `time` DATETIME,
    message LONGTEXT,
    order_code VARCHAR(50),
    FOREIGN KEY (user_id)
        REFERENCES users (id),
    is_deleted BIT(1) DEFAULT 0
);

CREATE TABLE order_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    order_id INT,
    FOREIGN KEY (order_id)
        REFERENCES orders (id),
    quantity INT,
    total_cost INT,
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
	quantity INT,
    is_deleted BIT(1) DEFAULT 0
);

delimiter //
create procedure ADD_NEW_ACCOUNT(
    `new_name` VARCHAR(50),
    `new_username` VARCHAR(50),
    `new_password` VARCHAR(50),
    `new_birthday` DATE,
    `new_address` LONGTEXT
)


begin
declare new_account_id_role int;
    set new_account_id_role = (select MAX(id) + 1 from users);
    
insert into user_role(user_id, role_id)
values 
(new_account_id_role, 2);

insert into users(`name`,`username`,`password`,`birthday`,`address`)
values 
(`new_name`,`new_username`,`new_password`,`new_birthday`,`new_address`);
end //

delimiter ;


delimiter //
create procedure ADD_NEW_ORDER_DETAIL(
    `new_user_id` int,
    `new_time` int,
    `new_product_id` int,
    `new_quantity` int,
    `new_total_cost` int
)
begin

declare new_order_id int;
    set new_order_id = (select MAX(id) + 1 from orders);

insert into orders (`user_id`, `time`)
values
(`new_user_id`, `new_time`);

insert into order_detail(`product_id`, `order_id`, `quantity`, `total_cost`)
values 
(`new_product_id`, new_order_id, `new_quantity`, `total_cost`);

end //

delimiter ;




