CREATE TABLE IF NOT EXISTS Users (
    user_id varchar(50) PRIMARY KEY,
    first TEXT NOT NULL,
    last TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    balance FLOAT NOT NULL,
    type varchar(6) CHECK (type IN ('seller', 'buyer'))
);

CREATE TABLE IF NOT EXISTS Prod_Categories (
    category TEXT NOT NULL,
    subcategory TEXT NOT NULL,
    PRIMARY KEY (category, subcategory)
);

CREATE TABLE IF NOT EXISTS Products (
    seller_id varchar(50) NOT NULL REFERENCES Users(user_id),
    product_id varchar(50) NOT NULL,
    product_name TEXT NOT NULL,
    price FLOAT NOT NULL,
    description TEXT NOT NULL,
    subcategory TEXT NOT NULL REFERENCES Prod_Categories(subcategory),
    PRIMARY KEY (seller_id, product_id)
);

CREATE TABLE IF NOT EXISTS Purchases (
    purchase_id varchar(50) NOT NULL PRIMARY KEY,
    user_id varchar(50) NOT NULL REFERENCES Users(user_id),
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    total_price FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS Inventories (
    seller_id varchar(50) NOT NULL REFERENCES Users(user_id),
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (seller_id, product_id)
);

CREATE TABLE IF NOT EXISTS Carts (
    user_id varchar(50) NOT NULL REFERENCES Users(user_id),
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (user_id, product_id)
);

CREATE TABLE IF NOT EXISTS Reviews (
    reviewer_id varchar(50) NOT NULL REFERENCES Users(user_id),
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    review_date DATE NOT NULL,
    rating INTEGER NOT NULL CHECK(rating BETWEEN 0 AND 10),
    review_type varchar(10) CHECK(review_type IN ('seller', 'product')),
    PRIMARY KEY (reviewer_id, product_id) 
);

