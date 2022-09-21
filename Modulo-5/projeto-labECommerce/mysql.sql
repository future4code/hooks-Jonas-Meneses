-- Active: 1663294692132@@35.226.146.116@3306@hooks-4313394-jonas-meneses


CREATE TABLE Labecommerce_users(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(10) NOT NULL
);

CREATE TABLE labecommerce_products(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price FLOAT NOT NULL,
    image_url VARCHAR(255)
);