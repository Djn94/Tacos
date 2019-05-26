USE tacos_db;
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("carne_guisada", "hard", false, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("tofu_taco", "soft", true, false);
INSERT INTO tacos (taco_name, shell, vegetarian, picked_up)
VALUES ("de_Lengua", "hard", false, false);

SELECT * FROM tacos;
