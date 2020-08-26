USE sql_crm;

CREATE TABLE owner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40)
);

CREATE TABLE country (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40)
);

CREATE TABLE email_Type(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(1)
);

CREATE TABLE client(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(40),
    sold BOOLEAN,
    firstContact VARCHAR(40),
    emailType INT,
    owner INT,
    country INT,

    FOREIGN KEY(emailType) REFERENCES email_Type(id),
    FOREIGN KEY(owner) REFERENCES owner(id),
    FOREIGN KEY(country) REFERENCES country(id)
);
-- DROP TABLE client