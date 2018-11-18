CREATE database burger_db;
USE burger_db;

CREATE TABLE burgers(
    id AUTO_INCRIMENT NOT NULL,
    burger_name VARCHAR (60) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);