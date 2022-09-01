USE `hooks-4313394-jonas-meneses`;

-- A
SELECT * FROM Exercicio1;

-- B
SELECT id as identifier FROM Exercicio1;

-- C
SELECT * FROM Exercicio1
WHERE id = "003";

-- D
SELECT * FROM Exercicio1
WHERE nome  LIKE  "%a%";

-- E
SELECT * FROM Exercicio1
WHERE  nome like "%u%" and  NOT nome like "%r%" ;