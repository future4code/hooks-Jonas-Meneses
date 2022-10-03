USE `hooks-4313394-jonas-meneses`;

INSERT INTO Exercicio1(id, nome, email )
VALUES("004", "Yuzo", "yuzo@lbn.com");

SELECT * FROM Exercicio1;

DELETE FROM Exercicio1
WHERE id = "004";

SELECT * FROM Exercicio1;