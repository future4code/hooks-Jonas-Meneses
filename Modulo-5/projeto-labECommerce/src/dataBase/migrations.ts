import connection from "../dataBase/connection";
import { v4 as createId } from 'uuid';
import { Request, Response } from "express";


//Para Criar as tabelas tem o arquivo sql que tem todas as querys

const populateUser = async (): Promise<void> => {

    try {

        await connection.raw(`
            INSERT INTO Labecommerce_users(id, name, email, password)
            VALUES ("${createId()}", "Ana Esther", "ae@gmail.com", "ana123");
            INSERT INTO Labecommerce_users(id, name, email, password)
            VALUES ("${createId()}", "JoaoLucca", "João@gmail.com", "joao123");
            INSERT INTO Labecommerce_users(id, name, email, password)
            VALUES ("${createId()}", "Marrie", "marrie-agatinha@gmail.com", "marrie123");
            INSERT INTO Labecommerce_users(id, name, email, password)
            VALUES ("${createId()}", "Nino", "nino-ogatao@gmail.com", "nino123");

        `)
        console.log("Tabela de users povoada")

    } catch (error: any) {
        console.log("algo deu errado, users")
    }
}

const populateProducts = async (): Promise<void> => {

    try {
        await connection.raw(`
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES("${createId()}", "Xilito", 0.5, "bpbppbpbio");
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES ("${createId()}", "Picolé", 2.0 , "picole");
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES ("${createId()}", "Dindim", 5 , "dindin");
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES ("${createId()}", "Milho verde", 2.3 , "milho");
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES ("${createId()}", "Alpargatas", 20 , "Alpargatas");

    `)
        console.log("Tabela de Produtos povoada")

    } catch (error: any) {
        console.log(error.message)
    }

}

populateUser()
populateProducts()
