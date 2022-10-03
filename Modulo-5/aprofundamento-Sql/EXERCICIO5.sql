USE `hooks-4313394-jonas-meneses`;

-- A
SELECT * FROM Projetos
ORDER BY dueDate DESC;

-- B
SELECT * FROM Projetos
ORDER BY dueDate ASC LIMIT 2