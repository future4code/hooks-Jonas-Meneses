-- Active: 1663294692132@@35.226.146.116@3306@hooks-4313394-jonas-meneses

CREATE TABLE IF NOT EXISTS labook_users(
//          id VARCHAR(255) PRIMARY KEY,
//          name VARCHAR(255) NOT NULL,
//          email VARCHAR(255) UNIQUE NOT NULL,
//          password VARCHAR(255) NOT NULL
//       );

//       CREATE TABLE IF NOT EXISTS labook_posts(
//          id VARCHAR(255) PRIMARY KEY,
//          photo VARCHAR(255) NOT NULL,
//          description VARCHAR(255) NOT NULL,
//          type ENUM("normal","event") DEFAULT "normal",
//          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//          author_id VARCHAR(255),
//          FOREIGN KEY (author_id) REFERENCES labook_users (id)
//       );

CREATE TABLE IF NOT EXISTS labook_friends(
    id VARCHAR(255) PRIMARY KEY,
    id_friend1 VARCHAR(255),
    id_friend2 VARCHAR(255),
    FOREIGN KEY (id_friend1) REFERENCES labook_users (id),
    FOREIGN KEY (id_friend2) REFERENCES labook_users (id)
);

INSERT INTO labook_friends(id, id_friend1, id_friend2)
VALUES("3", "4db7ba54-5209-4edb-85ba-0de5c4a30523", "eb3bc97a-8577-4da8-a834-1a9beb576e43");

SELECT * FROM labook_friends
WHERE id_friend1 = "ca3931eb-fcc5-4d17-ae54-0a8dabbd7fcd" OR id_friend2 = "ca3931eb-fcc5-4d17-ae54-0a8dabbd7fcd"
