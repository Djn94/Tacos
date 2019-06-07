USE tacos_db;
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("carne asada", "hard", false, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("tofu", "soft", true, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de Lengua", "hard", false, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de gato", "hard", false, true);

SELECT * FROM tacos;
