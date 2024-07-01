--Construct Role table
CREATE TABLE Role (
    role_id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL UNIQUE,
    CHECK (
        (role_id = 1 AND role = 'Admin') OR 
        (role_id = 2 AND role = 'Customer')
    ),
    CHECK (role_id IN (1, 2))
);

-- Create the User table
CREATE TABLE User (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNQIUE,
    FOREIGN KEY (role_id) REFERENCES Role(role_id),
)

CREATE TABLE Pet (
    pet_id SERIAL PRIMARY KEY, 
    pet_name VARCHAR(200) NOT NULL,
    pet_info: VARCHAR(1000) NOT NULL,
    pet_price INT(100)
    purchase_status VARCHAR(20) NOT NULL CHECK (purchase_status IN ('available', 'pending', 'purchased')),
)

CREATE TABLE CART (
    cart_id SERIAL PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    item_count INT(100),
    pet_id INTEGER[] NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'approved')),
)
