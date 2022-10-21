import { TABLE_PRODUCTS, TABLE_USERS } from "./tableNames";
import { BaseDatabase } from "./baseDatabase";
import { User } from "../models/User";
import { Product } from "../models/Product";

export class UserDatabase extends BaseDatabase {


    async getAllUsers() {

        const result = await BaseDatabase.connection(TABLE_USERS).select("*")

        return result;
    }

    public async createUser(user: User) {
        await BaseDatabase.connection(TABLE_USERS).insert({
            id: user.getId(),
            email: user.getId(),
            password: user.getPassword(),
        })
    }

    public async createProduct(prod: Product) {

        await BaseDatabase.connection(TABLE_PRODUCTS).insert({
            id: prod.getId(),
            name: prod.getName(),
            price: prod.getPrice(),

        })
    }
} 