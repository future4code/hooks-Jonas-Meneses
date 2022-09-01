USE `hooks-4313394-jonas-meneses`;

-- A
ALTER TABLE Projetos
DROP COLUMN title; 

DESCRIBE Projetos;


-- B
ALTER TABLE Projetos
CHANGE date dueDate DATE NOT NULL; 

DESCRIBE Projetos;
SELECT * FROM Projetos;

-- C
 ALTER TABLE Exercicio1
 MODIFY email VARCHAR(40) UNIQUE NOT NULL;
 
 DESCRIBE Exercicio1
 
 