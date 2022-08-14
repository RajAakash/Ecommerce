CREATE DATABASE productsdb IF NOT EXISTS;

use productsdb;

CREATE TABLE product(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image 
    price DECIMAL,
    brand VARCHAR(255) NOT NULL,
    rating DECIMAL,
    numReviews DECIMAL,
    countInStock DECIMAL,
    description VARCHAR(500) NOT NULL,
)

describe product;