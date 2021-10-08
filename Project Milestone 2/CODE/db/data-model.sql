CREATE TABLE IF NOT EXISTS Users (
    user_id varchar(50) PRIMARY KEY,
    first TEXT NOT NULL,
    last TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    address TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    balance FLOAT NOT NULL CHECK(balance >= 0),
    type varchar(6) CHECK (type IN ('seller', 'buyer'))
);

CREATE TABLE IF NOT EXISTS Prod_Categories (
    category TEXT NOT NULL,
    subcategory TEXT NOT NULL UNIQUE,
    PRIMARY KEY (category, subcategory)
);

CREATE TABLE IF NOT EXISTS Products (
    seller_id varchar(50) NOT NULL REFERENCES Users(user_id), --Need to ensure that the purchase is made by a seller
    product_id varchar(50) NOT NULL UNIQUE,
    product_name TEXT NOT NULL,
    price FLOAT NOT NULL,
    description TEXT NOT NULL,
    subcategory TEXT NOT NULL REFERENCES Prod_Categories(subcategory),
    PRIMARY KEY (seller_id, product_id)
);

CREATE TABLE IF NOT EXISTS Purchases (
    purchase_id varchar(50) NOT NULL PRIMARY KEY,
    user_id varchar(50) NOT NULL REFERENCES Users(user_id), --Need to ensure that the purchase is made by a buyer
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    total_price FLOAT NOT NULL
);


--TODO: Alternative strategy for Inventories/Carts: Same table with a type defining whether it's a cart or it's an inventory?

CREATE TABLE IF NOT EXISTS Inventories (
    seller_id varchar(50) NOT NULL REFERENCES Users(user_id), --Need to ensure that the product is held by a seller
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (seller_id, product_id)
);

CREATE TABLE IF NOT EXISTS Carts (
    user_id varchar(50) NOT NULL REFERENCES Users(user_id), --Need to ensure the the product is in the cart of a buyer
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (user_id, product_id)
);

CREATE TABLE IF NOT EXISTS Reviews (
    reviewer_id varchar(50) NOT NULL REFERENCES Users(user_id), --Need to ensure that the reviewer is not the same person as the person who sold the object
    product_id varchar(50) NOT NULL REFERENCES Products(product_id),
    review_date DATE NOT NULL,
    rating INTEGER NOT NULL CHECK(rating BETWEEN 0 AND 10),
    review_type varchar(10) CHECK(review_type IN ('seller', 'product')),
    PRIMARY KEY (reviewer_id, product_id) 
);



