USE tacos_db;
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de Carne Asada", "hard", false, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de Tofu", "soft", true, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de Lengua", "hard", false, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de Gato", "hard", false, true);

SELECT * FROM tacos;
