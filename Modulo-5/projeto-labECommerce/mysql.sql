-- Active: 1663294692132@@35.226.146.116@3306@hooks-4313394-jonas-meneses


CREATE TABLE Labecommerce_users(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(10) NOT NULL
);

SELECT * FROM Labecommerce_users;

CREATE TABLE labecommerce_products(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price FLOAT NOT NULL,
    image_url VARCHAR(255)
);        


SELECT * FROM  labecommerce_products;

CREATE TABLE labecommerce_purchases(
    id VARCHAR(100) PRIMARY KEY,
    quantity INT NOT NULL,
    total_price FLOAT NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Labecommerce_users(id),
    FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
);

SELECT * FROM labecommerce_purchases

