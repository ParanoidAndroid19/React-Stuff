
CREATE DATABASE react_sql;

USE react_sql;

CREATE TABLE todo (todo_id INTEGER PRIMARY KEY AUTO_INCREMENT, todo_name varchar(255));

INSERT INTO todo (todo_name) VALUES ('Code');

SELECT * FROM todo;
