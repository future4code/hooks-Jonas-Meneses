import connection from "./connection";

const createTableUser = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Users(
            id VARCHAR(20) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE
        );
        `)
        console.log("Tabela Users criada com sucesso.")

    } catch (error: any) {
        console.log("Erro ao criar tabela Users.")
        console.log(error.sqlMessage)
    }
}

createTableUser()
.catch(()=>process.exit())