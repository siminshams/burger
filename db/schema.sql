CREATE database burger_db;
USE burger_db;

CREATE TABLE burgers(
    id AUTO_INCRIMENT NOT NULL,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);