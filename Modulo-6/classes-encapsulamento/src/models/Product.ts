import knex from "knex"
import dotenv from "dotenv"
import { TABLE_PRODUCTS } from "../database/tableNames";

dotenv.config()

export class Product {

    constructor(
        public id: string,
        public name: string,
        public price: number
    ) { }

}