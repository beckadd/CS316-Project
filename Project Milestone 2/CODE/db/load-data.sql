COPY Users(user_id, first, last, email, address, password_hash, balance, type)
FROM './sample_data/MOCK_USERS.csv'
DELIMITER ','
CSV HEADER;

