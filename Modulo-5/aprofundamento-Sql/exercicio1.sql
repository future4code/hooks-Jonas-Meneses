USE `hooks-4313394-jonas-meneses`;

CREATE TABLE Projetos(
	id VARCHAR(3) PRIMARY KEY,
    nome VARCHAR(40) NOT NULL UNIQUE,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL 
);

SELECT * FROM Projetos;