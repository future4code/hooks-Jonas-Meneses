USE `hooks-4313394-jonas-meneses`;
SET SQL_SAFE_UPDATES = 0;

-- EXERCICIO 1
-- A - CHAVES ESTRANGEIRAS SÃO CAHVES DE OUTRO BANCO DE DADOS QUE VINCULAM OS BANCOS POR ELAS

-- B 

CREATE TABLE Movies (
	id int auto_increment primary key,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);



INSERT INTO Movies(name, description)
VALUES("A VOLTA DOS QUE NÃO FORAM", "UMA VIAGEM INCRIVEL DE PESSOAS QUE NEM FORAM"),
("UP", 'AVENTURA INCRIVEL');

SELECT * FROM Movies;

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES("003", "FILME LEGAL", 8.0, 3);

delete from Movies
where id = 1;
-- não da pra apagar o filme

CREATE TABLE Artists(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO Artists(name)
VALUES ("Jonas Levy"),("Jessy"),("Marrie"),("Nino");

CREATE TABLE MovieCast (
		movie_id int,
		actor_id int,
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Artists(id)
);

insert into MovieCast (movie_id, actor_id)
values(2, 1) ;

SELECT * FROM Movies
JOIN Rating on Movies.id = Rating.movie_id;

SELECT * FROM Movies
JOIN MovieCast on Movies.id = MovieCast.movie_id;

SELECT * FROM Artists
JOIN MovieCast ON MovieCast.actor_id = Artists.id;

SELECT * FROM MovieCast
JOIN Movies ON Movies.id = MovieCast.movie_id